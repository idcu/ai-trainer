"""
完美版本的PDF学习资料处理脚本

功能：
1. 将PDF转换为Word文档（可选）
2. 从Word文档中提取题目
3. 按类型分类（判断、单选、多选）
4. 去重合并到现有题库
5. 更新JSON文件和数据库
6. 验证答案正确性
"""

import pdfplumber
import docx
import json
import re
import os
import sys
from collections import defaultdict
from pdf2docx import Converter

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from config import Config


def convert_pdf_to_docx(pdf_path, docx_path):
    """将PDF转换为Word文档"""
    print(f"正在将 PDF 转换为 Word...")
    cv = Converter(pdf_path)
    cv.convert(docx_path, start=0, end=None)
    cv.close()
    print(f"转换完成: {docx_path}")
    return docx_path


def extract_questions_from_docx(file_path):
    """从Word文档中提取题目"""
    doc = docx.Document(file_path)
    questions = []
    
    all_text = []
    for para in doc.paragraphs:
        text = para.text.strip()
        if text:
            all_text.append(text)
    
    full_text = ' '.join(all_text)
    
    ans_pattern = re.compile(r'答案[：:]\s*([A-D正确错误]+)')
    ans_matches = list(ans_pattern.finditer(full_text))
    
    num_pattern = re.compile(r'(?<!\d)(\d+)[、\.]')
    num_matches = list(num_pattern.finditer(full_text))
    
    used_nums = set()
    
    for ans_match in ans_matches:
        ans_start = ans_match.start()
        ans_text = ans_match.group(1)
        
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
        
        next_num_start = len(full_text)
        for num_match in num_matches:
            num_start = num_match.start()
            if num_start > ans_start:
                next_num_start = num_start
                break
        
        question_content = full_text[current_num_start:next_num_start]
        
        if ans_text in ['正确', '错误']:
            q_type = 'judge'
        elif len(ans_text) > 1:
            q_type = 'multi'
        else:
            q_type = 'single'
        
        q_data = {
            "id": current_num,
            "type": q_type,
            "question": "",
            "options": [],
            "answer": ans_text,
            "analysis": ""
        }
        
        analysis_match = re.search(r'解析[：:]\s*(.*?)$', question_content, re.DOTALL)
        if analysis_match:
            analysis = analysis_match.group(1).strip()
            analysis = re.sub(r'\s*\d+[、\.]\s*.*$', '', analysis)
            q_data["analysis"] = re.sub(r'\s+', ' ', analysis)
        
        content_before_ans = question_content[:question_content.find('答案')]
        content = re.sub(r'^\d+[、\.]\s*', '', content_before_ans)
        content = re.sub(r'\s*\(\s*\)\s*', '', content)
        
        if q_type == 'judge':
            q_match = re.search(r'^(.*?[。？!?])', content)
            if q_match:
                q_data["question"] = q_match.group(1).strip()
            else:
                q_data["question"] = content.strip()
        else:
            option_pattern = re.compile(r'([A-D])\s*[、\.]?\s*([^A-D]*?)(?=[A-D]\s*[、\.]?|$)')
            options = list(option_pattern.finditer(content))
            
            if options:
                first_opt_start = options[0].start()
                q_data["question"] = content[:first_opt_start].strip()
                q_data["question"] = re.sub(r'\s+', ' ', q_data["question"])
                
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
        
        if q_data["question"] and q_data["answer"]:
            questions.append(q_data)
    
    questions.sort(key=lambda x: x["id"])
    
    for i, q in enumerate(questions):
        q["id"] = i + 1
    
    return questions


def load_existing_questions():
    """加载现有题库用于去重"""
    existing = {
        'judge': set(),
        'single': set(),
        'multi': set()
    }
    
    data_dir = os.path.join(Config.STATIC_DIR, 'data')
    for q_type in ['judge', 'single', 'multi']:
        json_path = os.path.join(data_dir, f'{q_type}.json')
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                questions = json.load(f)
                for q in questions:
                    existing[q_type].add(q['question'])
    
    return existing


def merge_and_deduplicate(new_questions, existing_questions):
    """合并新旧题目并去重"""
    merged = {
        'judge': [],
        'single': [],
        'multi': []
    }
    
    data_dir = os.path.join(Config.STATIC_DIR, 'data')
    for q_type in ['judge', 'single', 'multi']:
        json_path = os.path.join(data_dir, f'{q_type}.json')
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                merged[q_type] = json.load(f)
    
    added_count = defaultdict(int)
    for q in new_questions:
        q_type = q['type']
        if q['question'] not in existing_questions[q_type]:
            merged[q_type].append(q)
            added_count[q_type] += 1
    
    for q_type in ['judge', 'single', 'multi']:
        for i, q in enumerate(merged[q_type]):
            q['id'] = i + 1
    
    return merged, added_count


def verify_answers(questions):
    """验证答案正确性"""
    issues = []
    for q in questions:
        if q['type'] == 'judge':
            if q['answer'] not in ['正确', '错误']:
                issues.append(f"判断题 {q['id']} 答案异常: {q['answer']}")
        elif q['type'] in ['single', 'multi']:
            option_letters = set(opt['letter'] for opt in q['options'])
            for ans_char in q['answer']:
                if ans_char not in option_letters:
                    issues.append(f"{q['type']}题 {q['id']} 答案 '{ans_char}' 不在选项中")
    return issues


def save_questions(merged_questions):
    """保存题目到JSON文件和数据库"""
    static_data_dir = os.path.join(Config.STATIC_DIR, 'data')
    
    os.makedirs(static_data_dir, exist_ok=True)
    
    for q_type in ['judge', 'single', 'multi']:
        static_output_path = os.path.join(static_data_dir, f'{q_type}.json')
        
        with open(static_output_path, 'w', encoding='utf-8') as f:
            json.dump(merged_questions[q_type], f, ensure_ascii=False, indent=2)
        
        print(f"{q_type}题已保存，共 {len(merged_questions[q_type])} 题")
    
    import sqlite3
    db_path = Config.DB_PATH
    
    if os.path.exists(db_path):
        os.remove(db_path)
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            question TEXT NOT NULL,
            options TEXT,
            answer TEXT NOT NULL,
            analysis TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    for q_type in ['judge', 'single', 'multi']:
        for q in merged_questions[q_type]:
            options_json = json.dumps(q.get('options', []), ensure_ascii=False)
            cursor.execute('''
                INSERT INTO questions (type, question, options, answer, analysis)
                VALUES (?, ?, ?, ?, ?)
            ''', (q['type'], q['question'], options_json, q['answer'], q.get('analysis', '')))
    
    conn.commit()
    conn.close()
    print('数据库更新完成！')


def main():
    pdf_path = r"D:\Personal\桌面\AI训练师——学习资料.pdf"
    docx_path = r"D:\Personal\桌面\AI训练师——学习资料.docx"
    
    # 检查PDF是否存在
    if not os.path.exists(pdf_path):
        print(f"PDF文件不存在: {pdf_path}")
        return
    
    # 检查是否已有转换好的Word文档
    if not os.path.exists(docx_path):
        docx_path = convert_pdf_to_docx(pdf_path, docx_path)
    else:
        print(f"使用已存在的Word文档: {docx_path}")
    
    # 提取题目
    print("\n正在读取Word文件并提取题目...")
    new_questions = extract_questions_from_docx(docx_path)
    print(f"从文档中提取到 {len(new_questions)} 道题目")
    
    # 统计分类
    type_count = defaultdict(int)
    for q in new_questions:
        type_count[q['type']] += 1
    print(f"题目分类: 判断 {type_count['judge']} 题, 单选 {type_count['single']} 题, 多选 {type_count['multi']} 题")
    
    # 验证答案
    print("\n正在验证答案...")
    issues = verify_answers(new_questions)
    if issues:
        print("发现以下问题:")
        for issue in issues:
            print(f"  - {issue}")
    else:
        print("答案验证通过")
    
    # 加载现有题库并合并
    print("\n正在加载现有题库...")
    existing_questions = load_existing_questions()
    
    print("正在合并并去重...")
    merged_questions, added_count = merge_and_deduplicate(new_questions, existing_questions)
    
    print(f"新增题目: 判断 {added_count['judge']} 题, 单选 {added_count['single']} 题, 多选 {added_count['multi']} 题")
    
    # 保存
    print("\n正在保存...")
    save_questions(merged_questions)
    
    print("\n处理完成！")
    print(f"最终题库统计:")
    print(f"  判断题: {len(merged_questions['judge'])} 题")
    print(f"  单选题: {len(merged_questions['single'])} 题")
    print(f"  多选题: {len(merged_questions['multi'])} 题")
    print(f"  总计: {len(merged_questions['judge']) + len(merged_questions['single']) + len(merged_questions['multi'])} 题")


if __name__ == "__main__":
    main()
