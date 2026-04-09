import os

class Config:
    # 基础目录
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    
    # 数据库配置
    DB_PATH = os.path.join(BASE_DIR, 'quiz.db')
    
    # Flask服务器配置
    HOST = '0.0.0.0'
    PORT = 5000
    DEBUG = True
    
    # 模板和静态文件目录
    TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
    STATIC_DIR = os.path.join(BASE_DIR, 'static')
    DATA_DIR = os.path.join(BASE_DIR, 'data')
