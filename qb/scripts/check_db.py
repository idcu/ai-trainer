import sqlite3
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from config import Config

db_path = Config.DB_PATH

if not os.path.exists(db_path):
    print('数据库不存在！')
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

print('=== 数据库统计 ===\n')

for q_type in ['judge', 'single', 'multi']:
    cursor.execute('SELECT COUNT(*) FROM questions WHERE type = ?', (q_type,))
    count = cursor.fetchone()[0]
    type_name = {
        'judge': '判断题',
        'single': '单选题',
        'multi': '多选题'
    }
    print(f'{type_name[q_type]}: {count} 题')

cursor.execute('SELECT COUNT(*) FROM questions')
total = cursor.fetchone()[0]
print(f'\n总计: {total} 题')

print('\n=== 题目示例 ===\n')

for q_type in ['judge', 'single', 'multi']:
    cursor.execute('SELECT * FROM questions WHERE type = ? LIMIT 1', (q_type,))
    row = cursor.fetchone()
    if row:
        type_name = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题'
        }
        print(f'【{type_name[q_type]}】')
        print(f'ID: {row[0]}')
        print(f'题目: {row[2]}')
        if row[3]:
            options = json.loads(row[3])
            print(f'选项: {options}')
        print(f'答案: {row[4]}')
        print()

conn.close()
