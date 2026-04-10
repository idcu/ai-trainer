import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from config import Config

def update_static_data():
    static_data_dir = os.path.join(Config.STATIC_DIR, 'data')
    
    if not os.path.exists(static_data_dir):
        os.makedirs(static_data_dir)
    
    question_data = {
        'judge': [],
        'single': [],
        'multi': []
    }
    
    print(f'检查 {static_data_dir} 目录下的数据...\n')
    
    # 检查三种题型的数据
    for q_type in ['judge', 'single', 'multi']:
        json_path = os.path.join(static_data_dir, f'{q_type}.json')
        
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                questions = json.load(f)
                # 过滤掉答案为空的题目
                valid_questions = [q for q in questions if q.get('answer')]
                question_data[q_type] = valid_questions
                
                print(f'✓ {q_type}.json: 找到 {len(valid_questions)} 道有效题目')
        else:
            print(f'✗ {q_type}.json: 文件不存在')
    
    print(f'\n总计: {len(question_data["judge"])} 判断题, {len(question_data["single"])} 单选题, {len(question_data["multi"])} 多选题')
    print(f'\n注意: JSON数据文件现在直接存放在 {static_data_dir} 目录下')

if __name__ == '__main__':
    update_static_data()
