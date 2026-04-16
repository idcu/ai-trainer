
"""
题库重复题目查找工具
用于查找 qb/static/data 目录下 JSON 文件中的重复题目
支持通过规范化文本比较来识别格式、空格差异造成的重复
"""

import json
import os
import re
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

def find_duplicates_in_file(questions, filename):
    """
    在单个文件中查找重复题目
    返回重复题目列表
    """
    normalized_map = {}
    duplicates = []
    
    for idx, q in enumerate(questions):
        q_text = q.get('question', '')
        q_id = q.get('id', 'N/A')
        normalized = normalize_text(q_text)
        
        if len(normalized) > 5:
            if normalized in normalized_map:
                # 发现重复
                original = normalized_map[normalized]
                duplicates.append({
                    'original_id': original['id'],
                    'original_index': original['index'],
                    'original_text': original['text'],
                    'duplicate_id': q_id,
                    'duplicate_index': idx,
                    'duplicate_text': q_text,
                    'normalized': normalized
                })
            else:
                normalized_map[normalized] = {
                    'index': idx,
                    'id': q_id,
                    'text': q_text
                }
    
    return duplicates

def find_all_duplicates(data_dir=None):
    """
    查找所有文件中的重复题目
    """
    if data_dir is None:
        # 默认数据目录
        script_dir = os.path.dirname(os.path.abspath(__file__))
        data_dir = os.path.join(script_dir, '..', 'static', 'data')
    
    files = ['judge.json', 'multi.json', 'single.json']
    total_duplicates = 0
    
    print("=" * 100)
    print("题库重复题目查找工具")
    print("=" * 100)
    print(f"数据目录: {data_dir}")
    
    for file in files:
        file_path = os.path.join(data_dir, file)
        if os.path.exists(file_path):
            questions = load_json(file_path)
            duplicates = find_duplicates_in_file(questions, file)
            
            if duplicates:
                print(f"\n{'=' * 100}")
                print(f"=== {file} - 发现 {len(duplicates)} 组重复（经规范化后） ===")
                print(f"{'=' * 100}")
                total_duplicates += len(duplicates)
                
                for i, dup in enumerate(duplicates, 1):
                    print(f"\n重复 #{i}:")
                    print(f"  原题:    ID={dup['original_id']}, 索引={dup['original_index']}")
                    print(f"           {dup['original_text']}")
                    print(f"  重复题:  ID={dup['duplicate_id']}, 索引={dup['duplicate_index']}")
                    print(f"           {dup['duplicate_text']}")
                    print(f"  规范化:  {dup['normalized'][:80]}{'...' if len(dup['normalized']) > 80 else ''}")
            else:
                print(f"\n{file}: 未发现重复题目")
        else:
            print(f"\n警告：文件 {file_path} 不存在")
    
    print(f"\n{'=' * 100}")
    print(f"总计发现重复题目: {total_duplicates} 组")
    print(f"{'=' * 100}")
    
    return total_duplicates

if __name__ == "__main__":
    data_dir = None
    if len(sys.argv) > 1:
        data_dir = sys.argv[1]
    
    find_all_duplicates(data_dir)

