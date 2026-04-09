# 人工智能训练师题库系统

基于 Flask + SQLite 的在线题库系统，支持判断题、单选题和多选题。

## 项目结构

```
qb/
├── app.py                  # Flask后端应用
├── init_db.py             # 数据库初始化脚本
├── convert_docx.py        # Word文档转换脚本
├── requirements.txt       # Python依赖
├── quiz.db               # SQLite数据库文件（运行后生成）
├── index.html            # 前端页面
├── data/                 # 原始JSON数据
│   ├── judge.json
│   ├── single.json
│   └── multi.json
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

## 功能特性

- ✅ 三种题型：判断题、单选题、多选题
- ✅ SQLite数据库存储
- ✅ Flask后端API
- ✅ 随机出题
- ✅ 实时反馈
- ✅ 成绩统计
- ✅ 响应式设计

## 安装部署

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 初始化数据库

```bash
python init_db.py
```

这会创建 `quiz.db` 数据库文件，并从 `data/` 目录下的JSON文件导入题目。

### 3. 启动服务器

```bash
python app.py
```

服务器将在 `http://127.0.0.1:5000` 启动。

### 4. 访问应用

在浏览器中打开：`http://127.0.0.1:5000`

## API接口

### 获取题目

```
GET /api/questions/<type>
```

- `type`: 题型，可选值 `judge`、`single`、`multi`
- 返回：该题型的所有题目（已随机排序）

### 健康检查

```
GET /api/health
```

## 数据库结构

### questions 表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | INTEGER | 主键，自增 |
| type | TEXT | 题型：judge/single/multi |
| question | TEXT | 题目内容 |
| options | TEXT | 选项（JSON格式） |
| answer | TEXT | 答案 |
| created_at | TIMESTAMP | 创建时间 |

## 导入Word文档

如果需要从Word文档导入题目：

```bash
python convert_docx.py
python init_db.py
```

## 开发说明

- 后端框架：Flask 3.0
- 数据库：SQLite
- 前端：原生 HTML/CSS/JavaScript

## 注意事项

- `quiz.db` 是SQLite数据库文件，不要提交到版本控制
- 开发环境使用Flask自带服务器，生产环境请使用WSGI服务器
