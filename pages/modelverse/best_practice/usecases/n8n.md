# 在n8n中使用优云智算LLM API     
## 关于n8n   
n8n 是一个开源免费的自动化工作流平台，它提供了 200 多个不同的节点来自动化工作流程，通过编排，可以实现跨不同服务的自动化流程。   

## 在n8n中使用LLM API   
### 第一步：[获取 API Key](https://console.compshare.cn/light-gpu/api-keys)     

### 第二步：在n8n进行配置   

1. n8n 配置   

1）进入n8n网址进行注册或登录：https://n8n.io

注册或登录完成后进入n8n的主界面，新建一个workflow工作流。

![](https://www-s.ucloud.cn/2025/08/0cc2d5c1ead32b8fe21cc92c4e53c3e3_1754287346211.png)  

2）添加触发节点，点击“+”添加触发节点   

![](https://www-s.ucloud.cn/2025/08/2c57f15b8b5a28d968b393917dc52c06_1754287378617.png)  

3）添加Chat节点，在搜索框中搜索”Chat Trigger“并添加     

![](https://www-s.ucloud.cn/2025/08/34bdbb5a35f24c915e42856c0ddbd4e0_1754287416658.png)     
![](https://www-s.ucloud.cn/2025/08/029bf89a46c5ecb715c1478eb64dd3c8_1754287448476.png)   

返回画布即可看到聊天节点添加成功    

![](https://www-s.ucloud.cn/2025/08/d378cf725c0ea71f82ccf0a3d66362bd_1754287488010.png)

4） 添加AI Agent节点，点击”+“符号，添加节点 

![](https://www-s.ucloud.cn/2025/08/13d4efdd1011dcc36bae4ff2742caf13_1754287539235.png)   

在搜索框中搜索”AI Agent“并添加   

![](https://www-s.ucloud.cn/2025/08/a662c9b1f2e18e0c4182b83b8d93666f_1754287576059.png)    

默认设置不需要修改，直接返回画布即可   

![](https://www-s.ucloud.cn/2025/08/fdaedc263520b1c1cd07811083b39422_1754287608035.png)   

返回画布，即可看到AI Agent节点添加成功   

![](https://www-s.ucloud.cn/2025/08/858b01b7676bf4522534354cb5ae761c_1754287639540.png) 

5）添加API配置，点击AI Agent下面Chat Model的“+”符号，在搜索栏内往下拉，选“OpenAI Chat Model” 

![](https://www-s.ucloud.cn/2025/08/89c97e8442243efdbfe60b675d8f0af6_1754287701507.png)  

进入配置界面，下拉选择“Create New credential”   

![](https://www-s.ucloud.cn/2025/08/59eb4af343760cdff8611172c4121c96_1754287748695.png)  

输入API Key和Base URL   

![](https://www-s.ucloud.cn/2025/08/5c2274d01f12f45423ee6a462875a577_1754287789297.png)    

API信息填写完成后，点击“Save”保存，出现下面弹窗即说明API连接成功   

![](https://www-s.ucloud.cn/2025/08/55ef0c02d79bcac5ebacf0385521b176_1754287825338.png)  

返回上一页，即可看到优云智算API支持的所有模型  

![](https://www-s.ucloud.cn/2025/08/f4e42848c868f948a3a26ade5162fbac_1754287863235.png) 

返回画布，即可看到Chat Model添加成功   

![](https://www-s.ucloud.cn/2025/08/522a6b60b2f1fc62b6c1b761aab24079_1754287900273.png) 

在对话框输入即可测试API模型   

![](https://www-s.ucloud.cn/2025/08/f92006ac946d18baba3685b0d80a5be2_1754287935844.png)  

