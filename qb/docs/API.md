# API 文档

## 1. 概述

本文档描述了人工智能训练师题库系统的 API 接口，包括后端 Flask API 和前端模块 API。

## 2. 后端 API (Flask)

### 2.1 基础信息

- **Base URL**: `http://localhost:5000`
- **Content-Type**: `application/json`

### 2.2 接口列表

#### 2.2.1 获取题目

```http
GET /api/questions/<type>
```

**路径参数**:
- `type`: 题型，可选值 `judge`、`single`、`multi`

**响应示例**:
```json
[
  {
    "id": 1,
    "type": "judge",
    "question": "Python 是一种解释型语言。",
    "answer": "正确",
    "analysis": "Python 是解释型语言，不需要编译直接运行。"
  }
]
```

**错误响应**:
```json
{
  "error": "Invalid question type"
}
```

#### 2.2.2 获取统计信息

```http
GET /api/stats
```

**响应示例**:
```json
{
  "judge": 100,
  "single": 200,
  "multi": 150
}
```

#### 2.2.3 健康检查

```http
GET /api/health
```

**响应示例**:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

#### 2.2.4 主页

```http
GET /
```

**响应**: HTML 页面

## 3. 前端模块 API

### 3.1 QuizEngine (答题引擎)

#### 3.1.1 构造函数

```javascript
new QuizEngine()
```

#### 3.1.2 loadQuestions(questions, type)

加载题目列表。

**参数**:
- `questions`: 题目数组
- `type`: 题型标识

**示例**:
```javascript
engine.loadQuestions(questions, 'single');
```

#### 3.1.3 sliceQuestions(count)

截取指定数量的题目。

**参数**:
- `count`: 题目数量

**示例**:
```javascript
engine.sliceQuestions(50);
```

#### 3.1.4 getCurrentQuestion()

获取当前题目。

**返回**: 当前题目对象

**示例**:
```javascript
const question = engine.getCurrentQuestion();
```

#### 3.1.5 selectAnswer(value)

选择答案（单选题/判断题）。

**参数**:
- `value`: 答案值

**返回**: 是否选择成功

**示例**:
```javascript
engine.selectAnswer('A');
```

#### 3.1.6 toggleAnswer(value)

切换答案（多选题）。

**参数**:
- `value`: 答案值

**返回**: 是否选中

**示例**:
```javascript
engine.toggleAnswer('A');
```

#### 3.1.7 submitAnswer()

提交答案。

**返回**: 结果对象

```javascript
{
  isCorrect: boolean,
  correctAnswer: string,
  analysis: string
}
```

#### 3.1.8 nextQuestion()

进入下一题。

**返回**: 是否还有下一题

#### 3.1.9 isLastQuestion()

检查是否是最后一题。

**返回**: boolean

#### 3.1.10 getProgress()

获取进度信息。

**返回**:
```javascript
{
  current: number,
  total: number,
  percentage: number
}
```

#### 3.1.11 getScore()

获取得分信息。

**返回**:
```javascript
{
  score: number,
  correct: number,
  wrong: number,
  accuracy: number
}
```

### 3.2 UIRenderer (UI渲染器)

#### 3.2.1 构造函数

```javascript
new UIRenderer()
```

#### 3.2.2 showMenu()

显示菜单页面。

#### 3.2.3 showQuiz()

显示答题页面。

#### 3.2.4 showResult()

显示结果页面。

#### 3.2.5 renderQuestion(question, questionNumber)

渲染题目。

**参数**:
- `question`: 题目对象
- `questionNumber`: 题号

#### 3.2.6 updateProgress(progress, score)

更新进度显示。

**参数**:
- `progress`: 进度对象
- `score`: 得分对象

#### 3.2.7 bindOptionClick(callback)

绑定选项点击事件。

**参数**:
- `callback`: 回调函数 `(optionEl, value) => void`

### 3.3 WrongBook (错题本)

#### 3.3.1 构造函数

```javascript
new WrongBook()
```

#### 3.3.2 add(question)

添加错题。

**参数**:
- `question`: 题目对象

#### 3.3.3 remove(id, type)

移除错题。

**参数**:
- `id`: 题目ID
- `type`: 题型

#### 3.3.4 has(id, type)

检查是否是错题。

**参数**:
- `id`: 题目ID
- `type`: 题型

**返回**: boolean

#### 3.3.5 getCount()

获取错题数量。

**返回**: number

#### 3.3.6 getAll()

获取所有错题。

**返回**: 错题数组

#### 3.3.7 getQuestionsWithDetails(allQuestions)

获取带详情的错题列表。

**参数**:
- `allQuestions`: 所有题目对象

**返回**: 带详情的错题数组

#### 3.3.8 clear()

清空错题本。

### 3.4 Favorites (收藏夹)

#### 3.4.1 构造函数

```javascript
new Favorites()
```

#### 3.4.2 toggle(question)

切换收藏状态。

**参数**:
- `question`: 题目对象

**返回**: 是否收藏

#### 3.4.3 add(question)

添加收藏。

**参数**:
- `question`: 题目对象

#### 3.4.4 remove(id, type)

移除收藏。

**参数**:
- `id`: 题目ID
- `type`: 题型

#### 3.4.5 has(id, type)

检查是否已收藏。

**参数**:
- `id`: 题目ID
- `type`: 题型

**返回**: boolean

#### 3.4.6 getCount()

获取收藏数量。

**返回**: number

#### 3.4.7 getAll()

获取所有收藏。

**返回**: 收藏数组

#### 3.4.8 getQuestionsWithDetails(allQuestions)

获取带详情的收藏列表。

**参数**:
- `allQuestions`: 所有题目对象

**返回**: 带详情的收藏数组

#### 3.4.9 clear()

清空收藏夹。

### 3.5 History (历史记录)

#### 3.5.1 构造函数

```javascript
new History()
```

#### 3.5.2 add(record)

添加历史记录。

**参数**:
- `record`: 记录对象

#### 3.5.3 remove(id)

删除记录。

**参数**:
- `id`: 记录ID

#### 3.5.4 getAll()

获取所有记录。

**返回**: 记录数组

#### 3.5.5 getCount()

获取记录数量。

**返回**: number

#### 3.5.6 getStats()

获取统计信息。

**返回**:
```javascript
{
  totalQuizzes: number,
  averageScore: number,
  averageAccuracy: number,
  bestScore: number
}
```

#### 3.5.7 clear()

清空历史记录。

### 3.6 Helpers (工具函数)

#### 3.6.1 shuffleArray(array)

打乱数组。

**参数**:
- `array`: 数组

**返回**: 打乱后的新数组

#### 3.6.2 formatDate(date)

格式化日期。

**参数**:
- `date`: 日期对象或时间戳

**返回**: 格式化的日期字符串

#### 3.6.3 calculateAccuracy(correct, total)

计算正确率。

**参数**:
- `correct`: 正确数
- `total`: 总数

**返回**: 正确率 (0-100)

#### 3.6.4 debounce(func, wait, immediate)

防抖函数。

**参数**:
- `func`: 要防抖的函数
- `wait`: 等待时间 (ms)
- `immediate`: 是否立即执行

**返回**: 防抖后的函数

#### 3.6.5 throttle(func, limit)

节流函数。

**参数**:
- `func`: 要节流的函数
- `limit`: 限制时间 (ms)

**返回**: 节流后的函数

#### 3.6.6 memoize(func, resolver)

记忆化函数。

**参数**:
- `func`: 要记忆化的函数
- `resolver`: 缓存键生成函数

**返回**: 记忆化后的函数

#### 3.6.7 cloneDeep(obj)

深度克隆对象。

**参数**:
- `obj`: 要克隆的对象

**返回**: 克隆后的对象

### 3.7 Storage (存储工具)

#### 3.7.1 get(key, defaultValue)

获取存储的值。

**参数**:
- `key`: 键名
- `defaultValue`: 默认值

**返回**: 存储的值

#### 3.7.2 set(key, value)

设置存储的值。

**参数**:
- `key`: 键名
- `value`: 值

**返回**: 是否成功

#### 3.7.3 remove(key)

删除存储的值。

**参数**:
- `key`: 键名

**返回**: 是否成功

#### 3.7.4 clear()

清空所有存储。

**返回**: 是否成功

#### 3.7.5 forceSync()

强制同步到 LocalStorage。

### 3.8 DataLoader (数据加载)

#### 3.8.1 loadJSON(url)

加载 JSON 数据。

**参数**:
- `url`: JSON 文件 URL

**返回**: Promise，解析为 JSON 数据

#### 3.8.2 loadQuestions(type)

加载题目数据。

**参数**:
- `type`: 题型

**返回**: Promise，解析为题目数组

#### 3.8.3 loadStats()

加载统计信息。

**返回**: Promise，解析为统计对象

#### 3.8.4 clearCache()

清除数据缓存。

## 4. 数据结构

### 4.1 题目对象 (Question)

```javascript
{
  id: number,
  type: 'judge' | 'single' | 'multi',
  question: string,
  options?: Array<{ letter: string, text: string }>,
  answer: string,
  analysis?: string
}
```

### 4.2 历史记录对象 (HistoryRecord)

```javascript
{
  id: number,
  type: string,
  score: number,
  correct: number,
  wrong: number,
  total: number,
  accuracy: number,
  completedAt: string
}
```

### 4.3 错题对象 (WrongQuestion)

```javascript
{
  id: number,
  type: string,
  wrongCount: number,
  wrongAt: string
}
```

### 4.4 收藏对象 (FavoriteQuestion)

```javascript
{
  id: number,
  type: string,
  addedAt: string
}
```
