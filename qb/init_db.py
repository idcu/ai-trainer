import sqlite3
import json
import os

def init_database():
    db_path = os.path.join(os.path.dirname(__file__), 'quiz.db')
    
    if os.path.exists(db_path):
        os.remove(db_path)
        print('已删除旧数据库')
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            question TEXT NOT NULL,
            options TEXT,
            answer TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    data_dir = os.path.join(os.path.dirname(__file__), 'data')
    
    for q_type in ['judge', 'single', 'multi']:
        json_path = os.path.join(data_dir, f'{q_type}.json')
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                questions = json.load(f)
            
            for q in questions:
                options_json = json.dumps(q.get('options', []), ensure_ascii=False)
                cursor.execute('''
                    INSERT INTO questions (type, question, options, answer)
                    VALUES (?, ?, ?, ?)
                ''', (q['type'], q['question'], options_json, q['answer']))
            
            print(f'已导入 {len(questions)} 道 {q_type} 题目')
    
    conn.commit()
    conn.close()
    print('数据库初始化完成！')

if __name__ == '__main__':
    init_database()
