from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import json
import os
import random
from config import Config

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect(Config.DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def load_json_questions(question_type):
    data_path = Config.JSON_DATA_PATHS.get(question_type)
    if not data_path:
        return []
    
    full_path = data_path if os.path.isabs(data_path) else os.path.join(Config.BASE_DIR, data_path)
    if not os.path.exists(full_path):
        return []
    
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f'加载 {question_type} 数据失败: {e}')
        return []

def get_questions_from_db(question_type):
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
    return questions

def get_stats_from_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    stats = {}
    for qtype in ['judge', 'single', 'multi']:
        cursor.execute('SELECT COUNT(*) FROM questions WHERE type = ?', (qtype,))
        count = cursor.fetchone()[0]
        stats[qtype] = count
    
    conn.close()
    return stats

def get_stats_from_json():
    stats = {}
    for qtype in ['judge', 'single', 'multi']:
        questions = load_json_questions(qtype)
        stats[qtype] = len(questions)
    return stats

@app.route('/')
def index():
    return send_from_directory(Config.TEMPLATES_DIR, 'index.html')

@app.route('/templates/<path:path>')
def template_files(path):
    return send_from_directory(Config.TEMPLATES_DIR, path)

@app.route('/static/<path:path>')
def static_files(path):
    return send_from_directory(Config.STATIC_DIR, path)

@app.route('/config.json')
def serve_config():
    return send_from_directory(Config.BASE_DIR, 'config.json')

@app.route('/api/questions/<question_type>', methods=['GET'])
def get_questions(question_type):
    if question_type not in ['judge', 'single', 'multi']:
        return jsonify({'error': '无效的题型'}), 400
    
    if Config.DATA_SOURCE_TYPE == 'json':
        questions = load_json_questions(question_type)
    else:
        questions = get_questions_from_db(question_type)
    
    random.shuffle(questions)
    return jsonify(questions)

@app.route('/api/stats', methods=['GET'])
def get_stats():
    if Config.DATA_SOURCE_TYPE == 'json':
        stats = get_stats_from_json()
    else:
        stats = get_stats_from_db()
    return jsonify(stats)

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    if Config.DATA_SOURCE_TYPE == 'database' and not os.path.exists(Config.DB_PATH):
        print('数据库不存在，请先运行 scripts/init_db.py 初始化数据库')
    else:
        app.run(host=Config.HOST, port=Config.PORT, debug=Config.DEBUG)
