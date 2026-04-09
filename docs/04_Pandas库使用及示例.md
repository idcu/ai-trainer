# 4. Pandas库使用及示例

## 4.1 什么是Pandas

Pandas是Python中用于数据分析和处理的强大库。它提供了两种主要的数据结构：Series（一维）和DataFrame（二维），可以方便地处理各种数据格式，包括CSV、Excel、SQL数据库等。

## 4.2 安装Pandas

### 4.2.1 使用pip安装

```bash
# 在命令提示符中执行
pip install pandas

# 如果需要处理Excel文件（.xlsx格式），还需要安装openpyxl
pip install openpyxl

# 如果需要处理旧版Excel文件（.xls格式），还需要安装xlrd
pip install xlrd

# 如果需要数据可视化，还需要安装matplotlib
pip install matplotlib
```

### 4.2.2 使用conda安装

```bash
# 在Anaconda Prompt中执行
conda install pandas
conda install openpyxl
conda install xlrd
conda install matplotlib
```

## 4.3 Pandas基础操作

### 4.3.1 导入Pandas

```python
import pandas as pd
import numpy as np
```

### 4.3.2 创建Series

```python
# 从列表创建Series
s1 = pd.Series([1, 3, 5, 7, 9])
print(s1)

# 带索引的Series
s2 = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])
print(s2)

# 从字典创建Series
data = {'苹果': 5, '香蕉': 3, '橙子': 8, '葡萄': 2}
s3 = pd.Series(data)
print(s3)

# 访问Series元素
print(s2['a'])      # 通过索引
print(s2[0])        # 通过位置
print(s2[['a', 'c']])  # 多个索引
```

### 4.3.3 创建DataFrame

```python
# 从字典创建DataFrame
data = {
    '姓名': ['张三', '李四', '王五', '赵六'],
    '年龄': [25, 22, 28, 24],
    '城市': ['北京', '上海', '广州', '深圳'],
    '成绩': [85, 92, 78, 88]
}
df = pd.DataFrame(data)
print(df)

# 从列表的列表创建DataFrame
data_list = [
    ['张三', 25, '北京', 85],
    ['李四', 22, '上海', 92],
    ['王五', 28, '广州', 78]
]
df2 = pd.DataFrame(data_list, columns=['姓名', '年龄', '城市', '成绩'])
print(df2)

# 设置索引
df_with_index = df.set_index('姓名')
print(df_with_index)
```

### 4.3.4 DataFrame基本信息

```python
# 查看前几行
print(df.head())       # 前5行
print(df.head(2))      # 前2行

# 查看后几行
print(df.tail())       # 后5行
print(df.tail(2))      # 后2行

# 查看基本信息
print(df.info())

# 查看统计信息
print(df.describe())

# 查看列名
print(df.columns)

# 查看索引
print(df.index)

# 查看形状
print(df.shape)  # (行数, 列数)
```

### 4.3.5 数据选择和索引

```python
# 选择列
print(df['姓名'])        # 选择一列
print(df[['姓名', '成绩']])  # 选择多列

# 按位置选择（iloc）
print(df.iloc[0])       # 第一行
print(df.iloc[0:2])     # 前两行
print(df.iloc[0, 0])    # 第一行第一列

# 按标签选择（loc）
df_with_name = df.set_index('姓名')
print(df_with_name.loc['张三'])
print(df_with_name.loc['张三':'王五'])  # 标签切片
print(df_with_name.loc['张三', '成绩'])

# 布尔索引
print(df[df['成绩'] > 80])  # 成绩大于80的行
print(df[(df['年龄'] > 23) & (df['成绩'] > 85)])  # 多个条件
```

### 4.3.6 数据操作

```python
# 添加新列
df['性别'] = ['男', '女', '男', '女']
print(df)

# 修改列
df['成绩'] = df['成绩'] + 5  # 所有成绩加5
print(df)

# 删除列
df = df.drop('性别', axis=1)
print(df)

# 添加行
new_row = pd.DataFrame({'姓名': ['钱七'], '年龄': [26], '城市': ['杭州'], '成绩': [90]})
df = pd.concat([df, new_row], ignore_index=True)
print(df)

# 删除行
df = df.drop(4, axis=0)  # 删除索引为4的行
print(df)

# 排序
print(df.sort_values('成绩', ascending=False))  # 按成绩降序
print(df.sort_values(['年龄', '成绩']))  # 先按年龄，再按成绩
```

### 4.3.7 缺失值处理

```python
# 创建有缺失值的数据
data_missing = {
    '姓名': ['张三', '李四', '王五', None],
    '年龄': [25, None, 28, 24],
    '成绩': [85, 92, None, 88]
}
df_missing = pd.DataFrame(data_missing)
print(df_missing)

# 检查缺失值
print(df_missing.isnull())
print(df_missing.isnull().sum())  # 每列缺失值数量

# 删除缺失值
df_dropped = df_missing.dropna()  # 删除包含缺失值的行
print(df_dropped)

df_dropped_col = df_missing.dropna(axis=1)  # 删除包含缺失值的列
print(df_dropped_col)

# 填充缺失值
df_filled = df_missing.fillna(0)  # 用0填充
print(df_filled)

df_filled_mean = df_missing['年龄'].fillna(df_missing['年龄'].mean())  # 用平均值填充
print(df_filled_mean)

df_filled_ffill = df_missing.fillna(method='ffill')  # 前向填充
print(df_filled_ffill)
```

### 4.3.8 分组和聚合

```python
# 创建示例数据
data_group = {
    '班级': ['一班', '一班', '二班', '二班', '一班', '二班'],
    '姓名': ['张三', '李四', '王五', '赵六', '钱七', '孙八'],
    '科目': ['数学', '语文', '数学', '语文', '数学', '语文'],
    '成绩': [85, 92, 78, 88, 90, 85]
}
df_group = pd.DataFrame(data_group)
print(df_group)

# 按班级分组，计算平均成绩
print(df_group.groupby('班级')['成绩'].mean())

# 按班级和科目分组
print(df_group.groupby(['班级', '科目'])['成绩'].agg(['mean', 'sum', 'count']))

# 多个聚合函数
print(df_group.groupby('班级').agg({
    '成绩': ['mean', 'max', 'min'],
    '姓名': 'count'
}))
```

## 4.4 文件读写操作

### 4.4.1 读取CSV文件

```python
# 读取CSV文件
df_csv = pd.read_csv('data.csv')
print(df_csv)

# 指定分隔符
df_csv = pd.read_csv('data.csv', sep=',')

# 指定编码（中文常见问题）
df_csv = pd.read_csv('data.csv', encoding='utf-8')
# 或
df_csv = pd.read_csv('data.csv', encoding='gbk')

# 读取部分行
df_csv = pd.read_csv('data.csv', nrows=100)

# 跳过前几行
df_csv = pd.read_csv('data.csv', skiprows=2)
```

### 4.4.2 写入CSV文件

```python
# 写入CSV文件
df.to_csv('output.csv', index=False)  # index=False 不保存索引

# 指定编码
df.to_csv('output.csv', index=False, encoding='utf-8-sig')  # utf-8-sig适合Excel打开
```

### 4.4.3 读取TXT文件

```python
# 读取TXT文件
df_txt = pd.read_table('data.txt')
print(df_txt)

# 或使用read_csv
df_txt = pd.read_csv('data.txt', sep='\t')  # tab分隔
df_txt = pd.read_csv('data.txt', sep='|')    # 竖线分隔
df_txt = pd.read_csv('data.txt', sep='\s+')  # 空格分隔
```

### 4.4.4 写入TXT文件

```python
# 写入TXT文件
df.to_csv('output.txt', index=False, sep='\t')
```

### 4.4.5 读取Excel文件（.xls, .xlsx）

**注意**：
- 读取.xlsx格式文件需要安装openpyxl库
- 读取.xls格式文件需要安装xlrd库
- 如果还未安装，请参考4.2节的安装说明

```python
# 读取Excel文件（.xlsx格式）
df_excel = pd.read_excel('data.xlsx')
print(df_excel)

# 读取Excel文件（.xls格式）
df_excel_xls = pd.read_excel('data.xls')
print(df_excel_xls)

# 读取指定工作表
df_excel = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# 读取多个工作表
excel_file = pd.ExcelFile('data.xlsx')
print(excel_file.sheet_names)  # 查看所有工作表名
df_sheet1 = pd.read_excel(excel_file, 'Sheet1')
df_sheet2 = pd.read_excel(excel_file, 'Sheet2')
```

### 4.4.6 写入Excel文件

```python
# 写入Excel文件
df.to_excel('output.xlsx', index=False, sheet_name='数据')

# 写入多个工作表
with pd.ExcelWriter('output_multi.xlsx') as writer:
    df.to_excel(writer, sheet_name='数据', index=False)
    df_group.to_excel(writer, sheet_name='分组数据', index=False)
```

## 4.5 数据可视化（配合Matplotlib）

**注意**：在使用matplotlib之前，需要先安装该库。如果还未安装，请参考4.2节的安装说明。

```python
import matplotlib.pyplot as plt

# 设置中文字体（解决中文显示问题）
plt.rcParams['font.sans-serif'] = ['SimHei']  # 用来正常显示中文标签
plt.rcParams['axes.unicode_minus'] = False    # 用来正常显示负号

# 创建示例数据
data_plot = {
    '月份': ['1月', '2月', '3月', '4月', '5月', '6月'],
    '销量': [120, 150, 130, 180, 160, 200]
}
df_plot = pd.DataFrame(data_plot)

# 折线图
df_plot.plot(x='月份', y='销量', kind='line', title='月度销量趋势', marker='o')
plt.show()

# 柱状图
df_plot.plot(x='月份', y='销量', kind='bar', title='月度销量对比', color='skyblue')
plt.show()

# 饼图
df_plot.set_index('月份')['销量'].plot(kind='pie', title='销量占比', autopct='%1.1f%%')
plt.show()

# 散点图（需要更多数据）
data_scatter = {
    '广告投入': [10, 20, 15, 25, 30, 18, 22, 28],
    '销售额': [50, 90, 70, 110, 130, 80, 95, 120]
}
df_scatter = pd.DataFrame(data_scatter)
df_scatter.plot(x='广告投入', y='销售额', kind='scatter', title='广告投入与销售额关系')
plt.show()
```

## 4.6 Pandas示例

### 4.6.1 示例1：数据分析

```python
# 读取销售数据
df_sales = pd.read_csv('sales.csv')

# 查看数据基本信息
print(df_sales.info())

# 计算总销售额
print(f"总销售额: {df_sales['销售额'].sum():.2f}")

# 按产品类别分组计算销售额
sales_by_category = df_sales.groupby('产品类别')['销售额'].sum()
print("\n按产品类别销售额:")
print(sales_by_category)

# 按月份计算平均销售额
df_sales['月份'] = pd.to_datetime(df_sales['日期']).dt.month
sales_by_month = df_sales.groupby('月份')['销售额'].mean()
print("\n按月平均销售额:")
print(sales_by_month)

# 找出销售额最高的前5个产品
top5_products = df_sales.groupby('产品名称')['销售额'].sum().sort_values(ascending=False).head(5)
print("\n销售额前5的产品:")
print(top5_products)
```

### 4.6.2 示例2：数据清洗

```python
# 读取含有缺失值的数据
df = pd.read_csv('dirty_data.csv')

# 查看缺失值情况
print("缺失值情况:")
print(df.isnull().sum())

# 填充缺失值
df['年龄'] = df['年龄'].fillna(df['年龄'].mean())
df['性别'] = df['性别'].fillna('未知')
df['收入'] = df['收入'].fillna(0)

# 去除重复行
df = df.drop_duplicates()

# 转换数据类型
df['年龄'] = df['年龄'].astype(int)
df['收入'] = df['收入'].astype(float)

# 保存清洗后的数据
df.to_csv('cleaned_data.csv', index=False, encoding='utf-8-sig')
print("\n数据清洗完成，已保存到 cleaned_data.csv")
```

### 4.6.3 示例3：多格式文件处理

```python
# 1. 读取CSV文件
df_csv = pd.read_csv('data.csv')
print("CSV文件数据:")
print(df_csv.head())

# 2. 读取TXT文件
df_txt = pd.read_csv('data.txt', sep='\t')
print("\nTXT文件数据:")
print(df_txt.head())

# 3. 读取Excel文件
df_excel = pd.read_excel('data.xlsx')
print("\nExcel文件数据:")
print(df_excel.head())

# 4. 合并数据
merged_df = pd.concat([df_csv, df_txt, df_excel], ignore_index=True)
print("\n合并后的数据:")
print(merged_df.head())

# 5. 保存为不同格式
merged_df.to_csv('merged_data.csv', index=False, encoding='utf-8-sig')
merged_df.to_excel('merged_data.xlsx', index=False)
merged_df.to_csv('merged_data.txt', index=False, sep='\t')

print("\n数据已保存为多种格式")
```