# 安卓打包指南

本项目提供两种安卓部署方案：

---

## 🎯 快速开始（推荐方案）

### 方案一：PWA（最简单，无需开发环境）

这是最简单的方式，不需要安装Android Studio或配置开发环境。

#### 步骤

1. **将项目部署到Web服务器**
   - 使用 GitHub Pages、Vercel、Netlify 或自己的服务器
   - 上传以下文件：
     - `index_standalone.html` (重命名为 `index.html`)
     - `static/` 文件夹
     - `manifest.json`

2. **在安卓手机上访问**
   - 使用Chrome浏览器打开网站

3. **添加到主屏幕**
   - 点击浏览器菜单（右上角三个点）
   - 选择"添加到主屏幕"或"安装应用"
   - 应用图标将出现在手机主屏幕

#### 优点
- ✅ 无需安装Android Studio
- ✅ 无需配置开发环境
- ✅ 更新方便（只需更新网站）
- ✅ 同时支持iOS和安卓

---

### 方案二：Capacitor打包APK（原生应用）

需要安装Android Studio和开发环境。

#### 前置要求

- **Node.js** (v16或更高版本)
- **Android Studio** (最新版本)
- **JDK 11** 或更高版本
- **Windows PowerShell** (用于运行脚本)

#### 步骤1：环境准备

1. 安装Node.js：https://nodejs.org/
2. 安装Android Studio：https://developer.android.com/studio
3. 安装JDK（Android Studio会自动安装）

#### 步骤2：运行自动化脚本

在项目目录下，右键选择"在终端中打开"或打开PowerShell，然后运行：

```powershell
# 方法1：使用自动化脚本（推荐）
.\build_android.ps1

# 方法2：手动执行（如果脚本有问题）
# 按顺序执行以下命令
```

#### 手动执行步骤（如果脚本有问题）

```powershell
# 1. 设置执行策略（仅当前会话）
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# 2. 复制前端文件
Copy-Item index_standalone.html -Destination index.html -Force

# 3. 安装依赖
npm install

# 4. 初始化Capacitor
npx cap init "题库系统" com.quiz.app --web-dir .

# 5. 添加Android平台
npx cap add android

# 6. 同步资源
npx cap sync android

# 7. 打开Android Studio
npx cap open android
```

#### 步骤3：在Android Studio中构建APK

1. 等待Gradle同步完成（首次可能需要几分钟）
2. 点击菜单：**Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. 构建完成后，点击通知中的"locate"查看APK文件
4. APK文件位置：`android/app/build/outputs/apk/debug/app-debug.apk`

#### 步骤4：安装到手机

1. 将APK文件传输到安卓手机
2. 在手机上打开APK文件
3. 允许安装未知来源应用
4. 完成安装

---

## 📁 项目文件说明

### 两个版本

本项目包含两个版本：

#### 1. 后端版本（需要服务器）
- **文件**：`index.html`
- **需要**：Flask后端服务器
- **数据**：SQLite数据库
- **用途**：桌面浏览器使用

#### 2. 纯前端版本（推荐用于移动端）
- **文件**：`index_standalone.html`
- **需要**：无需后端
- **数据**：内嵌在 `static/js/data.js`
- **用途**：PWA或APK打包

---

## 🔧 更新题目

### 纯前端版本（PWA/APK）

1. 修改 `static/js/data.js` 中的题目数据
2. 重新部署网站（PWA）或重新打包APK

### 后端版本

1. 修改 `data/` 目录下的JSON文件
2. 运行 `python init_db.py` 重新初始化数据库
3. 重启Flask服务器

---

## ❓ 常见问题

### Q: PWA和APK有什么区别？

**A:**
- **PWA**：通过浏览器安装，无需应用商店，更新方便，像普通网站一样
- **APK**：原生应用，性能更好，可以发布到应用商店

### Q: 如何发布到Google Play商店？

**A:** 需要：
1. 申请Google Play开发者账号（$25一次性费用）
2. 生成签名密钥
3. 构建Release版本APK
4. 上传到Google Play Console

### Q: 可以在iOS上使用吗？

**A:** 可以！PWA方案同时支持iOS和安卓，使用Safari浏览器添加到主屏幕即可。

### Q: PowerShell执行策略报错怎么办？

**A:** 在PowerShell中运行：
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
这只会影响当前会话，不会改变系统设置。

### Q: Gradle同步很慢怎么办？

**A:** 
- 首次同步需要下载依赖，需要耐心等待
- 可以配置国内镜像源加速
- 确保网络连接稳定

---

## 📚 相关资源

- Capacitor官方文档：https://capacitorjs.com/docs
- Android Studio下载：https://developer.android.com/studio
- Node.js下载：https://nodejs.org/
