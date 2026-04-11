# 人工智能训练师题库系统

基于 Flask + SQLite 的在线题库系统，支持判断题、单选题和多选题。同时提供纯前端版本，可直接部署到 GitHub Pages 或 Gitee Pages。

## ✨ 功能特性

### 核心功能
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

### 错题与收藏
- ✅ 错题本功能：自动记录答错的题目
- ✅ 错题重练：专门的错题练习模式
- ✅ 收藏功能：收藏重点题目
- ✅ 收藏练习：从收藏夹开始练习
- ✅ 数据持久化：错题和收藏数据本地存储

### 历史记录
- ✅ 成绩历史：记录每次答题的详细信息
- ✅ 历史统计：总测试次数、平均分、最佳成绩等
- ✅ 历史记录管理：删除单条或清空全部记录

### 练习与考试模式
- ✅ 练习模式：答题后立即查看答案和解析
- ✅ 考试模式：交卷后统一查看成绩
- ✅ 计时功能：考试模式支持自定义时间限制
- ✅ 自动交卷：时间到自动交卷

### 搜索与筛选
- ✅ 题目搜索：关键词搜索题目内容
- ✅ 题型筛选：按题型筛选题目
- ✅ 搜索高亮：搜索结果高亮显示关键词
- ✅ 快速练习：从搜索结果直接开始练习

### 混合题型
- ✅ 混合练习：多种题型混合出题
- ✅ 题型选择：可配置练习的题型组合
- ✅ 数量控制：自定义混合练习的题目数量
- ✅ 题型标识：答题时显示当前题型

### 答题进度
- ✅ 自动保存：答题过程自动保存进度
- ✅ 恢复答题：支持从上次中断处继续
- ✅ 进度提示：显示保存的进度时间
- ✅ 手动选择：可选择恢复或重新开始

### 数据导入导出
- ✅ 数据导出：导出错题、收藏、历史记录等数据
- ✅ 数据导入：从文件导入用户数据
- ✅ 数据清空：一键清空所有用户数据
- ✅ 文件上传：支持拖拽上传导入文件

### 统计与分析
- ✅ 学习概览：总测试次数、答题数、得分等
- ✅ 性能等级：根据正确率评估学习水平
- ✅ 题型表现：各题型的正确率统计
- ✅ 学习建议：根据表现提供针对性建议

### 代码质量
- ✅ ESLint 配置：JavaScript 代码规范检查
- ✅ Prettier 配置：代码格式化
- ✅ EditorConfig：编辑器配置统一
- ✅ 代码规范：遵循最佳实践

### 性能优化
- ✅ 防抖与节流：优化高频事件处理
- ✅ 数据缓存：减少重复网络请求
- ✅ DOM 优化：批量渲染减少重排
- ✅ LocalStorage 优化：内存缓存+批量写入
- ✅ requestAnimationFrame：优化动画和更新

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
