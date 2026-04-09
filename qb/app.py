from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import json
import os
import random

# 配置类
class Config:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    DB_PATH = os.path.join(BASE_DIR, 'quiz.db')
    HOST = '0.0.0.0'
    PORT = 5000
    DEBUG = True
    TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
    STATIC_DIR = os.path.join(BASE_DIR, 'static')
    DATA_DIR = os.path.join(BASE_DIR, 'data')

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect(Config.DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return send_from_directory(Config.TEMPLATES_DIR, 'index.html')

@app.route('/templates/<path:path>')
def template_files(path):
    return send_from_directory(Config.TEMPLATES_DIR, path)

@app.route('/static/<path:path>')
def static_files(path):
    return send_from_directory(Config.STATIC_DIR, path)

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
            'answer': row['answer'],
            'analysis': row['analysis'] if row['analysis'] else ''
        }
        questions.append(question)
    
    random.shuffle(questions)
    return jsonify(questions)

@app.route('/api/stats', methods=['GET'])
def get_stats():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    stats = {}
    for qtype in ['judge', 'single', 'multi']:
        cursor.execute('SELECT COUNT(*) FROM questions WHERE type = ?', (qtype,))
        count = cursor.fetchone()[0]
        stats[qtype] = count
    
    conn.close()
    return jsonify(stats)

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    if not os.path.exists(Config.DB_PATH):
        print('数据库不存在，请先运行 scripts/init_db.py 初始化数据库')
    else:
        app.run(host=Config.HOST, port=Config.PORT, debug=Config.DEBUG)
