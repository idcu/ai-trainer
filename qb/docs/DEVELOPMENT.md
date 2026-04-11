# 开发者指南

## 1. 环境设置

### 1.1 前置要求

- **Node.js**: v14+ (可选，用于代码检查工具)
- **Python**: 3.8+ (可选，用于后端)
- **Git**: 最新版本

### 1.2 代码质量工具

项目已配置以下代码质量工具：

- **ESLint**: JavaScript 代码规范检查
- **Prettier**: 代码格式化
- **EditorConfig**: 编辑器配置

### 1.3 安装依赖 (可选)

```bash
# 进入项目目录
cd qb

# 安装 Node.js 依赖（用于代码检查）
npm install
```

## 2. 开发流程

### 2.1 开发模式

#### 纯前端开发

直接在浏览器中打开 `index.html` 或 `templates/index_v2.html` 即可进行开发。

#### 后端开发

```bash
# 安装 Python 依赖
pip install -r requirements.txt

# 初始化数据库
python scripts/init_db.py

# 启动开发服务器
python app.py
```

### 2.2 代码规范

#### JavaScript 规范

项目遵循 ESLint 配置的规则，主要规范包括：

- 使用 4 空格缩进
- 单引号字符串
- 语句末尾加分号
- 使用 const/let，不使用 var
- 等等...

运行代码检查：

```bash
npm run lint
```

#### 代码格式化：

```bash
npm run format
```

### 2.3 Git 工作流

1. 创建功能分支
```bash
git checkout -b feature/your-feature-name
```

2. 提交代码
```bash
git add .
git commit -m "feat: 添加新功能"
```

3. 推送并创建 PR

## 3. 模块开发

### 3.1 添加新功能模块

#### 步骤 1: 创建模块文件

在 `static/js/modules/` 目录下创建新的模块文件，例如 `new-feature.js`：

```javascript
class NewFeature {
    constructor() {
        this.data = [];
        this.init();
    }

    init() {
        // 初始化代码
    }

    doSomething() {
        // 功能实现
    }
}
```

#### 步骤 2: 在主应用中集成

在 `app-v2.js` 中引入并初始化新模块：

```javascript
class QuizApp {
    constructor() {
        // ... 现有模块
        this.newFeature = new NewFeature();
        // ...
    }
}
```

#### 步骤 3: 绑定 UI 事件

在 `ui-renderer.js` 中添加 UI 绑定：

```javascript
bindNewFeatureButtons(callbacks) {
    // 绑定事件
}
```

### 3.2 数据存储

使用 `Storage` 工具进行数据持久化：

```javascript
// 存储数据
Storage.set('myKey', { value: 'data' });

// 获取数据
const data = Storage.get('myKey', defaultValue);

// 删除数据
Storage.remove('myKey');
```

### 3.3 工具函数使用

#### 防抖和节流

```javascript
// 防抖：延迟执行
const debouncedFn = Helpers.debounce(() => {
    // 你的代码
}, 300);

// 节流：限制频率
const throttledFn = Helpers.throttle(() => {
    // 你的代码
}, 100);
```

#### 记忆化计算

```javascript
const expensiveCalculation = Helpers.memoize((input) => {
    // 昂贵的计算
    return result;
});
```

## 4. 测试

### 4.1 手动测试

1. 在浏览器中打开应用
2. 测试各种功能场景
3. 检查控制台是否有错误
4. 测试响应式布局

### 4.2 代码检查

```bash
# ESLint 检查
npm run lint

# Prettier 检查
npm run format:check
```

## 5. 性能优化指南

### 5.1 DOM 操作优化

- 使用 DocumentFragment 批量操作
- 缓存 DOM 元素
- 使用 requestAnimationFrame

```javascript
// 使用 DocumentFragment
const fragment = document.createDocumentFragment();
items.forEach(item => {
    fragment.appendChild(element);
});
container.appendChild(fragment);
```

### 5.2 数据缓存

- 利用 DataLoader 缓存网络请求
- 利用 Storage 内存缓存
- 使用 memoize 缓存计算结果

### 5.3 事件处理

- 使用事件委托
- 使用防抖和节流
- 及时清理事件监听器

## 6. 调试技巧

### 6.1 浏览器开发者工具

- **Console**: 查看日志和错误
- **Elements**: 检查 DOM 和样式
- **Network**: 查看网络请求
- **Application**: 查看 LocalStorage

### 6.2 常用调试代码

```javascript
// 日志输出
console.log('调试信息', data);

// 断点调试
debugger;

// 性能分析
console.time('操作耗时');
// 你的代码
console.timeEnd('操作耗时');
```

## 7. 部署

### 7.1 静态部署 (GitHub Pages/Gitee Pages)

1. 提交代码到仓库
2. 配置 Pages 服务
3. 等待部署完成

详细步骤请参考 [README.md](../README.md)

### 7.2 Docker 部署

```bash
# 构建并启动
docker-compose up -d
```

### 7.3 本地部署

```bash
# 生产环境使用 WSGI 服务器
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 8. 常见问题

### 8.1 代码检查报错

**问题**: ESLint 报错

**解决方案**:
```bash
# 自动修复可修复的问题
npm run lint:fix
```

### 8.2 LocalStorage 数据丢失

**问题**: 刷新页面后数据丢失

**解决方案**:
- 检查 Storage.set 是否正确调用
- 检查是否有代码调用 Storage.clear
- 检查浏览器是否禁用了 LocalStorage

### 8.3 性能问题

**问题**: 页面响应慢

**解决方案**:
- 检查是否有频繁的 DOM 操作
- 使用性能工具分析瓶颈
- 考虑添加防抖和节流

## 9. 贡献指南

### 9.1 提交信息规范

使用约定式提交规范：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具相关

示例：
```
feat: 添加收藏功能
fix: 修复错题本显示问题
docs: 更新 API 文档
```

### 9.2 PR 流程

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到 Fork
5. 创建 Pull Request
6. 代码审查
7. 合并

## 10. 参考资料

- [架构设计文档](./ARCHITECTURE.md)
- [API 文档](./API.md)
- [使用手册](./USER_GUIDE.md)
- [ESLint 文档](https://eslint.org/)
- [Prettier 文档](https://prettier.io/)
