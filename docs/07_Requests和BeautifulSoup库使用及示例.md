# 7. Requests和BeautifulSoup库使用及示例

## 7.1 什么是Requests和BeautifulSoup

**Requests** 是Python中用于发送HTTP请求的简洁优雅的库，让网络请求变得简单。

**BeautifulSoup** 是一个用于解析HTML和XML文档的Python库，常用于网页爬虫和数据提取。

两者结合可以高效地完成网页数据采集任务。

## 7.2 安装Requests和BeautifulSoup

### 7.2.1 使用pip安装

```bash
# 安装Requests
pip install requests

# 安装BeautifulSoup4
pip install beautifulsoup4

# 安装lxml解析器（推荐）
pip install lxml
```

### 7.2.2 使用conda安装

```bash
# 在Anaconda Prompt中执行
conda install requests beautifulsoup4 lxml
```

## 7.3 Requests库基础操作

### 7.3.1 导入Requests

```python
import requests
```

### 7.3.2 发送GET请求

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

### 7.3.3 发送带参数的GET请求

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

### 7.3.4 发送POST请求

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

### 7.3.5 设置请求头

```python
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'text/html,application/xhtml+xml'
}
response = requests.get('https://httpbin.org/get', headers=headers)
```

### 7.3.6 处理响应

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

### 7.3.7 下载文件

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

### 7.3.8 超时和异常处理

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

## 7.4 BeautifulSoup库基础操作

### 7.4.1 导入BeautifulSoup

```python
from bs4 import BeautifulSoup
```

### 7.4.2 创建BeautifulSoup对象

```python
# 从字符串解析HTML
html_doc = """
<html>
<head><title>测试页面</title></head>
<body>
    <h1>欢迎使用BeautifulSoup</h1>
    <p class="content">这是第一段内容</p>
    <p class="content">这是第二段内容</p>
    <a href="https://example.com" id="link1">链接1</a>
    <a href="https://example.org" id="link2">链接2</a>
</body>
</html>
"""

# 使用html.parser解析器
soup = BeautifulSoup(html_doc, 'html.parser')

# 或使用lxml解析器（更快）
soup = BeautifulSoup(html_doc, 'lxml')

# 美化输出
print(soup.prettify())
```

### 7.4.3 遍历文档树

```python
soup = BeautifulSoup(html_doc, 'html.parser')

# 获取标题标签
print("标题标签:", soup.title)

# 获取标题文本
print("标题文本:", soup.title.string)

# 获取body标签
print("body:", soup.body)

# 获取第一个p标签
print("第一个p标签:", soup.p)

# 获取标签的属性
print("a标签的href:", soup.a['href'])
print("a标签的id:", soup.a.get('id'))

# 获取标签的所有属性
print("a标签的所有属性:", soup.a.attrs)
```

### 7.4.4 搜索文档树 - find()和find_all()

```python
soup = BeautifulSoup(html_doc, 'html.parser')

# find_all() 查找所有匹配的标签
all_p = soup.find_all('p')
print("所有p标签:", all_p)

# find() 查找第一个匹配的标签
first_p = soup.find('p')
print("第一个p标签:", first_p)

# 按属性查找
link1 = soup.find_all('a', id='link1')
print("id为link1的a标签:", link1)

# 按class查找（注意class_，因为class是Python关键字）
content_p = soup.find_all('p', class_='content')
print("class为content的p标签:", content_p)

# 使用多个属性查找
specific_link = soup.find_all('a', href='https://example.com', id='link1')
print("特定链接:", specific_link)
```

### 7.4.5 CSS选择器

```python
soup = BeautifulSoup(html_doc, 'html.parser')

# 通过标签选择
print(soup.select('title'))

# 通过类选择
print(soup.select('.content'))

# 通过id选择
print(soup.select('#link1'))

# 通过属性选择
print(soup.select('a[href="https://example.com"]'))

# 子元素选择
print(soup.select('body > p'))

# 后代元素选择
print(soup.select('body a'))
```

### 7.4.6 获取文本内容

```python
soup = BeautifulSoup(html_doc, 'html.parser')

# 获取单个标签的文本
print(soup.h1.string)

# 获取所有文本（包括子标签）
print(soup.get_text())

# 遍历获取多个标签的文本
for p in soup.find_all('p'):
    print(p.get_text())
```

### 7.4.7 遍历兄弟节点和父节点

```python
soup = BeautifulSoup(html_doc, 'html.parser')

first_p = soup.p

# 下一个兄弟节点
print("下一个兄弟:", first_p.next_sibling)

# 上一个兄弟节点
print("上一个兄弟:", first_p.previous_sibling)

# 父节点
print("父节点:", first_p.parent.name)

# 所有父节点
for parent in first_p.parents:
    print(parent.name)
```

## 7.5 Requests + BeautifulSoup实战示例

### 7.5.1 示例1：获取网页标题

```python
import requests
from bs4 import BeautifulSoup

def get_page_title(url):
    try:
        # 发送请求
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()  # 检查请求是否成功
        
        # 解析HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 获取标题
        title = soup.title.string if soup.title else '无标题'
        return title
    except Exception as e:
        return f"获取失败: {e}"

# 测试
url = 'https://httpbin.org/html'
title = get_page_title(url)
print(f"网页标题: {title}")
```

### 7.5.2 示例2：提取网页所有链接

```python
import requests
from bs4 import BeautifulSoup

def extract_links(url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        links = []
        for a_tag in soup.find_all('a', href=True):
            link = {
                'text': a_tag.get_text(strip=True),
                'url': a_tag['href']
            }
            links.append(link)
        
        return links
    except Exception as e:
        print(f"提取链接失败: {e}")
        return []

# 测试
url = 'https://httpbin.org/html'
links = extract_links(url)
print(f"找到 {len(links)} 个链接:")
for i, link in enumerate(links[:10], 1):  # 只显示前10个
    print(f"{i}. {link['text']} -> {link['url']}")
```

### 7.5.3 示例3：提取表格数据

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd

def extract_table(url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 找到第一个表格
        table = soup.find('table')
        if not table:
            return None
        
        # 提取表头
        headers = []
        for th in table.find_all('th'):
            headers.append(th.get_text(strip=True))
        
        # 提取数据行
        data = []
        for row in table.find_all('tr'):
            cells = row.find_all(['td', 'th'])
            row_data = [cell.get_text(strip=True) for cell in cells]
            if row_data:
                data.append(row_data)
        
        # 创建DataFrame
        df = pd.DataFrame(data[1:], columns=data[0] if headers else None)
        return df
    except Exception as e:
        print(f"提取表格失败: {e}")
        return None

# 使用示例HTML进行测试
html_content = """
<table>
    <tr><th>姓名</th><th>年龄</th><th>城市</th></tr>
    <tr><td>张三</td><td>25</td><td>北京</td></tr>
    <tr><td>李四</td><td>30</td><td>上海</td></tr>
    <tr><td>王五</td><td>28</td><td>广州</td></tr>
</table>
"""
soup = BeautifulSoup(html_content, 'html.parser')
table = soup.find('table')

# 提取表格数据
data = []
for row in table.find_all('tr'):
    cells = row.find_all(['td', 'th'])
    row_data = [cell.get_text(strip=True) for cell in cells]
    data.append(row_data)

df = pd.DataFrame(data[1:], columns=data[0])
print("表格数据:")
print(df)
```

### 7.5.4 示例4：爬取新闻标题列表

```python
import requests
from bs4 import BeautifulSoup
import time

def scrape_news():
    # 使用httpbin的示例HTML
    url = 'https://httpbin.org/html'
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 提取所有h1-h3标题
        news_list = []
        for i, heading in enumerate(soup.find_all(['h1', 'h2', 'h3']), 1):
            news = {
                'id': i,
                'title': heading.get_text(strip=True),
                'level': heading.name
            }
            news_list.append(news)
        
        return news_list
    except Exception as e:
        print(f"爬取失败: {e}")
        return []

# 执行爬取
news = scrape_news()
print(f"共找到 {len(news)} 条新闻标题:")
for item in news:
    print(f"[{item['level']}] {item['title']}")
    time.sleep(0.1)  # 简单的延迟
```

## 7.6 高级技巧和注意事项

### 7.6.1 Session保持会话

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

### 7.6.2 使用代理

```python
import requests

proxies = {
    'http': 'http://127.0.0.1:8080',
    'https': 'https://127.0.0.1:8080'
}

response = requests.get('https://httpbin.org/get', proxies=proxies)
```

### 7.6.3 注意事项

1. **遵守robots.txt**：爬取前查看网站的robots.txt，了解爬取规则
2. **设置合理的请求间隔**：避免给服务器造成压力
3. **伪装User-Agent**：避免被识别为爬虫
4. **异常处理**：网络请求可能失败，做好异常处理
5. **法律合规**：确保爬取行为符合法律法规
