# 人工智能训练师题库系统

基于 Flask + SQLite 的在线题库系统，支持判断题、单选题和多选题。

## 🚀 快速部署

### 方式一：GitHub Pages / Gitee Pages（推荐，零成本）

项目已内置纯前端版本，可直接部署到 GitHub Pages 或 Gitee Pages。

#### GitHub Pages 部署步骤：

1. 将代码推送到 GitHub 仓库
2. 进入仓库的 **Settings** → **Pages**
3. 在 **Build and deployment** 部分：
   - Source: 选择 **Deploy from a branch** 或 **GitHub Actions**
   - 如果使用 Actions：项目已配置 `.github/workflows/deploy.yml`，推送到 main/master 分支会自动部署
   - 如果使用 Branch：选择 `main` 或 `master` 分支，文件夹选择 `/ (root)`
4. 等待部署完成，访问 `https://<your-username>.github.io/<repo-name>/`

#### Gitee Pages 部署步骤：

1. 将代码推送到 Gitee 仓库
2. 进入仓库的 **服务** → **Gitee Pages**
3. 选择部署分支（如 `master`），部署目录留空
4. 点击 **启动**，等待部署完成

### 方式二：Docker 部署

```bash
# 构建并启动
docker-compose up -d

# 访问 http://localhost:5000
```

### 方式三：本地运行

```bash
# 1. 安装依赖
pip install -r requirements.txt

# 2. 初始化数据库
python scripts/init_db.py

# 3. 启动服务器
python app.py

# 访问 http://localhost:5000
```


## 项目结构

```
qb/
├── app.py                  # Flask后端应用
├── config.py              # 后端配置文件
├── requirements.txt       # Python依赖
├── quiz.db               # SQLite数据库文件（运行后生成）
├── README.md           # 本文件
│
├── scripts/            # 辅助脚本目录
│   ├── init_db.py          # 数据库初始化脚本
│   ├── convert_docx.py     # Word文档转换脚本
│   ├── update_data_js.py   # 更新前端数据脚本
│   └── check_db.py        # 数据库检查脚本
│
├── templates/          # 前端页面目录
│   ├── index.html        # 后端版本页面
│   └── index_standalone.html  # 纯前端版本页面
│
├── static/             # 静态资源目录
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── config.js      # 前端配置文件
│       ├── app.js
│       ├── app_standalone.js
│       └── data.js
│
├── data/               # 原始JSON数据
│   ├── judge.json
│   ├── single.json
│   └── multi.json
│
├── docs/              # 文档目录
│   └── ANDROID_BUILD.md  # Android打包指南
│
└── android/           # Android构建相关
    ├── build_android.ps1
    ├── capacitor.config.json
    ├── package.json
    ├── package-lock.json
    └── manifest.json
```

## 功能特性

- ✅ 三种题型：判断题、单选题、多选题
- ✅ SQLite数据库存储
- ✅ Flask后端API
- ✅ 随机出题
- ✅ 实时反馈
- ✅ 成绩统计
- ✅ 响应式设计
- ✅ 支持Android应用构建

## 安装部署

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 初始化数据库

```bash
python scripts/init_db.py
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
python scripts/convert_docx.py
python scripts/init_db.py
```

## 更新前端数据

如果使用纯前端版本，需要更新 data.js 文件：

```bash
python scripts/update_data_js.py
```

## 数据库检查

检查数据库中的题目统计：

```bash
python scripts/check_db.py
```

## Android打包

详细的Android打包指南请查看 [docs/ANDROID_BUILD.md](docs/ANDROID_BUILD.md)

## 开发说明

- 后端框架：Flask 3.0
- 数据库：SQLite
- 前端：原生 HTML/CSS/JavaScript

## 注意事项

- `quiz.db` 是SQLite数据库文件，不要提交到版本控制
- 开发环境使用Flask自带服务器，生产环境请使用WSGI服务器
