# 2. Anaconda安装使用

## 2.1 什么是Anaconda

Anaconda是一个开源的Python和R编程语言的发行版，专门用于数据科学和机器学习。它包含了conda（一个强大的包管理器和环境管理器）以及1500多个常用的数据科学包。

**重要说明**：Anaconda已经包含了Python，所以如果您安装了Anaconda，就不需要单独安装Python了。

## 2.2 Anaconda下载与安装

### 2.2.1 下载Anaconda

1. 打开浏览器，访问 Anaconda 官网：https://www.anaconda.com
2. 点击 "Download" 按钮
3. 选择 Windows 版本（64-Bit Graphical Installer）
4. 等待下载完成

### 2.2.2 安装步骤

1. 双击下载的安装文件（如 Anaconda3-2024.xx-Windows-x86_64.exe）
2. 点击 "Next" 继续
3. 阅读许可协议，勾选 "I Agree"，点击 "Next"
4. 选择 "Just for me"（推荐），点击 "Next"
5. 选择安装路径（默认即可），点击 "Next"
6. **重要**：勾选 "Add Anaconda to my PATH environment variable"（虽然官方不推荐，但对新手更方便）
7. 勾选 "Register Anaconda as my default Python 3.x"
8. 点击 "Install" 开始安装
9. 等待安装完成，点击 "Finish"

### 2.3 Anaconda常用命令

#### 2.3.1 打开Anaconda Prompt

- 按 `Win` 键，搜索 "Anaconda Prompt"
- 点击打开

#### 2.3.2 管理conda环境

```bash
# 查看conda版本
conda --version

# 更新conda
conda update conda

# 创建新环境（Python 3.9版本，环境名为ai_env）
conda create -n ai_env python=3.9

# 激活环境
conda activate ai_env

# 退出当前环境
conda deactivate

# 查看所有环境
conda env list

# 删除环境
conda remove -n ai_env --all
```

#### 2.3.3 管理包（安装/卸载/更新）

```bash
# 安装包
conda install numpy
conda install pandas

# 安装指定版本
conda install numpy=1.24.0

# 用pip安装（conda没有的包）
pip install some-package

# 查看已安装的包
conda list

# 更新包
conda update numpy

# 更新所有包
conda update --all

# 卸载包
conda remove numpy
```

#### 2.3.4 导出/导入环境

```bash
# 导出环境配置到文件
conda env export > environment.yml

# 从文件创建环境
conda env create -f environment.yml
```

## 2.4 Jupyter Notebook使用

### 2.4.1 启动Jupyter Notebook

```bash
# 激活环境后
jupyter notebook
```

或者：

1. 按 `Win` 键，搜索 "Jupyter Notebook"
2. 点击打开，会自动在浏览器中打开

### 2.4.2 Jupyter Notebook基本操作

1. **创建新笔记本**：点击右上角 "New" → 选择 "Python 3"
2. **单元格类型**：
   - Code：代码单元格
   - Markdown：文本单元格（用于写说明）
3. **运行单元格**：
   - 按 `Shift + Enter`：运行并跳到下一个单元格
   - 按 `Ctrl + Enter`：运行当前单元格
4. **添加单元格**：点击 "+" 按钮或按 `Esc` 然后按 `B`（在下方添加）
5. **删除单元格**：按 `Esc` 然后按 `D` 两次

## 2.5 选择使用Python还是Anaconda

### 2.5.1 初学者建议

- **仅学习Python基础**：可以只安装Python
- **进行数据分析或机器学习**：强烈建议安装Anaconda，因为它包含了所有必要的库

### 2.5.2 已安装Python的用户

如果您已经单独安装了Python，再安装Anaconda不会有冲突，因为：
1. Anaconda会在自己的目录中安装Python
2. 可以通过环境变量来控制使用哪个Python版本
3. 可以在Anaconda中创建不同版本的Python环境