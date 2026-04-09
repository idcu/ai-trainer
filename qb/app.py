from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import json
import os
import random

app = Flask(__name__)
CORS(app)

DB_PATH = os.path.join(os.path.dirname(__file__), 'quiz.db')

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

@app.route('/api/questions/<question_type>', methods=['GET'])
def get_questions(question_type):
    if question_type not in ['judge', 'single', 'multi']:
        return jsonify({'error': '无效的题型'}), 400
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM questions WHERE type = ?', (question_type,))
    rows = cursor.fetchall()
    conn.close()
    
    questions = []
    for row in rows:
        question = {
            'id': row['id'],
            'type': row['type'],
            'question': row['question'],
            'options': json.loads(row['options']) if row['options'] else [],
            'answer': row['answer']
        }
        questions.append(question)
    
    random.shuffle(questions)
    return jsonify(questions)

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    if not os.path.exists(DB_PATH):
        print('数据库不存在，请先运行 init_db.py 初始化数据库')
    else:
        app.run(host='0.0.0.0', port=5000, debug=True)
