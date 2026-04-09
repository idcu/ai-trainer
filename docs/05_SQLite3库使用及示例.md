# 5. SQLite3库使用及示例

## 5.1 什么是SQLite

SQLite是一个轻量级的嵌入式关系型数据库，它不需要单独的服务器进程，可以直接读取和写入普通的磁盘文件。Python内置了sqlite3模块，无需额外安装即可使用。

## 5.2 SQLite3基本操作

### 5.2.1 导入模块

```python
import sqlite3
```

### 5.2.2 连接数据库

```python
# 连接到数据库（如果不存在则创建）
conn = sqlite3.connect('example.db')

# 创建游标对象
cursor = conn.cursor()

print("数据库连接成功！")
```

### 5.2.3 创建表

```python
# 创建学生表
cursor.execute('''
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER,
        gender TEXT,
        major TEXT,
        score REAL
    )
''')

# 提交更改
conn.commit()

print("表创建成功！")
```

### 5.2.4 插入数据

```python
# 插入单条数据
cursor.execute("INSERT INTO students (name, age, gender, major, score) VALUES (?, ?, ?, ?, ?)",
               ('张三', 22, '男', '计算机科学', 85.5))
conn.commit()

# 插入多条数据
students_data = [
    ('李四', 21, '女', '数学', 92.0),
    ('王五', 23, '男', '物理', 78.5),
    ('赵六', 20, '女', '化学', 88.0),
    ('钱七', 22, '男', '计算机科学', 90.5)
]

cursor.executemany("INSERT INTO students (name, age, gender, major, score) VALUES (?, ?, ?, ?, ?)",
                   students_data)
conn.commit()

print("数据插入成功！")
```

### 5.2.5 查询数据

```python
# 查询所有数据
cursor.execute("SELECT * FROM students")
all_students = cursor.fetchall()
print("所有学生信息：")
for student in all_students:
    print(student)

# 查询指定列
cursor.execute("SELECT name, score FROM students")
name_score = cursor.fetchall()
print("\n学生姓名和成绩：")
for row in name_score:
    print(row)

# 查询单条数据
cursor.execute("SELECT * FROM students WHERE id = ?", (1,))
student = cursor.fetchone()
print("\nID为1的学生：")
print(student)

# 条件查询
cursor.execute("SELECT * FROM students WHERE score > 80")
high_score = cursor.fetchall()
print("\n成绩大于80的学生：")
for student in high_score:
    print(student)

# 多条件查询
cursor.execute("SELECT * FROM students WHERE major = ? AND gender = ?", ('计算机科学', '男'))
cs_male = cursor.fetchall()
print("\n计算机科学专业的男生：")
for student in cs_male:
    print(student)

# 排序查询
cursor.execute("SELECT * FROM students ORDER BY score DESC")
sorted_students = cursor.fetchall()
print("\n按成绩降序排列：")
for student in sorted_students:
    print(student)

# 限制查询数量
cursor.execute("SELECT * FROM students ORDER BY score DESC LIMIT 3")
top3 = cursor.fetchall()
print("\n成绩前3名：")
for student in top3:
    print(student)
```

### 5.2.6 更新数据

```python
# 更新单条数据
cursor.execute("UPDATE students SET score = ? WHERE id = ?", (95.0, 1))
conn.commit()

# 更新多条数据
cursor.execute("UPDATE students SET major = ? WHERE major = ?", ('计算机科学与技术', '计算机科学'))
conn.commit()

# 验证更新
cursor.execute("SELECT * FROM students")
print("更新后的数据：")
for student in cursor.fetchall():
    print(student)
```

### 5.2.7 删除数据

```python
# 删除单条数据
cursor.execute("DELETE FROM students WHERE id = ?", (5,))
conn.commit()

# 删除多条数据
cursor.execute("DELETE FROM students WHERE score < 80")
conn.commit()

# 验证删除
cursor.execute("SELECT * FROM students")
print("删除后的数据：")
for student in cursor.fetchall():
    print(student)
```

## 5.3 高级操作

### 5.3.1 聚合函数

```python
# 计算平均成绩
cursor.execute("SELECT AVG(score) FROM students")
avg_score = cursor.fetchone()[0]
print(f"平均成绩：{avg_score:.2f}")

# 计算最高成绩
cursor.execute("SELECT MAX(score) FROM students")
max_score = cursor.fetchone()[0]
print(f"最高成绩：{max_score}")

# 计算最低成绩
cursor.execute("SELECT MIN(score) FROM students")
min_score = cursor.fetchone()[0]
print(f"最低成绩：{min_score}")

# 计算学生总数
cursor.execute("SELECT COUNT(*) FROM students")
total_students = cursor.fetchone()[0]
print(f"学生总数：{total_students}")

# 按专业分组统计
cursor.execute("SELECT major, AVG(score), COUNT(*) FROM students GROUP BY major")
major_stats = cursor.fetchall()
print("\n各专业统计：")
for row in major_stats:
    print(f"专业：{row[0]}, 平均成绩：{row[1]:.2f}, 人数：{row[2]}")
```

### 5.3.2 使用Pandas读取SQLite数据

```python
import pandas as pd

# 从SQLite读取数据到DataFrame
df = pd.read_sql_query("SELECT * FROM students", conn)
print("从数据库读取的DataFrame：")
print(df)

# 查询特定条件的数据
df_high_score = pd.read_sql_query("SELECT * FROM students WHERE score > 85", conn)
print("\n成绩大于85的学生：")
print(df_high_score)
```

### 5.3.3 使用Pandas写入SQLite数据

```python
# 创建新的DataFrame
new_data = {
    'name': ['孙八', '周九'],
    'age': [21, 24],
    'gender': ['男', '女'],
    'major': ['生物', '英语'],
    'score': [82.5, 91.0]
}
df_new = pd.DataFrame(new_data)

# 将DataFrame写入SQLite
df_new.to_sql('students', conn, if_exists='append', index=False)
conn.commit()

# 验证写入
cursor.execute("SELECT * FROM students")
print("添加新数据后：")
for student in cursor.fetchall():
    print(student)
```

## 5.4 完整示例：学生成绩管理系统

```python
import sqlite3
import pandas as pd

class StudentManager:
    def __init__(self, db_name='student_management.db'):
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()
        self.create_table()
    
    def create_table(self):
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                age INTEGER,
                gender TEXT,
                class_name TEXT,
                chinese REAL,
                math REAL,
                english REAL
            )
        ''')
        self.conn.commit()
    
    def add_student(self, name, age, gender, class_name, chinese, math, english):
        self.cursor.execute('''
            INSERT INTO students (name, age, gender, class_name, chinese, math, english)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (name, age, gender, class_name, chinese, math, english))
        self.conn.commit()
        print(f"学生 {name} 添加成功！")
    
    def view_all_students(self):
        df = pd.read_sql_query("SELECT * FROM students", self.conn)
        if len(df) == 0:
            print("暂无学生数据")
        else:
            df['总分'] = df['chinese'] + df['math'] + df['english']
            df['平均分'] = df['总分'] / 3
            print(df.to_string(index=False))
    
    def search_student(self, name):
        df = pd.read_sql_query(f"SELECT * FROM students WHERE name LIKE '%{name}%'", self.conn)
        if len(df) == 0:
            print(f"未找到姓名包含 '{name}' 的学生")
        else:
            df['总分'] = df['chinese'] + df['math'] + df['english']
            df['平均分'] = df['总分'] / 3
            print(df.to_string(index=False))
    
    def update_student(self, student_id, **kwargs):
        set_clause = ', '.join([f"{k} = ?" for k in kwargs.keys()])
        values = list(kwargs.values()) + [student_id]
        self.cursor.execute(f"UPDATE students SET {set_clause} WHERE id = ?", values)
        self.conn.commit()
        print("学生信息更新成功！")
    
    def delete_student(self, student_id):
        self.cursor.execute("DELETE FROM students WHERE id = ?", (student_id,))
        self.conn.commit()
        print("学生删除成功！")
    
    def get_class_stats(self, class_name):
        df = pd.read_sql_query(f"SELECT * FROM students WHERE class_name = '{class_name}'", self.conn)
        if len(df) == 0:
            print(f"班级 {class_name} 暂无学生数据")
        else:
            print(f"\n=== 班级 {class_name} 统计 ===")
            print(f"人数：{len(df)}")
            print(f"语文平均分：{df['chinese'].mean():.2f}")
            print(f"数学平均分：{df['math'].mean():.2f}")
            print(f"英语平均分：{df['english'].mean():.2f}")
    
    def close(self):
        self.conn.close()
        print("数据库连接已关闭")

# 使用示例
if __name__ == "__main__":
    manager = StudentManager()
    
    # 添加学生
    manager.add_student('张三', 18, '男', '高一(1)班', 85, 92, 78)
    manager.add_student('李四', 17, '女', '高一(1)班', 90, 88, 95)
    manager.add_student('王五', 18, '男', '高一(2)班', 75, 82, 80)
    manager.add_student('赵六', 17, '女', '高一(2)班', 92, 96, 88)
    
    # 查看所有学生
    print("\n=== 所有学生信息 ===")
    manager.view_all_students()
    
    # 搜索学生
    print("\n=== 搜索姓张的学生 ===")
    manager.search_student('张')
    
    # 更新学生信息
    manager.update_student(1, chinese=90)
    
    # 查看班级统计
    manager.get_class_stats('高一(1)班')
    
    # 删除学生
    manager.delete_student(4)
    
    # 查看最终结果
    print("\n=== 最终学生信息 ===")
    manager.view_all_students()
    
    manager.close()
```

## 5.5 关闭数据库连接

```python
# 关闭游标和连接
cursor.close()
conn.close()

print("数据库连接已关闭")
```

## 5.6 SQLite示例

### 5.6.1 示例1：创建产品库存管理系统

```python
import sqlite3

# 连接数据库
conn = sqlite3.connect('inventory.db')
cursor = conn.cursor()

# 创建产品表
cursor.execute('''
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT,
        price REAL,
        stock INTEGER
    )
''')
conn.commit()

# 插入产品数据
products = [
    ('笔记本电脑', '电子产品', 5999.99, 50),
    ('手机', '电子产品', 3999.99, 100),
    ('平板电脑', '电子产品', 2999.99, 30),
    ('鼠标', '电脑配件', 99.99, 200),
    ('键盘', '电脑配件', 199.99, 150)
]
cursor.executemany('''
    INSERT INTO products (name, category, price, stock) VALUES (?, ?, ?, ?)
''', products)
conn.commit()

# 查询所有产品
print("所有产品：")
cursor.execute("SELECT * FROM products")
for product in cursor.fetchall():
    print(product)

# 查询库存低于50的产品
print("\n库存低于50的产品：")
cursor.execute("SELECT * FROM products WHERE stock < 50")
for product in cursor.fetchall():
    print(product)

# 更新产品价格
cursor.execute("UPDATE products SET price = ? WHERE name = ?", (4999.99, '笔记本电脑'))
conn.commit()

# 再次查询笔记本电脑
print("\n更新后的笔记本电脑：")
cursor.execute("SELECT * FROM products WHERE name = '笔记本电脑'")
print(cursor.fetchone())

# 关闭连接
cursor.close()
conn.close()
print("\n数据库操作完成")
```

### 5.6.2 示例2：个人通讯录

```python
import sqlite3

def add_contact(name, phone, email):
    conn = sqlite3.connect('contacts.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)
    ''', (name, phone, email))
    conn.commit()
    conn.close()
    print(f"联系人 {name} 添加成功！")

def view_contacts():
    conn = sqlite3.connect('contacts.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contacts")
    contacts = cursor.fetchall()
    conn.close()
    if contacts:
        print("所有联系人：")
        for contact in contacts:
            print(f"ID: {contact[0]}, 姓名: {contact[1]}, 电话: {contact[2]}, 邮箱: {contact[3]}")
    else:
        print("暂无联系人")

def search_contact(name):
    conn = sqlite3.connect('contacts.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contacts WHERE name LIKE ?", (f"%{name}%",))
    contacts = cursor.fetchall()
    conn.close()
    if contacts:
        print(f"搜索 '{name}' 的结果：")
        for contact in contacts:
            print(f"ID: {contact[0]}, 姓名: {contact[1]}, 电话: {contact[2]}, 邮箱: {contact[3]}")
    else:
        print(f"未找到姓名包含 '{name}' 的联系人")

# 初始化数据库
conn = sqlite3.connect('contacts.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT,
        email TEXT
    )
''')
conn.commit()
conn.close()

# 测试
add_contact('张三', '13812345678', 'zhangsan@example.com')
add_contact('李四', '13987654321', 'lisi@example.com')
add_contact('王五', '13765432198', 'wangwu@example.com')

view_contacts()

search_contact('张')

print("\n通讯录系统测试完成")
```