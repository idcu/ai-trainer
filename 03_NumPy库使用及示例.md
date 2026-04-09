# 3. NumPy库使用及示例

## 3.1 什么是NumPy

NumPy（Numerical Python）是Python中用于科学计算的基础库。它提供了高性能的多维数组对象（ndarray）和处理这些数组的工具，是数据分析、机器学习等领域的基石。

## 3.2 安装NumPy

### 3.2.1 使用pip安装

```bash
# 在命令提示符中执行
pip install numpy
```

### 3.2.2 使用conda安装

```bash
# 在Anaconda Prompt中执行
conda install numpy
```

## 3.3 NumPy基础操作

### 3.3.1 导入NumPy

```python
import numpy as np
```

### 3.3.2 创建数组

```python
# 从列表创建数组
arr1 = np.array([1, 2, 3, 4, 5])
print(arr1)

# 创建二维数组
arr2 = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2)

# 创建全0数组
zeros_arr = np.zeros((3, 4))
print(zeros_arr)

# 创建全1数组
ones_arr = np.ones((2, 3))
print(ones_arr)

# 创建指定范围的数组
range_arr = np.arange(0, 10, 2)  # 从0到10，步长2
print(range_arr)

# 创建等差数列
linspace_arr = np.linspace(0, 1, 5)  # 0到1之间5个等间距的数
print(linspace_arr)

# 创建随机数组
random_arr = np.random.rand(3, 3)  # 0到1之间的随机数
print(random_arr)

# 创建随机整数数组
randint_arr = np.random.randint(0, 10, size=(2, 3))  # 0到9之间的随机整数
print(randint_arr)
```

### 3.3.3 数组属性

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])

# 数组形状
print("形状:", arr.shape)  # (2, 3)

# 数组维度
print("维度:", arr.ndim)   # 2

# 数组元素个数
print("元素个数:", arr.size)  # 6

# 数组数据类型
print("数据类型:", arr.dtype)  # int64 或 int32
```

### 3.3.4 数组索引和切片

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])

# 索引
print(arr[0])   # 1
print(arr[-1])  # 9

# 切片
print(arr[1:5])     # [2, 3, 4, 5]
print(arr[:5])      # [1, 2, 3, 4, 5]
print(arr[5:])      # [6, 7, 8, 9]
print(arr[::2])     # [1, 3, 5, 7, 9]

# 二维数组
arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# 访问元素
print(arr2d[0, 0])  # 1
print(arr2d[1, 2])  # 6

# 切片
print(arr2d[0:2, 1:3])
# [[2, 3]
#  [5, 6]]

# 布尔索引
mask = arr > 5
print(arr[mask])  # [6, 7, 8, 9]
```

### 3.3.5 数组运算

```python
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# 逐元素运算
print(a + b)  # [ 6,  8, 10, 12]
print(a - b)  # [-4, -4, -4, -4]
print(a * b)  # [ 5, 12, 21, 32]
print(a / b)  # [0.2, 0.333..., 0.428..., 0.5]

# 标量运算
print(a * 2)   # [2, 4, 6, 8]
print(a + 10)  # [11, 12, 13, 14]

# 数学函数
print(np.sqrt(a))   # 平方根
print(np.exp(a))    # 指数函数
print(np.sin(a))    # 正弦函数
print(np.log(a))    # 自然对数
```

### 3.3.6 数组统计方法

```python
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# 求和
print(np.sum(arr))              # 所有元素求和
print(np.sum(arr, axis=0))      # 按列求和
print(np.sum(arr, axis=1))      # 按行求和

# 平均值
print(np.mean(arr))             # 所有元素平均值
print(np.mean(arr, axis=0))     # 按列平均值

# 最大值、最小值
print(np.max(arr))              # 最大值
print(np.min(arr))              # 最小值
print(np.argmax(arr))           # 最大值索引
print(np.argmin(arr))           # 最小值索引

# 标准差、方差
print(np.std(arr))              # 标准差
print(np.var(arr))              # 方差

# 中位数
print(np.median(arr))           # 中位数
```

### 3.3.7 数组形状变换

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

# reshape改变形状
reshaped = arr.reshape(3, 4)
print(reshaped)

# 扁平化
flattened = reshaped.flatten()
print(flattened)

# 转置
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
transposed = arr2d.T
print(transposed)

# 拼接数组
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

# 垂直拼接
v_stack = np.vstack([a, b])
print(v_stack)

# 水平拼接
h_stack = np.hstack([a, b])
print(h_stack)
```

## 3.4 NumPy示例

### 3.4.1 示例1：计算矩阵乘法

```python
# 定义两个矩阵
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# 矩阵乘法
C = np.dot(A, B)
print("矩阵A:")
print(A)
print("\n矩阵B:")
print(B)
print("\n矩阵乘积C:")
print(C)
```

### 3.4.2 示例2：生成随机数据并计算统计信息

```python
# 生成100个0-100之间的随机整数
random_data = np.random.randint(0, 101, size=100)

print("随机数据:", random_data)
print("平均值:", np.mean(random_data))
print("标准差:", np.std(random_data))
print("最大值:", np.max(random_data))
print("最小值:", np.min(random_data))
print("中位数:", np.median(random_data))
```

### 3.4.3 示例3：图像处理基础

```python
# 创建一个3x3的灰度图像（0-255）
image = np.array([
    [0, 50, 100],
    [150, 200, 250],
    [50, 100, 150]
], dtype=np.uint8)

print("原始图像:")
print(image)

# 图像反转（255 - 像素值）
reversed_image = 255 - image
print("\n反转图像:")
print(reversed_image)

# 图像缩放（缩小为原来的一半）
scaled_image = image // 2
print("\n缩放图像:")
print(scaled_image)
```