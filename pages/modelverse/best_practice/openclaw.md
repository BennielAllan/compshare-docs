# OpenClaw 接入指南

> 现在你可以通过OpenClaw接入 [优云智算 平台](https://console.compshare.cn/light-gpu/model-subscription) 模型。


## 1. 通过CC Switch配置

下载安装[CC Switch](https://github.com/farion1231/cc-switch/releases)

打开CC Switch客户端，选择OpenClaw并新增供应商

![CC Switch](https://www-s.ucloud.cn/2026/03/ef04c4bfb095cc7a01833a8551456a25_1773971443718.png)

选择优云智算，根据需要使用的模型，选择对应的API协议

![CC Switch](https://www-s.ucloud.cn/2026/03/f4fb8d07e2604c775a1a6be36cb20859_1773971443707.png)

在API Key中粘贴优云智算套餐API Key配置模型并添加，填写需要配置的模型名字和上下文窗口（一般为200000）

![CC Switch](https://www-s.ucloud.cn/2026/03/5c07c69900fb3872785b12d7e54a7eb6_1773971443700.png)

添加完成后启用该配置即可

![CC Switch](https://www-s.ucloud.cn/2026/03/f2a2413595360a6d43718c625cc29ac9_1773975324284.png)


## 2. 通过修改本地文件配置

### 2.1 启动OpenClaw向导

请确保您已安装OpenClaw，请参考 [OpenClaw官方文档](https://github.com/openclaw/openclaw)

安装完成后打开终端（SSH/CMD/Terminal），输入命令启动配置向导：

```bash
openclaw onboard
```

选择Yes -> 选择QuickStart -> 选择Custom Provider

![openclaw](https://www-s.ucloud.cn/2026/03/c07e62a71bad2e6b51ba48ecd6ba88d6_1772507228806.png)

### 2.2 配置优云智算API

1. 输入API Base URL

Coding Plan套餐 Base URL
```bash
https://cp.compshare.cn/v1
```

按量 Base URL
```bash
https://api.modelverse.cn/v1
```

2. 复制优云智算的对应API-Key，并粘贴填写

3. 选择模型，注意：使用MiniMax、Kimi、GLM等模型选择OpenAI-compatible，使用claude模型选择Anthropic-compatible

4. 从优云模型广场选择模型并复制输入模型ID

5. 验证连接，出现Verification successful则验证成功

6. 自定义Endpoint ID和命名，至此模型就配置完成了，可以继续配置接入渠道

![openclaw配置](https://www-s.ucloud.cn/2026/03/355ec3651dba3024d1ece851d88b126c_1772507228813.png)
