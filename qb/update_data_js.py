import json
import os

def update_data_js():
    data_dir = os.path.join(os.path.dirname(__file__), 'data')
    output_file = os.path.join(os.path.dirname(__file__), 'static', 'js', 'data.js')
    
    question_data = {
        'judge': [],
        'single': [],
        'multi': []
    }
    
    # 读取三种题型的数据
    for q_type in ['judge', 'single', 'multi']:
        json_path = os.path.join(data_dir, f'{q_type}.json')
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                questions = json.load(f)
                # 过滤掉答案为空的题目
                valid_questions = [q for q in questions if q.get('answer')]
                question_data[q_type] = valid_questions
                print(f'已加载 {len(valid_questions)} 道 {q_type} 题目')
    
    # 生成 data.js 文件
    js_content = f'const QUESTION_DATA = {json.dumps(question_data, ensure_ascii=False, indent=2)};'
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f'\ndata.js 已更新完成！')
    print(f'总计: {len(question_data["judge"])} 判断题, {len(question_data["single"])} 单选题, {len(question_data["multi"])} 多选题')

if __name__ == '__main__':
    update_data_js()
