# 安卓APK打包脚本
# 使用方法: .\build_android.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  题库系统 - 安卓APK打包工具" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 步骤1: 检查Node.js
Write-Host "[1/7] 检查Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js 版本: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js 未安装，请先安装Node.js" -ForegroundColor Red
    exit 1
}

# 步骤2: 复制HTML文件
Write-Host ""
Write-Host "[2/7] 复制前端文件..." -ForegroundColor Yellow
Copy-Item index_standalone.html -Destination index.html -Force
Write-Host "✓ 已复制 index_standalone.html 到 index.html" -ForegroundColor Green

# 步骤3: 检查并安装依赖
Write-Host ""
Write-Host "[3/7] 检查npm依赖..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "正在安装依赖..." -ForegroundColor Yellow
    npm install
    Write-Host "✓ 依赖安装完成" -ForegroundColor Green
} else {
    Write-Host "✓ 依赖已存在" -ForegroundColor Green
}

# 步骤4: 初始化Capacitor
Write-Host ""
Write-Host "[4/7] 初始化Capacitor..." -ForegroundColor Yellow
if (-not (Test-Path "capacitor.config.json")) {
    npx cap init "题库系统" com.quiz.app --web-dir .
    Write-Host "✓ Capacitor初始化完成" -ForegroundColor Green
} else {
    Write-Host "✓ Capacitor已初始化" -ForegroundColor Green
}

# 步骤5: 添加Android平台
Write-Host ""
Write-Host "[5/7] 添加Android平台..." -ForegroundColor Yellow
if (-not (Test-Path "android")) {
    npx cap add android
    Write-Host "✓ Android平台添加完成" -ForegroundColor Green
} else {
    Write-Host "✓ Android平台已存在" -ForegroundColor Green
}

# 步骤6: 同步资源
Write-Host ""
Write-Host "[6/7] 同步Web资源..." -ForegroundColor Yellow
npx cap sync android
Write-Host "✓ 资源同步完成" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  前置步骤完成！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "下一步操作：" -ForegroundColor Yellow
Write-Host "1. 运行以下命令打开Android Studio:" -ForegroundColor White
Write-Host "   npx cap open android" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. 在Android Studio中:" -ForegroundColor White
Write-Host "   - 等待Gradle同步完成" -ForegroundColor White
Write-Host "   - 点击 Build → Build Bundle(s) / APK(s) → Build APK(s)" -ForegroundColor White
Write-Host "   - APK文件位置: android/app/build/outputs/apk/debug/app-debug.apk" -ForegroundColor White
Write-Host ""
