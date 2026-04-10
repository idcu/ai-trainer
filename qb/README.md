# 人工智能训练师题库系统

基于 Flask + SQLite 的在线题库系统，支持判断题、单选题和多选题。同时提供纯前端版本，可直接部署到 GitHub Pages 或 Gitee Pages。

## 🚀 快速部署

### 方式一：GitHub Pages / Gitee Pages（推荐，零成本）

项目已内置纯前端版本，可直接部署到 GitHub Pages 或 Gitee Pages。

#### GitHub Pages 部署步骤：

1. 将代码推送到 GitHub 仓库
2. 进入仓库的 **Settings** → **Pages**
3. 在 **Build and deployment** 部分：
   - Source: 选择 **Deploy from a branch** 或 **GitHub Actions**
   - 如果使用 Actions：项目已配置 `.github/workflows/deploy.yml`，推送到 main/master 分支会自动部署
   - 如果使用 Branch：选择 `main` 或 `master` 分支，文件夹选择 `/ (root)`（注意：GitHub Pages 只提供 `/ (root)` 和 `/docs` 两个选项）
4. 点击 **Save** 保存配置
5. 等待1-2分钟部署完成，访问 `https://<your-username>.github.io/<repo-name>/`

#### Gitee Pages 部署步骤：

1. 将代码推送到 Gitee 仓库
2. 进入仓库页面，点击顶部的 **管理**（或仓库设置）
3. 在左侧菜单中找到 **Gitee Pages**（可能在"功能管理"或"服务"分类下）
4. 选择部署分支（如 `main` 或 `master`），部署目录留空
5. 点击 **启动**，等待部署完成

> 注意：Gitee Pages 需要仓库先进行实名认证才能使用

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

# 2. 配置（可选）
cp config.json.example config.json
# 编辑 config.json 文件修改配置

# 3. 初始化数据库
python scripts/init_db.py

# 4. 启动服务器
python app.py

# 访问 http://localhost:5000
```

## 项目结构

```
qb/
├── app.py                  # Flask后端应用
├── config.py              # 配置加载模块（读取 config.json）
├── config.json            # 配置文件（不提交到 git）
├── config.json.example    # 配置文件模板
├── requirements.txt       # Python依赖
├── README.md              # 本文件
│
├── scripts/               # 辅助脚本目录
│   ├── init_db.py         # 数据库初始化脚本
│   ├── convert_docx.py    # Word文档转换脚本
│   ├── update_data_js.py  # 检查数据脚本
│   └── check_db.py        # 数据库检查脚本
│
├── templates/             # 前端页面目录
│   ├── index.html         # 后端版本页面
│   └── index_standalone.html # 纯前端版本页面
│
├── static/                # 静态资源目录
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── config.js      # 前端配置文件
│   │   ├── app.js
│   │   ├── app_standalone.js
│   │   └── data.js
│   └── data/
│       ├── judge.json     # 判断题数据
│       ├── single.json    # 单选题数据
│       └── multi.json     # 多选题数据
│
├── data/                  # 数据库目录
│   └── quiz.db            # SQLite数据库文件（运行后生成）
│
├── docs/                  # 文档目录
│   └── ANDROID_BUILD.md   # Android打包指南
│
└── android/               # Android构建相关
    ├── build_android.ps1
    ├── capacitor.config.json
    ├── package.json
    ├── package-lock.json
    └── manifest.json
```

## 功能特性

- ✅ 三种题型：判断题、单选题、多选题
- ✅ 灵活的数据源配置（数据库 / JSON 文件）
- ✅ Flask后端API
- ✅ 纯前端版本（支持直接部署到静态服务器）
- ✅ 前端数据获取方式可选（API / JSON 文件）
- ✅ 随机出题
- ✅ 实时反馈
- ✅ 成绩统计
- ✅ 响应式设计
- ✅ 支持Android应用构建
- ✅ 统一的 JSON 配置文件

## 配置说明

项目使用 `config.json` 文件进行配置，复制 `config.json.example` 为 `config.json` 即可：

```bash
cp config.json.example config.json
```

### 配置项说明

```json
{
    "flask": {
        "host": "0.0.0.0",
        "port": 5000,
        "debug": true
    },
    "data_source": {
        "type": "database",
        "database": {
            "path": "data/quiz.db"
        },
        "json": {
            "data_paths": {
                "judge": "static/data/judge.json",
                "single": "static/data/single.json",
                "multi": "static/data/multi.json"
            }
        }
    },
    "frontend": {
        "data_source_type": "json",
        "questions_per_quiz": 50,
        "points_per_correct": 10,
        "api_base_url": "",
        "data_paths": {
            "judge": "static/data/judge.json",
            "single": "static/data/single.json",
            "multi": "static/data/multi.json"
        }
    }
}
```

### Flask 配置

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| host | Flask服务监听地址 | 0.0.0.0 |
| port | Flask服务端口 | 5000 |
| debug | 是否开启调试模式 | true |

### 后端数据源配置

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| data_source.type | 数据源类型：`database` 或 `json` | database |
| data_source.database.path | SQLite数据库路径 | data/quiz.db |
| data_source.json.data_paths | JSON文件路径配置 | static/data/*.json |

### 前端配置

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| data_source_type | 前端数据获取方式：`json` 或 `api` | json |
| questions_per_quiz | 每次答题数量 | 50 |
| points_per_correct | 每题得分 | 10 |
| api_base_url | API基础URL（使用api模式时） | "" |
| data_paths | JSON数据文件路径（使用json模式时） | - |

## 安装部署（后端版本）

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 配置

```bash
cp config.json.example config.json
# 根据需要编辑 config.json 文件
```

### 3. 初始化数据库

```bash
python scripts/init_db.py
```

这会在 `data/` 目录下创建 `quiz.db` 数据库文件，并从 `static/data/` 目录下的JSON文件导入题目。

### 4. 启动服务器

```bash
python app.py
```

服务器将在配置的地址和端口启动（默认 http://127.0.0.1:5000）。

### 5. 访问应用

在浏览器中打开：`http://127.0.0.1:5000`

## API接口（后端版本）

### 获取题目

```
GET /api/questions/<type>
```

- `type`: 题型，可选值 `judge`、`single`、`multi`
- 返回：该题型的所有题目（已随机排序）

### 获取统计信息

```
GET /api/stats
```

- 返回：各题型的题目数量统计

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
| analysis | TEXT | 解析 |
| created_at | TIMESTAMP | 创建时间 |

## 导入Word文档

如果需要从Word文档导入题目：

```bash
python scripts/convert_docx.py
python scripts/init_db.py
```

## 检查数据

JSON数据文件直接存放在 `static/data/` 目录下，供前后端使用。可运行以下命令检查数据：

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
- 配置管理：JSON 配置文件

## 注意事项

- `data/quiz.db` 是SQLite数据库文件，不要提交到版本控制
- `config.json` 文件包含配置，不要提交到版本控制
- 开发环境使用Flask自带服务器，生产环境请使用WSGI服务器
- JSON数据文件存放在 `static/data/` 目录下，供前后端共同使用
