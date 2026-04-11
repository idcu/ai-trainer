# AI-Trainer

人工智能训练师培训项目，包含理论培训文档和题库练习系统。

## 项目概述

本项目旨在为人工智能训练师提供完整的学习资源，包括：
- 理论培训文档（docs/）
- 题库练习系统（qb/）
- 支持 GitHub Pages / Gitee Pages 在线部署

## 目录结构

```
ai-trainer/
├── docs/                  # 培训文档目录
├── qb/                    # 题库系统（Flask + SQLite）
│   ├── app.py            # Flask后端应用
│   ├── config.py         # 后端配置文件
│   ├── config.json       # 配置文件（不提交到git）
│   ├── config.json.example # 配置文件模板
│   ├── requirements.txt  # Python依赖
│   ├── Dockerfile        # Docker镜像文件
│   ├── docker-compose.yml # Docker Compose配置
│   ├── scripts/          # 辅助脚本目录
│   │   ├── init_db.py          # 数据库初始化脚本
│   │   ├── convert_docx.py     # Word文档转换脚本
│   │   ├── convert_docx_v2.py  # Word文档转换脚本v2
│   │   ├── analyze_docx.py     # Word文档分析脚本
│   │   ├── update_data_js.py   # 更新前端数据脚本
│   │   └── check_db.py        # 数据库检查脚本
│   ├── templates/        # 前端页面目录
│   ├── static/           # 静态资源目录（含原始JSON数据）
│   │   ├── css/        # 样式文件
│   │   ├── js/         # JavaScript文件（模块化设计）
│   │   └── data/       # 题目数据（JSON格式）
│   ├── data/             # 数据库文件
│   ├── docs/             # 题库系统文档
│   │   ├── USER_GUIDE.md     # 用户手册
│   │   ├── DEVELOPMENT.md    # 开发者指南
│   │   ├── API.md            # API文档
│   │   ├── ARCHITECTURE.md  # 架构设计
│   │   └── ANDROID_BUILD.md # Android打包指南
│   ├── android/          # Android构建相关
│   └── .github/          # GitHub Actions工作流
├── index.html             # 主页（跳转到题库系统）
├── .nojekyll             # GitHub Pages配置
├── .gitignore
└── README.md              # 本文件
```

## docs/ - 培训文档

包含人工智能训练师相关的技术文档：

| 文档 | 说明 |
|------|------|
| 01_Python基础.md | Python编程语言基础 |
| 02_Anaconda安装使用.md | Anaconda环境管理工具 |
| 03_Excel数据处理及示例.md | Excel数据清洗、标注及数据透视表/图使用 |
| 04_Word流程图绘制及示例.md | Word流程图绘制（SmartArt和形状工具） |
| 05_NumPy库使用及示例.md | NumPy数值计算库 |
| 06_Pandas库使用及示例.md | Pandas数据分析库 |
| 07_SQLite3库使用及示例.md | SQLite数据库操作 |
| 08_Requests库使用及示例.md | Requests网络请求库 |
| 09_BeautifulSoup库使用及示例.md | BeautifulSoup网页解析库 |
| 10_LabelStudio安装使用及示例.md | LabelStudio数据标注工具 |
| 11_SPSS安装使用及示例.md | SPSS数据分析工具 |
| 人工智能培训师实操手册.md | 完整实操指南 |

### 文档分类说明

**开发环境类：**
- 01_Python基础.md
- 02_Anaconda安装使用.md

**数据处理工具类：**
- 03_Excel数据处理及示例.md
- 04_Word流程图绘制及示例.md
- 11_SPSS安装使用及示例.md

**Python库类：**
- 05_NumPy库使用及示例.md
- 06_Pandas库使用及示例.md
- 07_SQLite3库使用及示例.md
- 08_Requests库使用及示例.md
- 09_BeautifulSoup库使用及示例.md

**数据标注类：**
- 10_LabelStudio安装使用及示例.md

**综合指南：**
- 人工智能培训师实操手册.md

## qb/ - 题库练习系统

基于 Flask + SQLite 的在线题库系统，主要功能：

### 核心功能
- ✅ 三种题型：判断题、单选题、多选题
- ✅ 练习模式和考试模式
- ✅ 灵活的数据源配置（数据库 / JSON 文件）
- ✅ Flask后端API + 纯前端版本
- ✅ 随机出题
- ✅ 实时反馈与成绩统计
- ✅ 响应式设计

### 错题与收藏
- ✅ 错题本功能：自动记录答错的题目
- ✅ 错题重练：专门的错题练习模式
- ✅ 收藏功能：收藏重点题目
- ✅ 收藏练习：从收藏夹开始练习

### 历史记录与统计
- ✅ 成绩历史：记录每次答题的详细信息
- ✅ 学习统计：总测试次数、平均分、最佳成绩等
- ✅ 性能等级：根据正确率评估学习水平

### 搜索与筛选
- ✅ 题目搜索：关键词搜索题目内容
- ✅ 题型筛选：按题型筛选题目
- ✅ 混合题型：多种题型混合出题

### 其他功能
- ✅ 答题进度保存与恢复
- ✅ 数据导入导出
- ✅ 支持 Docker 部署
- ✅ 支持 GitHub Actions 自动部署
- ✅ 支持 Android 应用构建
- ✅ ESLint + Prettier 代码规范

详细说明请查看 [qb/README.md](qb/README.md)

## 🚀 快速部署

### GitHub Pages / Gitee Pages 在线访问（推荐）

本项目已支持 GitHub Pages / Gitee Pages 部署，无需服务器即可在线访问题库系统：

#### GitHub Pages 部署步骤：

1. 将代码推送到 GitHub 仓库
2. 进入仓库的 **Settings** → **Pages**
3. 在 **Build and deployment** 部分：
   - Source: 选择 **Deploy from a branch** 或 **GitHub Actions**
   - 如果使用 Actions：项目已配置 `.github/workflows/deploy.yml`，推送到 main/master 分支会自动部署
   - 如果使用 Branch：选择 `main` 或 `master`，文件夹选择 `/ (root)`
4. 点击 **Save** 保存
5. 等待1-2分钟部署完成，访问 `https://<your-username>.github.io/ai-trainer/`

#### Gitee Pages 部署步骤：

1. 将代码推送到 Gitee 仓库
2. 进入仓库页面，点击顶部的 **管理**（或仓库设置）
3. 在左侧菜单中找到 **Gitee Pages**
4. 选择部署分支（如 `main` 或 `master`），部署目录留空
5. 点击 **启动**，等待部署完成

> 注意：Gitee Pages 需要仓库先进行实名认证才能使用

### Docker 部署

```bash
# 进入 qb/ 目录
cd qb

# 构建并启动
docker-compose up -d

# 访问 http://localhost:5000
```

---

## 快速开始

### 方式一：本地运行题库系统（后端版本）

1. 进入 qb/ 目录
   ```bash
   cd qb
   ```

2. 安装依赖
   ```bash
   pip install -r requirements.txt
   ```

3. 配置（可选）
   ```bash
   cp config.json.example config.json
   # 编辑 config.json 文件修改配置
   ```

4. 初始化数据库
   ```bash
   python scripts/init_db.py
   ```

5. 启动服务器
   ```bash
   python app.py
   ```

6. 访问 http://127.0.0.1:5000

### 方式二：直接使用纯前端版本（推荐）

直接在浏览器中打开 `qb/templates/index_standalone.html` 或根目录下的 `index.html` 即可使用，无需后端服务。

### 学习培训文档

直接在 docs/ 目录下查看相关 Markdown 文档。

## 开发环境

- Python 3.x
- Flask 3.0
- 前端：原生 HTML/CSS/JavaScript
- Docker（可选，用于容器化部署）
- ESLint + Prettier（用于代码规范检查）

## 许可证

本项目仅供学习使用。
