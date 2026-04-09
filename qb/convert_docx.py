import docx
import json
import re
import os

def extract_questions_from_docx(file_path, question_type):
    doc = docx.Document(file_path)
    questions = []
    
    # 收集所有段落，包括空行（用于分隔题目），跳过标题和解析
    paragraphs = []
    for para in doc.paragraphs:
        text = para.text.strip()
        if '理论复习' in text or text in ['判断题', '单选题', '多选题']:
            continue
        if text.startswith('解析：'):
            continue
        paragraphs.append(text)  # 保留空行
    
    i = 0
    while i < len(paragraphs):
        text = paragraphs[i]
        
        # 匹配题目编号
        num_match = re.match(r'^(\d+)[\.、]\s*(.+)$', text)
        if num_match:
            num = int(num_match.group(1))
            content = num_match.group(2).strip()
            
            # 初始化题目数据
            q_data = {
                "id": num,
                "type": question_type,
                "question": "",
                "options": [],
                "answer": ""
            }
            
            # 收集所有相关内容，直到遇到下一题或空行
            all_content = [content]
            j = i + 1
            answer_text = ""
            
            while j < len(paragraphs):
                next_text = paragraphs[j]
                # 如果下一段是新题目，则停止
                if re.match(r'^\d+[\.、]', next_text):
                    break
                # 如果是空行，可能是题目分隔，停止
                if next_text == "":
                    j += 1
                    break
                
                # 检查是否包含答案
                ans_match = re.search(r'正确答案[：:]\s*([正确错误A-D]+)', next_text)
                if ans_match:
                    answer_text = ans_match.group(1)
                    # 移除答案部分后，剩余内容可能还有选项
                    remaining_text = re.sub(r'正确答案[：:]\s*[正确错误A-D]+\s*', '', next_text).strip()
                    if remaining_text:
                        all_content.append(remaining_text)
                    j += 1
                    break
                
                all_content.append(next_text)
                j += 1
            
            q_data["answer"] = answer_text
            
            # 合并所有内容
            full_content = ' '.join(all_content)
            
            # 从完整内容中提取答案（如果还没找到）
            if not q_data["answer"]:
                ans_match = re.search(r'正确答案[：:]\s*([正确错误A-D]+)', full_content)
                if ans_match:
                    q_data["answer"] = ans_match.group(1)
                    full_content = re.sub(r'正确答案[：:]\s*[正确错误A-D]+\s*', '', full_content)
            
            # 分离题目和选项
            if question_type == 'judge':
                # 判断题：只提取题目
                q_text = re.sub(r'\s*\(\s*\)\s*', '', full_content).strip()
                # 在第一个句号或问号处截断
                sentences = re.split(r'([。？!?])', q_text)
                if len(sentences) > 2:
                    q_data["question"] = (sentences[0] + sentences[1]).strip()
                else:
                    q_data["question"] = q_text
            else:
                # 单选题和多选题
                # 寻找第一个选项的位置
                option_match = re.search(r'[A-D][\.、]', full_content)
                if option_match:
                    q_data["question"] = full_content[:option_match.start()].strip()
                    q_data["question"] = re.sub(r'\s*\(\s*\)\s*', '', q_data["question"]).strip()
                    
                    # 提取选项
                    options_part = full_content[option_match.start():]
                    # 分割选项
                    opt_parts = re.split(r'(?=[A-D][\.、])', options_part)
                    for opt_part in opt_parts:
                        opt_part = opt_part.strip()
                        if not opt_part:
                            continue
                        opt_match = re.match(r'^([A-D])[\.、]\s*(.+)$', opt_part)
                        if opt_match:
                            opt_text = opt_match.group(2).strip()
                            q_data["options"].append({
                                "letter": opt_match.group(1),
                                "text": opt_text
                            })
                else:
                    q_data["question"] = re.sub(r'\s*\(\s*\)\s*', '', full_content).strip()
            
            # 清理多余空格
            q_data["question"] = re.sub(r'\s+', ' ', q_data["question"]).strip()
            for opt in q_data["options"]:
                opt["text"] = re.sub(r'\s+', ' ', opt["text"]).strip()
            
            questions.append(q_data)
            i = j  # 跳到下一个题目
        else:
            i += 1
    
    return questions

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(base_dir)
    word_dir = os.path.join(project_dir, "word")
    data_dir = os.path.join(base_dir, "data")
    
    # 读取判断题
    judge_file = os.path.join(word_dir, "人工智能训练师理论复习（判断汇总）.docx")
    if os.path.exists(judge_file):
        judge_questions = extract_questions_from_docx(judge_file, "judge")
        with open(os.path.join(data_dir, "judge.json"), "w", encoding="utf-8") as f:
            json.dump(judge_questions, f, ensure_ascii=False, indent=2)
        print(f"判断题已转换，共 {len(judge_questions)} 题")
    
    # 读取单选题
    single_file = os.path.join(word_dir, "人工智能训练师理论复习（单选汇总）.docx")
    if os.path.exists(single_file):
        single_questions = extract_questions_from_docx(single_file, "single")
        with open(os.path.join(data_dir, "single.json"), "w", encoding="utf-8") as f:
            json.dump(single_questions, f, ensure_ascii=False, indent=2)
        print(f"单选题已转换，共 {len(single_questions)} 题")
    
    # 读取多选题
    multi_file = os.path.join(word_dir, "人工智能训练师理论复习（多选汇总）.docx")
    if os.path.exists(multi_file):
        multi_questions = extract_questions_from_docx(multi_file, "multi")
        with open(os.path.join(data_dir, "multi.json"), "w", encoding="utf-8") as f:
            json.dump(multi_questions, f, ensure_ascii=False, indent=2)
        print(f"多选题已转换，共 {len(multi_questions)} 题")

if __name__ == "__main__":
    main()
