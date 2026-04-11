# 9. BeautifulSoup库使用及示例

## 9.1 什么是BeautifulSoup

**BeautifulSoup** 是一个用于解析HTML和XML文档的Python库，常用于网页爬虫和数据提取。

## 9.2 安装BeautifulSoup

### 9.2.1 使用pip安装

```bash
# 安装BeautifulSoup4
pip install beautifulsoup4

# 安装lxml解析器（推荐）
pip install lxml
```

### 9.2.2 使用conda安装

```bash
# 在Anaconda Prompt中执行
conda install beautifulsoup4 lxml
```

## 9.3 BeautifulSoup库基础操作

### 9.3.1 导入BeautifulSoup

```python
from bs4 import BeautifulSoup
```

### 9.3.2 创建BeautifulSoup对象

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

### 9.3.3 遍历文档树

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

### 9.3.4 搜索文档树 - find()和find_all()

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

### 9.3.5 CSS选择器

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

### 9.3.6 获取文本内容

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

### 9.3.7 遍历兄弟节点和父节点

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

## 9.4 Requests + BeautifulSoup实战示例

### 9.4.1 示例1：获取网页标题

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

### 9.4.2 示例2：提取网页所有链接

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

### 9.4.3 示例3：提取表格数据

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

### 9.4.4 示例4：爬取新闻标题列表

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

## 9.5 注意事项

1. **遵守robots.txt**：爬取前查看网站的robots.txt，了解爬取规则
2. **设置合理的请求间隔**：避免给服务器造成压力
3. **法律合规**：确保爬取行为符合法律法规
