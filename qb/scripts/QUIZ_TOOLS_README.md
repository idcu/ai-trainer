
# 题库管理工具说明

本目录包含用于管理题库 JSON 文件的 Python 脚本工具。

## 工具列表

### 1. quiz_duplicate_finder.py
题库重复题目查找工具

**功能：**
- 查找 qb/static/data 目录下 JSON 文件中的重复题目
- 支持通过规范化文本比较来识别格式、空格差异造成的重复
- 显示重复题目的详细信息（原题ID、重复题ID、题目内容等）

**使用方法：**
```bash
# 使用默认数据目录
python quiz_duplicate_finder.py

# 指定自定义数据目录
python quiz_duplicate_finder.py /path/to/data/directory
```

---

### 2. quiz_duplicate_cleaner.py
题库重复题目清理工具

**功能：**
- 清理 qb/static/data 目录下 JSON 文件中的重复题目
- 自动创建备份文件（.backup 后缀）
- 删除重复题目并重新编号
- 规范化处理空格、格式差异造成的重复

**使用方法：**
```bash
# 使用默认数据目录，自动创建备份
python quiz_duplicate_cleaner.py

# 指定自定义数据目录
python quiz_duplicate_cleaner.py /path/to/data/directory

# 不创建备份（谨慎使用）
python quiz_duplicate_cleaner.py --no-backup
```

---

## 数据目录结构

默认情况下，工具会在以下目录查找题库文件：
```
qb/
└── static/
    └── data/
        ├── judge.json   (判断题)
        ├── multi.json   (多选题)
        └── single.json  (单选题)
```

## 规范化规则

两个脚本使用相同的文本规范化规则来比较题目：
- 将多个连续空格替换为单个空格
- 去除中文标点符号（，。？！,.?!）周围的空格
- 去除首尾空格

这可以识别由于格式、空格差异造成的重复题目。

## 工作流程建议

1. **首先使用查找工具**：运行 `quiz_duplicate_finder.py` 查看有哪些重复题目
2. **确认无误后**：运行 `quiz_duplicate_cleaner.py` 进行清理
3. **验证结果**：再次运行 `quiz_duplicate_finder.py` 确认已无重复

## 注意事项

- 清理工具会自动创建备份文件，建议保留备份以便恢复
- 清理后题目 ID 会重新编号（从 1 开始连续编号）
- 如遇问题，可以使用备份文件恢复原始数据

