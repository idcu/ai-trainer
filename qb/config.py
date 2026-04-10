import os
import json

class Config:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    
    _config_data = None
    
    @classmethod
    def _load_json_config(cls):
        if cls._config_data is not None:
            return cls._config_data
        
        config_path = os.getenv('CONFIG_PATH', os.path.join(cls.BASE_DIR, 'config.json'))
        if os.path.exists(config_path):
            try:
                with open(config_path, 'r', encoding='utf-8') as f:
                    cls._config_data = json.load(f)
            except Exception as e:
                print(f'警告: 无法加载配置文件 {config_path}: {e}')
                cls._config_data = {}
        else:
            cls._config_data = {}
        return cls._config_data
    
    @classmethod
    def _get_config_value(cls, *keys, default=None):
        config = cls._load_json_config()
        value = config
        for key in keys:
            if isinstance(value, dict) and key in value:
                value = value[key]
            else:
                return default
        return value

Config._load_json_config()

Config.HOST = Config._get_config_value('flask', 'host', default='0.0.0.0')
Config.PORT = int(Config._get_config_value('flask', 'port', default=5000))
Config.DEBUG = Config._get_config_value('flask', 'debug', default=True)

Config.DATA_SOURCE_TYPE = Config._get_config_value('data_source', 'type', default='database')
Config.DB_PATH = Config._get_config_value('data_source', 'database', 'path', default=os.path.join(Config.BASE_DIR, 'data', 'quiz.db'))
if not os.path.isabs(Config.DB_PATH):
    Config.DB_PATH = os.path.join(Config.BASE_DIR, Config.DB_PATH)

Config.JSON_DATA_PATHS = Config._get_config_value('data_source', 'json', 'data_paths', default={
    'judge': 'data/judge.json',
    'single': 'data/single.json',
    'multi': 'data/multi.json'
})

Config.TEMPLATES_DIR = os.path.join(Config.BASE_DIR, 'templates')
Config.STATIC_DIR = os.path.join(Config.BASE_DIR, 'static')
Config.DATA_DIR = os.path.join(Config.BASE_DIR, 'data')
