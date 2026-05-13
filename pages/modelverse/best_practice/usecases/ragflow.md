## 在RAGFlow中使用优云智算LLM API       
## 关于RAGFlow   
文档处理工具RAGFlow结合大语言模型（LLM），能够针对用户各类不同的复杂格式数据提供可靠的问答服务，并附上有理有据的引用。无论是合同、论文还是技术文档，RAGFlow 都能轻松应对，成为你的智能文档助手。   

## 在RAGFlow中使用LLM API   
### 第一步：[获取 API Key](https://console.compshare.cn/light-gpu/api-keys)    

### 第二步：在RAGFlow进行配置   
1. 进入RAGFlow官网：https://ragflow.io/  

![](https://www-s.ucloud.cn/2025/08/e4d9d38a1c3b665635f282f909b7e4e0_1754279435886.png)  

2. 点击头像进入设置界面，选择【模型供应商】，找到【OpenAI-API-Compatible】，点击【添加模型】 

![](https://www-s.ucloud.cn/2025/08/31b38a67ab7d7d7ff94922b5924b9d73_1754279472176.png)  

3. 选择和填写配置  
 
1）模型类型：选择类型为chat
2）模型名称：填写调用的API的模型名，如：deepseek-ai/DeepSeek-R1-0528
3）基础 URL：`https://api.modelverse.cn/v1`
4）API-Key：粘贴创建的优云智算 API Key
5）最大Tokens数：填写最大上下文，最后点击【确定】进行保存 

![](https://www-s.ucloud.cn/2025/08/d755940120d51ab9fe191a643d07a7b7_1754279552473.png)  

4.保存后，即可看到已经成功添加的模型   

![](https://www-s.ucloud.cn/2025/08/f2fc3476a8d07bb6820a5bc802e161db_1754279597752.png)  

