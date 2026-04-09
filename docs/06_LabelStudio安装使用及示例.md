# 6. Label Studio安装使用及示例

## 6.1 什么是Label Studio

Label Studio是一个开源的数据标注工具，支持多种数据类型的标注，包括文本、图像、音频、视频、时间序列等。它提供了一个直观的Web界面，可以快速部署和使用，适用于机器学习、深度学习项目的数据准备工作。

### 主要特性
- 支持多种数据类型：文本分类、图像标注、语音转录等
- 可自定义标注任务和流程
- 支持团队协作和标注质量控制
- 可导出多种格式的标注数据
- 开源免费，可本地部署

## 6.2 系统要求

- 操作系统：Windows、Linux、macOS
- Python版本：3.8或更高
- 内存：至少8GB，推荐16GB
- 磁盘空间：至少50GB（根据数据量调整）
- 浏览器：推荐使用最新版Google Chrome
- 端口：默认使用8080端口

## 6.3 安装方式

### 6.3.1 使用pip安装（推荐）

#### 步骤1：创建虚拟环境（可选但推荐）

```bash
# Windows
python -m venv label-studio-env
label-studio-env\Scripts\activate

# Linux/macOS
python3 -m venv label-studio-env
source label-studio-env/bin/activate
```

#### 步骤2：安装Label Studio

```bash
# 直接安装
pip install label-studio

# 使用国内镜像源安装（推荐国内用户）
pip install label-studio -i https://pypi.tuna.tsinghua.edu.cn/simple
```

#### 步骤3：验证安装

```bash
# 查看版本
label-studio --version
```

#### 步骤4：启动Label Studio

```bash
# 启动服务
label-studio
```

启动后，浏览器会自动打开 http://localhost:8080

### 6.3.2 使用Docker安装

#### 前提条件
确保已安装Docker。

#### 启动Label Studio

```bash
# Linux/macOS
docker run -it -p 8080:8080 -v $(pwd)/mydata:/label-studio/data heartexlabs/label-studio:latest

# Windows PowerShell
docker run -it -p 8080:8080 -v ${PWD}/mydata:/label-studio/data heartexlabs/label-studio:latest

# Windows CMD
docker run -it -p 8080:8080 -v %cd%/mydata:/label-studio/data heartexlabs/label-studio:latest
```

### 6.3.3 使用Anaconda安装

```bash
# 创建conda环境
conda create --name label-studio
conda activate label-studio

# 安装Label Studio
pip install label-studio

# 启动服务
label-studio
```

## 6.4 基本使用流程

### 6.4.1 首次使用

1. 打开浏览器访问 http://localhost:8080
2. 注册账号（首次使用需要创建管理员账号）
3. 登录后进入主界面

### 6.4.2 创建项目

1. 点击 "Create Project" 按钮
2. 填写项目信息：
   - Project Name：项目名称
   - Description：项目描述（可选）
3. 点击 "Save" 创建项目

### 6.4.3 导入数据

1. 进入项目后，点击 "Data Import" 标签
2. 选择导入方式：
   - 上传本地文件
   - 从URL导入
   - 从云存储导入
3. 支持的数据格式：
   - 图片：JPG、PNG、GIF等
   - 文本：TXT、CSV、JSON等
   - 音频：MP3、WAV等
   - 视频：MP4、AVI等

### 6.4.4 配置标注模板

1. 点击 "Labeling Setup" 标签
2. 选择标注类型或自定义模板
3. 配置标注标签和界面
4. 点击 "Save" 保存配置

## 6.5 常用标注类型示例

### 6.5.1 文本分类

#### 配置模板

```xml
<View>
  <Text name="text" value="$text"/>
  <Choices name="sentiment" toName="text" choice="single" showInLine="true">
    <Choice value="正面"/>
    <Choice value="负面"/>
    <Choice value="中性"/>
  </Choices>
</View>
```

#### 数据导入格式（JSON）

```json
[
  {"text": "这个产品非常好用，强烈推荐！"},
  {"text": "服务态度很差，不会再来了。"},
  {"text": "今天天气不错。"}
]
```

### 6.5.2 图像分类

#### 配置模板

```xml
<View>
  <Image name="image" value="$image"/>
  <Choices name="category" toName="image" choice="single">
    <Choice value="猫"/>
    <Choice value="狗"/>
    <Choice value="其他"/>
  </Choices>
</View>
```

### 6.5.3 目标检测（Bounding Box）

#### 配置模板

```xml
<View>
  <Image name="image" value="$image"/>
  <RectangleLabels name="label" toName="image">
    <Label value="人" background="#ff0000"/>
    <Label value="车" background="#00ff00"/>
    <Label value="建筑" background="#0000ff"/>
  </RectangleLabels>
</View>
```

### 6.5.4 命名实体识别（NER）

#### 配置模板

```xml
<View>
  <Labels name="label" toName="text">
    <Label value="PER" background="#ffaaaa"/>
    <Label value="ORG" background="#aaffaa"/>
    <Label value="LOC" background="#aaaaff"/>
  </Labels>
  <Text name="text" value="$text"/>
</View>
```

## 6.6 数据导出

### 6.6.1 导出格式

Label Studio支持多种导出格式：
- JSON
- CSV
- COCO（用于目标检测）
- YOLO（用于目标检测）
- Pascal VOC
- etc.

### 6.6.2 导出步骤

1. 进入项目
2. 点击 "Export" 标签
3. 选择导出格式
4. 点击 "Export" 按钮下载数据

### 6.6.3 JSON格式示例

```json
[
  {
    "id": 1,
    "data": {
      "text": "这个产品非常好用，强烈推荐！"
    },
    "annotations": [
      {
        "result": [
          {
            "value": {
              "choices": ["正面"]
            },
            "from_name": "sentiment",
            "to_name": "text",
            "type": "choices"
          }
        ]
      }
    ]
  }
]
```

## 6.7 高级功能

### 6.7.1 使用API

Label Studio提供了REST API，可以通过编程方式管理项目和数据。

#### 获取API Token

1. 登录Label Studio
2. 点击右上角头像 -> Account & Settings
3. 复制Access Token

#### Python API示例

```python
import requests

# API配置
BASE_URL = "http://localhost:8080/api"
API_TOKEN = "your-api-token-here"

headers = {
    "Authorization": f"Token {API_TOKEN}",
    "Content-Type": "application/json"
}

# 获取项目列表
def get_projects():
    response = requests.get(f"{BASE_URL}/projects", headers=headers)
    return response.json()

# 创建项目
def create_project(title, description=""):
    data = {
        "title": title,
        "description": description
    }
    response = requests.post(f"{BASE_URL}/projects", headers=headers, json=data)
    return response.json()

# 导入数据
def import_tasks(project_id, tasks):
    response = requests.post(
        f"{BASE_URL}/projects/{project_id}/import",
        headers=headers,
        json=tasks
    )
    return response.json()

# 使用示例
if __name__ == "__main__":
    # 获取项目列表
    projects = get_projects()
    print("项目列表：", projects)
    
    # 创建新项目
    new_project = create_project("我的新项目", "这是一个测试项目")
    print("新项目ID：", new_project["id"])
```

### 6.7.2 自定义配置

#### 修改端口

```bash
# 指定端口启动
label-studio start --port 9000
```

#### 使用PostgreSQL数据库

```bash
# 设置环境变量
export DJANGO_DB=postgresql
export POSTGRE_NAME=labelstudio
export POSTGRE_USER=postgres
export POSTGRE_PASSWORD=password
export POSTGRE_HOST=localhost
export POSTGRE_PORT=5432

# 启动Label Studio
label-studio
```

## 6.8 完整示例：情感分析项目

### 步骤1：创建项目

1. 启动Label Studio
2. 点击 "Create Project"
3. 项目名称：情感分析
4. 点击 "Save"

### 步骤2：配置标注模板

在Labeling Setup中选择"Text Classification"模板，或使用以下配置：

```xml
<View>
  <Header value="请对以下文本进行情感分类："/>
  <Text name="text" value="$text"/>
  <Choices name="sentiment" toName="text" choice="single" showInLine="true">
    <Choice value="正面" background="green"/>
    <Choice value="负面" background="red"/>
    <Choice value="中性" background="gray"/>
  </Choices>
</View>
```

### 步骤3：准备数据文件

创建 `sentiment_data.json` 文件：

```json
[
  {"text": "这家餐厅的食物非常美味，服务也很好！"},
  {"text": "电影很无聊，看得我都睡着了。"},
  {"text": "今天的会议从下午2点开始。"},
  {"text": "新买的手机拍照效果太棒了！"},
  {"text": "这个软件经常崩溃，体验很差。"}
]
```

### 步骤4：导入数据

1. 点击 "Data Import"
2. 上传 `sentiment_data.json` 文件
3. 点击 "Import"

### 步骤5：开始标注

1. 点击 "Label All Tasks"
2. 对每条文本选择相应的情感类别
3. 点击 "Submit" 保存标注

### 步骤6：导出数据

1. 点击 "Export"
2. 选择 "JSON" 格式
3. 点击 "Export" 下载标注结果

## 6.9 常见问题

### Q1: 启动时端口被占用怎么办？

A: 使用 `--port` 参数指定其他端口：
```bash
label-studio start --port 9000
```

### Q2: 如何备份数据？

A: Label Studio默认使用SQLite数据库，数据存储在用户目录下的 `.label-studio` 文件夹中。可以直接备份该文件夹。

### Q3: 支持团队协作吗？

A: 支持。可以在项目设置中添加成员，分配不同的角色（管理员、标注员、审核员等）。

### Q4: 如何提高标注效率？

A: 
- 使用键盘快捷键
- 配置预标注模型
- 使用批量标注功能
- 合理设置标注指南

## 6.10 参考资源

- 官方文档：https://labelstud.io/
- GitHub仓库：https://github.com/HumanSignal/label-studio
- 社区论坛：https://slack.labelstud.io/
