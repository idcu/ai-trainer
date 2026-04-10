import docx
import json
import re
import os

def extract_questions_from_docx(file_path, question_type):
    doc = docx.Document(file_path)
    questions = []
    
    # 收集所有段落文本
    all_text = []
    for para in doc.paragraphs:
        text = para.text.strip()
        if text:
            all_text.append(text)
    
    # 合并所有文本，方便处理
    full_text = '\n'.join(all_text)
    
    # 按题目编号分割
    # 匹配 "数字、" 或 "数字." 开头的模式
    question_pattern = re.compile(r'(?=\n\d+[、\.])')
    question_blocks = question_pattern.split(full_text)
    
    for block in question_blocks:
        block = block.strip()
        if not block:
            continue
        
        # 提取题目编号
        num_match = re.match(r'^(\d+)[、\.]', block)
        if not num_match:
            continue
        
        num = int(num_match.group(1))
        
        # 初始化题目数据
        q_data = {
            "id": num,
            "type": question_type,
            "question": "",
            "options": [],
            "answer": "",
            "analysis": ""
        }
        
        # 提取答案
        ans_match = re.search(r'正确答案[：:]\s*([正确错误A-D]+)', block)
        if ans_match:
            q_data["answer"] = ans_match.group(1)
        
        # 提取解析
        analysis_match = re.search(r'解析[：:]\s*(.*?)(?=\n\d+[、\.]|$)', block, re.DOTALL)
        if analysis_match:
            analysis = analysis_match.group(1).strip()
            # 清理解析中的换行
            analysis = re.sub(r'\s+', ' ', analysis)
            q_data["analysis"] = analysis
        
        # 提取题目和选项部分（在答案之前）
        content_before_ans = block
        if ans_match:
            content_before_ans = block[:ans_match.start()]
        
        # 清理题目内容
        # 移除开头的编号
        content = re.sub(r'^\d+[、\.]\s*', '', content_before_ans)
        # 移除末尾的空括号
        content = re.sub(r'\s*\(\s*\)\s*', '', content)
        
        if question_type == 'judge':
            # 判断题：只提取题目
            # 在第一个句号或问号处截断
            sentences = re.split(r'([。？!?])', content)
            if len(sentences) > 2:
                q_data["question"] = (sentences[0] + sentences[1]).strip()
            else:
                q_data["question"] = content.strip()
        else:
            # 单选题和多选题
            # 寻找第一个选项的位置
            option_match = re.search(r'[A-D][、\.]', content)
            if option_match:
                q_data["question"] = content[:option_match.start()].strip()
                q_data["question"] = re.sub(r'\s+', ' ', q_data["question"])
                
                # 提取选项
                options_part = content[option_match.start():]
                # 分割选项
                opt_parts = re.split(r'(?=[A-D][、\.])', options_part)
                for opt_part in opt_parts:
                    opt_part = opt_part.strip()
                    if not opt_part:
                        continue
                    opt_match = re.match(r'^([A-D])[、\.]\s*(.+)$', opt_part)
                    if opt_match:
                        opt_text = opt_match.group(2).strip()
                        opt_text = re.sub(r'\s+', ' ', opt_text)
                        q_data["options"].append({
                            "letter": opt_match.group(1),
                            "text": opt_text
                        })
            else:
                q_data["question"] = re.sub(r'\s+', ' ', content).strip()
        
        # 只有有答案的题目才保留
        if q_data["answer"]:
            questions.append(q_data)
    
    return questions

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    qb_dir = os.path.dirname(base_dir)
    project_dir = os.path.dirname(qb_dir)
    class_dir = os.path.join(project_dir, "class")
    data_dir = os.path.join(qb_dir, "data")
    
    # 读取判断题
    judge_file = os.path.join(class_dir, "人工智能训练师理论复习（判断汇总）.docx")
    if os.path.exists(judge_file):
        judge_questions = extract_questions_from_docx(judge_file, "judge")
        with open(os.path.join(data_dir, "judge.json"), "w", encoding="utf-8") as f:
            json.dump(judge_questions, f, ensure_ascii=False, indent=2)
        print(f"判断题已转换，共 {len(judge_questions)} 题")
    
    # 读取单选题
    single_file = os.path.join(class_dir, "人工智能训练师理论复习（单选汇总）.docx")
    if os.path.exists(single_file):
        single_questions = extract_questions_from_docx(single_file, "single")
        with open(os.path.join(data_dir, "single.json"), "w", encoding="utf-8") as f:
            json.dump(single_questions, f, ensure_ascii=False, indent=2)
        print(f"单选题已转换，共 {len(single_questions)} 题")
    
    # 读取多选题
    multi_file = os.path.join(class_dir, "人工智能训练师理论复习（多选汇总）.docx")
    if os.path.exists(multi_file):
        multi_questions = extract_questions_from_docx(multi_file, "multi")
        with open(os.path.join(data_dir, "multi.json"), "w", encoding="utf-8") as f:
            json.dump(multi_questions, f, ensure_ascii=False, indent=2)
        print(f"多选题已转换，共 {len(multi_questions)} 题")

if __name__ == "__main__":
    main()
