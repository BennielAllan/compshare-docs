# 在Obsidian中使用优云智算LLM API
## 关于Obsidian   
Obsidian 是一个基于本地Markdown 文件的知识库软件，它以其强大的自定义性和可扩展性而闻名。用户可以利用Obsidian 建立个人知识网络，并通过双向链接、标签和关系图谱等功能来组织和管理笔记。   

## 在Obsidian中使用LLM API   
### 第一步：[获取 API Key](https://console.compshare.cn/light-gpu/api-keys)      

### 第二步：在Obsidian进行配置   
1. 下载 Obsidian，进入Obsidian官网下载软件：https://obsidian.md/    

![](https://www-s.ucloud.cn/2025/08/cd865409b732189e212645800f3d409c_1754285942119.png) 

2. Obsidian的配置   

1）安装好软件后，打开Obsidian，打开“设置”  

![](https://www-s.ucloud.cn/2025/08/da5a750279c70f0d37a3dafcc13d61cd_1754286017122.png)  

2）点击“Community plugins”，再点击“Browse”  

![](https://www-s.ucloud.cn/2025/08/8c88948f80349bfc1f43c78d4b2af644_1754286065895.png)  

3）在搜索框中搜索“Copilot”，并安装该插件 

![](https://www-s.ucloud.cn/2025/08/1a040cf7438cd680aa68897e63422ba4_1754286103764.png) 

4）安装完成后，启用“Copilot”插件  

![](https://www-s.ucloud.cn/2025/08/97c0391315bbcadf37010d1cc5729725_1754286139736.png) 

5）进入Copilot插件，点击“Options”  

![](https://www-s.ucloud.cn/2025/08/6ef18f2573af7fdad5a00011caf10610_1754286178109.png)  

6）点击“Model”下拉在Chat Models下面选择“Add Custom Model”    

![](https://www-s.ucloud.cn/2025/08/20d683e96516e3f634dda5ff00396e47_1754286210413.png)     
![](https://www-s.ucloud.cn/2025/08/d0198e9b00d3935dbcceeec87d0e74c5_1754286233009.png) 

7）API配置   
- Model Name：输入调用的API模型，如：deepseek-ai/DeepSeek-R1-0528
- Display Name：自定义展示名
- Provider：选择OpenAI Format
- Base URL：输入优云智算的Base URL：`https://api.modelverse.cn/v1`
- API Key：输入优云智算生成的API Key

3. 完成后，点击Verify验证，出现右上绿色弹窗即代表能够链接成功，即可点击“Add Model”添加模型开始使用 
   
![](https://www-s.ucloud.cn/2025/08/832040096f54cd76d855e50e05745257_1754286305050.png) 

