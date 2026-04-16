
"""
题库重复题目清理工具
用于清理 qb/static/data 目录下 JSON 文件中的重复题目
自动创建备份，删除重复，并重新编号
"""

import json
import os
import re
import shutil
import sys

def normalize_text(text):
    """
    规范化文本用于比较
    去除多余空格、规范化标点符号周围的空格
    """
    if not text:
        return text
    # 替换多个空格为单个空格
    text = re.sub(r'\s+', ' ', text)
    # 去除中文标点符号周围的空格
    text = re.sub(r'\s+([，。？！,.?!])', r'\1', text)
    text = re.sub(r'([，。？！,.?!])\s+', r'\1', text)
    return text.strip()

def load_json(file_path):
    """加载 JSON 文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"错误：无法加载文件 {file_path}: {e}")
        return []

def save_json(file_path, data):
    """保存 JSON 文件"""
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"错误：无法保存文件 {file_path}: {e}")
        return False

def clean_file(file_path, create_backup=True):
    """
    清理单个文件中的重复题目
    返回清理后的数据
    """
    questions = load_json(file_path)
    if not questions:
        return []
    
    filename = os.path.basename(file_path)
    print(f"\n{'=' * 100}")
    print(f"处理文件: {filename}")
    print(f"原始题目数: {len(questions)}")
    
    # 跟踪已见过的题目（规范化后）
    seen = {}
    cleaned = []
    duplicates_removed = 0
    
    for q in questions:
        q_text = q.get('question', '')
        normalized = normalize_text(q_text)
        
        if normalized and len(normalized) > 10:
            if normalized not in seen:
                seen[normalized] = True
                cleaned.append(q)
            else:
                duplicates_removed += 1
                print(f"  删除重复: ID={q.get('id', 'N/A')} - {q_text[:50]}...")
        else:
            # 保留非常短的题目但也检查重复
            if q_text not in seen:
                seen[q_text] = True
                cleaned.append(q)
            else:
                duplicates_removed += 1
                print(f"  删除重复(短): ID={q.get('id', 'N/A')} - {q_text}")
    
    # 重新编号 ID
    for i, q in enumerate(cleaned, 1):
        q['id'] = i
    
    print(f"删除重复数: {duplicates_removed}")
    print(f"最终题目数: {len(cleaned)}")
    
    # 创建备份
    if create_backup and duplicates_removed > 0:
        backup_path = f"{file_path}.backup"
        if not os.path.exists(backup_path):
            shutil.copy2(file_path, backup_path)
            print(f"已创建备份: {backup_path}")
    
    return cleaned, duplicates_removed

def clean_all_files(data_dir=None, create_backup=True):
    """
    清理所有文件中的重复题目
    """
    if data_dir is None:
        # 默认数据目录
        script_dir = os.path.dirname(os.path.abspath(__file__))
        data_dir = os.path.join(script_dir, '..', 'static', 'data')
    
    files = ['judge.json', 'multi.json', 'single.json']
    
    total_original = 0
    total_final = 0
    total_removed = 0
    
    print("=" * 100)
    print("题库重复题目清理工具")
    print("=" * 100)
    print(f"数据目录: {data_dir}")
    
    for file in files:
        file_path = os.path.join(data_dir, file)
        if os.path.exists(file_path):
            original = len(load_json(file_path))
            cleaned, removed = clean_file(file_path, create_backup)
            
            total_original += original
            total_final += len(cleaned)
            total_removed += removed
            
            # 保存清理后的数据
            if removed > 0:
                if save_json(file_path, cleaned):
                    print(f"已保存清理后的数据到: {file_path}")
        else:
            print(f"\n警告：文件 {file_path} 不存在")
    
    print(f"\n{'=' * 100}")
    print("汇总:")
    print(f"  原始题目总数: {total_original}")
    print(f"  最终题目总数: {total_final}")
    print(f"  删除重复总数: {total_removed}")
    print(f"{'=' * 100}")
    
    return total_removed

if __name__ == "__main__":
    data_dir = None
    create_backup = True
    
    if len(sys.argv) > 1:
        if sys.argv[1] == '--no-backup':
            create_backup = False
        else:
            data_dir = sys.argv[1]
    
    if len(sys.argv) > 2:
        if sys.argv[2] == '--no-backup':
            create_backup = False
    
    clean_all_files(data_dir, create_backup)

