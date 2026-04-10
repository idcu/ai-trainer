# 1. Python基础

## 1.1 什么是Python

Python是一种简单易学、功能强大的编程语言。它具有高效的高级数据结构和简单有效的面向对象编程方法。Python语法简洁清晰，易于学习，广泛应用于人工智能、数据分析、Web开发等领域。

## 1.2 Python的安装

### 1.2.1 下载Python

1. 打开浏览器，访问Python官方网站：https://www.python.org
2. 点击 "Downloads" 导航栏
3. 选择 "Windows" 版本
4. 下载最新的Python 3.x版本（推荐3.9或更高版本）

### 1.2.2 安装步骤

1. 双击下载的安装文件（如 python-3.12.0-amd64.exe）
2. **重要**：勾选 "Add Python 3.x to PATH"（将Python添加到环境变量）
3. 点击 "Install Now" 开始安装
4. 等待安装完成，点击 "Close"

### 1.2.3 验证安装

1. 按 `Win + R` 键，输入 "cmd" 打开命令提示符
2. 输入以下命令并按回车：
   ```bash
   python --version
   ```
3. 如果显示Python版本号（如 Python 3.12.0），说明安装成功
4. 输入以下命令并按回车：
   ```bash
   pip --version
   ```
5. 如果显示pip版本号，说明包管理器也安装成功

## 1.3 Python基本语法

### 1.3.1 变量与数据类型

```python
# 变量定义
name = "张三"          # 字符串
age = 25               # 整数
height = 1.75          # 浮点数
is_student = True      # 布尔值

# 打印变量
print(name)
print(age)
print(height)
print(is_student)

# 查看数据类型
print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
```

### 1.3.2 print 函数的使用

print 是 Python 中最常用的函数之一，用于向控制台输出信息。

```python
# 1. 基本用法
print("Hello, World!")
print(123)
print(3.14)
print(True)

# 2. 打印多个值（用逗号分隔）
print("姓名:", "张三", "年龄:", 25)
# 输出：姓名: 张三 年龄: 25

# 3. 字符串拼接
name = "李四"
age = 22
print("姓名: " + name + ", 年龄: " + str(age))
# 输出：姓名: 李四, 年龄: 22

# 4. 格式化字符串 - % 方式
print("姓名: %s, 年龄: %d" % ("王五", 28))
# 输出：姓名: 王五, 年龄: 28

# 5. 格式化字符串 - format() 方法
print("姓名: {}, 年龄: {}".format("赵六", 30))
print("姓名: {0}, 年龄: {1}, 姓名重复: {0}".format("钱七", 26))
print("姓名: {name}, 年龄: {age}".format(name="孙八", age=24))

# 6. f-string（推荐，Python 3.6+）
name = "周九"
age = 27
print(f"姓名: {name}, 年龄: {age}")
print(f"明年年龄: {age + 1}")

# 7. 控制打印分隔符 - sep 参数
print("苹果", "香蕉", "橙子", sep=", ")
# 输出：苹果, 香蕉, 橙子

print("A", "B", "C", sep=" | ")
# 输出：A | B | C

# 8. 控制打印结束符 - end 参数
print("第一行", end=" ")
print("第二行", end="")
print("第三行")
# 输出：第一行 第二行第三行

# 9. 打印到文件
with open("output.txt", "w", encoding="utf-8") as f:
    print("这是写入文件的内容", file=f)

# 10. 打印特殊字符
print("换行符：\n第一行\n第二行")
print("制表符：\t列1\t列2\t列3")
print("双引号：\" 单引号：\' 反斜杠：\\")

# 11. 原始字符串（不转义）
print(r"C:\Users\Desktop\file.txt")
# 输出：C:\Users\Desktop\file.txt

# 12. 打印多行文本（三引号）
print("""
这是第一行
这是第二行
这是第三行
""")

# 13. 打印列表、字典等复杂数据
fruits = ["苹果", "香蕉", "橙子"]
print(fruits)

student = {"name": "吴十", "age": 23, "grade": "大二"}
print(student)

# 14. 数字格式化
pi = 3.1415926
print(f"圆周率保留2位小数：{pi:.2f}")
print(f"圆周率保留4位小数：{pi:.4f}")

# 百分比显示
score = 0.85
print(f"正确率：{score:.1%}")
# 输出：正确率：85.0%

# 千分位分隔符
number = 1234567.89
print(f"金额：{number:,.2f}")
# 输出：金额：1,234,567.89
```

### 1.3.3 列表（List）

```python
# 创建列表
fruits = ["苹果", "香蕉", "橙子", "葡萄"]

# 访问列表元素
print(fruits[0])       # 苹果
print(fruits[-1])      # 葡萄

# 添加元素
fruits.append("西瓜")

# 删除元素
fruits.remove("香蕉")

# 列表切片
print(fruits[1:3])     # ["橙子", "葡萄"]

# 列表长度
print(len(fruits))
```

### 1.3.4 字典（Dictionary）

```python
# 创建字典
student = {
    "name": "李四",
    "age": 22,
    "major": "计算机科学"
}

# 访问字典值
print(student["name"])         # 李四
print(student.get("age"))      # 22

# 添加键值对
student["grade"] = "大三"

# 修改值
student["age"] = 23

# 遍历字典
for key, value in student.items():
    print(f"{key}: {value}")
```

### 1.3.5 条件语句

```python
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

### 1.3.6 循环语句

```python
# for循环 - 遍历列表
for fruit in ["苹果", "香蕉", "橙子"]:
    print(f"我喜欢吃{fruit}")

# for循环 - 范围
for i in range(1, 6):
    print(f"第{i}次")

# while循环
count = 1
while count <= 5:
    print(f"计数: {count}")
    count += 1
```

### 1.3.7 函数定义

```python
# 定义函数
def greet(name):
    return f"你好, {name}!"

# 调用函数
message = greet("王五")
print(message)

# 带默认参数的函数
def calculate_area(width, height=10):
    return width * height

area1 = calculate_area(5)        # 使用默认高度
area2 = calculate_area(5, 8)     # 自定义高度
print(area1, area2)

# 多个返回值
def get_student_info():
    return "赵六", 20, "数学"

name, age, major = get_student_info()
print(name, age, major)
```

## 1.4 运行Python程序的方式

### 1.4.1 使用IDLE

1. 按 `Win` 键，搜索 "IDLE"
2. 点击打开
3. 在IDLE窗口中输入Python代码
4. 按 `Enter` 键执行

### 1.4.2 使用命令行

1. 创建一个文本文件，将其保存为 `hello.py`
2. 在文件中写入：
   ```python
   print("Hello, Python!")
   ```
3. 打开命令提示符，导航到文件所在目录
4. 输入：
   ```bash
   python hello.py
   ```
5. 按回车执行

### 1.4.3 使用文本编辑器

1. 安装一个文本编辑器，如 VS Code、Sublime Text 或 PyCharm
2. 创建并编辑Python文件
3. 使用编辑器的运行功能执行代码