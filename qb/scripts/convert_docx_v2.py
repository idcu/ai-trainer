import docx
import json
import re
import os

def extract_questions_from_docx(file_path, question_type):
    doc = docx.Document(file_path)
    questions = []
    
    # 收集所有段落文本并合并
    all_text = []
    for para in doc.paragraphs:
        text = para.text.strip()
        if text:
            all_text.append(text)
    
    full_text = ' '.join(all_text)
    
    # 首先找到所有的"正确答案"位置，以此作为题目的结束标记
    ans_pattern = re.compile(r'正确答案[：:]\s*([正确错误A-D]+)')
    ans_matches = list(ans_pattern.finditer(full_text))
    
    # 找到所有题目编号的位置
    num_pattern = re.compile(r'(?<!\d)(\d+)[、\.]')
    num_matches = list(num_pattern.finditer(full_text))
    
    # 为每个答案匹配找到对应的题目起始
    used_nums = set()
    
    for ans_match in ans_matches:
        ans_start = ans_match.start()
        ans_text = ans_match.group(1)
        
        # 向前找最近的题目编号
        current_num = None
        current_num_start = 0
        
        for num_match in reversed(num_matches):
            num_start = num_match.start()
            num = int(num_match.group(1))
            if num_start < ans_start and num not in used_nums:
                current_num = num
                current_num_start = num_start
                used_nums.add(num)
                break
        
        if current_num is None:
            continue
        
        # 找到下一个题目的起始位置（如果有）
        next_num_start = len(full_text)
        for num_match in num_matches:
            num_start = num_match.start()
            if num_start > ans_start:
                next_num_start = num_start
                break
        
        # 提取这道题的完整内容
        question_content = full_text[current_num_start:next_num_start]
        
        # 初始化题目数据
        q_data = {
            "id": current_num,
            "type": question_type,
            "question": "",
            "options": [],
            "answer": ans_text,
            "analysis": ""
        }
        
        # 提取解析
        analysis_match = re.search(r'解析[：:]\s*(.*?)$', question_content, re.DOTALL)
        if analysis_match:
            analysis = analysis_match.group(1).strip()
            # 清理可能包含的下一题内容
            analysis = re.sub(r'\s*\d+[、\.]\s*.*$', '', analysis)
            q_data["analysis"] = re.sub(r'\s+', ' ', analysis)
        
        # 提取题目和选项部分（在答案之前）
        content_before_ans = question_content[:question_content.find('正确答案')]
        
        # 移除开头的编号
        content = re.sub(r'^\d+[、\.]\s*', '', content_before_ans)
        
        # 移除末尾的空括号
        content = re.sub(r'\s*\(\s*\)\s*', '', content)
        
        if question_type == 'judge':
            # 判断题：提取题目
            # 清理内容，只保留到第一个句号或问号
            q_match = re.search(r'^(.*?[。？!?])', content)
            if q_match:
                q_data["question"] = q_match.group(1).strip()
            else:
                q_data["question"] = content.strip()
        else:
            # 单选题和多选题
            # 寻找选项
            option_pattern = re.compile(r'([A-D])[、\.]\s*([^A-D]*?)(?=[A-D][、\.]|$)')
            options = list(option_pattern.finditer(content))
            
            if options:
                # 题目在第一个选项之前
                first_opt_start = options[0].start()
                q_data["question"] = content[:first_opt_start].strip()
                q_data["question"] = re.sub(r'\s+', ' ', q_data["question"])
                
                # 提取选项
                for opt_match in options:
                    letter = opt_match.group(1)
                    opt_text = opt_match.group(2).strip()
                    opt_text = re.sub(r'\s+', ' ', opt_text)
                    if opt_text:
                        q_data["options"].append({
                            "letter": letter,
                            "text": opt_text
                        })
            else:
                q_data["question"] = re.sub(r'\s+', ' ', content).strip()
        
        # 确保题目不为空
        if q_data["question"] and q_data["answer"]:
            questions.append(q_data)
    
    # 按id排序
    questions.sort(key=lambda x: x["id"])
    
    # 重新编号，确保连续
    for i, q in enumerate(questions):
        q["id"] = i + 1
    
    return questions

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    qb_dir = os.path.dirname(base_dir)
    project_dir = os.path.dirname(qb_dir)
    class_dir = os.path.join(project_dir, "class")
    data_dir = os.path.join(qb_dir, "data")
    static_data_dir = os.path.join(qb_dir, "static", "data")
    
    # 读取判断题
    judge_file = os.path.join(class_dir, "人工智能训练师理论复习（判断汇总）.docx")
    if os.path.exists(judge_file):
        judge_questions = extract_questions_from_docx(judge_file, "judge")
        output_path = os.path.join(data_dir, "judge.json")
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(judge_questions, f, ensure_ascii=False, indent=2)
        # 同时更新static/data目录
        static_output_path = os.path.join(static_data_dir, "judge.json")
        with open(static_output_path, "w", encoding="utf-8") as f:
            json.dump(judge_questions, f, ensure_ascii=False, indent=2)
        print(f"判断题已转换，共 {len(judge_questions)} 题")
    
    # 读取单选题
    single_file = os.path.join(class_dir, "人工智能训练师理论复习（单选汇总）.docx")
    if os.path.exists(single_file):
        single_questions = extract_questions_from_docx(single_file, "single")
        output_path = os.path.join(data_dir, "single.json")
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(single_questions, f, ensure_ascii=False, indent=2)
        # 同时更新static/data目录
        static_output_path = os.path.join(static_data_dir, "single.json")
        with open(static_output_path, "w", encoding="utf-8") as f:
            json.dump(single_questions, f, ensure_ascii=False, indent=2)
        print(f"单选题已转换，共 {len(single_questions)} 题")
    
    # 读取多选题
    multi_file = os.path.join(class_dir, "人工智能训练师理论复习（多选汇总）.docx")
    if os.path.exists(multi_file):
        multi_questions = extract_questions_from_docx(multi_file, "multi")
        output_path = os.path.join(data_dir, "multi.json")
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(multi_questions, f, ensure_ascii=False, indent=2)
        # 同时更新static/data目录
        static_output_path = os.path.join(static_data_dir, "multi.json")
        with open(static_output_path, "w", encoding="utf-8") as f:
            json.dump(multi_questions, f, ensure_ascii=False, indent=2)
        print(f"多选题已转换，共 {len(multi_questions)} 题")

if __name__ == "__main__":
    main()
