# OpenAI Codex 接入指南

> 现在你可以通过 [优云智算 平台](https://console.compshare.cn/light-gpu/model-center) 使用 `gpt-5.1-codex` 等模型。

## 🚀 Codex CLI 快速入门

### 1. 安装

1. 请确保您已安装 npm，请参考 [Node.js 官方网站](https://nodejs.org/zh-cn/download)。

2. 安装 OpenAI Codex：

```shell
npm install -g @openai/codex@latest
```

### 2. 通过CC Switch配置

下载安装[CC Switch](https://github.com/farion1231/cc-switch/releases)

打开CC Switch客户端，选择Codex并新增供应商

![CC Switch](https://www-s.ucloud.cn/2026/03/be25b9903970d0df9cd43e6379ec6eb6_1773211170755.png)

选择优云智算，在API Key中粘贴优云智算套餐API Key

![CC Switch](https://www-s.ucloud.cn/2026/03/db494dc812a9bc6f89fb89c101db467e_1773975721324.png)

配置模型并添加，添加完成后启用该配置即可

![CC Switch](https://www-s.ucloud.cn/2026/03/23988859cd73ee816a89c981213598fb_1773975721315.png)



### 3. Linux通过本地文件配置

#### 2.1 配置模型提供商

在 Mac 或 Linux 环境下创建并配置您的 `~/.codex/config.toml` 文件：

```toml
model_provider = "ucloud"
model_reasoning_effort = "high"
model = "gpt-5.1-codex"

[model_providers.ucloud]
name = "ucloud"
base_url = "https://api.modelverse.cn/v1"
wire_api = "responses"
requires_openai_auth = true
```

#### 2.2 配置 API Key

创建并配置您的 `~/.codex/auth.json` 文件：

```json
{
  "OPENAI_API_KEY": "your-优云智算-api-key"
}
```

> **注意**: 请将 `your-优云智算-api-key` 替换为您在 优云智算 平台获取的实际 API Key。

#### 2.3 使用 Codex

配置完成后，您可以直接在终端中运行 Codex：

```shell
codex
```

您可以通过 `/model`来切换模型，如图所示：
![codex-model](https://www-s.ucloud.cn/2026/01/431007f9ddb363815aa22f07eeb0278b_1768807515516.png)
您也可以在配置后直接安装`codex` VS Code 插件，并切换模型和推理强度进行使用。
![codex-vscode](https://www-s.ucloud.cn/2026/01/0e64138eeefc6f20a9c2ac46ee625ee8_1768807515512.png)

### 4. Windows桌面版通过本地配置

#### 4.1 下载安装

下载安装Windows桌面版，请参考 [Codex 官方网站](https://openai.com/zh-Hans-CN/codex/)。

#### 4.2 通过修改本地文件配置

找到Codex目录下的config.toml文件（一般在 C:\Users\User\.codex目录下）

打开config.toml，复制如下内容覆盖后保存（model替换为需要模型）

```bash
model_provider = "ucloud"
model = "gpt-5.2"
disable_response_storage = true
model_reasoning_effort = "medium"

[model_providers]

[windows]
sandbox = "elevated"
[model_providers.ucloud]
name = "ucloud"
base_url = "https://api.modelverse.cn/v1"
wire_api = "responses"
requires_openai_auth = true
```

#### 4.3 使用Codex Windwos桌面版

打开Codex应用，选择OpenAI API密钥登录，输入优云智算API Key

![codex](https://www-s.ucloud.cn/2026/03/c2da7d8e16b97572c3d5b3eed0cb5d5f_1773212587417.png)

选择刚刚配置的模型ID即可使用

![codex](https://www-s.ucloud.cn/2026/03/109c9ec23e623399ff2eed2affe426b3_1773212587425.png)

