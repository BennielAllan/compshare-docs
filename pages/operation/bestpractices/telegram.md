# Clawdbot 配置指南

## 第一步：连接优云实例

选择 clawdbot 镜像 + 优云实例，然后登陆进去。

简单点可以从实例列表的 Jupyterlab 进去,或者自己的 terminal 都可以,登陆进去自己的实例环境即可。
![](https://www-s.ucloud.cn/2026/01/52765446c8742747f26cdf5f23bcb9c3_1769655831352.png)

## 第二步：添加 Clawdbot 配置

现在查一下 Clawdbot 的配置。输入这条命令：
```bash
cat ~/.clawdbot/clawdbot.json
```

如果没有配置过就运行配置向导,输入：
```bash
clawdbot onboard
```

接下来根据它自己的引导做选择。
![](https://www-s.ucloud.cn/2026/01/8a86db3a1a895de233f95c92576d02fe_1769655895301.png)

## 第三步：输入优云模型服务的 Key

上图需要连接 model 服务,Model Provider 的位置选择 ModelVerse,粘贴来自优云控制台的 key：

https://console.compshare.cn/light-gpu/api-keys
![](https://www-s.ucloud.cn/2026/01/cc481cb5b88176b85935f4dba8b7cf33_1769655927872.png)

然后根据引导填入：

- AI 模型选择
- Telegram Bot Token（从 BotFather 获得）
- 其他可选配置

## 第四步：输入 Telegram Bot Token

### 获取方式：

1. 在 Telegram 搜索 `@BotFather`

2. 发送：
```
   /newbot
```

3. BotFather 会问你的机器人名字,比如：
```
   MyClawdbot
```

4. 然后问你用户名,比如：
```
   my_clawdbot_bot
```
   （必须以 `_bot` 结尾,且不能重名）

5. BotFather 会返回一个 Token,输入到calwdbot环节中里问你索要 Token 的地方
![](https://www-s.ucloud.cn/2026/01/77c9c41a55e5a6bc22352eabdb5255a2_1769656009779.png)

### 配置完成

配置完成之后,找到自己的 Telegram Bot,需要这个 Pairing code。
![](https://www-s.ucloud.cn/2026/01/f34f890895dafa92993bcf795884a503_1769656035630.png)

在云主机上执行这个命令来批准你的账户：
```bash
clawdbot pairing approve telegram <你的Pairing code>
```

完成后可以和自己的 Bot 进行对话。
