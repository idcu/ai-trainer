# AI-Trainer

人工智能训练师培训项目，包含理论培训文档和题库练习系统。

## 项目概述

本项目旨在为人工智能训练师提供完整的学习资源，包括：
- 理论培训文档（docs/）
- 题库练习系统（qb/）
- Word格式题目资源（word/）

## 目录结构

```
ai-trainer/
├── docs/                  # 培训文档目录
├── qb/                    # 题库系统（Flask + SQLite）
│   ├── app.py            # Flask后端应用
│   ├── config.py         # 后端配置文件
│   ├── requirements.txt  # Python依赖
│   ├── scripts/          # 辅助脚本目录
│   │   ├── init_db.py          # 数据库初始化脚本
│   │   ├── convert_docx.py     # Word文档转换脚本
│   │   ├── update_data_js.py   # 更新前端数据脚本
│   │   └── check_db.py        # 数据库检查脚本
│   ├── templates/        # 前端页面目录
│   ├── static/           # 静态资源目录
│   ├── data/             # 原始JSON数据
│   ├── docs/             # 题库系统文档
│   └── android/          # Android构建相关
├── word/                  # Word格式题目
├── .gitignore
└── README.md              # 本文件
```

## docs/ - 培训文档

包含人工智能训练师相关的技术文档：

| 文档 | 说明 |
|------|------|
| 01_Python基础.md | Python编程语言基础 |
| 02_Anaconda安装使用.md | Anaconda环境管理工具 |
| 03_NumPy库使用及示例.md | NumPy数值计算库 |
| 04_Pandas库使用及示例.md | Pandas数据分析库 |
| 05_SQLite3库使用及示例.md | SQLite数据库操作 |
| 06_LabelStudio安装使用及示例.md | LabelStudio数据标注工具 |
| 人工智能培训师实操手册.md | 完整实操指南 |

## qb/ - 题库练习系统

基于 Flask + SQLite 的在线题库系统，主要功能：

- 判断题、单选题、多选题三种题型
- SQLite数据库存储
- 随机出题
- 实时反馈与成绩统计
- 响应式设计
- 支持Android应用构建

详细说明请查看 [qb/README.md](qb/README.md)

## word/ - 题目资源

包含三种题型的Word文档：
- 人工智能训练师理论复习（判断汇总）.docx
- 人工智能训练师理论复习（单选汇总）.docx
- 人工智能训练师理论复习（多选汇总）.docx

## 🚀 快速部署

### GitHub Pages 在线访问（推荐）

本项目已支持 GitHub Pages 部署，无需服务器即可在线访问题库系统：

1. 将代码推送到 GitHub 仓库
2. 进入仓库的 **Settings** → **Pages**
3. 在 **Build and deployment** 部分：
   - Source: 选择 **Deploy from a branch**
   - Branch: 选择 `main` 或 `master`，文件夹选择 `/ (root)`
4. 点击 **Save** 保存
5. 等待1-2分钟部署完成，访问 `https://<your-username>.github.io/ai-trainer/`

> 访问后会自动跳转到题库系统页面

---

## 快速开始

### 使用题库系统

1. 进入 qb/ 目录
2. 安装依赖：`pip install -r requirements.txt`
3. 初始化数据库：`python init_db.py`
4. 启动服务器：`python app.py`
5. 访问 http://127.0.0.1:5000

### 学习培训文档

直接在 docs/ 目录下查看相关 Markdown 文档。

## 开发环境

- Python 3.x
- Flask 3.0
- 前端：原生 HTML/CSS/JavaScript

## 许可证

本项目仅供学习使用。
