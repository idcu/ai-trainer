const QUESTION_DATA = {
  "judge": [
    {
      "id": 1,
      "type": "judge",
      "question": "图片数据采集可以使用无人机进行大规模的场景拍摄。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 2,
      "type": "judge",
      "question": "数据标准化统一命名规则只需要在数据采集阶段制定， 在后续的数据处理和分析阶段不需要遵循。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 3,
      "type": "judge",
      "question": "数据版本标识只需要在数据开发阶段进行， 在数据上线后就不需要再关注了。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 4,
      "type": "judge",
      "question": "对采集到的图片数据进行标注是图片数据采集过程中的一个可选环节。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 6,
      "type": "judge",
      "question": "音频数据中的量化噪声是由模数转换过程中的量化误差引起的。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 7,
      "type": "judge",
      "question": "因果推断只能用于实验数据，不能用于观察性数据。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 8,
      "type": "judge",
      "question": "在【语义标注】中，事件和关系是完全相同的概念。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 10,
      "type": "judge",
      "question": "语音数据标注工具只能用于标注普通话语音数据。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 11,
      "type": "judge",
      "question": "在数据清洗过程中， 对异常值的处理是可选的， 因为异常值不影响数据的整体质量。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 12,
      "type": "judge",
      "question": "在数据透视表中，一旦创建了计算字段或计算项，就不能对其进行修改或删除。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 14,
      "type": "judge",
      "question": "OpenCV 是一个专门用于图像数据清洗的工具包。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 15,
      "type": "judge",
      "question": "系统提示\"内存不足\"时，重启设备即可永久解决问题。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 16,
      "type": "judge",
      "question": "定期查看系统日志有助于发现系统中逐渐形成的潜在性能问题，如资源占用异常趋势。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 17,
      "type": "judge",
      "question": "集合中的元素是无序的， 并且不允许有重复元素。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 19,
      "type": "judge",
      "question": "在云计算资源使用中， \"按需释放弹性实例\"属于爱护设备的具体体现。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 20,
      "type": "judge",
      "question": "人工智能训练师在模型优化过程中， 应优先采用能提升指标但存在可解释性缺陷的算法方案。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 21,
      "type": "judge",
      "question": "对于大规模的业务数据， 采用自动化计算工具进行汇总数据计算可以提高计算的准确性和效率。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 22,
      "type": "judge",
      "question": "视频数据采集只需要关注视频的内容， 不需要考虑视频的元数据。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 23,
      "type": "judge",
      "question": "只要进行了数据分类与归档，就可以保证数据的质量。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 24,
      "type": "judge",
      "question": "在进行业务数据处理时，只要数据在逻辑上没有明显错误，就可以认为数据是一致的。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 25,
      "type": "judge",
      "question": "在词性标注中，所有的词都只有一个固定的词性。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 26,
      "type": "judge",
      "question": "在SPSS 中， 进行相关性分析时， 相关系数越接近于 1 或-1， 表示两个变量之间的线性关系越弱。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 27,
      "type": "judge",
      "question": "只要标注者之间的一致性很高， 标注数据就一定可以用于任何机器学习任务。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 28,
      "type": "judge",
      "question": "文本数据标注工具只能用于标注英文文本， 不能用于标注中文文本。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 29,
      "type": "judge",
      "question": "在数据分类中， 结构化数据通常比非结构化数据更容易管理和分析。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 30,
      "type": "judge",
      "question": "数据可视化只能用于展示数据的特征和趋势，不能用于发现数据中的异常值和模式。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 31,
      "type": "judge",
      "question": "标注质量评估标准中， 只要标注结果与实际情况一致，就是高质量的标注。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 32,
      "type": "judge",
      "question": "数据标注规范是确保标注结果一致性和准确性的关键。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 33,
      "type": "judge",
      "question": "在使用 OpenCV 处理图像数据时，可以自动检测和修复图像中的形变失真问题。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 34,
      "type": "judge",
      "question": "在处理数据时，所有缺失值都应该被删除， 以提高数据质量。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 36,
      "type": "judge",
      "question": "grep 命令默认区分大小写。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 37,
      "type": "judge",
      "question": "深度学习模型在训练过程中，通常会遇到过拟合或欠拟合的问题。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 38,
      "type": "judge",
      "question": "数据安全只能在技术层面实现。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 40,
      "type": "judge",
      "question": "当训练数据涉及多国文化敏感信息时， 训练师团队需建立跨文化伦理审查机制。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 41,
      "type": "judge",
      "question": "使用Requests库进行HTTP请求时，无需处理异常情况，因为 Requests 库会自动处理所有错误。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 42,
      "type": "judge",
      "question": "日志数据采集只需要关注日志的内容， 不需要考虑日志的元数据。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 43,
      "type": "judge",
      "question": "日志数据对于人工智能训练师来说并不重要， 因为它们主要关注的是模型的训练和优化。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 44,
      "type": "judge",
      "question": "数据标准化格式统一性在人工智能训练师的业务数据处理工作中并不重要，只要数据内容正确即可。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 45,
      "type": "judge",
      "question": "在统计质量评估中， 数据的准确性是指数据是否真实、准确，没有错误或偏差。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 46,
      "type": "judge",
      "question": "Pandas库只能用于处理表格数据， 不能用于文本数据清洗。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 47,
      "type": "judge",
      "question": "词性标注是自然语言处理中的一个重要步骤， 它有助于理解句子的结构和含义。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 48,
      "type": "judge",
      "question": "任何图像都可以直接用于【目标检测标注】， 无需进行预处理。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 49,
      "type": "judge",
      "question": "箱线图法是一种直观且有效的异常值检测方法， 适用于各种类型的数据。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 50,
      "type": "judge",
      "question": "标注数据安全性保障只需要关注技术手段， 不需要考虑管理因素。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 51,
      "type": "judge",
      "question": "在SPSS 中，频数分析只能生成直方图，不能生成其他类型的统计图。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 52,
      "type": "judge",
      "question": "Excel 的数据分析工具包是一个免费的加载项，所有用户都可以使用。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 53,
      "type": "judge",
      "question": "标注操作规范性检查只是走个形式，对标注工作实际影响不大。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 54,
      "type": "judge",
      "question": "在使用 SPSS进行数据分析时，所有统计分析过程都可以通过图形界面完成，无需编写代码。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 55,
      "type": "judge",
      "question": "云服务器升级通常分为三种主要类型:硬件升级、软件升级和网络带宽升级。",
      "options": [],
      "answer": "正确"
    },
    {
      "id": 57,
      "type": "judge",
      "question": "在《中华人民共和国网络安全法》中， 关键信息基础设施的运营者在中华人民共和国境内运营中收集和产生的个人信息和重要数据可以在境内存储， 也可以根据需要自由向境外提供。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 58,
      "type": "judge",
      "question": "训练师团队为完成紧急任务， 可暂时关闭数据标注审核流程中的双盲校验环节。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 59,
      "type": "judge",
      "question": "模型优化达到预设准确率后，训练师应停止所有改进工作以控制成本。",
      "options": [],
      "answer": "错误"
    },
    {
      "id": 60,
      "type": "judge",
      "question": "人工智能训练师在发现企业要求违反《数据安全法》时， 有权拒绝执行并解除劳动合同。",
      "options": [],
      "answer": "正确"
    }
  ],
  "single": [
    {
      "id": 1,
      "type": "single",
      "question": "在进行文本数据采集时，若要采集社交媒体上的用户评论数据，以下哪种方式最为合适?",
      "options": [
        {
          "letter": "A",
          "text": "直接访问社交媒体数据库"
        },
        {
          "letter": "B",
          "text": "使用社交媒体提供的 API 接口"
        },
        {
          "letter": "C",
          "text": "破解社交媒体的登录系统"
        },
        {
          "letter": "D",
          "text": "雇佣黑客获取数据"
        }
      ],
      "answer": "B"
    },
    {
      "id": 2,
      "type": "single",
      "question": "数据采集的频率应该根据什么来确定?",
      "options": [
        {
          "letter": "A",
          "text": "数据的重要性"
        },
        {
          "letter": "B",
          "text": "数据的存储容量"
        },
        {
          "letter": "C",
          "text": "数据的变化速度"
        },
        {
          "letter": "D",
          "text": "数据的可视化需求"
        }
      ],
      "answer": "C"
    },
    {
      "id": 3,
      "type": "single",
      "question": "在业务数据采集工具中， 以下哪类工具能够直接从数据库中提取数据并进行处理?",
      "options": [
        {
          "letter": "A",
          "text": "ETL 工具"
        },
        {
          "letter": "B",
          "text": "网络爬虫工具"
        },
        {
          "letter": "C",
          "text": "日志分析工具"
        },
        {
          "letter": "D",
          "text": "数据可视化工具"
        }
      ],
      "answer": "A"
    },
    {
      "id": 4,
      "type": "single",
      "question": "若要实现数据的实时存储和查询，以下哪种技术较为常用?",
      "options": [
        {
          "letter": "A",
          "text": "批处理"
        },
        {
          "letter": "B",
          "text": "流处理"
        },
        {
          "letter": "C",
          "text": "离线处理"
        },
        {
          "letter": "D",
          "text": "定时处理"
        }
      ],
      "answer": "B"
    },
    {
      "id": 5,
      "type": "single",
      "question": "人工智能训练师在评估业务数据质量时，发现数据存在大量缺失值，这主要影响了数据的哪个方面?",
      "options": [
        {
          "letter": "A",
          "text": "准确性"
        },
        {
          "letter": "B",
          "text": "完整性"
        },
        {
          "letter": "C",
          "text": "一致性"
        },
        {
          "letter": "D",
          "text": "时效性"
        }
      ],
      "answer": "B"
    },
    {
      "id": 6,
      "type": "single",
      "question": "Pangolin 采集器主要针对哪种类型的数据采集需求进行设计?",
      "options": [
        {
          "letter": "A",
          "text": "结构化数据库数据采集"
        },
        {
          "letter": "B",
          "text": "网页非结构化数据采集"
        },
        {
          "letter": "C",
          "text": "物联网设备实时数据采集"
        },
        {
          "letter": "D",
          "text": "内部系统日志数据采集"
        }
      ],
      "answer": "B"
    },
    {
      "id": 7,
      "type": "single",
      "question": "在人工智能训练师进行业务数据处理时，制定数据标准化统一命名规则的首要目的是",
      "options": [
        {
          "letter": "A",
          "text": "增加数据存储量"
        },
        {
          "letter": "B",
          "text": "提高数据处理效率"
        },
        {
          "letter": "C",
          "text": "降低数据存储成本"
        },
        {
          "letter": "D",
          "text": "方便数据备份"
        }
      ],
      "answer": "B"
    },
    {
      "id": 8,
      "type": "single",
      "question": "在人工智能训练师进行日志数据采集时，以下哪种日志来源最为常见?",
      "options": [
        {
          "letter": "A",
          "text": "社交媒体平台"
        },
        {
          "letter": "B",
          "text": "企业内部业务系统"
        },
        {
          "letter": "C",
          "text": "新闻资讯网站"
        },
        {
          "letter": "D",
          "text": "游戏论坛"
        }
      ],
      "answer": "B"
    },
    {
      "id": 10,
      "type": "single",
      "question": "在进行汇总结果规范性检查时，若发现汇总结果中的指标单位不统一， 以下哪种做法最正确?",
      "options": [
        {
          "letter": "A",
          "text": "忽略单位问题， 继续分析"
        },
        {
          "letter": "B",
          "text": "统一将所有指标单位转换为最常用的单位"
        },
        {
          "letter": "C",
          "text": "根据数据的实际情况和业务需求， 合理统一单位"
        },
        {
          "letter": "D",
          "text": "随机选择一种单位进行统一"
        }
      ],
      "answer": "C"
    },
    {
      "id": 11,
      "type": "single",
      "question": "在数据标准化统一命名规则中，对于表示订单创建时间的数据，以下哪种命名方式更规范?",
      "options": [
        {
          "letter": "A",
          "text": "create_time_order"
        },
        {
          "letter": "B",
          "text": "orderCreateTime"
        },
        {
          "letter": "C",
          "text": "time_of_order_create"
        },
        {
          "letter": "D",
          "text": "Order_Create_Time"
        }
      ],
      "answer": "B"
    },
    {
      "id": 12,
      "type": "single",
      "question": "当需要对数据进行分布式存储时，以下哪种存储架构最为常用?",
      "options": [
        {
          "letter": "A",
          "text": "集中式存储架构"
        },
        {
          "letter": "B",
          "text": "分布式文件系统"
        },
        {
          "letter": "C",
          "text": "本地存储架构"
        },
        {
          "letter": "D",
          "text": "独立存储架构"
        }
      ],
      "answer": "B"
    },
    {
      "id": 14,
      "type": "single",
      "question": "若要对用户行为数据进行汇总，要确保汇总结果的完整性，以下哪种数据指标不能遗漏?",
      "options": [
        {
          "letter": "A",
          "text": "用户的注册时间"
        },
        {
          "letter": "B",
          "text": "用户的设备型号"
        },
        {
          "letter": "C",
          "text": "用户的核心行为数据(如点击、浏览、购买等)"
        },
        {
          "letter": "D",
          "text": "用户的头像图片"
        }
      ],
      "answer": "C"
    },
    {
      "id": 15,
      "type": "single",
      "question": "以下哪项不是业务数据采集过程中需要考虑的数据安全问题?",
      "options": [
        {
          "letter": "A",
          "text": "数据加密"
        },
        {
          "letter": "B",
          "text": "数据备份"
        },
        {
          "letter": "C",
          "text": "数据公开"
        },
        {
          "letter": "D",
          "text": "访问控制"
        }
      ],
      "answer": "C"
    },
    {
      "id": 16,
      "type": "single",
      "question": "以下哪种数据采集方式更适用于大规模文本数据的采集?",
      "options": [
        {
          "letter": "A",
          "text": "手动输入"
        },
        {
          "letter": "B",
          "text": "数据库查询"
        },
        {
          "letter": "C",
          "text": "网络爬虫"
        },
        {
          "letter": "D",
          "text": "传感器采集"
        }
      ],
      "answer": "C"
    },
    {
      "id": 18,
      "type": "single",
      "question": "下列哪项不是网络爬虫在数据采集中的主要作用?",
      "options": [
        {
          "letter": "A",
          "text": "自动抓取网页数据"
        },
        {
          "letter": "B",
          "text": "提取网页中的结构化信息"
        },
        {
          "letter": "C",
          "text": "对数据进行实时处理和分析"
        },
        {
          "letter": "D",
          "text": "模拟用户浏览行为以访问动态内容"
        }
      ],
      "answer": "C"
    },
    {
      "id": 19,
      "type": "single",
      "question": "若要对采集到的视频数据进行分类，以下哪种算法较为常用?",
      "options": [
        {
          "letter": "A",
          "text": "K-means 聚类算法"
        },
        {
          "letter": "B",
          "text": "3D 卷积神经网络(3D-CNN)"
        },
        {
          "letter": "C",
          "text": "决策树算法"
        },
        {
          "letter": "D",
          "text": "支持向量机算法"
        }
      ],
      "answer": "B"
    },
    {
      "id": 20,
      "type": "single",
      "question": "下列哪种数据采集方式不涉及直接通过程序或脚本获取数据?",
      "options": [
        {
          "letter": "A",
          "text": "数据库查询"
        },
        {
          "letter": "B",
          "text": "网络爬虫"
        },
        {
          "letter": "C",
          "text": "手动输入"
        },
        {
          "letter": "D",
          "text": "API 接口调用"
        }
      ],
      "answer": "C"
    },
    {
      "id": 21,
      "type": "single",
      "question": "当采集到的数据库数据量过大时，以下哪种存储方式较为合适?",
      "options": [
        {
          "letter": "A",
          "text": "本地硬盘存储"
        },
        {
          "letter": "B",
          "text": "云存储"
        },
        {
          "letter": "C",
          "text": "光盘存储"
        },
        {
          "letter": "D",
          "text": "纸质存储"
        }
      ],
      "answer": "B"
    },
    {
      "id": 22,
      "type": "single",
      "question": "若业务数据中有一份用户订单数据，在数据全生命周期追踪中，以下哪个阶段最可能涉及数据加密操作?",
      "options": [
        {
          "letter": "A",
          "text": "数据收集"
        },
        {
          "letter": "B",
          "text": "数据存储"
        },
        {
          "letter": "C",
          "text": "数据使用"
        },
        {
          "letter": "D",
          "text": "数据销毁"
        }
      ],
      "answer": "B"
    },
    {
      "id": 23,
      "type": "single",
      "question": "若要对用户的购买行为进行多维度的数据汇总，以下哪种工具可以提供灵活的数据透视表功能?",
      "options": [
        {
          "letter": "A",
          "text": "简单的文本编辑器"
        },
        {
          "letter": "B",
          "text": "SQL 数据库"
        },
        {
          "letter": "C",
          "text": "Excel"
        },
        {
          "letter": "D",
          "text": "图像处理软件"
        }
      ],
      "answer": "C"
    },
    {
      "id": 22,
      "type": "single",
      "question": "在人工智能训练师进行业务数据处理时，若要确保汇总结果的完整性，以下哪种情况最需要关注?",
      "options": [
        {
          "letter": "A",
          "text": "数据采集渠道的多样性"
        },
        {
          "letter": "B",
          "text": "数据的存储格式"
        },
        {
          "letter": "C",
          "text": "计算汇总结果的电脑性能"
        },
        {
          "letter": "D",
          "text": "办公室的装修风格"
        }
      ],
      "answer": "A"
    },
    {
      "id": 25,
      "type": "single",
      "question": "在数据库中， 用于唯一标识一条记录的字段称为",
      "options": [
        {
          "letter": "A",
          "text": "索引"
        },
        {
          "letter": "B",
          "text": "主键"
        },
        {
          "letter": "C",
          "text": "外键"
        },
        {
          "letter": "D",
          "text": "候选键"
        }
      ],
      "answer": "B"
    },
    {
      "id": 26,
      "type": "single",
      "question": "在人工智能训练师进行业务数据处理后，若要将用户活跃度数据进行汇总可视化，以下哪种图表类型最合适?",
      "options": [
        {
          "letter": "A",
          "text": "折线图"
        },
        {
          "letter": "B",
          "text": "饼图"
        },
        {
          "letter": "C",
          "text": "散点图"
        },
        {
          "letter": "D",
          "text": "雷达图"
        }
      ],
      "answer": "A"
    },
    {
      "id": 27,
      "type": "single",
      "question": "若业务数据中有一份关于用户订单的数据表，该数据表的元数据中，用于描述数据表中每一列的含义的是。",
      "options": [
        {
          "letter": "A",
          "text": "数据表名称"
        },
        {
          "letter": "B",
          "text": "字段名称"
        },
        {
          "letter": "C",
          "text": "字段注释"
        },
        {
          "letter": "D",
          "text": "数据表备注"
        }
      ],
      "answer": "C"
    },
    {
      "id": 28,
      "type": "single",
      "question": "以下哪种数据采集方式需要编写程序或脚本?",
      "options": [
        {
          "letter": "A",
          "text": "手动输入"
        },
        {
          "letter": "B",
          "text": "使用数据采集软件"
        },
        {
          "letter": "C",
          "text": "从公开数据集下载数据"
        },
        {
          "letter": "D",
          "text": "通过 API 接口获取数据"
        }
      ],
      "answer": "B"
    },
    {
      "id": 29,
      "type": "single",
      "question": "在进行统计操作规范性检查时，以下哪项是检查数据收集过程规范性的重要内容?",
      "options": [
        {
          "letter": "A",
          "text": "数据收集人员的资质和经验"
        },
        {
          "letter": "B",
          "text": "数据收集工具的先进性"
        },
        {
          "letter": "C",
          "text": "数据收集的成本效益"
        },
        {
          "letter": "D",
          "text": "数据收集结果的满意度"
        }
      ],
      "answer": "A"
    },
    {
      "id": 30,
      "type": "single",
      "question": "在创建数据透视表时， 以下哪个步骤不是必须的?",
      "options": [
        {
          "letter": "A",
          "text": "选择数据源"
        },
        {
          "letter": "B",
          "text": "设置透视表字段"
        },
        {
          "letter": "C",
          "text": "插入图表"
        },
        {
          "letter": "D",
          "text": "确定透视表的位置"
        }
      ],
      "answer": "C"
    },
    {
      "id": 31,
      "type": "single",
      "question": "以下哪种图像类型最适合采用【语义分割标注】进行处理",
      "options": [
        {
          "letter": "A",
          "text": "简单的几何图形图像"
        },
        {
          "letter": "B",
          "text": "包含复杂场景和多个物体的自然图像"
        },
        {
          "letter": "C",
          "text": "纯色图像"
        },
        {
          "letter": "D",
          "text": "只有一种物体的图像"
        }
      ],
      "answer": "B"
    },
    {
      "id": 32,
      "type": "single",
      "question": "在使用文本数据标注工具进行标注时， 以下哪种做法是不正确的?",
      "options": [
        {
          "letter": "A",
          "text": "严格按照标注规则进行标注"
        },
        {
          "letter": "B",
          "text": "随意修改标注规则以适应个人习惯"
        },
        {
          "letter": "C",
          "text": "对标注结果进行多次审核"
        },
        {
          "letter": "D",
          "text": "与团队成员保持沟通以确保标注一致性"
        }
      ],
      "answer": "B"
    },
    {
      "id": 33,
      "type": "single",
      "question": "下列哪个库不是用于图像数据清洗的工具?",
      "options": [
        {
          "letter": "A",
          "text": "OpenCV"
        },
        {
          "letter": "B",
          "text": "PIL(Python Imaging Library)"
        },
        {
          "letter": "C",
          "text": "Pandas"
        },
        {
          "letter": "D",
          "text": "SciPy"
        }
      ],
      "answer": "C"
    },
    {
      "id": 35,
      "type": "single",
      "question": "在处理标注歧义时，建立标注规则库的主要作用是",
      "options": [
        {
          "letter": "A",
          "text": "增加标注人员的工作量"
        },
        {
          "letter": "B",
          "text": "为标注人员提供统一的参考标准， 减少歧义"
        },
        {
          "letter": "C",
          "text": "使标注过程更加复杂"
        },
        {
          "letter": "D",
          "text": "限制标注人员的创新思维"
        }
      ],
      "answer": "B"
    },
    {
      "id": 36,
      "type": "single",
      "question": "下列哪项不是数据集成处理中的常见挑战?",
      "options": [
        {
          "letter": "A",
          "text": "数据量巨大"
        },
        {
          "letter": "B",
          "text": "数据源多样"
        },
        {
          "letter": "C",
          "text": "数据质量高"
        },
        {
          "letter": "D",
          "text": "数据格式差异"
        }
      ],
      "answer": "C"
    },
    {
      "id": 37,
      "type": "single",
      "question": "下列哪种情况最适合使用因果推断工具进行分析?",
      "options": [
        {
          "letter": "A",
          "text": "描述数据的基本特征"
        },
        {
          "letter": "B",
          "text": "预测未来销售趋势"
        },
        {
          "letter": "C",
          "text": "评估某一政策对就业市场的影响"
        },
        {
          "letter": "D",
          "text": "分析消费者购买行为的偏好"
        }
      ],
      "answer": "C"
    },
    {
      "id": 38,
      "type": "single",
      "question": "在使用 Pandas 处理数据时，df.isnull.sum的作用是",
      "options": [
        {
          "letter": "A",
          "text": "计算每列中缺失值的数量"
        },
        {
          "letter": "B",
          "text": "删除包含缺失值的行"
        },
        {
          "letter": "C",
          "text": "填充缺失值"
        },
        {
          "letter": "D",
          "text": "判断 DataFrame 中是否存在缺失值"
        }
      ],
      "answer": "A"
    },
    {
      "id": 460,
      "type": "single",
      "question": "在使用 doccano 进行文本标注时，哪个步骤用于创建标注项目?",
      "options": [
        {
          "letter": "A",
          "text": "导入语料"
        },
        {
          "letter": "B",
          "text": "添加标签"
        },
        {
          "letter": "C",
          "text": "开始标注"
        },
        {
          "letter": "D",
          "text": "创建项目"
        }
      ],
      "answer": "D"
    },
    {
      "id": 41,
      "type": "single",
      "question": "对于语音数据标注中的语音转写标注， 以下说法正确的是",
      "options": [
        {
          "letter": "A",
          "text": "只需要将语音大致内容转写出来即可，不需要精确到每个字"
        },
        {
          "letter": "B",
          "text": "要准确转写语音中的每一个字，包括语气词等"
        },
        {
          "letter": "C",
          "text": "只需要转写语音中的关键信息，忽略一些细节"
        },
        {
          "letter": "D",
          "text": "转写时可以根据自己的理解对内容进行适当修改"
        }
      ],
      "answer": "B"
    },
    {
      "id": 42,
      "type": "single",
      "question": "语音标注中， 将语音转换为文本的过程称为?",
      "options": [
        {
          "letter": "A",
          "text": "语音合成"
        },
        {
          "letter": "B",
          "text": "自动语音识别(ASR)"
        },
        {
          "letter": "C",
          "text": "情绪识别"
        },
        {
          "letter": "D",
          "text": "声纹识别"
        }
      ],
      "answer": "B"
    },
    {
      "id": 44,
      "type": "single",
      "question": "标注操作规范性检查中，检查标注结果的审核流程时，以下哪种审核流程是合理的?",
      "options": [
        {
          "letter": "A",
          "text": "标注人员自己审核自己的标注结果"
        },
        {
          "letter": "B",
          "text": "由一名审核人员一次性审核所有标注结果"
        },
        {
          "letter": "C",
          "text": "采用交叉审核的方式，不同审核人员审核不同标注人员的成果"
        },
        {
          "letter": "D",
          "text": "审核人员只审核部分标注结果，且不做记录"
        }
      ],
      "answer": "C"
    },
    {
      "id": 45,
      "type": "single",
      "question": "Scikit-learn 中的 Pipeline 主要用于什么?",
      "options": [
        {
          "letter": "A",
          "text": "数据预处理"
        },
        {
          "letter": "B",
          "text": "模型训练"
        },
        {
          "letter": "C",
          "text": "模型评估"
        },
        {
          "letter": "D",
          "text": "将多个处理步骤封装为一个流程"
        }
      ],
      "answer": "D"
    },
    {
      "id": 46,
      "type": "single",
      "question": "在词性标注中，如何区分介词和连词?",
      "options": [
        {
          "letter": "A",
          "text": "介词后面通常跟名词或代词，连词连接两个句子或句子成分"
        },
        {
          "letter": "B",
          "text": "介词表示动作或行为，连词表示时间、地点或方式"
        },
        {
          "letter": "C",
          "text": "介词和连词在句子中的位置相同"
        },
        {
          "letter": "D",
          "text": "介词和连词的功能完全相同"
        }
      ],
      "answer": "A"
    },
    {
      "id": 47,
      "type": "single",
      "question": "以下关于标注一致性评估的说法，错误的是?",
      "options": [
        {
          "letter": "A",
          "text": "标注一致性评估有助于提高标注数据的质量"
        },
        {
          "letter": "B",
          "text": "标注一致性评估只需要在标注完成后进行一次即可"
        },
        {
          "letter": "C",
          "text": "不同的评估指标适用于不同的标注场景"
        },
        {
          "letter": "D",
          "text": "标注一致性评估可以发现标注过程中存在的问题"
        }
      ],
      "answer": "B"
    },
    {
      "id": 49,
      "type": "single",
      "question": "在进行数据分析时，若想要使用 Excel 的数据分析工具包，但发现该功能未安装，应该如何操作?",
      "options": [
        {
          "letter": "A",
          "text": "通过 Office 商店购买"
        },
        {
          "letter": "B",
          "text": "在 Excel 的“选项”中启用"
        },
        {
          "letter": "C",
          "text": "从微软官网下载并安装"
        },
        {
          "letter": "D",
          "text": "使用其他统计软件"
        }
      ],
      "answer": "B"
    },
    {
      "id": 50,
      "type": "single",
      "question": "在视频数据标注里，对于视频中的语音内容进行标注，以下哪种标注方法不正确?",
      "options": [
        {
          "letter": "A",
          "text": "转写成文字并标注说话人"
        },
        {
          "letter": "B",
          "text": "只标注语音的大致情感倾向"
        },
        {
          "letter": "C",
          "text": "标注语音中的关键词"
        },
        {
          "letter": "D",
          "text": "标注语音出现的时间段"
        }
      ],
      "answer": "B"
    },
    {
      "id": 53,
      "type": "single",
      "question": "以下哪种情况不属于标注歧义产生的原因?",
      "options": [
        {
          "letter": "A",
          "text": "标注标准不明确"
        },
        {
          "letter": "B",
          "text": "标注人员对任务理解一致"
        },
        {
          "letter": "C",
          "text": "语言本身的模糊性"
        },
        {
          "letter": "D",
          "text": "标注对象的复杂性"
        }
      ],
      "answer": "B"
    },
    {
      "id": 54,
      "type": "single",
      "question": "下列哪个工具常用于数据清洗中的异常值检测?",
      "options": [
        {
          "letter": "A",
          "text": "Matplotlib"
        },
        {
          "letter": "B",
          "text": "OpenCV"
        },
        {
          "letter": "C",
          "text": "Pandas"
        },
        {
          "letter": "D",
          "text": "Z-score 方法(结合 Python 实现)"
        }
      ],
      "answer": "D"
    },
    {
      "id": 55,
      "type": "single",
      "question": "使用箱线图法检测异常值时，上四分位数(Q3)与下四分位数(Q1)之差被称为",
      "options": [
        {
          "letter": "A",
          "text": "极差"
        },
        {
          "letter": "B",
          "text": "标准差"
        },
        {
          "letter": "C",
          "text": "四分位距(IQR)"
        },
        {
          "letter": "D",
          "text": "平均数"
        }
      ],
      "answer": "C"
    },
    {
      "id": 56,
      "type": "single",
      "question": "在数据可视化中，颜色编码通常用于表示数据的什么特征?",
      "options": [
        {
          "letter": "A",
          "text": "大小"
        },
        {
          "letter": "B",
          "text": "类别"
        },
        {
          "letter": "C",
          "text": "趋势"
        },
        {
          "letter": "D",
          "text": "频率"
        }
      ],
      "answer": "B"
    },
    {
      "id": 58,
      "type": "single",
      "question": "在标注操作规范性检查过程中，对于标注数据的存储，以下哪种做法符合要求?",
      "options": [
        {
          "letter": "A",
          "text": "将标注数据随意存放在个人电脑桌面"
        },
        {
          "letter": "B",
          "text": "按照项目分类， 存储在指定的服务器或存储设备中"
        },
        {
          "letter": "C",
          "text": "把标注数据存储在未加密的移动硬盘里"
        },
        {
          "letter": "D",
          "text": "与其他无关数据混合存储"
        }
      ],
      "answer": "B"
    },
    {
      "id": 59,
      "type": "single",
      "question": "在自动化分析框架中， 如果模型出现过拟合现象，应该采取哪种方法进行处理?",
      "options": [
        {
          "letter": "A",
          "text": "增加训练数据"
        },
        {
          "letter": "B",
          "text": "减少模型复杂度"
        },
        {
          "letter": "C",
          "text": "使用正则化方法"
        },
        {
          "letter": "D",
          "text": "以上都是"
        }
      ],
      "answer": "D"
    },
    {
      "id": 80,
      "type": "single",
      "question": "在使用 CloudCompare 软件进行 3D 点云数据标注时，如果想要对点云数据进行分割，应使用哪种工具?",
      "options": [
        {
          "letter": "A",
          "text": "框选工具"
        },
        {
          "letter": "B",
          "text": "标量字段工具栏"
        },
        {
          "letter": "C",
          "text": "标注工具"
        },
        {
          "letter": "D",
          "text": "合并工具"
        }
      ],
      "answer": "A"
    },
    {
      "id": 82,
      "type": "single",
      "question": "以下哪个不是 SPSS 软件的特点?",
      "options": [
        {
          "letter": "A",
          "text": "分析结果清晰直观"
        },
        {
          "letter": "B",
          "text": "软件易学易用"
        },
        {
          "letter": "C",
          "text": "只能处理小规模数据集"
        },
        {
          "letter": "D",
          "text": "可以直接读取 Excel 文件"
        }
      ],
      "answer": "C"
    },
    {
      "id": 83,
      "type": "single",
      "question": "下列哪种颜色模式通常用于表示彩色图像?",
      "options": [
        {
          "letter": "A",
          "text": "灰度"
        },
        {
          "letter": "B",
          "text": "RGB"
        },
        {
          "letter": "C",
          "text": "位图"
        },
        {
          "letter": "D",
          "text": "索引颜色"
        }
      ],
      "answer": "B"
    },
    {
      "id": 84,
      "type": "single",
      "question": "在使用 NumPy 处理数据时， 若希望用全局变量填充空缺值，应使用哪个函数?",
      "options": [
        {
          "letter": "A",
          "text": "np.char.strip()"
        },
        {
          "letter": "B",
          "text": "np.nan_to_num()"
        },
        {
          "letter": "C",
          "text": "np.fill_diagonal()"
        },
        {
          "letter": "D",
          "text": "np.nanmean()"
        }
      ],
      "answer": "B"
    },
    {
      "id": 85,
      "type": "single",
      "question": "在图像数据清洗中，对于模糊图像的检测，常用哪种方法?",
      "options": [
        {
          "letter": "A",
          "text": "使用哈希值比较图像相似性"
        },
        {
          "letter": "B",
          "text": "计算图像的直方图"
        },
        {
          "letter": "C",
          "text": "使用 Laplacian 函数计算图像的方差"
        },
        {
          "letter": "D",
          "text": "通过像素填充调整图像大小"
        }
      ],
      "answer": "C"
    },
    {
      "id": 87,
      "type": "single",
      "question": "以下关于标注质量评估标准的说法，正确的是",
      "options": [
        {
          "letter": "A",
          "text": "标注准确性是最重要的评估指标， 其他指标可以忽略"
        },
        {
          "letter": "B",
          "text": "标注完整性只要保证标注了大部分内容即可"
        },
        {
          "letter": "C",
          "text": "标注一致性在不同标注任务中要求应保持一致"
        },
        {
          "letter": "D",
          "text": "标注质量评估需要综合考虑多个指标"
        }
      ],
      "answer": "D"
    },
    {
      "id": 88,
      "type": "single",
      "question": "对于【语义分割标注】的数据集，以下哪种做法有助于提高模型的训练效果",
      "options": [
        {
          "letter": "A",
          "text": "减少数据集中图像的数量"
        },
        {
          "letter": "B",
          "text": "增加数据集中图像的多样性"
        },
        {
          "letter": "C",
          "text": "只使用一种分辨率的图像"
        },
        {
          "letter": "D",
          "text": "不对数据进行预处理"
        }
      ],
      "answer": "B"
    },
    {
      "id": 89,
      "type": "single",
      "question": "在【语义分割标注】中，处理遮挡物体的正确方法是",
      "options": [
        {
          "letter": "A",
          "text": "忽略被遮挡部分不进行标注"
        },
        {
          "letter": "B",
          "text": "根据可见部分和上下文推测被遮挡部分并进行标注"
        },
        {
          "letter": "C",
          "text": "只标注遮挡物"
        },
        {
          "letter": "D",
          "text": "将遮挡物和被遮挡物标注为同一类别"
        }
      ],
      "answer": "B"
    },
    {
      "id": 91,
      "type": "single",
      "question": "在 Python 中，如何创建一个空的 DataFrame?",
      "options": [
        {
          "letter": "A",
          "text": "pd.DataFrame()"
        },
        {
          "letter": "B",
          "text": "pd.Series()"
        },
        {
          "letter": "C",
          "text": "np.array([])"
        },
        {
          "letter": "D",
          "text": "df = {}"
        }
      ],
      "answer": "A"
    },
    {
      "id": 93,
      "type": "single",
      "question": "在标注一致性评估中， 以下哪种方法通常不用于衡量标注结果的一致性?",
      "options": [
        {
          "letter": "A",
          "text": "Cohen's Kappa 系数"
        },
        {
          "letter": "B",
          "text": "Fleiss' Kappa 系数"
        },
        {
          "letter": "C",
          "text": "准确率"
        },
        {
          "letter": "D",
          "text": "Krippendorff's Alpha 系数"
        }
      ],
      "answer": "C"
    },
    {
      "id": 94,
      "type": "single",
      "question": "在进行图像数据清洗时，如果图像中存在缺失或损坏的部分，以下哪种方法可能用于修复这些部分?",
      "options": [
        {
          "letter": "A",
          "text": "图像旋转"
        },
        {
          "letter": "B",
          "text": "图像插值"
        },
        {
          "letter": "C",
          "text": "图像锐化"
        },
        {
          "letter": "D",
          "text": "图像二值化"
        }
      ],
      "answer": "B"
    },
    {
      "id": 96,
      "type": "single",
      "question": "在数据清洗过程中，对清洗后的数据进行规范性验证的主要目的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "确保数据的安全性"
        },
        {
          "letter": "B",
          "text": "提高数据的存储效率"
        },
        {
          "letter": "C",
          "text": "确保数据的准确性和一致性"
        },
        {
          "letter": "D",
          "text": "增加数据的多样性"
        }
      ],
      "answer": "C"
    },
    {
      "id": 97,
      "type": "single",
      "question": "在使用 MatrixGo 平台进行 2D 图像标注时，如果想对多个矩形框进行合并和共享边操作，应该在哪个功能模块中实现?",
      "options": [
        {
          "letter": "A",
          "text": "3D 点云目标跟踪"
        },
        {
          "letter": "B",
          "text": "通用视频目标追踪"
        },
        {
          "letter": "C",
          "text": "2D 点、线、框复合标注和语义分割"
        },
        {
          "letter": "D",
          "text": "长语音/视频切分转写"
        }
      ],
      "answer": "C"
    },
    {
      "id": 98,
      "type": "single",
      "question": "在使用 Pandas 处理数据时，如果要去除 DataFrame 中的重复值， 并且只保留第一次出现的行，应该使用哪个参数?",
      "options": [
        {
          "letter": "A",
          "text": "keep='first'"
        },
        {
          "letter": "B",
          "text": "keep='last'"
        },
        {
          "letter": "C",
          "text": "keep=False"
        },
        {
          "letter": "D",
          "text": "keep=True"
        }
      ],
      "answer": "A"
    },
    {
      "id": 99,
      "type": "single",
      "question": "在处理医学图像时，如果发现图像中存在斑点噪声， 通常采用的处理方法是?",
      "options": [
        {
          "letter": "A",
          "text": "均值滤波"
        },
        {
          "letter": "B",
          "text": "高斯滤波"
        },
        {
          "letter": "C",
          "text": "中值滤波"
        },
        {
          "letter": "D",
          "text": "拉普拉斯滤波"
        }
      ],
      "answer": "C"
    },
    {
      "id": 100,
      "type": "single",
      "question": "在 SPSS 中，进行频数分析时，如果希望了解数据的分布情况，通常会选择哪种图形?",
      "options": [
        {
          "letter": "A",
          "text": "散点图"
        },
        {
          "letter": "B",
          "text": "箱线图"
        },
        {
          "letter": "C",
          "text": "直方图"
        },
        {
          "letter": "D",
          "text": "折线图"
        }
      ],
      "answer": "C"
    },
    {
      "id": 101,
      "type": "single",
      "question": "在 3D 点云标注中，对于复杂场景下的多个物体标注，以下哪种策略有助于提高标注准确性?",
      "options": [
        {
          "letter": "A",
          "text": "一次性标注所有物体"
        },
        {
          "letter": "B",
          "text": "按照物体的大小顺序依次标注"
        },
        {
          "letter": "C",
          "text": "先标注大物体， 再标注小物体，最后标注细节"
        },
        {
          "letter": "D",
          "text": "随机选择物体进行标注"
        }
      ],
      "answer": "C"
    },
    {
      "id": 102,
      "type": "single",
      "question": "在统计分析中，如果希望了解数据在不同类别中的分布情况，应该使用哪个统计指标?",
      "options": [
        {
          "letter": "A",
          "text": "频率分布"
        },
        {
          "letter": "B",
          "text": "均值"
        },
        {
          "letter": "C",
          "text": "中位数"
        },
        {
          "letter": "D",
          "text": "方差"
        }
      ],
      "answer": "A"
    },
    {
      "id": 103,
      "type": "single",
      "question": "在数据集成处理过程中，将来自不同数据源的数据合并到一个统一的数据存储中的过程被称为什么?",
      "options": [
        {
          "letter": "A",
          "text": "数据清洗"
        },
        {
          "letter": "B",
          "text": "数据迁移"
        },
        {
          "letter": "C",
          "text": "数据集成"
        },
        {
          "letter": "D",
          "text": "数据转换"
        }
      ],
      "answer": "C"
    },
    {
      "id": 105,
      "type": "single",
      "question": "在使用 Pandas 处理数据时，如果想要删除所有含有 NaN 值的列，应该设置 df.dropna函数的哪个参数?",
      "options": [
        {
          "letter": "A",
          "text": "how='all'"
        },
        {
          "letter": "B",
          "text": "how='any'"
        },
        {
          "letter": "C",
          "text": "axis=0"
        },
        {
          "letter": "D",
          "text": "axis=1"
        }
      ],
      "answer": "A"
    },
    {
      "id": 106,
      "type": "single",
      "question": "对于标注效率评估，若要评估标注人员在不同类型任务上的综合表现， 以下哪个指标相对更合适?",
      "options": [
        {
          "letter": "A",
          "text": "单个任务的标注时长"
        },
        {
          "letter": "B",
          "text": "特定类型任务的标注准确率"
        },
        {
          "letter": "C",
          "text": "平均标注准确率"
        },
        {
          "letter": "D",
          "text": "单次标注的错误数量"
        }
      ],
      "answer": "C"
    },
    {
      "id": 107,
      "type": "single",
      "question": "数据标注的完整性主要指的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "标注数据的数量足够多"
        },
        {
          "letter": "B",
          "text": "标注数据覆盖了所有可能的类别和情况"
        },
        {
          "letter": "C",
          "text": "标注数据的格式统一"
        },
        {
          "letter": "D",
          "text": "标注数据的来源可靠"
        }
      ],
      "answer": "B"
    },
    {
      "id": 108,
      "type": "single",
      "question": "在实际应用中，如果希望估计量既无偏又有效，应该选择?",
      "options": [
        {
          "letter": "A",
          "text": "偏差最小的估计量"
        },
        {
          "letter": "B",
          "text": "方差最小的估计量"
        },
        {
          "letter": "C",
          "text": "均方误差最小的估计量"
        },
        {
          "letter": "D",
          "text": "一致性最好的估计量"
        }
      ],
      "answer": "C"
    },
    {
      "id": 109,
      "type": "single",
      "question": "下列哪种格式不属于数据库文件的常见格式?",
      "options": [
        {
          "letter": "A",
          "text": "CSV"
        },
        {
          "letter": "B",
          "text": "SQL"
        },
        {
          "letter": "C",
          "text": "MDB"
        },
        {
          "letter": "D",
          "text": "EVTX"
        }
      ],
      "answer": "B"
    },
    {
      "id": 110,
      "type": "single",
      "question": "在使用 Pandas 进行数据处理时，以下哪个参数用于指定删除缺失值的方式?",
      "options": [
        {
          "letter": "A",
          "text": "how"
        },
        {
          "letter": "B",
          "text": "subset"
        },
        {
          "letter": "C",
          "text": "thresh"
        },
        {
          "letter": "D",
          "text": "axis"
        }
      ],
      "answer": "A"
    },
    {
      "id": 111,
      "type": "single",
      "question": "情感标注中， 若要体现一种紧张不安的情感，在文本标记时可能会采用",
      "options": [
        {
          "letter": "A",
          "text": "波浪线"
        },
        {
          "letter": "B",
          "text": "直线"
        },
        {
          "letter": "C",
          "text": "圆圈"
        },
        {
          "letter": "D",
          "text": "方框"
        }
      ],
      "answer": "A"
    },
    {
      "id": 112,
      "type": "single",
      "question": "在进行【语义标注】时，确定“事件”的关键在于",
      "options": [
        {
          "letter": "A",
          "text": "找到文本中的形容词"
        },
        {
          "letter": "B",
          "text": "识别出文本中发生的具体行为或情况"
        },
        {
          "letter": "C",
          "text": "统计文本中的数字"
        },
        {
          "letter": "D",
          "text": "分析文本中的修辞手法"
        }
      ],
      "answer": "B"
    },
    {
      "id": 114,
      "type": "single",
      "question": "下列哪项不是数据清洗后可能面临的数据完整性问题?",
      "options": [
        {
          "letter": "A",
          "text": "数据重复"
        },
        {
          "letter": "B",
          "text": "数据丢失"
        },
        {
          "letter": "C",
          "text": "数据格式错误"
        },
        {
          "letter": "D",
          "text": "数据不一致"
        }
      ],
      "answer": "C"
    },
    {
      "id": 115,
      "type": "single",
      "question": "在进行统计操作规范性检查时，关于统计方法的选用，以下哪项是正确的?",
      "options": [
        {
          "letter": "A",
          "text": "可以随意选用统计方法，只要结果满意即可"
        },
        {
          "letter": "B",
          "text": "应根据研究目的和数据特性选择合适的统计方法"
        },
        {
          "letter": "C",
          "text": "复杂的统计方法总是优于简单的统计方法"
        },
        {
          "letter": "D",
          "text": "统计方法的选用无需考虑数据的分布情况"
        }
      ],
      "answer": "B"
    },
    {
      "id": 116,
      "type": "single",
      "question": "以下哪个工具包主要用于处理图像数据清洗中的模糊图像检测?",
      "options": [
        {
          "letter": "A",
          "text": "NumPy"
        },
        {
          "letter": "B",
          "text": "Pandas"
        },
        {
          "letter": "C",
          "text": "OpenCV"
        },
        {
          "letter": "D",
          "text": "Re(正则表达式)"
        }
      ],
      "answer": "C"
    },
    {
      "id": 117,
      "type": "single",
      "question": "在评估数据清洗效率时，通常不考虑以下哪个因素?",
      "options": [
        {
          "letter": "A",
          "text": "清洗所需时间"
        },
        {
          "letter": "B",
          "text": "清洗后的数据质量"
        },
        {
          "letter": "C",
          "text": "清洗前的数据大小"
        },
        {
          "letter": "D",
          "text": "清洗工具的易用性"
        }
      ],
      "answer": "D"
    },
    {
      "id": 118,
      "type": "single",
      "question": "以下哪种方法不是处理统计异常数据的常用方法?",
      "options": [
        {
          "letter": "A",
          "text": "winsorize 处理缩尾处理"
        },
        {
          "letter": "B",
          "text": "基于聚类的方法"
        },
        {
          "letter": "C",
          "text": "基于密度的方法"
        },
        {
          "letter": "D",
          "text": "基于时间序列分析的方法"
        }
      ],
      "answer": "D"
    },
    {
      "id": 119,
      "type": "single",
      "question": "用户调整智能设备参数时，系统提供的典型操作界面是?",
      "options": [
        {
          "letter": "A",
          "text": "命令行界面"
        },
        {
          "letter": "B",
          "text": "图形化配置面板"
        },
        {
          "letter": "C",
          "text": "代码编辑器"
        },
        {
          "letter": "D",
          "text": "文件传输界面"
        }
      ],
      "answer": "B"
    },
    {
      "id": 120,
      "type": "single",
      "question": "智能系统维护中的数据维护主要涉及哪些内容?",
      "options": [
        {
          "letter": "A",
          "text": "设备故障排除、设备升级、设备巡检"
        },
        {
          "letter": "B",
          "text": "软件漏洞修复、系统优化、软件升级"
        },
        {
          "letter": "C",
          "text": "网络故障排除、网络优化、网络安全"
        },
        {
          "letter": "D",
          "text": "数据备份、数据恢复、数据安全"
        }
      ],
      "answer": "D"
    },
    {
      "id": 121,
      "type": "single",
      "question": "用户配置智能推荐系统偏好时，通常设置的参数类型是?",
      "options": [
        {
          "letter": "A",
          "text": "推荐算法选择"
        },
        {
          "letter": "B",
          "text": "内容过滤阈值"
        },
        {
          "letter": "C",
          "text": "推荐数量限制"
        },
        {
          "letter": "D",
          "text": "数据采集频率"
        }
      ],
      "answer": "C"
    },
    {
      "id": 122,
      "type": "single",
      "question": "用户查询智能系统时， 提高检索效率的有效操作是?",
      "options": [
        {
          "letter": "A",
          "text": "使用专业术语"
        },
        {
          "letter": "B",
          "text": "添加限定条件"
        },
        {
          "letter": "C",
          "text": "延长查询语句"
        },
        {
          "letter": "D",
          "text": "频繁更换关键词"
        }
      ],
      "answer": "B"
    },
    {
      "id": 123,
      "type": "single",
      "question": "系统日志的主要作用不包括以下哪项?",
      "options": [
        {
          "letter": "A",
          "text": "记录系统运行状态"
        },
        {
          "letter": "B",
          "text": "监控用户行为"
        },
        {
          "letter": "C",
          "text": "提高系统性能"
        },
        {
          "letter": "D",
          "text": "协助故障排查"
        }
      ],
      "answer": "C"
    },
    {
      "id": 124,
      "type": "single",
      "question": "使用智能系统 API 时，首先必须完成的步骤是?",
      "options": [
        {
          "letter": "A",
          "text": "数据格式转换"
        },
        {
          "letter": "B",
          "text": "身份认证"
        },
        {
          "letter": "C",
          "text": "结果解析"
        },
        {
          "letter": "D",
          "text": "错误处理"
        }
      ],
      "answer": "B"
    },
    {
      "id": 125,
      "type": "single",
      "question": "通过训练数据自动学习特征并进行模式识别的系统属于:",
      "options": [
        {
          "letter": "A",
          "text": "专家系统"
        },
        {
          "letter": "B",
          "text": "神经网络"
        },
        {
          "letter": "C",
          "text": "决策树"
        },
        {
          "letter": "D",
          "text": "规则引擎"
        }
      ],
      "answer": "B"
    },
    {
      "id": 126,
      "type": "single",
      "question": "在 Prometheus 监控体系中，以下哪项不属于核心组件?",
      "options": [
        {
          "letter": "A",
          "text": "Alertmanager(告警管理)"
        },
        {
          "letter": "B",
          "text": "Pushgateway(推送网关)"
        },
        {
          "letter": "C",
          "text": "Grafana(可视化面板)"
        },
        {
          "letter": "D",
          "text": "Exporter(数据采集器)"
        }
      ],
      "answer": "C"
    },
    {
      "id": 127,
      "type": "single",
      "question": "以下关于系统日志维护中日志格式转换的说法，正确的是",
      "options": [
        {
          "letter": "A",
          "text": "日志格式转换只能在日志生成时进行"
        },
        {
          "letter": "B",
          "text": "转换日志格式主要是为了让日志文件看起来更美观"
        },
        {
          "letter": "C",
          "text": "不同的日志分析工具可能要求特定的日志格式，所以需要进行格式转换"
        },
        {
          "letter": "D",
          "text": "系统日志格式一旦确定，无法进行转换"
        }
      ],
      "answer": "C"
    },
    {
      "id": 128,
      "type": "single",
      "question": "基于前次全量备份，仅备份新增或变化数据的备份类型称为:",
      "options": [
        {
          "letter": "A",
          "text": "全量备份"
        },
        {
          "letter": "B",
          "text": "增量备份"
        },
        {
          "letter": "C",
          "text": "差异备份"
        },
        {
          "letter": "D",
          "text": "选择性备份"
        }
      ],
      "answer": "B"
    },
    {
      "id": 129,
      "type": "single",
      "question": "以下哪种做法不利于日志的完整性和安全性?",
      "options": [
        {
          "letter": "A",
          "text": "采用加密和身份验证等安全机制保护日志"
        },
        {
          "letter": "B",
          "text": "定期备份和清理日志"
        },
        {
          "letter": "C",
          "text": "将日志存储在未经保护的目录中"
        },
        {
          "letter": "D",
          "text": "限制日志文件的读写权限"
        }
      ],
      "answer": "C"
    },
    {
      "id": 130,
      "type": "single",
      "question": "在日志分析工具中，使用正则表达式提取日志中的 IP 地址，以下正则表达式正确的是",
      "options": [
        {
          "letter": "A",
          "text": "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"
        },
        {
          "letter": "B",
          "text": "\\b\\d{1,3}(\\.\\d{1,3}){3}\\b"
        },
        {
          "letter": "C",
          "text": "\\w{1,3}(\\.\\w{1,3}){3}"
        },
        {
          "letter": "D",
          "text": "\\d{4}(\\.\\d{4}){3}"
        }
      ],
      "answer": "B"
    },
    {
      "id": 131,
      "type": "single",
      "question": "关于 MySQL 服务健康检查的最佳实践， 以下哪项存在风险?",
      "options": [
        {
          "letter": "A",
          "text": "通过 SHOW STATUS 查看连接数"
        },
        {
          "letter": "B",
          "text": "直接执行 KILL 命令终止异常连接"
        },
        {
          "letter": "C",
          "text": "使用 mysqld_exporter 采集指标"
        },
        {
          "letter": "D",
          "text": "配置慢查询日志分析"
        }
      ],
      "answer": "B"
    },
    {
      "id": 133,
      "type": "single",
      "question": "以下哪种情形，用人单位可以解除劳动合同?",
      "options": [
        {
          "letter": "A",
          "text": "女职工在孕期"
        },
        {
          "letter": "B",
          "text": "患病在规定的医疗期内"
        },
        {
          "letter": "C",
          "text": "劳动者严重违反规章制度"
        },
        {
          "letter": "D",
          "text": "在本单位连续工作满 15 年且距退休不足 5 年"
        }
      ],
      "answer": "C"
    },
    {
      "id": 139,
      "type": "single",
      "question": "以下哪个 Python 内置函数可以用于检查一个对象是否是某个类的实例?",
      "options": [
        {
          "letter": "A",
          "text": "isinstance()"
        },
        {
          "letter": "B",
          "text": "issubclass()"
        },
        {
          "letter": "C",
          "text": "type()"
        },
        {
          "letter": "D",
          "text": "class_of()(非内置)"
        }
      ],
      "answer": "A"
    },
    {
      "id": 140,
      "type": "single",
      "question": "国家秘密的保密期限， 绝密级一般不超过多少年?",
      "options": [
        {
          "letter": "A",
          "text": "40 年"
        },
        {
          "letter": "B",
          "text": "30 年"
        },
        {
          "letter": "C",
          "text": "20 年"
        },
        {
          "letter": "D",
          "text": "10 年"
        }
      ],
      "answer": "B"
    },
    {
      "id": 143,
      "type": "single",
      "question": "对数据使用者的要求中， 以下哪项不符合数据伦理?",
      "options": [
        {
          "letter": "A",
          "text": "负责任地使用数据"
        },
        {
          "letter": "B",
          "text": "确保数据准确性"
        },
        {
          "letter": "C",
          "text": "随意分享数据"
        },
        {
          "letter": "D",
          "text": "遵守法律法规"
        }
      ],
      "answer": "C"
    },
    {
      "id": 144,
      "type": "single",
      "question": "在团队知识库建设中， 最体现\"精益求精\"精神的维护方式是",
      "options": [
        {
          "letter": "A",
          "text": "定期删除过时文档"
        },
        {
          "letter": "B",
          "text": "建立版本对比功能"
        },
        {
          "letter": "C",
          "text": "开放全员编辑权限"
        },
        {
          "letter": "D",
          "text": "按部门分类存储"
        }
      ],
      "answer": "B"
    },
    {
      "id": 145,
      "type": "single",
      "question": "某金融 AI 项目要求训练师在周末加班处理紧急标注任务，但未按劳动法支付报酬， 正确做法是",
      "options": [
        {
          "letter": "A",
          "text": "接受任务但要求补休"
        },
        {
          "letter": "B",
          "text": "拒绝加班并申请劳动仲裁"
        },
        {
          "letter": "C",
          "text": "完成标注后匿名举报"
        },
        {
          "letter": "D",
          "text": "与团队协商分配任务"
        }
      ],
      "answer": "B"
    },
    {
      "id": 147,
      "type": "single",
      "question": "在生成式 AI 训练中， 训练师发现模型生成的金融文案存在专业术语错误， 最符合\"追求卓越\"的做法是",
      "options": [
        {
          "letter": "A",
          "text": "直接回标为不合格样本"
        },
        {
          "letter": "B",
          "text": "自行修正后提交审核"
        },
        {
          "letter": "C",
          "text": "建立金融领域术语词库"
        },
        {
          "letter": "D",
          "text": "通知模型工程师调整参数"
        }
      ],
      "answer": "C"
    },
    {
      "id": 150,
      "type": "single",
      "question": "在跨境 AI 项目合作中， 训练师发现合作方要求使用未获本国伦理审查的面部识别算法时，应当",
      "options": [
        {
          "letter": "A",
          "text": "直接执行合作方技术要求"
        },
        {
          "letter": "B",
          "text": "自行评估算法合规性后使用"
        },
        {
          "letter": "C",
          "text": "暂停合作并上报合规部门"
        },
        {
          "letter": "D",
          "text": "仅记录风险继续推进项目"
        }
      ],
      "answer": "C"
    },
    {
      "id": 151,
      "type": "single",
      "question": "训练师在自动驾驶标注中发现，复杂天气场景的标注一致性仅 68%，最优解决方案是",
      "options": [
        {
          "letter": "A",
          "text": "扩大标注团队规模"
        },
        {
          "letter": "B",
          "text": "建立场景分级标注标准"
        },
        {
          "letter": "C",
          "text": "采用众包标注降低成本"
        },
        {
          "letter": "D",
          "text": "暂停复杂场景标注"
        }
      ],
      "answer": "B"
    },
    {
      "id": 152,
      "type": "single",
      "question": "在标注工作站使用过程中，下列行为违反\"操作规范\"的是",
      "options": [
        {
          "letter": "A",
          "text": "使用支架固定外接显示器"
        },
        {
          "letter": "B",
          "text": "拆卸机箱清理灰尘"
        },
        {
          "letter": "C",
          "text": "同时运行 3 个标注软件"
        },
        {
          "letter": "D",
          "text": "定期更新驱动程序"
        }
      ],
      "answer": "B"
    },
    {
      "id": 153,
      "type": "single",
      "question": "从历史和现实以及未来发展看，人的发展的第三个层次是什么?",
      "options": [
        {
          "letter": "A",
          "text": "个人自身的完善"
        },
        {
          "letter": "B",
          "text": "身心和谐发展"
        },
        {
          "letter": "C",
          "text": "个性的自我完善"
        },
        {
          "letter": "D",
          "text": "个体和社会、自然的协调统一和全面发展"
        }
      ],
      "answer": "D"
    },
    {
      "id": 154,
      "type": "single",
      "question": "客户要求提供训练数据样本用于案例展示，但数据含未授权商业标识，正确做法是",
      "options": [
        {
          "letter": "A",
          "text": "直接提供原始数据"
        },
        {
          "letter": "B",
          "text": "自行模糊处理标识后提供"
        },
        {
          "letter": "C",
          "text": "告知客户需重新授权"
        },
        {
          "letter": "D",
          "text": "推荐使用公开数据集替代"
        }
      ],
      "answer": "C"
    },
    {
      "id": 157,
      "type": "single",
      "question": "在职业技能伦理中，以下哪项行为是符合职业行为规范的?",
      "options": [
        {
          "letter": "A",
          "text": "抄袭他人作品"
        },
        {
          "letter": "B",
          "text": "利用职务之便谋取私利"
        },
        {
          "letter": "C",
          "text": "遵守工作时间"
        },
        {
          "letter": "D",
          "text": "无故缺勤"
        }
      ],
      "answer": "C"
    },
    {
      "id": 158,
      "type": "single",
      "question": "训练师在使用标注平台时，发现响应速度变慢，正确的处理方式是",
      "options": [
        {
          "letter": "A",
          "text": "立即重启服务器"
        },
        {
          "letter": "B",
          "text": "清理浏览器缓存"
        },
        {
          "letter": "C",
          "text": "增加标注任务量"
        },
        {
          "letter": "D",
          "text": "升级操作系统"
        }
      ],
      "answer": "B"
    },
    {
      "id": 159,
      "type": "single",
      "question": "处理用户投诉时，训练师发现模型输出包含未标注的敏感信息，最恰当的处理方式是",
      "options": [
        {
          "letter": "A",
          "text": "立即删除用户数据以消除影响"
        },
        {
          "letter": "B",
          "text": "向用户解释为技术误判无需担忧"
        },
        {
          "letter": "C",
          "text": "标记案例并启动模型伦理审查"
        },
        {
          "letter": "D",
          "text": "调整输出过滤器屏蔽同类信息"
        }
      ],
      "answer": "C"
    },
    {
      "id": 22,
      "type": "single",
      "question": "若业务数据中产品价格出现“99999999”这样异常高的数值，在数据质量准确性验证中， 这可能是由于导致的。",
      "options": [
        {
          "letter": "A",
          "text": "数据录入错误"
        },
        {
          "letter": "B",
          "text": "数据加密算法问题"
        },
        {
          "letter": "C",
          "text": "数据压缩算法问题"
        },
        {
          "letter": "D",
          "text": "数据存储格式问题"
        }
      ],
      "answer": "A"
    },
    {
      "id": 23,
      "type": "single",
      "question": "当使用 Requests 库获取网页内容时，若需要设置请求头，应该使用哪个参数?",
      "options": [
        {
          "letter": "A",
          "text": "data"
        },
        {
          "letter": "B",
          "text": "params"
        },
        {
          "letter": "C",
          "text": "headers"
        },
        {
          "letter": "D",
          "text": "cookies"
        }
      ],
      "answer": "C"
    },
    {
      "id": 25,
      "type": "single",
      "question": "若业务数据中有一份关于用户活跃度的数据表，要计算平均活跃度，以下哪种情况会导致计算结果不准确?",
      "options": [
        {
          "letter": "A",
          "text": "数据中存在异常高的活跃度值"
        },
        {
          "letter": "B",
          "text": "数据量较大"
        },
        {
          "letter": "C",
          "text": "采用正确的计算公式"
        },
        {
          "letter": "D",
          "text": "数据格式统一"
        }
      ],
      "answer": "A"
    },
    {
      "id": 26,
      "type": "single",
      "question": "在 Scrapy 项目中，若要将爬取到的数据存储到 MongoDB 数据库中，需要在哪个组件中进行配置?",
      "options": [
        {
          "letter": "A",
          "text": "Spider"
        },
        {
          "letter": "B",
          "text": "Item Pipelines"
        },
        {
          "letter": "C",
          "text": "Settings.py"
        },
        {
          "letter": "D",
          "text": "Middlewares"
        }
      ],
      "answer": "B"
    },
    {
      "id": 27,
      "type": "single",
      "question": "在人工智能训练师进行业务数据处理时，数据全生命周期追踪的首要目的是。",
      "options": [
        {
          "letter": "A",
          "text": "增加数据存储容量"
        },
        {
          "letter": "B",
          "text": "确保数据合规性"
        },
        {
          "letter": "C",
          "text": "提高数据传输速度"
        },
        {
          "letter": "D",
          "text": "优化数据展示效果"
        }
      ],
      "answer": "B"
    },
    {
      "id": 29,
      "type": "single",
      "question": "在 ParseHub 中，如何选择网页上的特定元素进行抓取?",
      "options": [
        {
          "letter": "A",
          "text": "使用 XPath 表达式"
        },
        {
          "letter": "B",
          "text": "直接在网页上点击选择"
        },
        {
          "letter": "C",
          "text": "编写正则表达式"
        },
        {
          "letter": "D",
          "text": "使用 SQL 查询语句"
        }
      ],
      "answer": "B"
    },
    {
      "id": 30,
      "type": "single",
      "question": "若业务数据中有一份关于产品信息的文档，在数据全生命周期追踪中， 以下哪个环节最可能涉及数据审核?",
      "options": [
        {
          "letter": "A",
          "text": "数据收集"
        },
        {
          "letter": "B",
          "text": "数据存储"
        },
        {
          "letter": "C",
          "text": "数据使用"
        },
        {
          "letter": "D",
          "text": "数据发布"
        }
      ],
      "answer": "D"
    },
    {
      "id": 31,
      "type": "single",
      "question": "使用 Requests 库进行 HTTP 请求时，以下哪些参数可以用于设置请求的查询参数?",
      "options": [
        {
          "letter": "A",
          "text": "data"
        },
        {
          "letter": "B",
          "text": "params"
        },
        {
          "letter": "C",
          "text": "headers"
        },
        {
          "letter": "D",
          "text": "cookies"
        }
      ],
      "answer": "B"
    },
    {
      "id": 33,
      "type": "single",
      "question": "在金融领域， 哪种数据源对于分析市场趋势和制定投资策略至关重要?",
      "options": [
        {
          "letter": "A",
          "text": "社交媒体数据"
        },
        {
          "letter": "B",
          "text": "股票市场历史数据"
        },
        {
          "letter": "C",
          "text": "天气预报数据"
        },
        {
          "letter": "D",
          "text": "消费者行为数据"
        }
      ],
      "answer": "B"
    },
    {
      "id": 34,
      "type": "single",
      "question": "在进行汇总结果完整性检查时，若发现某个地区的销售数据缺失， 以下哪种方法最合适?",
      "options": [
        {
          "letter": "A",
          "text": "直接忽略该地区的数据"
        },
        {
          "letter": "B",
          "text": "用该地区相邻地区的数据进行估算"
        },
        {
          "letter": "C",
          "text": "重新采集该地区的数据"
        },
        {
          "letter": "D",
          "text": "用全国平均数据进行填充"
        }
      ],
      "answer": "C"
    },
    {
      "id": 35,
      "type": "single",
      "question": "数据采集过程中的数据清洗步骤主要是为了",
      "options": [
        {
          "letter": "A",
          "text": "提高数据质量"
        },
        {
          "letter": "B",
          "text": "减少数据存储空间"
        },
        {
          "letter": "C",
          "text": "加速数据处理速度"
        },
        {
          "letter": "D",
          "text": "简化数据分析过程"
        }
      ],
      "answer": "A"
    },
    {
      "id": 36,
      "type": "single",
      "question": "在使用 Requests 库获取网页内容时，若要获取响应的二进制数据(如图片、音频等)，应该使用哪个属性?",
      "options": [
        {
          "letter": "A",
          "text": "text"
        },
        {
          "letter": "B",
          "text": "content"
        },
        {
          "letter": "C",
          "text": "json()"
        },
        {
          "letter": "D",
          "text": "headers"
        }
      ],
      "answer": "B"
    },
    {
      "id": 37,
      "type": "single",
      "question": "若要对采集到的点云数据进行可视化展示，以下哪种软件或工具较为常用?",
      "options": [
        {
          "letter": "A",
          "text": "Photoshop"
        },
        {
          "letter": "B",
          "text": "CloudCompare"
        },
        {
          "letter": "C",
          "text": "Excel"
        },
        {
          "letter": "D",
          "text": "AutoCAD"
        }
      ],
      "answer": "B"
    },
    {
      "id": 38,
      "type": "single",
      "question": "在数据采集流程中，哪个环节是对采集到的数据进行质量审核?",
      "options": [
        {
          "letter": "A",
          "text": "发起请求"
        },
        {
          "letter": "B",
          "text": "获取响应"
        },
        {
          "letter": "C",
          "text": "解析数据"
        },
        {
          "letter": "D",
          "text": "质量审核"
        }
      ],
      "answer": "D"
    },
    {
      "id": 40,
      "type": "single",
      "question": "在撰写业务数据汇总报告时，对于关键指标的描述， 以下哪种方式最合适?",
      "options": [
        {
          "letter": "A",
          "text": "只给出数值，不进行任何解释"
        },
        {
          "letter": "B",
          "text": "给出数值并详细解释指标的含义、计算方法和重要性"
        },
        {
          "letter": "C",
          "text": "用模糊的语言描述指标，不给出具体数值"
        },
        {
          "letter": "D",
          "text": "省略关键指标的描述"
        }
      ],
      "answer": "B"
    },
    {
      "id": 42,
      "type": "single",
      "question": "当使用 Python 进行视频数据采集时， 以下哪个库常用于从视频流中读取帧?",
      "options": [
        {
          "letter": "A",
          "text": "NumPy"
        },
        {
          "letter": "B",
          "text": "Pandas"
        },
        {
          "letter": "C",
          "text": "OpenCV"
        },
        {
          "letter": "D",
          "text": "Matplotlib"
        }
      ],
      "answer": "C"
    },
    {
      "id": 43,
      "type": "single",
      "question": "下列哪种数据类型在医疗数据采集中最为常见?",
      "options": [
        {
          "letter": "A",
          "text": "图片数据"
        },
        {
          "letter": "B",
          "text": "音频数据"
        },
        {
          "letter": "C",
          "text": "视频数据"
        },
        {
          "letter": "D",
          "text": "文本数据"
        }
      ],
      "answer": "D"
    },
    {
      "id": 46,
      "type": "single",
      "question": "当使用激光雷达进行点云数据采集时， 以下哪个因素会影响采集到的点云数据的精度?",
      "options": [
        {
          "letter": "A",
          "text": "激光雷达的分辨率"
        },
        {
          "letter": "B",
          "text": "采集环境的温度"
        },
        {
          "letter": "C",
          "text": "采集人员的身高"
        },
        {
          "letter": "D",
          "text": "计算机的内存大小"
        }
      ],
      "answer": "A"
    },
    {
      "id": 47,
      "type": "single",
      "question": "在确定汇总指标准确性时，对于时间序列数据的汇总，以下哪种因素最需要关注?",
      "options": [
        {
          "letter": "A",
          "text": "数据的单位"
        },
        {
          "letter": "B",
          "text": "数据的时效性"
        },
        {
          "letter": "C",
          "text": "数据的存储格式"
        },
        {
          "letter": "D",
          "text": "数据的来源渠道"
        }
      ],
      "answer": "B"
    },
    {
      "id": 48,
      "type": "single",
      "question": "在数据全生命周期追踪中，对于数据的备份和恢复， 以下哪种策略最合理?",
      "options": [
        {
          "letter": "A",
          "text": "每天进行一次全量备份"
        },
        {
          "letter": "B",
          "text": "每周进行一次全量备份，每天进行一次增量备份"
        },
        {
          "letter": "C",
          "text": "每月进行一次全量备份，每周进行一次增量备份"
        },
        {
          "letter": "D",
          "text": "只在数据丢失时进行备份"
        }
      ],
      "answer": "B"
    },
    {
      "id": 50,
      "type": "single",
      "question": "以下哪种数据清洗方法不适用于处理图像文件中的空值问题?",
      "options": [
        {
          "letter": "A",
          "text": "使用全局变量填充空缺值"
        },
        {
          "letter": "B",
          "text": "使用图像插值法填充空缺区域"
        },
        {
          "letter": "C",
          "text": "忽略包含空值的图像文件"
        },
        {
          "letter": "D",
          "text": "通过比较图像的哈希值去除重复图像"
        }
      ],
      "answer": "D"
    },
    {
      "id": 51,
      "type": "single",
      "question": "在【语义标注】里， “实体”指的是",
      "options": [
        {
          "letter": "A",
          "text": "文本中的虚词"
        },
        {
          "letter": "B",
          "text": "文本中具有明确意义和独立存在的对象"
        },
        {
          "letter": "C",
          "text": "文本中的标点符号"
        },
        {
          "letter": "D",
          "text": "文本中的语气词"
        }
      ],
      "answer": "B"
    },
    {
      "id": 52,
      "type": "single",
      "question": "以下关于处理数据缺失值的说法，错误的是?",
      "options": [
        {
          "letter": "A",
          "text": "缺失值处理是数据清洗的重要步骤之一"
        },
        {
          "letter": "B",
          "text": "缺失值的存在一定会对模型预测结果产生负面影响"
        },
        {
          "letter": "C",
          "text": "对于缺失值较多的特征，可以考虑删除该特征"
        },
        {
          "letter": "D",
          "text": "插值法填充适用于所有类型的缺失值"
        }
      ],
      "answer": "D"
    },
    {
      "id": 53,
      "type": "single",
      "question": "OpenCV 库在数据清洗中主要用于处理哪种类型的数据?",
      "options": [
        {
          "letter": "A",
          "text": "文本数据"
        },
        {
          "letter": "B",
          "text": "图像数据"
        },
        {
          "letter": "C",
          "text": "音频数据"
        },
        {
          "letter": "D",
          "text": "视频数据"
        }
      ],
      "answer": "B"
    },
    {
      "id": 55,
      "type": "single",
      "question": "在进行关联分析时，如果某项集的支持度达到预定义的最小支持度阈值，则该项集被称为",
      "options": [
        {
          "letter": "A",
          "text": "频繁项集"
        },
        {
          "letter": "B",
          "text": "关联规则"
        },
        {
          "letter": "C",
          "text": "非频繁项集"
        },
        {
          "letter": "D",
          "text": "强关联规则"
        }
      ],
      "answer": "A"
    },
    {
      "id": 56,
      "type": "single",
      "question": "以下哪项是统计操作规范性检查中用于确保数据完整性的重要措施?",
      "options": [
        {
          "letter": "A",
          "text": "对数据进行加密处理"
        },
        {
          "letter": "B",
          "text": "定期检查数据存储设备的状态"
        },
        {
          "letter": "C",
          "text": "建立数据备份和恢复机制"
        },
        {
          "letter": "D",
          "text": "限制对数据的访问权限"
        }
      ],
      "answer": "C"
    },
    {
      "id": 57,
      "type": "single",
      "question": "在 Pandas 中，如何查看 DataFrame 的基本信息?",
      "options": [
        {
          "letter": "A",
          "text": "df.info()"
        },
        {
          "letter": "B",
          "text": "df.describe()"
        },
        {
          "letter": "C",
          "text": "df.head()"
        },
        {
          "letter": "D",
          "text": "df.tail()"
        }
      ],
      "answer": "A"
    },
    {
      "id": 60,
      "type": "single",
      "question": "在说话人识别标注中， 为了提高标注的准确性，通常会结合多种特征， 以下不属于常用特征的是",
      "options": [
        {
          "letter": "A",
          "text": "语音的音色"
        },
        {
          "letter": "B",
          "text": "语音的时长"
        },
        {
          "letter": "C",
          "text": "说话人的外貌"
        },
        {
          "letter": "D",
          "text": "语音的语调"
        }
      ],
      "answer": "C"
    },
    {
      "id": 61,
      "type": "single",
      "question": "在制定数据标注规则时， 以下哪项是不必要的?",
      "options": [
        {
          "letter": "A",
          "text": "明确标注的目标和任务"
        },
        {
          "letter": "B",
          "text": "规定标注的格式和标准"
        },
        {
          "letter": "C",
          "text": "详细描述每个标注类别的定义和边界"
        },
        {
          "letter": "D",
          "text": "规定标注员的工作时间和休息时间"
        }
      ],
      "answer": "D"
    },
    {
      "id": 62,
      "type": "single",
      "question": "以下哪种技术通常用于数据集成处理中的实时数据集成?",
      "options": [
        {
          "letter": "A",
          "text": "ETL(Extract, Transform, Load)"
        },
        {
          "letter": "B",
          "text": "ELT(Extract, Load, Transform)"
        },
        {
          "letter": "C",
          "text": "流处理"
        },
        {
          "letter": "D",
          "text": "批处理"
        }
      ],
      "answer": "C"
    },
    {
      "id": 64,
      "type": "single",
      "question": "在语音数据标注工具中，对语音中特殊音效(如笑声、咳嗽声)进行标注的类型是",
      "options": [
        {
          "letter": "A",
          "text": "非语音声音标注"
        },
        {
          "letter": "B",
          "text": "语音情感标注"
        },
        {
          "letter": "C",
          "text": "语音语调标注"
        },
        {
          "letter": "D",
          "text": "语音内容标注"
        }
      ],
      "answer": "A"
    },
    {
      "id": 65,
      "type": "single",
      "question": "以下哪项不是数据分类的基本步骤?",
      "options": [
        {
          "letter": "A",
          "text": "确定分类维度"
        },
        {
          "letter": "B",
          "text": "制定分类标准"
        },
        {
          "letter": "C",
          "text": "实施分类操作"
        },
        {
          "letter": "D",
          "text": "数据清洗"
        }
      ],
      "answer": "D"
    },
    {
      "id": 66,
      "type": "single",
      "question": "在处理标注歧义时，引入专家评审机制的主要目的是",
      "options": [
        {
          "letter": "A",
          "text": "增加标注成本"
        },
        {
          "letter": "B",
          "text": "凭借专家经验解决复杂歧义问题"
        },
        {
          "letter": "C",
          "text": "延长标注时间"
        },
        {
          "letter": "D",
          "text": "让专家替代标注人员工作"
        }
      ],
      "answer": "B"
    },
    {
      "id": 67,
      "type": "single",
      "question": "在进行图像数据清洗时，对于不可读图像文件的处理，通常采取哪种措施?",
      "options": [
        {
          "letter": "A",
          "text": "使用哈希值比较图像相似性"
        },
        {
          "letter": "B",
          "text": "删除不可读图像文件"
        },
        {
          "letter": "C",
          "text": "通过像素填充调整图像大小"
        },
        {
          "letter": "D",
          "text": "使用 Laplacian 函数计算图像的方差"
        }
      ],
      "answer": "B"
    },
    {
      "id": 69,
      "type": "single",
      "question": "在处理音频数据时，识别并删除重复或冗余的音频片段属于哪种类型的清洗?",
      "options": [
        {
          "letter": "A",
          "text": "数据类型转换"
        },
        {
          "letter": "B",
          "text": "缺失值处理"
        },
        {
          "letter": "C",
          "text": "数据质量修正"
        },
        {
          "letter": "D",
          "text": "异常值检测"
        }
      ],
      "answer": "C"
    },
    {
      "id": 70,
      "type": "single",
      "question": "以下哪项不是数据透视表可以执行的计算类型?",
      "options": [
        {
          "letter": "A",
          "text": "求和"
        },
        {
          "letter": "B",
          "text": "平均值"
        },
        {
          "letter": "C",
          "text": "最大值"
        },
        {
          "letter": "D",
          "text": "中位数"
        }
      ],
      "answer": "D"
    },
    {
      "id": 71,
      "type": "single",
      "question": "分类结果完整性验证中，抽样检查的原则是什么?",
      "options": [
        {
          "letter": "A",
          "text": "样本量越大越好"
        },
        {
          "letter": "B",
          "text": "随机选取样本"
        },
        {
          "letter": "C",
          "text": "仅选取难度大的样本"
        },
        {
          "letter": "D",
          "text": "仅选取标注结果一致的样本"
        }
      ],
      "answer": "B"
    },
    {
      "id": 72,
      "type": "single",
      "question": "下列哪项不是文本数据标注工具的主要功能?",
      "options": [
        {
          "letter": "A",
          "text": "文本分类标注"
        },
        {
          "letter": "B",
          "text": "情感分析标注"
        },
        {
          "letter": "C",
          "text": "图像识别标注"
        },
        {
          "letter": "D",
          "text": "实体识别标注"
        }
      ],
      "answer": "C"
    },
    {
      "id": 73,
      "type": "single",
      "question": "在语音数据标注工具中，若要标记语音信号在频域上的特征，可能会用到的标注是",
      "options": [
        {
          "letter": "A",
          "text": "频谱标注"
        },
        {
          "letter": "B",
          "text": "时域标注"
        },
        {
          "letter": "C",
          "text": "语音强度标注"
        },
        {
          "letter": "D",
          "text": "语音活动检测标注"
        }
      ],
      "answer": "A"
    },
    {
      "id": 74,
      "type": "single",
      "question": "在数据分类中，按照企业生产运营模式划分数据来源，以下哪一项不属于此分类标准?",
      "options": [
        {
          "letter": "A",
          "text": "研发数据域"
        },
        {
          "letter": "B",
          "text": "销售数据域"
        },
        {
          "letter": "C",
          "text": "生产数据域"
        },
        {
          "letter": "D",
          "text": "运维数据域"
        }
      ],
      "answer": "B"
    },
    {
      "id": 75,
      "type": "single",
      "question": "在分组统计中，将数据按照某个或多个特征进行分组的目的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "减少数据量以提高处理速度"
        },
        {
          "letter": "B",
          "text": "便于对数据进行详细的分析和比较"
        },
        {
          "letter": "C",
          "text": "消除数据中的异常值"
        },
        {
          "letter": "D",
          "text": "增加数据的维度以便进行更多操作"
        }
      ],
      "answer": "B"
    },
    {
      "id": 76,
      "type": "single",
      "question": "下列哪个选项不是频数分析中的集中趋势指标?",
      "options": [
        {
          "letter": "A",
          "text": "均值"
        },
        {
          "letter": "B",
          "text": "中位数"
        },
        {
          "letter": "C",
          "text": "众数"
        },
        {
          "letter": "D",
          "text": "标准差"
        }
      ],
      "answer": "D"
    },
    {
      "id": 78,
      "type": "single",
      "question": "下列哪个函数不是 Scikit-learn 库中的函数?",
      "options": [
        {
          "letter": "A",
          "text": "fit()"
        },
        {
          "letter": "B",
          "text": "predict()"
        },
        {
          "letter": "C",
          "text": "load_data()"
        },
        {
          "letter": "D",
          "text": "train_test_split()"
        }
      ],
      "answer": "C"
    },
    {
      "id": 79,
      "type": "single",
      "question": "在数据集成处理中，为了确保数据的一致性和准确性，通常需要进行哪个步骤?",
      "options": [
        {
          "letter": "A",
          "text": "数据清洗"
        },
        {
          "letter": "B",
          "text": "数据转换"
        },
        {
          "letter": "C",
          "text": "数据校验"
        },
        {
          "letter": "D",
          "text": "数据迁移"
        }
      ],
      "answer": "C"
    },
    {
      "id": 80,
      "type": "single",
      "question": "在因果推断中，使用工具变量法的主要目的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "提高模型的拟合度"
        },
        {
          "letter": "B",
          "text": "解决内生性问题"
        },
        {
          "letter": "C",
          "text": "增加模型的复杂度"
        },
        {
          "letter": "D",
          "text": "减少数据的维度"
        }
      ],
      "answer": "B"
    },
    {
      "id": 81,
      "type": "single",
      "question": "在数据清洗过程中，如果发现数据集存在重复记录， 但希望保留每条记录并标记其是否为重复记录，应该使用哪个函数?",
      "options": [
        {
          "letter": "A",
          "text": "duplicated()"
        },
        {
          "letter": "B",
          "text": "drop_duplicates()"
        },
        {
          "letter": "C",
          "text": "unique()"
        },
        {
          "letter": "D",
          "text": "nunique()"
        }
      ],
      "answer": "A"
    },
    {
      "id": 83,
      "type": "single",
      "question": "在统计效率评估中，均方误差(MSE)等于?",
      "options": [
        {
          "letter": "A",
          "text": "偏差的平方"
        },
        {
          "letter": "B",
          "text": "方差"
        },
        {
          "letter": "C",
          "text": "偏差的平方加上方差"
        },
        {
          "letter": "D",
          "text": "偏差与方差的乘积"
        }
      ],
      "answer": "C"
    },
    {
      "id": 84,
      "type": "single",
      "question": "在处理异常值时，采用 99 分位线和 1 分位线替换异常值的方法属于",
      "options": [
        {
          "letter": "A",
          "text": "删除法"
        },
        {
          "letter": "B",
          "text": "填充法"
        },
        {
          "letter": "C",
          "text": "插值法"
        },
        {
          "letter": "D",
          "text": "修正法"
        }
      ],
      "answer": "B"
    },
    {
      "id": 85,
      "type": "single",
      "question": "视频数据标注工具中， 若要对视频中人物的动作进行详细描述和分类，最适合的标注方式是",
      "options": [
        {
          "letter": "A",
          "text": "时间戳标注"
        },
        {
          "letter": "B",
          "text": "骨骼点标注"
        },
        {
          "letter": "C",
          "text": "属性标注"
        },
        {
          "letter": "D",
          "text": "语音转写标注"
        }
      ],
      "answer": "B"
    },
    {
      "id": 88,
      "type": "single",
      "question": "在统计效率评估指标中，用于衡量估计量精确性的指标是?",
      "options": [
        {
          "letter": "A",
          "text": "偏差"
        },
        {
          "letter": "B",
          "text": "方差"
        },
        {
          "letter": "C",
          "text": "均方误差"
        },
        {
          "letter": "D",
          "text": "一致性"
        }
      ],
      "answer": "B"
    },
    {
      "id": 89,
      "type": "single",
      "question": "在标注操作规范性检查中，对于标注文件的命名规范，以下哪种做法是正确的?",
      "options": [
        {
          "letter": "A",
          "text": "使用任意名称， 只要自己记得就行"
        },
        {
          "letter": "B",
          "text": "按照“项目名称_标注人员_ 日期”的格式命名"
        },
        {
          "letter": "C",
          "text": "只标注项目名称"
        },
        {
          "letter": "D",
          "text": "用简单的数字命名"
        }
      ],
      "answer": "B"
    },
    {
      "id": 90,
      "type": "single",
      "question": "在使用 labelme 软件进行图像标注时， 如果发现标注框与实际目标对象存在偏差，应该",
      "options": [
        {
          "letter": "A",
          "text": "删除整个标注框"
        },
        {
          "letter": "B",
          "text": "重新绘制标注框以更准确地贴合目标对象"
        },
        {
          "letter": "C",
          "text": "使用哈希值判断图像是否重复"
        },
        {
          "letter": "D",
          "text": "通过比较图像的直方图判断相似度"
        }
      ],
      "answer": "B"
    },
    {
      "id": 92,
      "type": "single",
      "question": "下列哪种方法不是用于因果推断的?",
      "options": [
        {
          "letter": "A",
          "text": "回归分析"
        },
        {
          "letter": "B",
          "text": "倾向得分匹配"
        },
        {
          "letter": "C",
          "text": "聚类分析"
        },
        {
          "letter": "D",
          "text": "双重差分法"
        }
      ],
      "answer": "C"
    },
    {
      "id": 93,
      "type": "single",
      "question": "在使用 Excel 的数据分析工具进行回归分析时，哪个参数可以用来衡量模型的拟合优度?",
      "options": [
        {
          "letter": "A",
          "text": "R 平方"
        },
        {
          "letter": "B",
          "text": "F 值"
        },
        {
          "letter": "C",
          "text": "t 值"
        },
        {
          "letter": "D",
          "text": "p 值"
        }
      ],
      "answer": "A"
    },
    {
      "id": 94,
      "type": "single",
      "question": "以下哪种方法不属于语音数据清洗的范畴?",
      "options": [
        {
          "letter": "A",
          "text": "删除重复的语音片段"
        },
        {
          "letter": "B",
          "text": "纠正语音中的错误发音"
        },
        {
          "letter": "C",
          "text": "将语音转换成文本"
        },
        {
          "letter": "D",
          "text": "调整语音的音量和语速"
        }
      ],
      "answer": "C"
    },
    {
      "id": 95,
      "type": "single",
      "question": "在使用 Pandas 进行缺失值填充时，如果想要使用前一个非缺失值进行填充， 应使用哪种方法?",
      "options": [
        {
          "letter": "A",
          "text": "fillna(value=...)"
        },
        {
          "letter": "B",
          "text": "fillna(method='ffill')"
        },
        {
          "letter": "C",
          "text": "fillna(method='bfill')"
        },
        {
          "letter": "D",
          "text": "interpolate()"
        }
      ],
      "answer": "B"
    },
    {
      "id": 96,
      "type": "single",
      "question": "在标注数据安全性保障中，对标注数据进行加密处理的主要目的是",
      "options": [
        {
          "letter": "A",
          "text": "方便数据共享"
        },
        {
          "letter": "B",
          "text": "防止数据泄露"
        },
        {
          "letter": "C",
          "text": "提高数据标注效率"
        },
        {
          "letter": "D",
          "text": "降低数据存储成本"
        }
      ],
      "answer": "B"
    },
    {
      "id": 97,
      "type": "single",
      "question": "在 Excel 中进行数据分析时，如果想查看数据的分布情况，常用的图形是",
      "options": [
        {
          "letter": "A",
          "text": "折线图"
        },
        {
          "letter": "B",
          "text": "散点图"
        },
        {
          "letter": "C",
          "text": "直方图"
        },
        {
          "letter": "D",
          "text": "饼图"
        }
      ],
      "answer": "C"
    },
    {
      "id": 98,
      "type": "single",
      "question": "在使用 Excel 的直方图分析工具时，哪个步骤是用来设置数据的分组区间?",
      "options": [
        {
          "letter": "A",
          "text": "选择数据源"
        },
        {
          "letter": "B",
          "text": "设置图表类型"
        },
        {
          "letter": "C",
          "text": "设置分段点"
        },
        {
          "letter": "D",
          "text": "选择输出选项"
        }
      ],
      "answer": "C"
    },
    {
      "id": 99,
      "type": "single",
      "question": "在 SPSS 中，进行方差分析时，如果希望比较三个或更多组之间的均值是否存在显著差异， 应该使用哪种方差分析类型?",
      "options": [
        {
          "letter": "A",
          "text": "单因素方差分析"
        },
        {
          "letter": "B",
          "text": "双因素方差分析"
        },
        {
          "letter": "C",
          "text": "协方差分析"
        },
        {
          "letter": "D",
          "text": "重复测量方差分析"
        }
      ],
      "answer": "A"
    },
    {
      "id": 101,
      "type": "single",
      "question": "以下关于【语义标注】中“主题概念”的描述，正确的是",
      "options": [
        {
          "letter": "A",
          "text": "主题概念是对文本中所有词汇的简单罗列"
        },
        {
          "letter": "B",
          "text": "主题概念是文本围绕的核心思想或主要内容范畴"
        },
        {
          "letter": "C",
          "text": "主题概念只存在于标题中"
        },
        {
          "letter": "D",
          "text": "主题概念与文本的具体内容无关"
        }
      ],
      "answer": "B"
    },
    {
      "id": 102,
      "type": "single",
      "question": "在进行统计质量评估时， 以下哪个步骤是确保数据完整性的重要环节?",
      "options": [
        {
          "letter": "A",
          "text": "数据清洗"
        },
        {
          "letter": "B",
          "text": "数据抽样"
        },
        {
          "letter": "C",
          "text": "数据编码"
        },
        {
          "letter": "D",
          "text": "数据可视化"
        }
      ],
      "answer": "A"
    },
    {
      "id": 103,
      "type": "single",
      "question": "以下哪种情况在 3D 点云标注中属于标注错误?",
      "options": [
        {
          "letter": "A",
          "text": "标注的类别与物体实际类别一致"
        },
        {
          "letter": "B",
          "text": "标注的区域包含了物体及其周边少量无关点"
        },
        {
          "letter": "C",
          "text": "标注的物体边界与实际边界完全重合"
        },
        {
          "letter": "D",
          "text": "标注的类别与物体实际类别不符"
        }
      ],
      "answer": "D"
    },
    {
      "id": 104,
      "type": "single",
      "question": "在评估统计数据的可靠性时，以下哪个因素不是主要考虑的?",
      "options": [
        {
          "letter": "A",
          "text": "数据收集的方法"
        },
        {
          "letter": "B",
          "text": "数据处理的流程"
        },
        {
          "letter": "C",
          "text": "数据分析人员的经验"
        },
        {
          "letter": "D",
          "text": "数据的存储格式"
        }
      ],
      "answer": "D"
    },
    {
      "id": 105,
      "type": "single",
      "question": "在语音数据中，下列哪项不属于语音标注的范畴?",
      "options": [
        {
          "letter": "A",
          "text": "语音转写"
        },
        {
          "letter": "B",
          "text": "文本分类"
        },
        {
          "letter": "C",
          "text": "情绪判断"
        },
        {
          "letter": "D",
          "text": "声纹识别"
        }
      ],
      "answer": "B"
    },
    {
      "id": 106,
      "type": "single",
      "question": "下列哪个工具常用于图像数据的清洗?",
      "options": [
        {
          "letter": "A",
          "text": "Pandas"
        },
        {
          "letter": "B",
          "text": "NumPy"
        },
        {
          "letter": "C",
          "text": "OpenCV"
        },
        {
          "letter": "D",
          "text": "SmartBl"
        }
      ],
      "answer": "C"
    },
    {
      "id": 107,
      "type": "single",
      "question": "在文本数据标注中，以下哪种标注类型用于标识文本中的特定实体?",
      "options": [
        {
          "letter": "A",
          "text": "文本分类"
        },
        {
          "letter": "B",
          "text": "情感分析"
        },
        {
          "letter": "C",
          "text": "命名实体识别"
        },
        {
          "letter": "D",
          "text": "关键词提取"
        }
      ],
      "answer": "C"
    },
    {
      "id": 108,
      "type": "single",
      "question": "在使用 Pandas 处理缺失值时，如果想要保留至少含有两个非缺失值的行，应该设置 df.dropna函数的哪个参数?",
      "options": [
        {
          "letter": "A",
          "text": "how='all'"
        },
        {
          "letter": "B",
          "text": "how='any'"
        },
        {
          "letter": "C",
          "text": "thresh=2"
        },
        {
          "letter": "D",
          "text": "axis=0"
        }
      ],
      "answer": "C"
    },
    {
      "id": 109,
      "type": "single",
      "question": "在使用 Krippendorff's Alpha 系数进行标注一致性评估时，以下哪种情况会影响评估结果?",
      "options": [
        {
          "letter": "A",
          "text": "标注者的数量"
        },
        {
          "letter": "B",
          "text": "标注结果的类别数量"
        },
        {
          "letter": "C",
          "text": "标注数据的顺序"
        },
        {
          "letter": "D",
          "text": "标注者的个人偏好"
        }
      ],
      "answer": "D"
    },
    {
      "id": 110,
      "type": "single",
      "question": "在处理文本数据时，以下哪个 Python 库常用于数据清洗中的字符串操作?",
      "options": [
        {
          "letter": "A",
          "text": "NumPy"
        },
        {
          "letter": "B",
          "text": "Pandas"
        },
        {
          "letter": "C",
          "text": "Re(正则表达式)"
        },
        {
          "letter": "D",
          "text": "Scikit-learn"
        }
      ],
      "answer": "C"
    },
    {
      "id": 111,
      "type": "single",
      "question": "下列哪种格式常用于存储音频数据，并且是无损格式?",
      "options": [
        {
          "letter": "A",
          "text": "MP3"
        },
        {
          "letter": "B",
          "text": "WAV"
        },
        {
          "letter": "C",
          "text": "AAC"
        },
        {
          "letter": "D",
          "text": "FLV"
        }
      ],
      "answer": "B"
    },
    {
      "id": 112,
      "type": "single",
      "question": "下列哪项不属于数据标注前的准备工作?",
      "options": [
        {
          "letter": "A",
          "text": "确定标注目标"
        },
        {
          "letter": "B",
          "text": "选择标注工具"
        },
        {
          "letter": "C",
          "text": "随意标注数据以熟悉流程"
        },
        {
          "letter": "D",
          "text": "制定标注规则"
        }
      ],
      "answer": "C"
    },
    {
      "id": 113,
      "type": "single",
      "question": "在使用【图像数据标注工具】时，为了提高标注效率，以下做法不正确的是",
      "options": [
        {
          "letter": "A",
          "text": "熟悉工具的快捷键操作"
        },
        {
          "letter": "B",
          "text": "随意标注，不考虑标注准确性"
        },
        {
          "letter": "C",
          "text": "对图像进行预处理，提高图像清晰度"
        },
        {
          "letter": "D",
          "text": "制定合理的标注流程和规范"
        }
      ],
      "answer": "B"
    },
    {
      "id": 114,
      "type": "single",
      "question": "自动化分析框架中，模型评估的主要指标不包括以下哪一项?",
      "options": [
        {
          "letter": "A",
          "text": "准确率"
        },
        {
          "letter": "B",
          "text": "召回率"
        },
        {
          "letter": "C",
          "text": "F1 值"
        },
        {
          "letter": "D",
          "text": "数据量"
        }
      ],
      "answer": "D"
    },
    {
      "id": 115,
      "type": "single",
      "question": "下列哪个步骤不属于数据清洗的流程?",
      "options": [
        {
          "letter": "A",
          "text": "数据收集"
        },
        {
          "letter": "B",
          "text": "缺失值处理"
        },
        {
          "letter": "C",
          "text": "异常值检测"
        },
        {
          "letter": "D",
          "text": "数据类型转换"
        }
      ],
      "answer": "A"
    },
    {
      "id": 116,
      "type": "single",
      "question": "下列哪种格式不属于视频文件格式?",
      "options": [
        {
          "letter": "A",
          "text": "MP4"
        },
        {
          "letter": "B",
          "text": "AVI"
        },
        {
          "letter": "C",
          "text": "FLAC"
        },
        {
          "letter": "D",
          "text": "WMV"
        }
      ],
      "answer": "C"
    },
    {
      "id": 119,
      "type": "single",
      "question": "以下哪种情况可能违反日志管理的法律合规要求?",
      "options": [
        {
          "letter": "A",
          "text": "对日志数据进行加密存储"
        },
        {
          "letter": "B",
          "text": "按照内部规定定期备份日志"
        },
        {
          "letter": "C",
          "text": "将包含客户敏感信息的日志未经脱敏处理就提供给第三方"
        },
        {
          "letter": "D",
          "text": "在日志保存期限届满后及时删除日志"
        }
      ],
      "answer": "C"
    },
    {
      "id": 120,
      "type": "single",
      "question": "哪种备份类型会复制所有选定文件，不考虑之前备份的状态?",
      "options": [
        {
          "letter": "A",
          "text": "增量备份"
        },
        {
          "letter": "B",
          "text": "差异备份"
        },
        {
          "letter": "C",
          "text": "全量备份"
        },
        {
          "letter": "D",
          "text": "镜像备份"
        }
      ],
      "answer": "C"
    },
    {
      "id": 121,
      "type": "single",
      "question": "在智能系统知识库维护中，以下哪项属于基础操作?",
      "options": [
        {
          "letter": "A",
          "text": "知识图谱构建"
        },
        {
          "letter": "B",
          "text": "知识推理验证"
        },
        {
          "letter": "C",
          "text": "知识条目更新"
        },
        {
          "letter": "D",
          "text": "知识表示方法研究"
        }
      ],
      "answer": "C"
    },
    {
      "id": 124,
      "type": "single",
      "question": "用于灾难恢复的备份数据应存储在什么位置?",
      "options": [
        {
          "letter": "A",
          "text": "本地服务器"
        },
        {
          "letter": "B",
          "text": "同一机房的另一服务器"
        },
        {
          "letter": "C",
          "text": "异地数据中心"
        },
        {
          "letter": "D",
          "text": "网络存储服务器"
        }
      ],
      "answer": "C"
    },
    {
      "id": 125,
      "type": "single",
      "question": "智能运维平台进行日志分析时，首要处理步骤是?",
      "options": [
        {
          "letter": "A",
          "text": "建立机器学习模型"
        },
        {
          "letter": "B",
          "text": "日志标准化处理"
        },
        {
          "letter": "C",
          "text": "可视化展示"
        },
        {
          "letter": "D",
          "text": "根因分析"
        }
      ],
      "answer": "B"
    },
    {
      "id": 127,
      "type": "single",
      "question": "系统日志对于计算机犯罪调查有什么作用?",
      "options": [
        {
          "letter": "A",
          "text": "提供证据来源"
        },
        {
          "letter": "B",
          "text": "直接阻止犯罪"
        },
        {
          "letter": "C",
          "text": "预测犯罪发生"
        },
        {
          "letter": "D",
          "text": "无任何作用"
        }
      ],
      "answer": "A"
    },
    {
      "id": 129,
      "type": "single",
      "question": "在使用日志分析工具分析智能系统日志时，若发现日志中存在大量的重复信息，最可能的原因是",
      "options": [
        {
          "letter": "A",
          "text": "系统日志记录功能异常"
        },
        {
          "letter": "B",
          "text": "网络攻击导致日志被篡改"
        },
        {
          "letter": "C",
          "text": "日志收集工具配置错误"
        },
        {
          "letter": "D",
          "text": "服务器硬件故障"
        }
      ],
      "answer": "C"
    },
    {
      "id": 130,
      "type": "single",
      "question": "在日志分析工具中，对日志进行过滤操作时，以下哪种过滤条件最不合理",
      "options": [
        {
          "letter": "A",
          "text": "根据日志级别过滤"
        },
        {
          "letter": "B",
          "text": "根据 IP 地址过滤"
        },
        {
          "letter": "C",
          "text": "根据日志文件大小过滤"
        },
        {
          "letter": "D",
          "text": "根据日志时间过滤"
        }
      ],
      "answer": "C"
    },
    {
      "id": 131,
      "type": "single",
      "question": "通过实例学习建立决策模型的系统属于:",
      "options": [
        {
          "letter": "A",
          "text": "机器学习"
        },
        {
          "letter": "B",
          "text": "知识图谱"
        },
        {
          "letter": "C",
          "text": "自然语言处理"
        },
        {
          "letter": "D",
          "text": "计算机视觉"
        }
      ],
      "answer": "A"
    },
    {
      "id": 133,
      "type": "single",
      "question": "关于 Pandas 的时间序列功能，以下说法错误的是",
      "options": [
        {
          "letter": "A",
          "text": "pd.to_datetime()可将字符串转为时间戳"
        },
        {
          "letter": "B",
          "text": "dt 访问器可以提取时间属性"
        },
        {
          "letter": "C",
          "text": "不支持时区转换"
        },
        {
          "letter": "D",
          "text": "可以生成日期范围"
        }
      ],
      "answer": "C"
    },
    {
      "id": 135,
      "type": "single",
      "question": "关于 Transformer 模型，以下说法正确的是",
      "options": [
        {
          "letter": "A",
          "text": "仅能处理图像数据"
        },
        {
          "letter": "B",
          "text": "完全依赖卷积操作"
        },
        {
          "letter": "C",
          "text": "采用自注意力机制"
        },
        {
          "letter": "D",
          "text": "不适合自然语言处理任务"
        }
      ],
      "answer": "C"
    },
    {
      "id": 137,
      "type": "single",
      "question": "在 Python 中， 以下哪个方法用于将列表转换为元组?",
      "options": [
        {
          "letter": "A",
          "text": "list()"
        },
        {
          "letter": "B",
          "text": "tuple()"
        },
        {
          "letter": "C",
          "text": "set()"
        },
        {
          "letter": "D",
          "text": "dict()"
        }
      ],
      "answer": "B"
    },
    {
      "id": 138,
      "type": "single",
      "question": "关于商业秘密的保护， 以下说法错误的是",
      "options": [
        {
          "letter": "A",
          "text": "需要向政府部门登记"
        },
        {
          "letter": "B",
          "text": "具有秘密性"
        },
        {
          "letter": "C",
          "text": "具有商业价值"
        },
        {
          "letter": "D",
          "text": "权利人采取了保密措施"
        }
      ],
      "answer": "A"
    },
    {
      "id": 140,
      "type": "single",
      "question": "终身学习的观念的确立打破了以往将学习活动局限在学校教育的阶段，使学习活动能够贯穿人生全程的各个阶段，作为青年和成年人自身，应当转变认识，特别从哪个方面上进行转变?",
      "options": [
        {
          "letter": "A",
          "text": "空间观念"
        },
        {
          "letter": "B",
          "text": "价值观念"
        },
        {
          "letter": "C",
          "text": "时间观念"
        },
        {
          "letter": "D",
          "text": "参与观念"
        }
      ],
      "answer": "C"
    },
    {
      "id": 141,
      "type": "single",
      "question": "在自动化标注工具选型时，最符合\"精益求精\"原则的评估维度是",
      "options": [
        {
          "letter": "A",
          "text": "界面美观度"
        },
        {
          "letter": "B",
          "text": "部署便捷性"
        },
        {
          "letter": "C",
          "text": "与现有流程兼容性"
        },
        {
          "letter": "D",
          "text": "单位成本标注效率提升值"
        }
      ],
      "answer": "D"
    },
    {
      "id": 142,
      "type": "single",
      "question": "多节点分布式训练结束后，训练师应优先执行的操作是",
      "options": [
        {
          "letter": "A",
          "text": "立即关闭所有计算节点"
        },
        {
          "letter": "B",
          "text": "分析训练日志"
        },
        {
          "letter": "C",
          "text": "释放闲置 GPU 资源"
        },
        {
          "letter": "D",
          "text": "备份模型参数"
        }
      ],
      "answer": "C"
    },
    {
      "id": 143,
      "type": "single",
      "question": "模型审计报告发现训练数据存在偏差， 但客户要求签署无偏差声明，此时应",
      "options": [
        {
          "letter": "A",
          "text": "按客户要求签署"
        },
        {
          "letter": "B",
          "text": "在声明中附加技术说明"
        },
        {
          "letter": "C",
          "text": "拒绝签署并说明原因"
        },
        {
          "letter": "D",
          "text": "提出重新审计申请"
        }
      ],
      "answer": "C"
    },
    {
      "id": 144,
      "type": "single",
      "question": "下列哪种学习形式是非学历学习，且在日常生活中获取知识、技能和思想道德修养?",
      "options": [
        {
          "letter": "A",
          "text": "正规学习"
        },
        {
          "letter": "B",
          "text": "非正规学习"
        },
        {
          "letter": "C",
          "text": "不正规学习"
        },
        {
          "letter": "D",
          "text": "正式学习"
        }
      ],
      "answer": "B"
    },
    {
      "id": 145,
      "type": "single",
      "question": "在 AI 训练集群中，训练师发现某节点温度异常，正确处置流程是",
      "options": [
        {
          "letter": "A",
          "text": "远程重启该节点"
        },
        {
          "letter": "B",
          "text": "立即迁移其承载任务"
        },
        {
          "letter": "C",
          "text": "记录日志并上报运维"
        },
        {
          "letter": "D",
          "text": "调整任务优先级"
        }
      ],
      "answer": "C"
    },
    {
      "id": 146,
      "type": "single",
      "question": "一份文件为机密级，保密期限是 10 年，正确的标志形式是?",
      "options": [
        {
          "letter": "A",
          "text": "机密 10 年"
        },
        {
          "letter": "B",
          "text": "机密★10 年"
        },
        {
          "letter": "C",
          "text": "机密●10 年"
        },
        {
          "letter": "D",
          "text": "机密※10 年"
        }
      ],
      "answer": "B"
    },
    {
      "id": 148,
      "type": "single",
      "question": "职业技能伦理要求我们在工作中如何处理同事关系?",
      "options": [
        {
          "letter": "A",
          "text": "互相竞争"
        },
        {
          "letter": "B",
          "text": "互相帮助"
        },
        {
          "letter": "C",
          "text": "互相猜疑"
        },
        {
          "letter": "D",
          "text": "互相排挤"
        }
      ],
      "answer": "B"
    },
    {
      "id": 149,
      "type": "single",
      "question": "第三次大的社会发展是指什么?",
      "options": [
        {
          "letter": "A",
          "text": "由原始的采猎社会向农业社会的整体性变迁"
        },
        {
          "letter": "B",
          "text": "由农业社会向工业社会的整体性变迁"
        },
        {
          "letter": "C",
          "text": "由工业社会向知识社会、信息社会的整体性变迁"
        },
        {
          "letter": "D",
          "text": "跨国界的国际化发展"
        }
      ],
      "answer": "C"
    },
    {
      "id": 150,
      "type": "single",
      "question": "在自动驾驶标注项目中，训练师发现某场景标注与交通法规冲突， 应",
      "options": [
        {
          "letter": "A",
          "text": "按标注规范优先执行"
        },
        {
          "letter": "B",
          "text": "按交通法规修正标注"
        },
        {
          "letter": "C",
          "text": "提交法规与标注冲突报告"
        },
        {
          "letter": "D",
          "text": "标记为特殊案例跳过"
        }
      ],
      "answer": "C"
    },
    {
      "id": 151,
      "type": "single",
      "question": "发现同事在社交平台上披露未公开的模型性能指标， 最符合职业守则的做法是",
      "options": [
        {
          "letter": "A",
          "text": "立即举报并公开批评"
        },
        {
          "letter": "B",
          "text": "私下提醒并建议删除内容"
        },
        {
          "letter": "C",
          "text": "转发内容扩大影响力"
        },
        {
          "letter": "D",
          "text": "装作未看见避免冲突"
        }
      ],
      "answer": "B"
    },
    {
      "id": 152,
      "type": "single",
      "question": "处理敏感数据时，训练师应遵守的设备使用规范是",
      "options": [
        {
          "letter": "A",
          "text": "使用个人 U 盘拷贝数据"
        },
        {
          "letter": "B",
          "text": "在公共网络传输数据"
        },
        {
          "letter": "C",
          "text": "启用全盘加密功能"
        },
        {
          "letter": "D",
          "text": "关闭防火墙加速下载"
        }
      ],
      "answer": "C"
    },
    {
      "id": 153,
      "type": "single",
      "question": "职业技能伦理中，以下哪项是正确的工作态度?",
      "options": [
        {
          "letter": "A",
          "text": "敷衍了事"
        },
        {
          "letter": "B",
          "text": "认真负责"
        },
        {
          "letter": "C",
          "text": "拖延工作"
        },
        {
          "letter": "D",
          "text": "推卸责任"
        }
      ],
      "answer": "B"
    },
    {
      "id": 154,
      "type": "single",
      "question": "关于数据伦理的核心原则，以下哪项不包括在内?",
      "options": [
        {
          "letter": "A",
          "text": "尊重个人隐私"
        },
        {
          "letter": "B",
          "text": "数据共享"
        },
        {
          "letter": "C",
          "text": "数据安全"
        },
        {
          "letter": "D",
          "text": "公平性与正义"
        }
      ],
      "answer": "B"
    },
    {
      "id": 155,
      "type": "single",
      "question": "下列属于影响学习者学习能力的个人内因是什么?",
      "options": [
        {
          "letter": "A",
          "text": "学校定位水平"
        },
        {
          "letter": "B",
          "text": "师资队伍水平"
        },
        {
          "letter": "C",
          "text": "家庭政治、经济状况"
        },
        {
          "letter": "D",
          "text": "个人自制能力"
        }
      ],
      "answer": "D"
    },
    {
      "id": 156,
      "type": "single",
      "question": "某医疗 AI 项目要求标注精度达 99.5%，训练师团队当前平均精度为 98%，最有效的改进方案是",
      "options": [
        {
          "letter": "A",
          "text": "增加标注人员数量"
        },
        {
          "letter": "B",
          "text": "开展交叉质检培训"
        },
        {
          "letter": "C",
          "text": "引入半自动化标注工具"
        },
        {
          "letter": "D",
          "text": "申请延长项目周期"
        }
      ],
      "answer": "B"
    },
    {
      "id": 157,
      "type": "single",
      "question": "在使用 GPU 服务器进行模型微调时，以下哪种操作最符合\"爱护设备\"规范?",
      "options": [
        {
          "letter": "A",
          "text": "持续满载运行 72 小时"
        },
        {
          "letter": "B",
          "text": "定期监控显存占用率"
        },
        {
          "letter": "C",
          "text": "同时登录多个用户会话"
        },
        {
          "letter": "D",
          "text": "禁用温度报警阈值"
        }
      ],
      "answer": "B"
    },
    {
      "id": 158,
      "type": "single",
      "question": "在多方联合建模项目中，某参与方提出共享用户行为特征库，但包含个人隐私字段，应",
      "options": [
        {
          "letter": "A",
          "text": "直接提供完整特征库"
        },
        {
          "letter": "B",
          "text": "拒绝参与此类项目"
        },
        {
          "letter": "C",
          "text": "建议采用联邦学习方案"
        },
        {
          "letter": "D",
          "text": "要求签订免责协议"
        }
      ],
      "answer": "C"
    },
    {
      "id": 159,
      "type": "single",
      "question": "处理紧急标注任务时， 团队负责人最合理的分工策略是",
      "options": [
        {
          "letter": "A",
          "text": "指定专人全流程负责"
        },
        {
          "letter": "B",
          "text": "按成员熟练度分配模块"
        },
        {
          "letter": "C",
          "text": "随机分配确保公平性"
        },
        {
          "letter": "D",
          "text": "全体成员独立标注相同内容"
        }
      ],
      "answer": "B"
    },
    {
      "id": 160,
      "type": "single",
      "question": "算法审计中发现某推荐系统对特定用户群体存在服务偏差，训练师应",
      "options": [
        {
          "letter": "A",
          "text": "调整算法参数掩盖偏差现象"
        },
        {
          "letter": "B",
          "text": "向用户声明偏差属于技术局限"
        },
        {
          "letter": "C",
          "text": "停止服务直至完成伦理审查"
        },
        {
          "letter": "D",
          "text": "启动偏差溯源并优化算法逻辑"
        }
      ],
      "answer": "D"
    },
    {
      "id": 22,
      "type": "single",
      "question": "若业务数据中包含用户年龄信息，按照统一命名规则，以下哪个命名较为合适?",
      "options": [
        {
          "letter": "A",
          "text": "age_user"
        },
        {
          "letter": "B",
          "text": "userAge"
        },
        {
          "letter": "C",
          "text": "ageofuser"
        },
        {
          "letter": "D",
          "text": "User_Age"
        }
      ],
      "answer": "B"
    },
    {
      "id": 23,
      "type": "single",
      "question": "在进行文本数据采集时，若要避免被目标网站的反爬机制封禁 IP， 以下哪种方法最为有效?",
      "options": [
        {
          "letter": "A",
          "text": "加快采集速度"
        },
        {
          "letter": "B",
          "text": "使用代理 IP"
        },
        {
          "letter": "C",
          "text": "不设置请求头"
        },
        {
          "letter": "D",
          "text": "频繁更换采集工具"
        }
      ],
      "answer": "B"
    },
    {
      "id": 24,
      "type": "single",
      "question": "在进行音频数据采集时，常用的音频采集设备不包括以下哪项?",
      "options": [
        {
          "letter": "A",
          "text": "麦克风"
        },
        {
          "letter": "B",
          "text": "录音笔"
        },
        {
          "letter": "C",
          "text": "扫描仪"
        },
        {
          "letter": "D",
          "text": "音频采集卡"
        }
      ],
      "answer": "C"
    },
    {
      "id": 26,
      "type": "single",
      "question": "在人工智能训练师撰写业务数据汇总报告时，报告的标题应该具备以下哪个特点?",
      "options": [
        {
          "letter": "A",
          "text": "模糊笼统"
        },
        {
          "letter": "B",
          "text": "简洁明了且准确反映报告主题"
        },
        {
          "letter": "C",
          "text": "冗长复杂"
        },
        {
          "letter": "D",
          "text": "与报告内容无关"
        }
      ],
      "answer": "B"
    },
    {
      "id": 27,
      "type": "single",
      "question": "业务数据采集规范中， 对数据一致性的要求主要是为了?",
      "options": [
        {
          "letter": "A",
          "text": "提高数据分析的效率"
        },
        {
          "letter": "B",
          "text": "确保数据在不同系统间的兼容性"
        },
        {
          "letter": "C",
          "text": "减少数据存储空间"
        },
        {
          "letter": "D",
          "text": "增强数据的可读性"
        }
      ],
      "answer": "B"
    },
    {
      "id": 28,
      "type": "single",
      "question": "ParseHub 支持抓取哪种类型的数据?",
      "options": [
        {
          "letter": "A",
          "text": "仅支持文本数据"
        },
        {
          "letter": "B",
          "text": "仅支持图片数据"
        },
        {
          "letter": "C",
          "text": "支持文本、图片、链接等多种类型的数据"
        },
        {
          "letter": "D",
          "text": "仅支持视频数据"
        }
      ],
      "answer": "C"
    },
    {
      "id": 29,
      "type": "single",
      "question": "在进行业务数据处理时，若发现不同时间点的数据中某个关键指标的值不一致，以下哪种做法最合理?",
      "options": [
        {
          "letter": "A",
          "text": "直接采用最新时间点的数据"
        },
        {
          "letter": "B",
          "text": "分析数据不一致的原因，根据实际情况进行处理"
        },
        {
          "letter": "C",
          "text": "忽略数据不一致的情况"
        },
        {
          "letter": "D",
          "text": "随机选择一个时间点的数据"
        }
      ],
      "answer": "B"
    },
    {
      "id": 31,
      "type": "single",
      "question": "以下哪项不是业务数据采集规范中对数据质量的要求?",
      "options": [
        {
          "letter": "A",
          "text": "一致性"
        },
        {
          "letter": "B",
          "text": "准确性"
        },
        {
          "letter": "C",
          "text": "可读性"
        },
        {
          "letter": "D",
          "text": "完整性"
        }
      ],
      "answer": "C"
    },
    {
      "id": 32,
      "type": "single",
      "question": "在数据采集和处理中， 以下哪种数据采集方式属于工业数据采集范畴?",
      "options": [
        {
          "letter": "A",
          "text": "通过网络爬虫抓取网页数据"
        },
        {
          "letter": "B",
          "text": "使用传感器采集工业设备数据"
        },
        {
          "letter": "C",
          "text": "利用 API 接口获取社交媒体数据"
        },
        {
          "letter": "D",
          "text": "从公开数据集下载图片数据"
        }
      ],
      "answer": "B"
    },
    {
      "id": 33,
      "type": "single",
      "question": "以下哪种数据采集工具适用于收集用户设备上的使用数据，如应用使用情况、设备状态等?",
      "options": [
        {
          "letter": "A",
          "text": "移动应用分析工具"
        },
        {
          "letter": "B",
          "text": "网络监控工具"
        },
        {
          "letter": "C",
          "text": "数据仓库工具"
        },
        {
          "letter": "D",
          "text": "数据挖掘工具"
        }
      ],
      "answer": "A"
    },
    {
      "id": 35,
      "type": "single",
      "question": "若要对采集到的数据库数据进行可视化分析，以下哪种工具较为常用?",
      "options": [
        {
          "letter": "A",
          "text": "Excel"
        },
        {
          "letter": "B",
          "text": "Kibana"
        },
        {
          "letter": "C",
          "text": "Word"
        },
        {
          "letter": "D",
          "text": "PowerPoint"
        }
      ],
      "answer": "B"
    },
    {
      "id": 36,
      "type": "single",
      "question": "在数据标准化统一命名规则中，对于表示用户地址的数据，以下哪个命名更符合规范?",
      "options": [
        {
          "letter": "A",
          "text": "useraddress"
        },
        {
          "letter": "B",
          "text": "user_address"
        },
        {
          "letter": "C",
          "text": "address_user"
        },
        {
          "letter": "D",
          "text": "UserAddress"
        }
      ],
      "answer": "B"
    },
    {
      "id": 37,
      "type": "single",
      "question": "当一个网站发生访问异常时，以下哪种日志数据最有可能帮助技术人员定位问题?",
      "options": [
        {
          "letter": "A",
          "text": "用户登录日志"
        },
        {
          "letter": "B",
          "text": "服务器访问日志"
        },
        {
          "letter": "C",
          "text": "用户购物车日志"
        },
        {
          "letter": "D",
          "text": "用户评论日志"
        }
      ],
      "answer": "B"
    },
    {
      "id": 39,
      "type": "single",
      "question": "在进行数据库数据采集时，若要保证数据的完整性， 以下哪种做法最为重要?",
      "options": [
        {
          "letter": "A",
          "text": "定期备份数据库数据"
        },
        {
          "letter": "B",
          "text": "实时采集数据库数据"
        },
        {
          "letter": "C",
          "text": "对数据库数据进行加密处理"
        },
        {
          "letter": "D",
          "text": "设置数据库数据的访问权限"
        }
      ],
      "answer": "B"
    },
    {
      "id": 40,
      "type": "single",
      "question": "若业务数据中有一份关于产品评价的数据表，按照评价星级进行分类归档，以下哪种数据库查询语句可以实现?",
      "options": [
        {
          "letter": "A",
          "text": "SELECT * FROM product_reviews WHERE star_rating = 5;"
        },
        {
          "letter": "B",
          "text": "SELECT * FROM product_reviews ORDER BY star_rating;"
        },
        {
          "letter": "C",
          "text": "SELECT COUNT(*) FROM product_reviews;"
        },
        {
          "letter": "D",
          "text": "SELECT AVG(star_rating) FROM product_reviews;"
        }
      ],
      "answer": "A"
    },
    {
      "id": 41,
      "type": "single",
      "question": "在进行视频数据采集时，若要避免视频版权问题，以下哪种做法最为合适?",
      "options": [
        {
          "letter": "A",
          "text": "随意从互联网上下载视频"
        },
        {
          "letter": "B",
          "text": "使用开源视频库中的视频"
        },
        {
          "letter": "C",
          "text": "抄袭他人的视频"
        },
        {
          "letter": "D",
          "text": "不进行任何视频采集"
        }
      ],
      "answer": "B"
    },
    {
      "id": 42,
      "type": "single",
      "question": "在人工智能训练师进行业务数据处理时，对于日期数据，以下哪种格式统一性最为规范?",
      "options": [
        {
          "letter": "A",
          "text": "2023.10.15"
        },
        {
          "letter": "B",
          "text": "15/10/2023"
        },
        {
          "letter": "C",
          "text": "2023 - 10 - 15"
        },
        {
          "letter": "D",
          "text": "10 - 15 - 2023"
        }
      ],
      "answer": "C"
    },
    {
      "id": 43,
      "type": "single",
      "question": "在文本数据采集中，以下哪个步骤是文本挖掘的关键环节?",
      "options": [
        {
          "letter": "A",
          "text": "数据收集"
        },
        {
          "letter": "B",
          "text": "数据预处理"
        },
        {
          "letter": "C",
          "text": "特征提取和选择"
        },
        {
          "letter": "D",
          "text": "数据可视化"
        }
      ],
      "answer": "C"
    },
    {
      "id": 44,
      "type": "single",
      "question": "在数据标准化格式统一性中，对于表示文件路径的数据，以下哪种格式较为规范?",
      "options": [
        {
          "letter": "A",
          "text": "C:\\Users\\Documents\\file.txt"
        },
        {
          "letter": "B",
          "text": "C:/Users/Documents/file.txt"
        },
        {
          "letter": "C",
          "text": "C://Users//Documents//file.txt"
        },
        {
          "letter": "D",
          "text": "C:\\Users\\Documents\\file"
        }
      ],
      "answer": "B"
    },
    {
      "id": 45,
      "type": "single",
      "question": "在人工智能训练师进行点云数据采集时，以下哪种设备是常用的采集工具?",
      "options": [
        {
          "letter": "A",
          "text": "数码相机"
        },
        {
          "letter": "B",
          "text": "激光雷达"
        },
        {
          "letter": "C",
          "text": "麦克风"
        },
        {
          "letter": "D",
          "text": "温度传感器"
        }
      ],
      "answer": "B"
    },
    {
      "id": 47,
      "type": "single",
      "question": "人工智能训练师在采集数据时，通常会使用哪种方法来确保数据的多样性?",
      "options": [
        {
          "letter": "A",
          "text": "随机采样"
        },
        {
          "letter": "B",
          "text": "等距采样"
        },
        {
          "letter": "C",
          "text": "分层采样"
        },
        {
          "letter": "D",
          "text": "整群采样"
        }
      ],
      "answer": "C"
    },
    {
      "id": 48,
      "type": "single",
      "question": "在人工智能训练师进行业务数据采集时，若要存储大量的非结构化数据，如文本、图片、视频等，通常会优先选择哪种数据库工具?",
      "options": [
        {
          "letter": "A",
          "text": "MySQL"
        },
        {
          "letter": "B",
          "text": "MongoDB"
        },
        {
          "letter": "C",
          "text": "Oracle"
        },
        {
          "letter": "D",
          "text": "SQL Server"
        }
      ],
      "answer": "B"
    },
    {
      "id": 49,
      "type": "single",
      "question": "在评估数据清洗的完整性时，主要关注的是?",
      "options": [
        {
          "letter": "A",
          "text": "数据中的重复值是否已被删除"
        },
        {
          "letter": "B",
          "text": "数据中是否存在缺失值"
        },
        {
          "letter": "C",
          "text": "数据是否符合预期的格式"
        },
        {
          "letter": "D",
          "text": "数据中的异常值是否已被处理"
        }
      ],
      "answer": "B"
    },
    {
      "id": 52,
      "type": "single",
      "question": "在处理统计异常数据时，识别异常值的一种常用方法是?",
      "options": [
        {
          "letter": "A",
          "text": "均值比较法"
        },
        {
          "letter": "B",
          "text": "中位数比较法"
        },
        {
          "letter": "C",
          "text": "标准差法如 3σ原则"
        },
        {
          "letter": "D",
          "text": "众数比较法"
        }
      ],
      "answer": "C"
    },
    {
      "id": 53,
      "type": "single",
      "question": "在数据透视表中，如果想要对多个字段进行分组，应该使用哪个功能?",
      "options": [
        {
          "letter": "A",
          "text": "切片器"
        },
        {
          "letter": "B",
          "text": "排序"
        },
        {
          "letter": "C",
          "text": "分组"
        },
        {
          "letter": "D",
          "text": "筛选"
        }
      ],
      "answer": "C"
    },
    {
      "id": 54,
      "type": "single",
      "question": "在图像数据清洗过程中，如果图像受到光照变化的影响，以下哪种方法可能用于校正这种影响?",
      "options": [
        {
          "letter": "A",
          "text": "图像去噪"
        },
        {
          "letter": "B",
          "text": "图像增强"
        },
        {
          "letter": "C",
          "text": "光照校正"
        },
        {
          "letter": "D",
          "text": "图像压缩"
        }
      ],
      "answer": "C"
    },
    {
      "id": 55,
      "type": "single",
      "question": "在处理图像数据时，如果图像文件不可读，通常采取的措施是?",
      "options": [
        {
          "letter": "A",
          "text": "删除该文件"
        },
        {
          "letter": "B",
          "text": "使用图像处理软件修复"
        },
        {
          "letter": "C",
          "text": "忽略该文件"
        },
        {
          "letter": "D",
          "text": "将该文件标记为异常数据"
        }
      ],
      "answer": "A"
    },
    {
      "id": 56,
      "type": "single",
      "question": "视频标注结果完整性检查中，对于事件标注的检查， 以下哪项不是重点检查内容?",
      "options": [
        {
          "letter": "A",
          "text": "事件类型是否标注完整"
        },
        {
          "letter": "B",
          "text": "事件参与主体是否标注齐全"
        },
        {
          "letter": "C",
          "text": "事件的视频画质是否清晰"
        },
        {
          "letter": "D",
          "text": "事件发生的时间段是否准确标注"
        }
      ],
      "answer": "C"
    },
    {
      "id": 57,
      "type": "single",
      "question": "在进行统计操作规范性检查时，关于统计档案的建立和管理，以下哪项描述是正确的?",
      "options": [
        {
          "letter": "A",
          "text": "统计档案无需进行分类和归档"
        },
        {
          "letter": "B",
          "text": "统计档案应定期清理和销毁"
        },
        {
          "letter": "C",
          "text": "统计档案应包含完整的统计过程和结果记录"
        },
        {
          "letter": "D",
          "text": "统计档案只供内部人员查阅，无需对外公开"
        }
      ],
      "answer": "C"
    },
    {
      "id": 58,
      "type": "single",
      "question": "在统计质量评估中，关于数据可访问性的描述，以下哪项是正确的?",
      "options": [
        {
          "letter": "A",
          "text": "数据应只供特定人员访问"
        },
        {
          "letter": "B",
          "text": "数据应以复杂格式存储以确保安全性"
        },
        {
          "letter": "C",
          "text": "数据应易于获取和使用"
        },
        {
          "letter": "D",
          "text": "数据应定期删除以节省存储空间"
        }
      ],
      "answer": "C"
    },
    {
      "id": 59,
      "type": "single",
      "question": "在语音数据标注中，对于一段带有背景噪音的语音， 标注时应该",
      "options": [
        {
          "letter": "A",
          "text": "忽略背景噪音， 只标注语音内容"
        },
        {
          "letter": "B",
          "text": "标注出背景噪音的类型和强度"
        },
        {
          "letter": "C",
          "text": "只标注背景噪音，不标注语音内容"
        },
        {
          "letter": "D",
          "text": "根据噪音大小决定是否标注语音内容"
        }
      ],
      "answer": "B"
    },
    {
      "id": 61,
      "type": "single",
      "question": "以下哪种图像数据清洗方法主要用于调整图像的亮度和对比度，以改善图像的视觉效果?",
      "options": [
        {
          "letter": "A",
          "text": "图像平滑"
        },
        {
          "letter": "B",
          "text": "图像锐化"
        },
        {
          "letter": "C",
          "text": "直方图均衡化"
        },
        {
          "letter": "D",
          "text": "图像旋转"
        }
      ],
      "answer": "C"
    },
    {
      "id": 62,
      "type": "single",
      "question": "在进行数据清洗后，如何确保数据的完整性?",
      "options": [
        {
          "letter": "A",
          "text": "检查数据是否有缺失值"
        },
        {
          "letter": "B",
          "text": "对数据进行加密处理"
        },
        {
          "letter": "C",
          "text": "增加数据的多样性"
        },
        {
          "letter": "D",
          "text": "提高数据的存储效率"
        }
      ],
      "answer": "A"
    },
    {
      "id": 63,
      "type": "single",
      "question": "在数据统计中，中位数是将一组数据从小到大排序后，位于中间位置的数值。若一组数据有偶数个观测值，则中位数如何计算?",
      "options": [
        {
          "letter": "A",
          "text": "取中间两个数值的平均值"
        },
        {
          "letter": "B",
          "text": "取最大的中间数值"
        },
        {
          "letter": "C",
          "text": "取最小的中间数值"
        },
        {
          "letter": "D",
          "text": "取中间两个数值的较大值"
        }
      ],
      "answer": "A"
    },
    {
      "id": 64,
      "type": "single",
      "question": "以下哪项是统计质量评估标准中用于评估数据可比性的关键要素?",
      "options": [
        {
          "letter": "A",
          "text": "数据的来源"
        },
        {
          "letter": "B",
          "text": "数据的定义和分类"
        },
        {
          "letter": "C",
          "text": "数据的收集时间"
        },
        {
          "letter": "D",
          "text": "数据的呈现方式"
        }
      ],
      "answer": "B"
    },
    {
      "id": 65,
      "type": "single",
      "question": "在评估数据清洗效果时， 以下哪项方法是不合适的?",
      "options": [
        {
          "letter": "A",
          "text": "使用可视化工具检查数据分布"
        },
        {
          "letter": "B",
          "text": "仅通过数据的描述性统计量进行评估"
        },
        {
          "letter": "C",
          "text": "比较清洗前后的业务指标变化"
        },
        {
          "letter": "D",
          "text": "通过领域专家进行数据质量审核"
        }
      ],
      "answer": "B"
    },
    {
      "id": 66,
      "type": "single",
      "question": "下列哪项不是清洗后数据完整性验证的常见方法?",
      "options": [
        {
          "letter": "A",
          "text": "校验和验证"
        },
        {
          "letter": "B",
          "text": "数据对比验证"
        },
        {
          "letter": "C",
          "text": "数据可视化验证"
        },
        {
          "letter": "D",
          "text": "数据类型验证"
        }
      ],
      "answer": "D"
    },
    {
      "id": 67,
      "type": "single",
      "question": "视频数据标注工具中， 属性标注通常用于",
      "options": [
        {
          "letter": "A",
          "text": "标记视频的整体风格"
        },
        {
          "letter": "B",
          "text": "描述视频中物体的特征属性"
        },
        {
          "letter": "C",
          "text": "确定视频的拍摄地点"
        },
        {
          "letter": "D",
          "text": "统计视频中的帧数"
        }
      ],
      "answer": "B"
    },
    {
      "id": 68,
      "type": "single",
      "question": "在数据分类中，以下哪项不属于按照数据特征进行的分类?",
      "options": [
        {
          "letter": "A",
          "text": "结构化数据"
        },
        {
          "letter": "B",
          "text": "半结构化数据"
        },
        {
          "letter": "C",
          "text": "非结构化数据"
        },
        {
          "letter": "D",
          "text": "实时数据"
        }
      ],
      "answer": "D"
    },
    {
      "id": 70,
      "type": "single",
      "question": "在使用 Praat 软件进行语音数据标注时，首先需要进行的操作是?",
      "options": [
        {
          "letter": "A",
          "text": "生成 TextGrid 文件"
        },
        {
          "letter": "B",
          "text": "导入语音文件"
        },
        {
          "letter": "C",
          "text": "打开语音编辑器"
        },
        {
          "letter": "D",
          "text": "标注语音"
        }
      ],
      "answer": "B"
    },
    {
      "id": 71,
      "type": "single",
      "question": "在 Excel 的直方图分析工具中，哪个选项可以用来在直方图中显示数据的正态曲线?",
      "options": [
        {
          "letter": "A",
          "text": "在直方图中显示正态曲线"
        },
        {
          "letter": "B",
          "text": "设置图表标题"
        },
        {
          "letter": "C",
          "text": "设置坐标轴标签"
        },
        {
          "letter": "D",
          "text": "设置数据系列格式"
        }
      ],
      "answer": "A"
    },
    {
      "id": 72,
      "type": "single",
      "question": "在标注效率评估中，如果标注错误率较高，可能意味着",
      "options": [
        {
          "letter": "A",
          "text": "标注人员工作效率高"
        },
        {
          "letter": "B",
          "text": "标注任务难度大"
        },
        {
          "letter": "C",
          "text": "标注人员对标注标准理解不准确"
        },
        {
          "letter": "D",
          "text": "标注工具功能强大"
        }
      ],
      "answer": "C"
    },
    {
      "id": 73,
      "type": "single",
      "question": "下列哪项不是分组统计的常见应用场景?",
      "options": [
        {
          "letter": "A",
          "text": "市场调研中按年龄段分析消费者偏好"
        },
        {
          "letter": "B",
          "text": "销售数据分析中按地区统计销售额"
        },
        {
          "letter": "C",
          "text": "医学研究中按疾病类型统计患者数量"
        },
        {
          "letter": "D",
          "text": "数据清洗中去除重复记录"
        }
      ],
      "answer": "D"
    },
    {
      "id": 74,
      "type": "single",
      "question": "在频数分析中，中位数是将一组数据从小到大排序后，位于位置的数值。",
      "options": [
        {
          "letter": "A",
          "text": "正中间"
        },
        {
          "letter": "B",
          "text": "前 25%"
        },
        {
          "letter": "C",
          "text": "后 25%"
        },
        {
          "letter": "D",
          "text": "第一个"
        }
      ],
      "answer": "A"
    },
    {
      "id": 75,
      "type": "single",
      "question": "在处理图像数据时，如果发现图像中存在背景噪声， 通常采用的处理方法是?",
      "options": [
        {
          "letter": "A",
          "text": "调整图像亮度"
        },
        {
          "letter": "B",
          "text": "应用中值滤波"
        },
        {
          "letter": "C",
          "text": "改变图像尺寸"
        },
        {
          "letter": "D",
          "text": "增加图像对比度"
        }
      ],
      "answer": "B"
    },
    {
      "id": 76,
      "type": "single",
      "question": "在标注操作规范性检查里，对于标注时间的记录，以下哪种记录方式是规范的?",
      "options": [
        {
          "letter": "A",
          "text": "只记录开始时间"
        },
        {
          "letter": "B",
          "text": "只记录结束时间"
        },
        {
          "letter": "C",
          "text": "记录开始时间和结束时间， 精确到分钟"
        },
        {
          "letter": "D",
          "text": "随意记录一个大概时间"
        }
      ],
      "answer": "C"
    },
    {
      "id": 77,
      "type": "single",
      "question": "在处理图像数据时，如果图像发生形变失真，通常采取的措施是?",
      "options": [
        {
          "letter": "A",
          "text": "删除该图像"
        },
        {
          "letter": "B",
          "text": "使用图像处理软件修复"
        },
        {
          "letter": "C",
          "text": "忽略该图像"
        },
        {
          "letter": "D",
          "text": "将该图像标记为异常数据"
        }
      ],
      "answer": "B"
    },
    {
      "id": 79,
      "type": "single",
      "question": "在进行数据清洗后，如果发现某些数据字段的值不符合预期范围， 应采取什么措施?",
      "options": [
        {
          "letter": "A",
          "text": "直接删除这些数据"
        },
        {
          "letter": "B",
          "text": "对这些数据进行修正或标记"
        },
        {
          "letter": "C",
          "text": "忽略这些异常数据"
        },
        {
          "letter": "D",
          "text": "重新采集数据"
        }
      ],
      "answer": "B"
    },
    {
      "id": 80,
      "type": "single",
      "question": "关于【图像数据标注工具】VGG Image Annotator (VIA)， 以下说法错误的是",
      "options": [
        {
          "letter": "A",
          "text": "支持多种标注类型"
        },
        {
          "letter": "B",
          "text": "可以在线使用"
        },
        {
          "letter": "C",
          "text": "只能进行单一图像的标注"
        },
        {
          "letter": "D",
          "text": "操作相对简单"
        }
      ],
      "answer": "C"
    },
    {
      "id": 81,
      "type": "single",
      "question": "关于 3D 点云标注的数据格式，以下哪种格式较为常用且能较好保留点云信息?",
      "options": [
        {
          "letter": "A",
          "text": "JPEG"
        },
        {
          "letter": "B",
          "text": "PNG"
        },
        {
          "letter": "C",
          "text": "PLY"
        },
        {
          "letter": "D",
          "text": "MP4"
        }
      ],
      "answer": "C"
    },
    {
      "id": 82,
      "type": "single",
      "question": "在进行清洗后数据完整性验证时，发现数据丢失或损坏，通常采取的措施是?",
      "options": [
        {
          "letter": "A",
          "text": "重新采集数据"
        },
        {
          "letter": "B",
          "text": "忽略丢失的数据"
        },
        {
          "letter": "C",
          "text": "使用默认值填充"
        },
        {
          "letter": "D",
          "text": "数据恢复或修正"
        }
      ],
      "answer": "D"
    },
    {
      "id": 84,
      "type": "single",
      "question": "在图像标注数据质量检验中，以下哪项不属于常见的评价指标?",
      "options": [
        {
          "letter": "A",
          "text": "标注点数量与标注要求是否一致"
        },
        {
          "letter": "B",
          "text": "标注点位置与实际位置是否一致"
        },
        {
          "letter": "C",
          "text": "标注图像的颜色是否鲜艳"
        },
        {
          "letter": "D",
          "text": "框选物体的数量与实际数量是否一致"
        }
      ],
      "answer": "C"
    },
    {
      "id": 85,
      "type": "single",
      "question": "在标注结果完整性检查中，以下哪种情况不属于标注结果缺失?",
      "options": [
        {
          "letter": "A",
          "text": "标注文件中缺少部分标注对象的标签"
        },
        {
          "letter": "B",
          "text": "标注对象的关键属性未标注"
        },
        {
          "letter": "C",
          "text": "标注的标签与实际对象不符"
        },
        {
          "letter": "D",
          "text": "标注文件中遗漏了某个标注区域"
        }
      ],
      "answer": "C"
    },
    {
      "id": 86,
      "type": "single",
      "question": "在进行标注结果完整性检查时，如果标注数据是关于商品信息的， 以下哪项是必须检查的内容?",
      "options": [
        {
          "letter": "A",
          "text": "商品的广告宣传语"
        },
        {
          "letter": "B",
          "text": "商品的规格参数是否标注完整"
        },
        {
          "letter": "C",
          "text": "商品的包装设计风格"
        },
        {
          "letter": "D",
          "text": "商品的购买用户评价"
        }
      ],
      "answer": "B"
    },
    {
      "id": 87,
      "type": "single",
      "question": "自动化分析框架中，交叉验证的主要目的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "提高模型的泛化能力"
        },
        {
          "letter": "B",
          "text": "增加模型的复杂度"
        },
        {
          "letter": "C",
          "text": "减少模型的训练时间"
        },
        {
          "letter": "D",
          "text": "改变模型的参数"
        }
      ],
      "answer": "A"
    },
    {
      "id": 88,
      "type": "single",
      "question": "在语音情感标注中，判断一段语音表达的是“愤怒”情感，主要依据是",
      "options": [
        {
          "letter": "A",
          "text": "语音的音调较高且语速较快"
        },
        {
          "letter": "B",
          "text": "语音的音量较大且音调有突然升高"
        },
        {
          "letter": "C",
          "text": "语音的语速较慢且音调平稳"
        },
        {
          "letter": "D",
          "text": "语音有较多停顿且音量较小"
        }
      ],
      "answer": "B"
    },
    {
      "id": 89,
      "type": "single",
      "question": "下列哪种技术用于识别语音信号中的情绪信息?",
      "options": [
        {
          "letter": "A",
          "text": "声纹识别"
        },
        {
          "letter": "B",
          "text": "语音合成"
        },
        {
          "letter": "C",
          "text": "情绪判断"
        },
        {
          "letter": "D",
          "text": "自动语音识别(ASR)"
        }
      ],
      "answer": "C"
    },
    {
      "id": 91,
      "type": "single",
      "question": "下列哪种噪声类型不属于图像噪声?",
      "options": [
        {
          "letter": "A",
          "text": "椒盐噪声"
        },
        {
          "letter": "B",
          "text": "高斯噪声"
        },
        {
          "letter": "C",
          "text": "白噪声"
        },
        {
          "letter": "D",
          "text": "泊松噪声"
        }
      ],
      "answer": "C"
    },
    {
      "id": 92,
      "type": "single",
      "question": "对于一段描述宁静夜晚，让人心情放松的文本进行情感标注，恰当的情感是",
      "options": [
        {
          "letter": "A",
          "text": "焦虑"
        },
        {
          "letter": "B",
          "text": "平静"
        },
        {
          "letter": "C",
          "text": "激动"
        },
        {
          "letter": "D",
          "text": "悲伤"
        }
      ],
      "answer": "B"
    },
    {
      "id": 93,
      "type": "single",
      "question": "在进行图像标注任务时，如何验证分类结果的完整性?",
      "options": [
        {
          "letter": "A",
          "text": "仅通过自动校验工具"
        },
        {
          "letter": "B",
          "text": "仅通过人工复核"
        },
        {
          "letter": "C",
          "text": "结合自动校验工具和人工复核"
        },
        {
          "letter": "D",
          "text": "无需验证"
        }
      ],
      "answer": "C"
    },
    {
      "id": 94,
      "type": "single",
      "question": "在处理数据集时，如果你想保留重复值中的最后一条记录，应该如何设置 drop_duplicates函数的 keep 参数?",
      "options": [
        {
          "letter": "A",
          "text": "keep='first'"
        },
        {
          "letter": "B",
          "text": "keep='last'"
        },
        {
          "letter": "C",
          "text": "keep=False"
        },
        {
          "letter": "D",
          "text": "keep=True"
        }
      ],
      "answer": "B"
    },
    {
      "id": 95,
      "type": "single",
      "question": "在 SPSS 中，进行频数分析时，生成的哪种图表可以直观地显示数据的分布情况?",
      "options": [
        {
          "letter": "A",
          "text": "直方图"
        },
        {
          "letter": "B",
          "text": "散点图"
        },
        {
          "letter": "C",
          "text": "折线图"
        },
        {
          "letter": "D",
          "text": "箱线图"
        }
      ],
      "answer": "A"
    },
    {
      "id": 96,
      "type": "single",
      "question": "在语音数据标注工具里，若要标记语音中每个单词的发音边界，适合采用的标注类型是",
      "options": [
        {
          "letter": "A",
          "text": "词级标注"
        },
        {
          "letter": "B",
          "text": "音节级标注"
        },
        {
          "letter": "C",
          "text": "音素级标注"
        },
        {
          "letter": "D",
          "text": "语句级标注"
        }
      ],
      "answer": "A"
    },
    {
      "id": 98,
      "type": "single",
      "question": "在语音数据中，截音现象指的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "语音信号突然中断"
        },
        {
          "letter": "B",
          "text": "录制开始或结束时，未将某个字录全"
        },
        {
          "letter": "C",
          "text": "语音信号中出现杂音"
        },
        {
          "letter": "D",
          "text": "语音信号的音量突然变化"
        }
      ],
      "answer": "B"
    },
    {
      "id": 100,
      "type": "single",
      "question": "在数据清洗过程中，完成数据清洗后， 进行完整性验证的主要目的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "确保数据格式的一致性"
        },
        {
          "letter": "B",
          "text": "确保数据的准确性"
        },
        {
          "letter": "C",
          "text": "确保数据的完整性"
        },
        {
          "letter": "D",
          "text": "确保数据的时效性"
        }
      ],
      "answer": "C"
    },
    {
      "id": 101,
      "type": "single",
      "question": "在绘制统计图时，选择图表类型的主要依据是什么?",
      "options": [
        {
          "letter": "A",
          "text": "数据的数量"
        },
        {
          "letter": "B",
          "text": "数据的来源"
        },
        {
          "letter": "C",
          "text": "数据的特点和分析目的"
        },
        {
          "letter": "D",
          "text": "图表的美观程度"
        }
      ],
      "answer": "C"
    },
    {
      "id": 103,
      "type": "single",
      "question": "下列哪种工具常用于文本数据的命名实体识别标注?",
      "options": [
        {
          "letter": "A",
          "text": "Excel"
        },
        {
          "letter": "B",
          "text": "BRAT"
        },
        {
          "letter": "C",
          "text": "Photoshop"
        },
        {
          "letter": "D",
          "text": "AutoCAD"
        }
      ],
      "answer": "B"
    },
    {
      "id": 104,
      "type": "single",
      "question": "下列哪项是数据标注中应避免的行为?",
      "options": [
        {
          "letter": "A",
          "text": "严格按照标注规则进行标注"
        },
        {
          "letter": "B",
          "text": "在标注过程中记录疑问和不确定的地方"
        },
        {
          "letter": "C",
          "text": "为了提高速度而忽略标注质量"
        },
        {
          "letter": "D",
          "text": "定期对标注结果进行质量检查"
        }
      ],
      "answer": "C"
    },
    {
      "id": 105,
      "type": "single",
      "question": "下列关于数据清洗的描述中，哪一项是错误的?",
      "options": [
        {
          "letter": "A",
          "text": "数据清洗是提高数据质量的重要环节"
        },
        {
          "letter": "B",
          "text": "数据清洗可以完全消除数据中的错误和噪声"
        },
        {
          "letter": "C",
          "text": "数据清洗包括缺失值处理、异常值检测等步骤"
        },
        {
          "letter": "D",
          "text": "数据清洗是数据预处理的一部分"
        }
      ],
      "answer": "B"
    },
    {
      "id": 106,
      "type": "single",
      "question": "在情感标注中，对于表达喜悦情感的文本，通常会使用哪种颜色进行标注较为合适",
      "options": [
        {
          "letter": "A",
          "text": "黑色"
        },
        {
          "letter": "B",
          "text": "红色"
        },
        {
          "letter": "C",
          "text": "蓝色"
        },
        {
          "letter": "D",
          "text": "灰色"
        }
      ],
      "answer": "B"
    },
    {
      "id": 107,
      "type": "single",
      "question": "在因果推断工具中，随机对照试验(RCT)的主要目的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "描述数据分布"
        },
        {
          "letter": "B",
          "text": "预测未来趋势"
        },
        {
          "letter": "C",
          "text": "评估因果关系"
        },
        {
          "letter": "D",
          "text": "简化数据分析"
        }
      ],
      "answer": "C"
    },
    {
      "id": 108,
      "type": "single",
      "question": "在数据清洗中，如何评估数据转换的准确性?",
      "options": [
        {
          "letter": "A",
          "text": "比较转换前后的数据分布"
        },
        {
          "letter": "B",
          "text": "仅通过数据的平均值进行比较"
        },
        {
          "letter": "C",
          "text": "仅通过数据的众数进行比较"
        },
        {
          "letter": "D",
          "text": "仅通过数据的方差进行比较"
        }
      ],
      "answer": "A"
    },
    {
      "id": 110,
      "type": "single",
      "question": "在 SPSS 中，进行相关性分析时， 如果两个变量之间的相关系数为 0.95，说明这两个变量之间存在什么样的关系?",
      "options": [
        {
          "letter": "A",
          "text": "强正相关"
        },
        {
          "letter": "B",
          "text": "强负相关"
        },
        {
          "letter": "C",
          "text": "弱相关"
        },
        {
          "letter": "D",
          "text": "无相关"
        }
      ],
      "answer": "A"
    },
    {
      "id": 112,
      "type": "single",
      "question": "在使用 Pandas 处理数据时，df.dropna(axis=0, how='any', inplace=True)命令的作用是",
      "options": [
        {
          "letter": "A",
          "text": "删除数据框中所有的空值"
        },
        {
          "letter": "B",
          "text": "删除数据框中所有的非空值"
        },
        {
          "letter": "C",
          "text": "删除包含至少一个空值的行"
        },
        {
          "letter": "D",
          "text": "删除包含至少一个空值的列"
        }
      ],
      "answer": "C"
    },
    {
      "id": 113,
      "type": "single",
      "question": "下列哪个句子中的“的”字在词性标注中通常被标注为助词?",
      "options": [
        {
          "letter": "A",
          "text": "他跑的很快。"
        },
        {
          "letter": "B",
          "text": "这是我的书。"
        },
        {
          "letter": "C",
          "text": "美丽的花朵。"
        },
        {
          "letter": "D",
          "text": "他在吃饭。"
        }
      ],
      "answer": "C"
    },
    {
      "id": 114,
      "type": "single",
      "question": "在使用 OpenPyXl 库处理 Excel 数据时， 如果遇到数据类型不一致的问题，应该",
      "options": [
        {
          "letter": "A",
          "text": "删除数据类型不一致的单元格"
        },
        {
          "letter": "B",
          "text": "将数据类型不一致的单元格转换为统一的数据类型"
        },
        {
          "letter": "C",
          "text": "使用哈希值判断数据是否重复"
        },
        {
          "letter": "D",
          "text": "通过比较单元格的值判断相似度"
        }
      ],
      "answer": "B"
    },
    {
      "id": 117,
      "type": "single",
      "question": "在视频数据标注工具中，用于标记视频中特定物体边界的标注类型通常是",
      "options": [
        {
          "letter": "A",
          "text": "分类标注"
        },
        {
          "letter": "B",
          "text": "框选标注"
        },
        {
          "letter": "C",
          "text": "语义分割标注"
        },
        {
          "letter": "D",
          "text": "点标注"
        }
      ],
      "answer": "B"
    },
    {
      "id": 118,
      "type": "single",
      "question": "在因果推断中，倾向得分匹配(PSM)的主要目的是什么?",
      "options": [
        {
          "letter": "A",
          "text": "提高模型的预测精度"
        },
        {
          "letter": "B",
          "text": "减少混杂因素的影响"
        },
        {
          "letter": "C",
          "text": "增加样本量"
        },
        {
          "letter": "D",
          "text": "简化数据分析过程"
        }
      ],
      "answer": "B"
    },
    {
      "id": 119,
      "type": "single",
      "question": "系统提示\"依赖库缺失\"，正确解决方法是:",
      "options": [
        {
          "letter": "A",
          "text": "重新安装系统"
        },
        {
          "letter": "B",
          "text": "补充安装对应库"
        },
        {
          "letter": "C",
          "text": "升级硬件驱动"
        },
        {
          "letter": "D",
          "text": "格式化存储设备"
        }
      ],
      "answer": "B"
    },
    {
      "id": 121,
      "type": "single",
      "question": "在 Windows 系统中，若要限制系统日志文件的最大大小，应在中进行设置。",
      "options": [
        {
          "letter": "A",
          "text": "注册表编辑器"
        },
        {
          "letter": "B",
          "text": "组策略编辑器"
        },
        {
          "letter": "C",
          "text": "系统属性设置"
        },
        {
          "letter": "D",
          "text": "事件查看器的高级设置"
        }
      ],
      "answer": "D"
    },
    {
      "id": 122,
      "type": "single",
      "question": "运维监控中， 如何优化系统性能?",
      "options": [
        {
          "letter": "A",
          "text": "定期清理磁盘空间"
        },
        {
          "letter": "B",
          "text": "升级硬件"
        },
        {
          "letter": "C",
          "text": "优化代码和数据库"
        },
        {
          "letter": "D",
          "text": "以上都是"
        }
      ],
      "answer": "D"
    },
    {
      "id": 123,
      "type": "single",
      "question": "我国《网络安全法》规定，网络运营者应当按照网络安全等级保护制度的要求，留存相关网络日志不少于",
      "options": [
        {
          "letter": "A",
          "text": "3 个月"
        },
        {
          "letter": "B",
          "text": "6 个月"
        },
        {
          "letter": "C",
          "text": "9 个月"
        },
        {
          "letter": "D",
          "text": "12 个月"
        }
      ],
      "answer": "B"
    },
    {
      "id": 125,
      "type": "single",
      "question": "在查看系统日志时，发现日志中时间信息不准确，可能的原因是",
      "options": [
        {
          "letter": "A",
          "text": "系统时钟设置错误"
        },
        {
          "letter": "B",
          "text": "日志记录软件出现故障"
        },
        {
          "letter": "C",
          "text": "日志服务器与本地时间不同步(若采用分布式日志管理)"
        },
        {
          "letter": "D",
          "text": "以上都有可能"
        }
      ],
      "answer": "D"
    },
    {
      "id": 126,
      "type": "single",
      "question": "查看系统实时进程信息的命令是?",
      "options": [
        {
          "letter": "A",
          "text": "free -m"
        },
        {
          "letter": "B",
          "text": "ps -ef"
        },
        {
          "letter": "C",
          "text": "df -h"
        },
        {
          "letter": "D",
          "text": "top"
        }
      ],
      "answer": "D"
    },
    {
      "id": 128,
      "type": "single",
      "question": "在 Linux 系统中，查看内核日志的主要日志文件是",
      "options": [
        {
          "letter": "A",
          "text": "/var/log/syslog"
        },
        {
          "letter": "B",
          "text": "/var/log/kern.log"
        },
        {
          "letter": "C",
          "text": "/var/log/auth.log"
        },
        {
          "letter": "D",
          "text": "/var/log/messages"
        }
      ],
      "answer": "B"
    },
    {
      "id": 130,
      "type": "single",
      "question": "以下关于在 Windows 系统中查看应用程序日志的说法，正确的是",
      "options": [
        {
          "letter": "A",
          "text": "应用程序日志只能在应用程序自身的设置中查看"
        },
        {
          "letter": "B",
          "text": "在事件查看器的 “应用程序” 日志分类中查看"
        },
        {
          "letter": "C",
          "text": "通过资源管理器查找应用程序安装目录下的日志文件查看"
        },
        {
          "letter": "D",
          "text": "无法查看应用程序日志"
        }
      ],
      "answer": "B"
    },
    {
      "id": 131,
      "type": "single",
      "question": "在 Windows 操作系统中，用于查看事件日志的工具是",
      "options": [
        {
          "letter": "A",
          "text": "资源管理器"
        },
        {
          "letter": "B",
          "text": "事件查看器"
        },
        {
          "letter": "C",
          "text": "任务管理器"
        },
        {
          "letter": "D",
          "text": "控制面板"
        }
      ],
      "answer": "B"
    },
    {
      "id": 132,
      "type": "single",
      "question": "当需要排查操作系统中某个应用程序频繁崩溃的问题时，应重点查看",
      "options": [
        {
          "letter": "A",
          "text": "系统事件日志"
        },
        {
          "letter": "B",
          "text": "安全事件日志"
        },
        {
          "letter": "C",
          "text": "应用程序事件日志"
        },
        {
          "letter": "D",
          "text": "网络事件日志"
        }
      ],
      "answer": "C"
    },
    {
      "id": 135,
      "type": "single",
      "question": "以下哪项不属于《数据安全法》规定的数据处理活动?",
      "options": [
        {
          "letter": "A",
          "text": "数据收集"
        },
        {
          "letter": "B",
          "text": "数据存储"
        },
        {
          "letter": "C",
          "text": "数据使用"
        },
        {
          "letter": "D",
          "text": "数据销毁"
        }
      ],
      "answer": "D"
    },
    {
      "id": 136,
      "type": "single",
      "question": "违反《数据安全法》规定，拒不改正或者造成严重后果的，可以责令暂停相关业务、停业整顿、吊销相关业务许可证或者吊销营业执照，对直接负责的主管人员和其他直接责任人员处罚款。",
      "options": [
        {
          "letter": "A",
          "text": "1 万元以上 10 万元以下"
        },
        {
          "letter": "B",
          "text": "5 万元以上 50 万元以下"
        },
        {
          "letter": "C",
          "text": "10 万元以上 100 万元以下"
        },
        {
          "letter": "D",
          "text": "50 万元以上 500 万元以下"
        }
      ],
      "answer": "C"
    },
    {
      "id": 137,
      "type": "single",
      "question": "以下哪个 Python 内置函数可以用于获取函数的文档字符串?",
      "options": [
        {
          "letter": "A",
          "text": "doc()"
        },
        {
          "letter": "B",
          "text": "help()"
        },
        {
          "letter": "C",
          "text": "dir()"
        },
        {
          "letter": "D",
          "text": "doc"
        }
      ],
      "answer": "D"
    },
    {
      "id": 139,
      "type": "single",
      "question": "根据《著作权法》，作品的著作权保护期限是作者终生及其死亡后多少年?",
      "options": [
        {
          "letter": "A",
          "text": "20 年"
        },
        {
          "letter": "B",
          "text": "30 年"
        },
        {
          "letter": "C",
          "text": "50 年"
        },
        {
          "letter": "D",
          "text": "70 年"
        }
      ],
      "answer": "C"
    },
    {
      "id": 141,
      "type": "single",
      "question": "心理学关于成人发展的研究重点是什么?",
      "options": [
        {
          "letter": "A",
          "text": "性格"
        },
        {
          "letter": "B",
          "text": "人格"
        },
        {
          "letter": "C",
          "text": "气质"
        },
        {
          "letter": "D",
          "text": "学习"
        }
      ],
      "answer": "B"
    },
    {
      "id": 142,
      "type": "single",
      "question": "存储国家秘密信息的介质，应按所存储信息的什么密级标明密级?",
      "options": [
        {
          "letter": "A",
          "text": "最高"
        },
        {
          "letter": "B",
          "text": "最低"
        },
        {
          "letter": "C",
          "text": "相应"
        },
        {
          "letter": "D",
          "text": "平均"
        }
      ],
      "answer": "A"
    },
    {
      "id": 144,
      "type": "single",
      "question": "涉密人员离岗、离职前，应当将所保管和使用的涉密载体全部清退，并办理什么手续?",
      "options": [
        {
          "letter": "A",
          "text": "登记销毁"
        },
        {
          "letter": "B",
          "text": "订卷归档"
        },
        {
          "letter": "C",
          "text": "移交手续"
        },
        {
          "letter": "D",
          "text": "自行留存备份"
        }
      ],
      "answer": "C"
    },
    {
      "id": 145,
      "type": "single",
      "question": "下列不属于成人继续社会化主要包括的内容是什么?",
      "options": [
        {
          "letter": "A",
          "text": "继续学习生产、生活所需的知识与技能"
        },
        {
          "letter": "B",
          "text": "继续掌握一定的社会行为规范"
        },
        {
          "letter": "C",
          "text": "继续习得一定社会的价值观"
        },
        {
          "letter": "D",
          "text": "继续参加学校教育"
        }
      ],
      "answer": "D"
    },
    {
      "id": 146,
      "type": "single",
      "question": "数据伦理中的“知情同意”原则要求数据主体必须如何?",
      "options": [
        {
          "letter": "A",
          "text": "完全理解数据如何被使用"
        },
        {
          "letter": "B",
          "text": "无需理解数据使用方式"
        },
        {
          "letter": "C",
          "text": "无需同意数据使用"
        },
        {
          "letter": "D",
          "text": "可随时撤销同意"
        }
      ],
      "answer": "A"
    },
    {
      "id": 147,
      "type": "single",
      "question": "学习型组织的本质是什么?",
      "options": [
        {
          "letter": "A",
          "text": "把学习共享系统组合起来的组织"
        },
        {
          "letter": "B",
          "text": "组织学习"
        },
        {
          "letter": "C",
          "text": "终生学习"
        },
        {
          "letter": "D",
          "text": "创新与可持续"
        }
      ],
      "answer": "A"
    },
    {
      "id": 149,
      "type": "single",
      "question": "面向金融领域的 AI 训练师，发现模型对某少数民族客户群体存在信用评分偏差时，应当首先",
      "options": [
        {
          "letter": "A",
          "text": "调整模型参数平衡评分结果"
        },
        {
          "letter": "B",
          "text": "向监管机构报告偏差现象"
        },
        {
          "letter": "C",
          "text": "开展偏差成因的归因分析"
        },
        {
          "letter": "D",
          "text": "暂停模型在金融场景的应用"
        }
      ],
      "answer": "C"
    },
    {
      "id": 150,
      "type": "single",
      "question": "跨职能团队协作开发多模态模型时，最关键的协作要素是",
      "options": [
        {
          "letter": "A",
          "text": "各团队使用独立数据标注规范"
        },
        {
          "letter": "B",
          "text": "定期同步进度但不过问技术细节"
        },
        {
          "letter": "C",
          "text": "建立统一的知识共享机制"
        },
        {
          "letter": "D",
          "text": "按部门拆分模型模块独立开发"
        }
      ],
      "answer": "C"
    },
    {
      "id": 151,
      "type": "single",
      "question": "训练师发现标注团队为提升效率，擅自简化标注流程导致 5%的样本错误，应",
      "options": [
        {
          "letter": "A",
          "text": "重新标注全部样本"
        },
        {
          "letter": "B",
          "text": "仅修正错误样本"
        },
        {
          "letter": "C",
          "text": "上报建立复核机制"
        },
        {
          "letter": "D",
          "text": "处罚相关责任人"
        }
      ],
      "answer": "C"
    },
    {
      "id": 153,
      "type": "single",
      "question": "数据伦理的“问责制”原则要求数据使用者如何?",
      "options": [
        {
          "letter": "A",
          "text": "无需对其行为负责"
        },
        {
          "letter": "B",
          "text": "需对其行为负责"
        },
        {
          "letter": "C",
          "text": "可随意处理数据"
        },
        {
          "letter": "D",
          "text": "无需遵守法律法规"
        }
      ],
      "answer": "B"
    },
    {
      "id": 154,
      "type": "single",
      "question": "关于国家秘密载体销毁的程序及有关规定，正确的是?",
      "options": [
        {
          "letter": "A",
          "text": "自行销毁"
        },
        {
          "letter": "B",
          "text": "送交保密行政管理部门设立的销毁工作机构"
        },
        {
          "letter": "C",
          "text": "无需专人现场监销"
        },
        {
          "letter": "D",
          "text": "可随时进行销毁"
        }
      ],
      "answer": "B"
    },
    {
      "id": 155,
      "type": "single",
      "question": "职业技能伦理中，以下哪项是正确的客户服务理念?",
      "options": [
        {
          "letter": "A",
          "text": "欺骗客户"
        },
        {
          "letter": "B",
          "text": "忽视客户需求"
        },
        {
          "letter": "C",
          "text": "真诚服务"
        },
        {
          "letter": "D",
          "text": "利用客户信息"
        }
      ],
      "answer": "C"
    },
    {
      "id": 156,
      "type": "single",
      "question": "在模型训练过程中，训练师发现数据标注文档包含用户敏感信息， 最符合\"保守秘密\"原则的做法是",
      "options": [
        {
          "letter": "A",
          "text": "立即删除文档并装作未看见"
        },
        {
          "letter": "B",
          "text": "提取敏感信息用于模型优化"
        },
        {
          "letter": "C",
          "text": "向数据安全部门报告并申请脱敏处理"
        },
        {
          "letter": "D",
          "text": "转发给同事确认处理方式"
        }
      ],
      "answer": "C"
    },
    {
      "id": 157,
      "type": "single",
      "question": "训练师团队共用标注设备时，最合理的交接班操作是",
      "options": [
        {
          "letter": "A",
          "text": "直接锁屏离开"
        },
        {
          "letter": "B",
          "text": "清理个人文件并注销"
        },
        {
          "letter": "C",
          "text": "保持程序运行状态"
        },
        {
          "letter": "D",
          "text": "重启设备供下一位使用"
        }
      ],
      "answer": "B"
    },
    {
      "id": 158,
      "type": "single",
      "question": "训练师团队接到需求， 要求使用某开源医疗数据集但无法获取患者知情同意书，正确的处理方式是",
      "options": [
        {
          "letter": "A",
          "text": "使用差分隐私技术脱敏后使用"
        },
        {
          "letter": "B",
          "text": "直接采用并标注数据用途限制"
        },
        {
          "letter": "C",
          "text": "拒绝使用并建议替代数据源"
        },
        {
          "letter": "D",
          "text": "向伦理委员会申请豁免许可"
        }
      ],
      "answer": "C"
    },
    {
      "id": 159,
      "type": "single",
      "question": "处理个人数据时，以下哪项不是必须遵守的原则?",
      "options": [
        {
          "letter": "A",
          "text": "合法性"
        },
        {
          "letter": "B",
          "text": "最小化原则"
        },
        {
          "letter": "C",
          "text": "目的限制原则"
        },
        {
          "letter": "D",
          "text": "随意丢弃原则"
        }
      ],
      "answer": "D"
    },
    {
      "id": 160,
      "type": "single",
      "question": "客户要求签署保密协议后提供模型参数，训练师应优先",
      "options": [
        {
          "letter": "A",
          "text": "直接签署协议"
        },
        {
          "letter": "B",
          "text": "咨询法务部门意见"
        },
        {
          "letter": "C",
          "text": "拒绝提供核心参数"
        },
        {
          "letter": "D",
          "text": "要求提高服务费用"
        }
      ],
      "answer": "B"
    }
  ],
  "multi": [
    {
      "id": 1,
      "type": "multi",
      "question": "以下哪些因素会影响业务数据质量完整性校验的效果?",
      "options": [
        {
          "letter": "A",
          "text": "校验规则的合理性"
        },
        {
          "letter": "B",
          "text": "数据的来源可靠性"
        },
        {
          "letter": "C",
          "text": "校验工具的性能"
        },
        {
          "letter": "D",
          "text": "数据的存储格式"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 2,
      "type": "multi",
      "question": "以下哪些措施有助于实现业务数据质量的一致性控制?",
      "options": [
        {
          "letter": "A",
          "text": "建立统一的数据标准和规范"
        },
        {
          "letter": "B",
          "text": "对数据进行定期的质量检查和清洗"
        },
        {
          "letter": "C",
          "text": "采用先进的数据处理技术和工具"
        },
        {
          "letter": "D",
          "text": "加强对数据录入人员的培训和管理"
        }
      ],
      "answer": "ABD"
    },
    {
      "id": 3,
      "type": "multi",
      "question": "以下哪些因素会影响数据全生命周期追踪的效果?",
      "options": [
        {
          "letter": "A",
          "text": "追踪技术的选择"
        },
        {
          "letter": "B",
          "text": "人员的管理和培训"
        },
        {
          "letter": "C",
          "text": "数据的规模和复杂度"
        },
        {
          "letter": "D",
          "text": "企业的业务需求变化"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 5,
      "type": "multi",
      "question": "在使用 Excel 进行数据可视化时，哪些操作可以提高图表的可读性?",
      "options": [
        {
          "letter": "A",
          "text": "添加数据标签"
        },
        {
          "letter": "B",
          "text": "更改图表类型"
        },
        {
          "letter": "C",
          "text": "调整颜色编码"
        },
        {
          "letter": "D",
          "text": "删除不必要的数据系列"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 6,
      "type": "multi",
      "question": "在进行数据采集时，需要考虑的因素包括",
      "options": [
        {
          "letter": "A",
          "text": "采集范围"
        },
        {
          "letter": "B",
          "text": "采集对象"
        },
        {
          "letter": "C",
          "text": "采集环境"
        },
        {
          "letter": "D",
          "text": "采集成本"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 7,
      "type": "multi",
      "question": "在数据清洗过程中，以下哪些属于清洗质量评估的标准?",
      "options": [
        {
          "letter": "A",
          "text": "完整性"
        },
        {
          "letter": "B",
          "text": "一致性"
        },
        {
          "letter": "C",
          "text": "美观性"
        },
        {
          "letter": "D",
          "text": "准确性"
        }
      ],
      "answer": "ABD"
    },
    {
      "id": 8,
      "type": "multi",
      "question": "统计操作规范性检查中，关于数据质量的评估，以下哪些指标是常用的?",
      "options": [
        {
          "letter": "A",
          "text": "数据的准确性"
        },
        {
          "letter": "B",
          "text": "数据的完整性"
        },
        {
          "letter": "C",
          "text": "数据的一致性"
        },
        {
          "letter": "D",
          "text": "数据的时效性"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 9,
      "type": "multi",
      "question": "在处理标注歧义时，引入外部资源可以包括",
      "options": [
        {
          "letter": "A",
          "text": "相关的学术文献"
        },
        {
          "letter": "B",
          "text": "专业的词典"
        },
        {
          "letter": "C",
          "text": "行业专家的意见"
        },
        {
          "letter": "D",
          "text": "标注人员的主观猜测"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 10,
      "type": "multi",
      "question": "以下哪些选项是 Pandas 中处理重复值的相关函数?",
      "options": [
        {
          "letter": "A",
          "text": "duplicated()"
        },
        {
          "letter": "B",
          "text": "drop_duplicates()"
        },
        {
          "letter": "C",
          "text": "isna()"
        },
        {
          "letter": "D",
          "text": "fillna()"
        }
      ],
      "answer": "AB"
    },
    {
      "id": 11,
      "type": "multi",
      "question": "下列哪些方法可以用于检测数据中的异常值?",
      "options": [
        {
          "letter": "A",
          "text": "箱线图法"
        },
        {
          "letter": "B",
          "text": "Z 分数法"
        },
        {
          "letter": "C",
          "text": "均值法"
        },
        {
          "letter": "D",
          "text": "聚类分析"
        }
      ],
      "answer": "ABD"
    },
    {
      "id": 12,
      "type": "multi",
      "question": "下列哪些图形可以用于展示数据的频数分布?",
      "options": [
        {
          "letter": "A",
          "text": "直方图"
        },
        {
          "letter": "B",
          "text": "饼图"
        },
        {
          "letter": "C",
          "text": "箱线图"
        },
        {
          "letter": "D",
          "text": "散点图"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 13,
      "type": "multi",
      "question": "以下属于视频数据标注工具常见功能的有",
      "options": [
        {
          "letter": "A",
          "text": "支持多种标注类型切换"
        },
        {
          "letter": "B",
          "text": "提供标注审核机制"
        },
        {
          "letter": "C",
          "text": "自动识别视频中的所有物体"
        },
        {
          "letter": "D",
          "text": "允许多人协作标注"
        }
      ],
      "answer": "ABD"
    },
    {
      "id": 14,
      "type": "multi",
      "question": "下列哪些词在句子中可能作为动词使用，并在词性标注中会被标注为动词?",
      "options": [
        {
          "letter": "A",
          "text": "思考"
        },
        {
          "letter": "B",
          "text": "书本"
        },
        {
          "letter": "C",
          "text": "跳跃"
        },
        {
          "letter": "D",
          "text": "阳光"
        }
      ],
      "answer": "AC"
    },
    {
      "id": 15,
      "type": "multi",
      "question": "有效的备份策略应包含哪些要素?",
      "options": [
        {
          "letter": "A",
          "text": "定期备份计划"
        },
        {
          "letter": "B",
          "text": "备份数据验证"
        },
        {
          "letter": "C",
          "text": "异地存储方案"
        },
        {
          "letter": "D",
          "text": "即时恢复机制"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 6,
      "type": "multi",
      "question": "在设计容器化运维平台时，需要考虑哪些关键技术要素?",
      "options": [
        {
          "letter": "A",
          "text": "服务网格(Service Mesh)"
        },
        {
          "letter": "B",
          "text": "持续集成/持续部署(CI/CD)"
        },
        {
          "letter": "C",
          "text": "无服务器计算(Serverless)"
        },
        {
          "letter": "D",
          "text": "边缘计算节点部署"
        }
      ],
      "answer": "AB"
    },
    {
      "id": 17,
      "type": "multi",
      "question": "根据《中华人民共和国个人信息保护法》，个人信息处理者处理个人信息，有下列哪些情形之一的，行为人不承担民事责任?",
      "options": [
        {
          "letter": "A",
          "text": "在该自然人或者其监护人同意的范围内合理实施的行为"
        },
        {
          "letter": "B",
          "text": "合理处理该自然人自行公开的或者其他已经合法公开的信息，但是该自然人明确拒绝或者处理该信息侵害其重大利益的除外"
        },
        {
          "letter": "C",
          "text": "为维护公共利益或者该自然人合法权益，合理实施的其他行为"
        },
        {
          "letter": "D",
          "text": "未经个人同意， 但为商业利益而处理个人信息"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 18,
      "type": "multi",
      "question": "以下哪些行为体现了人工智能训练师的“恪尽职守”职业守则?",
      "options": [
        {
          "letter": "A",
          "text": "定期参加数据安全培训"
        },
        {
          "letter": "B",
          "text": "对模型输出的医疗诊断承担最终责任"
        },
        {
          "letter": "C",
          "text": "建立标注流程质量监控仪表盘"
        },
        {
          "letter": "D",
          "text": "因项目进度压力降低标注精度"
        }
      ],
      "answer": "AC"
    },
    {
      "id": 19,
      "type": "multi",
      "question": "数据伦理中“尊重个人隐私”原则包括以下哪些内容?",
      "options": [
        {
          "letter": "A",
          "text": "保护个人数据不被未经授权的访问"
        },
        {
          "letter": "B",
          "text": "允许数据主体访问其个人数据"
        },
        {
          "letter": "C",
          "text": "允许数据主体更正其个人数据"
        },
        {
          "letter": "D",
          "text": "允许数据主体删除其个人数据"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 20,
      "type": "multi",
      "question": "终身学习的特点有哪些?",
      "options": [
        {
          "letter": "A",
          "text": "时间观念上:从一次性学习到终身学习"
        },
        {
          "letter": "B",
          "text": "空间观念上:从封闭学习到开放学习"
        },
        {
          "letter": "C",
          "text": "价值观念上:从学历学习到能力学习"
        },
        {
          "letter": "D",
          "text": "学习观念上:成人学习的形式是多种多样的"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 21,
      "type": "multi",
      "question": "以下哪些内容是业务数据汇总报告中应该包含的?",
      "options": [
        {
          "letter": "A",
          "text": "数据采集的方法和过程"
        },
        {
          "letter": "B",
          "text": "数据的汇总结果和分析"
        },
        {
          "letter": "C",
          "text": "对未来业务的预测和建议"
        },
        {
          "letter": "D",
          "text": "报告撰写者的个人喜好"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 22,
      "type": "multi",
      "question": "以下哪些属于常见的数据来源类型?",
      "options": [
        {
          "letter": "A",
          "text": "公开数据集"
        },
        {
          "letter": "B",
          "text": "用户行为日志"
        },
        {
          "letter": "C",
          "text": "传感器数据"
        },
        {
          "letter": "D",
          "text": "股票市场数据"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 23,
      "type": "multi",
      "question": "以下哪些技术可以用于文本数据的情感分析?",
      "options": [
        {
          "letter": "A",
          "text": "朴素贝叶斯分类器"
        },
        {
          "letter": "B",
          "text": "支持向量机"
        },
        {
          "letter": "C",
          "text": "深度学习模型(如 LSTM)"
        },
        {
          "letter": "D",
          "text": "决策树"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 24,
      "type": "multi",
      "question": "以下哪些因素会影响业务数据汇总可视化的效果?",
      "options": [
        {
          "letter": "A",
          "text": "图表类型的选择"
        },
        {
          "letter": "B",
          "text": "数据的准确性"
        },
        {
          "letter": "C",
          "text": "色彩搭配"
        },
        {
          "letter": "D",
          "text": "办公场所的装修风格"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 25,
      "type": "multi",
      "question": "下列哪些方法属于因果推断工具?",
      "options": [
        {
          "letter": "A",
          "text": "回归分析"
        },
        {
          "letter": "B",
          "text": "聚类分析"
        },
        {
          "letter": "C",
          "text": "双重差分法"
        },
        {
          "letter": "D",
          "text": "倾向得分匹配"
        }
      ],
      "answer": "ACD"
    },
    {
      "id": 26,
      "type": "multi",
      "question": "在进行标注一致性评估时，以下哪些做法有助于提高评估的准确性?",
      "options": [
        {
          "letter": "A",
          "text": "选择合适的评估指标"
        },
        {
          "letter": "B",
          "text": "确保标注数据的质量"
        },
        {
          "letter": "C",
          "text": "对标注者进行统一培训"
        },
        {
          "letter": "D",
          "text": "多次进行一致性评估并取平均值"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 27,
      "type": "multi",
      "question": "分类结果完整性验证的方法包括哪些?",
      "options": [
        {
          "letter": "A",
          "text": "人工复核"
        },
        {
          "letter": "B",
          "text": "自动校验工具"
        },
        {
          "letter": "C",
          "text": "数据清洗"
        },
        {
          "letter": "D",
          "text": "抽样检查"
        }
      ],
      "answer": "ABD"
    },
    {
      "id": 28,
      "type": "multi",
      "question": "下列哪些技术可以用于语音数据清洗?",
      "options": [
        {
          "letter": "A",
          "text": "自动语音识别(ASR)"
        },
        {
          "letter": "B",
          "text": "声纹识别"
        },
        {
          "letter": "C",
          "text": "OpenCV 图像处理"
        },
        {
          "letter": "D",
          "text": "Praat 语音分析"
        }
      ],
      "answer": "ABD"
    },
    {
      "id": 29,
      "type": "multi",
      "question": "以下哪些指标属于标注效率评估指标中用于衡量标注质量的指标?",
      "options": [
        {
          "letter": "A",
          "text": "标注准确率"
        },
        {
          "letter": "B",
          "text": "标注错误率"
        },
        {
          "letter": "C",
          "text": "标注召回率"
        },
        {
          "letter": "D",
          "text": "标注一致性"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 30,
      "type": "multi",
      "question": "以下哪些因素会影响标注一致性评估的结果?",
      "options": [
        {
          "letter": "A",
          "text": "标注者的专业水平"
        },
        {
          "letter": "B",
          "text": "标注规范的明确程度"
        },
        {
          "letter": "C",
          "text": "标注数据的复杂性"
        },
        {
          "letter": "D",
          "text": "评估指标的选择"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 32,
      "type": "multi",
      "question": "下列哪些操作可以帮助识别和处理数据集中的重复值?",
      "options": [
        {
          "letter": "A",
          "text": "使用 duplicated()函数标记重复行"
        },
        {
          "letter": "B",
          "text": "使用 drop_duplicates()函数去除重复行"
        },
        {
          "letter": "C",
          "text": "使用 unique()函数获取唯一值"
        },
        {
          "letter": "D",
          "text": "使用 isnull()函数检测缺失值"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 33,
      "type": "multi",
      "question": "文本数据标注工具通常支持以下哪些标注类型?",
      "options": [
        {
          "letter": "A",
          "text": "文本分类"
        },
        {
          "letter": "B",
          "text": "情感分析"
        },
        {
          "letter": "C",
          "text": "命名实体识别"
        },
        {
          "letter": "D",
          "text": "图像识别"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 34,
      "type": "multi",
      "question": "评估数据清洗效果时， 可以从哪些方面入手?",
      "options": [
        {
          "letter": "A",
          "text": "比较清洗前后的数据量"
        },
        {
          "letter": "B",
          "text": "检查数据集中是否还有空值或特殊标记"
        },
        {
          "letter": "C",
          "text": "比较清洗前后的数据分布"
        },
        {
          "letter": "D",
          "text": "仅通过数据的平均值进行比较"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 35,
      "type": "multi",
      "question": "在进行服务器性能监控时，可能会用到以下哪些技术?",
      "options": [
        {
          "letter": "A",
          "text": "系统命令行工具"
        },
        {
          "letter": "B",
          "text": "数据库存储过程"
        },
        {
          "letter": "C",
          "text": "监控软件(如 Zabbix、Prometheus 等)"
        },
        {
          "letter": "D",
          "text": "脚本语言(如 Python、Shell 等)"
        }
      ],
      "answer": "ACD"
    },
    {
      "id": 36,
      "type": "multi",
      "question": "在智能系统维护中，使用日志分析工具时，以下哪些做法可以提高日志分析的效率",
      "options": [
        {
          "letter": "A",
          "text": "建立日志分析模板"
        },
        {
          "letter": "B",
          "text": "定期清理无用日志"
        },
        {
          "letter": "C",
          "text": "手动逐行分析日志"
        },
        {
          "letter": "D",
          "text": "使用自动化分析工具"
        }
      ],
      "answer": "ABD"
    },
    {
      "id": 37,
      "type": "multi",
      "question": "在安装 AI 开发环境时， 需要考虑的因素包括",
      "options": [
        {
          "letter": "A",
          "text": "硬件兼容性"
        },
        {
          "letter": "B",
          "text": "软件版本匹配"
        },
        {
          "letter": "C",
          "text": "操作系统版本"
        },
        {
          "letter": "D",
          "text": "显示器分辨率"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 38,
      "type": "multi",
      "question": "传递绝密级秘密载体， 应当通过什么方式?",
      "options": [
        {
          "letter": "A",
          "text": "机要交通"
        },
        {
          "letter": "B",
          "text": "机要通信"
        },
        {
          "letter": "C",
          "text": "派人直接递送"
        },
        {
          "letter": "D",
          "text": "快递公司"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 39,
      "type": "multi",
      "question": "社会的变化需要社会成员不断学习，下列哪些属于人们必须学习的客观原因?",
      "options": [
        {
          "letter": "A",
          "text": "物质世界的巨大改变"
        },
        {
          "letter": "B",
          "text": "精神世界的巨大改变"
        },
        {
          "letter": "C",
          "text": "道德世界的巨大改变"
        },
        {
          "letter": "D",
          "text": "个人兴趣的改变"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 40,
      "type": "multi",
      "question": "以下哪些行为符合\"保守秘密，诚实守信\"的职业守则?",
      "options": [
        {
          "letter": "A",
          "text": "离职后删除所有工作文件"
        },
        {
          "letter": "B",
          "text": "婉拒猎头关于前公司技术细节的询问"
        },
        {
          "letter": "C",
          "text": "在技术分享会中隐去客户敏感信息"
        },
        {
          "letter": "D",
          "text": "向监管部门如实报告模型缺陷"
        }
      ],
      "answer": "BCD"
    },
    {
      "id": 41,
      "type": "multi",
      "question": "以下哪些方法可以用于数据质量准确性验证?",
      "options": [
        {
          "letter": "A",
          "text": "规则校验"
        },
        {
          "letter": "B",
          "text": "对比校验"
        },
        {
          "letter": "C",
          "text": "统计校验"
        },
        {
          "letter": "D",
          "text": "人工抽检"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 42,
      "type": "multi",
      "question": "在进行图片数据采集时， 以下哪些因素需要考虑?",
      "options": [
        {
          "letter": "A",
          "text": "采集设备的性能"
        },
        {
          "letter": "B",
          "text": "采集环境的光照条件"
        },
        {
          "letter": "C",
          "text": "采集人员的专业水平"
        },
        {
          "letter": "D",
          "text": "采集数据的存储方式"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 43,
      "type": "multi",
      "question": "以下哪些因素在制定数据标准化统一命名规则时需要重点考虑?",
      "options": [
        {
          "letter": "A",
          "text": "数据的业务语义清晰性"
        },
        {
          "letter": "B",
          "text": "不同编程语言的兼容性"
        },
        {
          "letter": "C",
          "text": "数据库系统的性能优化"
        },
        {
          "letter": "D",
          "text": "团队成员的个人习惯"
        }
      ],
      "answer": "AB"
    },
    {
      "id": 44,
      "type": "multi",
      "question": "以下哪些因素在制定数据标准化统一命名规则时需要考虑?",
      "options": [
        {
          "letter": "A",
          "text": "数据的业务含义"
        },
        {
          "letter": "B",
          "text": "编程语言的命名规范"
        },
        {
          "letter": "C",
          "text": "数据库系统的要求"
        },
        {
          "letter": "D",
          "text": "数据的存储格式"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 46,
      "type": "multi",
      "question": "以下哪些措施有助于提高统计操作的规范性?",
      "options": [
        {
          "letter": "A",
          "text": "加强统计人员的培训和教育"
        },
        {
          "letter": "B",
          "text": "建立完善的统计流程和制度"
        },
        {
          "letter": "C",
          "text": "定期对统计操作进行审查和评估"
        },
        {
          "letter": "D",
          "text": "随意更改统计方法和流程以适应不同情况"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 47,
      "type": "multi",
      "question": "以下哪些因素会影响标注结果准确性验证的效果?",
      "options": [
        {
          "letter": "A",
          "text": "验证人员的专业能力和经验"
        },
        {
          "letter": "B",
          "text": "验证所使用的标准和规范"
        },
        {
          "letter": "C",
          "text": "标注数据本身的复杂程度"
        },
        {
          "letter": "D",
          "text": "验证环境的舒适度"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 48,
      "type": "multi",
      "question": "以下哪些统计指标可以用于衡量数据的离散程度?",
      "options": [
        {
          "letter": "A",
          "text": "方差"
        },
        {
          "letter": "B",
          "text": "标准差"
        },
        {
          "letter": "C",
          "text": "变异系数"
        },
        {
          "letter": "D",
          "text": "均值"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 49,
      "type": "multi",
      "question": "以下属于情感标注中常见基础情感类别的有",
      "options": [
        {
          "letter": "A",
          "text": "快乐"
        },
        {
          "letter": "B",
          "text": "悲伤"
        },
        {
          "letter": "C",
          "text": "惊讶"
        },
        {
          "letter": "D",
          "text": "厌恶"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 50,
      "type": "multi",
      "question": "SPSS 提供的统计分析过程包括哪些类型?",
      "options": [
        {
          "letter": "A",
          "text": "描述性统计"
        },
        {
          "letter": "B",
          "text": "平均值比较"
        },
        {
          "letter": "C",
          "text": "相关性分析"
        },
        {
          "letter": "D",
          "text": "数据挖掘"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 51,
      "type": "multi",
      "question": "在处理统计异常数据时， 以下哪些策略是合理的?",
      "options": [
        {
          "letter": "A",
          "text": "删除异常值如果异常值是由于数据录入错误或测量误差导致的"
        },
        {
          "letter": "B",
          "text": "替换异常值如用均值、中位数或基于模型的方法替换"
        },
        {
          "letter": "C",
          "text": "保留异常值，但进行标记和分析"
        },
        {
          "letter": "D",
          "text": "忽略异常值，直接进行数据分析不推荐"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 52,
      "type": "multi",
      "question": "在提高分类结果完整性验证效率方面， 可以采取哪些措施?",
      "options": [
        {
          "letter": "A",
          "text": "使用先进的自动校验工具"
        },
        {
          "letter": "B",
          "text": "增加人工复核的数量"
        },
        {
          "letter": "C",
          "text": "优化数据标注流程"
        },
        {
          "letter": "D",
          "text": "减少不必要的标注类别"
        }
      ],
      "answer": "AC"
    },
    {
      "id": 53,
      "type": "multi",
      "question": "在 NumPy 中， 以下哪些函数可以用于数组的基本操作?",
      "options": [
        {
          "letter": "A",
          "text": "np.array()"
        },
        {
          "letter": "B",
          "text": "np.zeros()"
        },
        {
          "letter": "C",
          "text": "np.ones()"
        },
        {
          "letter": "D",
          "text": "np.empty()"
        }
      ],
      "answer": "ABCD"
    },
    {
      "id": 55,
      "type": "multi",
      "question": "在进行系统日志维护时，需要注意以下哪些方面?",
      "options": [
        {
          "letter": "A",
          "text": "在日志操作过程中先停止系统的运行"
        },
        {
          "letter": "B",
          "text": "遵循相关的法律法规和企业内部规定"
        },
        {
          "letter": "C",
          "text": "备份重要的日志数据，以防操作失误导致数据丢失"
        },
        {
          "letter": "D",
          "text": "只关注当前正在使用的日志文件， 忽略历史日志"
        }
      ],
      "answer": "BC"
    },
    {
      "id": 56,
      "type": "multi",
      "question": "以下哪些属于系统更新的最佳实践?",
      "options": [
        {
          "letter": "A",
          "text": "定期执行系统更新"
        },
        {
          "letter": "B",
          "text": "在测试环境验证更新"
        },
        {
          "letter": "C",
          "text": "使用官方源获取更新"
        },
        {
          "letter": "D",
          "text": "跳过非安全相关更新"
        }
      ],
      "answer": "ABC"
    },
    {
      "id": 57,
      "type": "multi",
      "question": "在 Windows 系统维护中，以下哪些操作可以提高系统安全性?",
      "options": [
        {
          "letter": "A",
          "text": "关闭自动更新"
        },
        {
          "letter": "B",
          "text": "启用防火墙"
        },
        {
          "letter": "C",
          "text": "定期清理临时文件"
        },
        {
          "letter": "D",
          "text": "禁用所有共享"
        }
      ],
      "answer": "BC"
    },
    {
      "id": 59,
      "type": "multi",
      "question": "职业技能伦理要求我们如何处理工作中的冲突?",
      "options": [
        {
          "letter": "A",
          "text": "逃避冲突"
        },
        {
          "letter": "B",
          "text": "积极沟通"
        },
        {
          "letter": "C",
          "text": "推卸责任"
        },
        {
          "letter": "D",
          "text": "寻求解决方案"
        }
      ],
      "answer": "BD"
    },
    {
      "id": 60,
      "type": "multi",
      "question": "以下哪些行为符合\"团结协作\"的职业守则要求?",
      "options": [
        {
          "letter": "A",
          "text": "主动分享个性化标注技巧"
        },
        {
          "letter": "B",
          "text": "在需求评审会保持沉默"
        },
        {
          "letter": "C",
          "text": "参与跨团队技术预研项目"
        },
        {
          "letter": "D",
          "text": "私下质疑同事技术方案"
        }
      ],
      "answer": "AC"
    }
  ]
};