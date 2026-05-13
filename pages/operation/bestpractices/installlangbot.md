# 使用LangBot快速部署QQ、微信、飞书、钉钉机器人   
LangBot 是一个开源的大语言模型（LLM）原生即时通信机器人平台，支持多种消息平台和模型供应商。并提供 WebUI 供用户快速部署和使用。支持QQ 、QQ频道、Discord、 WeChat、企业微信（个人微信）、 Telegram 、飞书、钉钉等。     

## 使用 LangBot + Ollama 镜像

1. 进入[镜像地址](https://www.compshare.cn/images/0bwUeAJZW7sE?referral_code=EKReNWcjHNUE0IP8t8iYFQ ) ，选择最新版本。

2. 点击“使用该镜像创建实例”后，在新页面根据自身需求选择GPU型号（教程使用3080TI 12g）和实例配置等。然后点击”立即部署”，之后等待实例状态变成”运行中”。  
3. 之后即可在浏览器访问 `http://<实例外网ip>:5300` 进入 LangBot 管理后台，按照提示注册登录。

该镜像中，已配置好 Ollama + DeepSeek R1 14b 模型，并已添加到了 LangBot 模型设置，可直接使用。

## WebChat 调试

不需要配置即时通信机器人即可调试，到流水线配置页，点击唯一的流水线，即可在页面上对话调试。

## 更换模型

### 使用 Ollama 拉取新模型

1. 使用实例控制台中提供的"登录"功能，密码在"实例列表"中的"SSH登录"有显示。
2. 使用命令 `ollama pull 模型名称` ，拉取模型；例如：`ollama pull deepseek-r1:32b` 拉取 DeepSeek R1 32b 模型，更多模型列表可在 https://ollama.com/library 查看。

3. 前往langbot的web 后台中的模型配置，并点击“+”号添加，在“供应商”下方的下拉菜单中，选择“Ollama”。“模型名称”处填写你刚刚下载运行完成的模型名称。

填写完成并保存后即可前往所用流水线中更改“AI能力”使用的模型

### 使用优云智算提供的模型API

1. 前往新建apikey https://console.compshare.cn/light-gpu/api-keys

2. 创建并复制之后，前往 LangBot “模型”页面，添加模型，模型提供商使用优云智算，并在apikey处填写复制的apikey。可用模型名称可以前往 https://console.compshare.cn/light-gpu/model-center 查看

填写完成并保存后即可前往所用流水线中更改“AI能力”使用的模型

## 接入即时通信机器人

本教程中以飞书机器人为例，更多平台（QQ、微信、Discord、飞书等）[请根据文档配置](https://docs.langbot.app/zh/deploy/platforms/readme.html)。

**创建机器人**

前往[飞书开放平台](https://open.feishu.cn/app)，登录后，创建企业自建应用。

![飞书开放平台](https://www-s.ucloud.cn/2025/07/61eb3bd3f6e92566f9d00fe98cf5b1c0_1752112016197.png)

![创建应用](https://www-s.ucloud.cn/2025/07/e26880502f4ee8f71629ed297e12bb0b_1752112125221.png)   
（应用名称和应用描述根据自己实际填写)

为应用添加机器人能力，点击“机器人”下方的添加：

![添加能力](https://www-s.ucloud.cn/2025/07/a3dffeed3fcb99140d2642c19314765d_1752112256294.png)
在权限管理中添加图中所示权限：

![添加权限](https://www-s.ucloud.cn/2025/07/42f6358bb8969aa47afb5170de8070eb_1752112395132.png)
权限名称分别是：

1.  获取与发送单聊、群组消息
2.  接收群聊中@机器人消息事件
3.  读取用户发给机器人的单聊消息

**对接 LangBot**

在凭证与基础信息页找到 *app_id* 和 *app_secret* 并记录

![复制凭证](https://www-s.ucloud.cn/2025/07/c7b5bbbcee138d348939f20ce1687996_1752112442875.png)

打开LangBot 的 Webui 配置页面，接入“机器人”界面后，点击“+”号，“平台/适配器选择”选择“飞书”  

![选择飞书](https://www-s.ucloud.cn/2025/07/5907c24dbf3a12aaf35d26d249043a4e_1752112482622.png)

![配置飞书](https://www-s.ucloud.cn/2025/07/16d8bba71e23962821ebc911d9a16087_1752112521374.png)

填写完成并点击“提交”，然后在“编辑机器人”窗口将“是否启用”打开，并点击“保存”来保存。

**配置事件订阅**

前往事件与回调页，配置订阅方式为长连接：
![事件配置](https://www-s.ucloud.cn/2025/07/4df7884aba13e2c0dc8e577f57b35d11_1752112585841.png)
并添加事件：接收消息

![接收消息](https://www-s.ucloud.cn/2025/07/4fb397c6260324065db82f50cdf0ffc5_1752112629817.png)
**发布机器人**
点击顶部创建版本，填写版本号等信息，点击下方保存。

![发布](https://www-s.ucloud.cn/2025/07/05b98712bfb8b93c810e146bd535c33d_1752112686139.png)
在飞书群中添加机器人，即可使用：

![群聊](https://www-s.ucloud.cn/2025/07/289b25dce4280b8b0564a65cd8732474_1752112773484.png)
私聊也可以直接使用

![私聊](https://www-s.ucloud.cn/2025/07/da84697b2466bc1eff070869ad742002_1752112806223.png)





