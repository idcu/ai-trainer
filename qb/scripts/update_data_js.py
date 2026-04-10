import json
import os
import sys
import shutil

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from config import Config

def update_static_data():
    data_dir = Config.DATA_DIR
    static_data_dir = os.path.join(Config.STATIC_DIR, 'data')
    
    if not os.path.exists(static_data_dir):
        os.makedirs(static_data_dir)
    
    question_data = {
        'judge': [],
        'single': [],
        'multi': []
    }
    
    print(f'从 {data_dir} 同步数据到 {static_data_dir}...\n')
    
    # 读取并同步三种题型的数据
    for q_type in ['judge', 'single', 'multi']:
        src_path = os.path.join(data_dir, f'{q_type}.json')
        dest_path = os.path.join(static_data_dir, f'{q_type}.json')
        
        if os.path.exists(src_path):
            with open(src_path, 'r', encoding='utf-8') as f:
                questions = json.load(f)
                # 过滤掉答案为空的题目
                valid_questions = [q for q in questions if q.get('answer')]
                question_data[q_type] = valid_questions
                
                # 同步到 static/data/ 目录
                with open(dest_path, 'w', encoding='utf-8') as f:
                    json.dump(valid_questions, f, ensure_ascii=False, indent=2)
                
                print(f'✓ {q_type}.json: 已加载 {len(valid_questions)} 道有效题目')
        else:
            print(f'✗ {q_type}.json: 文件不存在')
    
    print(f'\n同步完成！')
    print(f'总计: {len(question_data["judge"])} 判断题, {len(question_data["single"])} 单选题, {len(question_data["multi"])} 多选题')

if __name__ == '__main__':
    update_static_data()
