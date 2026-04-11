# 8. Requests库使用及示例

## 8.1 什么是Requests

**Requests** 是Python中用于发送HTTP请求的简洁优雅的库，让网络请求变得简单。

## 8.2 安装Requests

### 8.2.1 使用pip安装

```bash
# 安装Requests
pip install requests
```

### 8.2.2 使用conda安装

```bash
# 在Anaconda Prompt中执行
conda install requests
```

## 8.3 Requests库基础操作

### 8.3.1 导入Requests

```python
import requests
```

### 8.3.2 发送GET请求

```python
# 发送简单的GET请求
response = requests.get('https://httpbin.org/get')

# 查看响应状态码
print("状态码:", response.status_code)

# 查看响应头
print("响应头:", response.headers)

# 查看响应内容（文本）
print("响应内容:", response.text)

# 查看响应内容（JSON）
print("JSON数据:", response.json())
```

### 8.3.3 发送带参数的GET请求

```python
# 通过params参数传递查询字符串
params = {
    'key1': 'value1',
    'key2': 'value2'
}
response = requests.get('https://httpbin.org/get', params=params)

# 查看请求的URL
print("请求URL:", response.url)
```

### 8.3.4 发送POST请求

```python
# 发送表单数据
data = {
    'username': 'admin',
    'password': '123456'
}
response = requests.post('https://httpbin.org/post', data=data)

# 发送JSON数据
json_data = {
    'name': '张三',
    'age': 25
}
response = requests.post('https://httpbin.org/post', json=json_data)
```

### 8.3.5 设置请求头

```python
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'text/html,application/xhtml+xml'
}
response = requests.get('https://httpbin.org/get', headers=headers)
```

### 8.3.6 处理响应

```python
response = requests.get('https://httpbin.org/get')

# 检查请求是否成功（状态码200-399）
if response.ok:
    print("请求成功")

# 自动检测编码
print("编码:", response.encoding)

# 手动设置编码
response.encoding = 'utf-8'

# 获取二进制内容（用于下载文件）
print("二进制内容:", response.content[:100])
```

### 8.3.7 下载文件

```python
# 下载图片
url = 'https://httpbin.org/image/jpeg'
response = requests.get(url)

with open('image.jpg', 'wb') as f:
    f.write(response.content)
print("图片下载完成")

# 大文件分块下载
url = 'https://httpbin.org/stream/100'
response = requests.get(url, stream=True)

with open('large_file.txt', 'wb') as f:
    for chunk in response.iter_content(chunk_size=8192):
        f.write(chunk)
print("大文件下载完成")
```

### 8.3.8 超时和异常处理

```python
try:
    # 设置超时时间（秒）
    response = requests.get('https://httpbin.org/delay/2', timeout=3)
    print("请求成功")
except requests.exceptions.Timeout:
    print("请求超时")
except requests.exceptions.ConnectionError:
    print("连接错误")
except requests.exceptions.RequestException as e:
    print(f"请求异常: {e}")
```

## 8.4 高级技巧和注意事项

### 8.4.1 Session保持会话

```python
import requests

# 创建Session对象
session = requests.Session()

# 设置会话级别的headers
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})

# 登录（示例）
login_data = {
    'username': 'admin',
    'password': '123456'
}
response = session.post('https://httpbin.org/post', data=login_data)

# 后续请求会自动保持cookies
response = session.get('https://httpbin.org/get')
print("已保持会话")
```

### 8.4.2 使用代理

```python
import requests

proxies = {
    'http': 'http://127.0.0.1:8080',
    'https': 'https://127.0.0.1:8080'
}

response = requests.get('https://httpbin.org/get', proxies=proxies)
```

### 8.4.3 注意事项

1. **设置合理的请求间隔**：避免给服务器造成压力
2. **伪装User-Agent**：避免被识别为爬虫
3. **异常处理**：网络请求可能失败，做好异常处理
4. **法律合规**：确保爬取行为符合法律法规
