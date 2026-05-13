# Claude Code 接入指南

> 现在你可以通过 [优云智算 平台](https://console.compshare.cn/light-gpu/model-center) 使用 Claude 系列模型。

## 系统要求

| 平台    | 要求                                |
| ------- | ----------------------------------- |
| Windows | Windows 10 或 Windows 11            |
| macOS   | macOS 10.15 (Catalina) 或更高版本   |
| Linux   | Ubuntu 18.04+, CentOS 7+, Debian 9+ |

所有平台均需要：
- Node.js 18+
- 网络连接

## 1. 安装 Node.js

请确保您已安装 Node.js 18+，请参考 [Node.js 官方网站](https://nodejs.org/zh-cn/download)。

验证安装：
```bash
node --version
npm --version
```

> **提示：** 建议使用 LTS（长期支持）版本以获得最佳稳定性。

## 2. 安装 Claude Code CLI

打开终端/命令提示符，执行以下命令：

```bash
npm install -g @anthropic-ai/claude-code
```

验证安装：
```bash
claude --version
```

> **注意：** Windows 用户如遇到权限问题，请确保以管理员身份运行命令提示符。

## 3. 通过 CCswitch 配置 优云智算 API

下载安装[CC Switch](https://github.com/farion1231/cc-switch/releases)

打开CC Switch客户端，选择Claude并新增供应商

![CC Switch](https://www-s.ucloud.cn/2026/03/23a353b3ce8b4c38c7f96075409fd1b2_1773975324264.png)

选择优云智算，粘贴优云智算套餐API Key

![CC Switch](https://www-s.ucloud.cn/2026/03/2eeeb20025ceb4749ad4ebc9eb0d9b2a_1773975324271.png)

配置模型ID并添加

![CC Switch](https://www-s.ucloud.cn/2026/03/f29aee0fc4a04a246b7326c484bc711a_1773975324278.png)

添加完成后启用该配置即可

![CC Switch](https://www-s.ucloud.cn/2026/03/f2a2413595360a6d43718c625cc29ac9_1773975324284.png)




## 4. 手动配置 优云智算 API

### 4.1 获取 API Key

访问优云智算 控制台获取您的 API 密钥。

### 4.2 配置环境变量

> **重要提示：** 请将下方的 `ANTHROPIC_AUTH_TOKEN` 替换为您在 优云智算 平台获取的实际 API Key！

> **⚠️ 注意：** 由于部分实验性功能存在 API 兼容性问题，建议通过 `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` 参数禁用这些功能以确保稳定运行。

<!-- tabs:start -->
#### **Windows**

配置位置：`%USERPROFILE%\.claude\settings.json`

Coding Plan
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-优云智算-api-key",
    "ANTHROPIC_BASE_URL": "https://cp.compshare.cn",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-5-20250929",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  }
}
```

按量计费
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-套餐-api-key",
    "ANTHROPIC_BASE_URL": "https://api.modelverse.cn",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-5-20250929",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  }
}
```

#### **macOS**

配置位置：`~/.claude/settings.json`

Coding Plan
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-套餐-api-key",
    "ANTHROPIC_BASE_URL": "https://cp.compshare.cn",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-5-20250929",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  }
}
```

按量计费
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-优云智算-api-key",
    "ANTHROPIC_BASE_URL": "https://api.modelverse.cn",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-5-20250929",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  }
}
```

#### **Linux**

配置位置：`~/.claude/settings.json`

Coding Plan
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-套餐-api-key",
    "ANTHROPIC_BASE_URL": "https://cp.compshare.cn",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-5-20250929",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  }
}
```
<!-- tabs:end -->


按量计费
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-优云智算-api-key",
    "ANTHROPIC_BASE_URL": "https://api.modelverse.cn",
    "ANTHROPIC_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-5-20250929",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  }
}
```
<!-- tabs:end -->

**配置参数说明：**

| 参数                                     | 说明                                          |
| ---------------------------------------- | --------------------------------------------- |
| `ANTHROPIC_MODEL`                        | 指定默认使用的模型                            |
| `ANTHROPIC_DEFAULT_*_MODEL`              | 将 Haiku、Sonnet 等模型统一指向平台支持的模型 |
| `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` | 禁用实验性功能，避免 API 兼容性问题           |

> **注意：** 配置文件更加安全且便于管理，需要重启 Claude Code 才生效。

## 5. 启动 Claude Code

配置完成后，先进入到工程目录：

```bash
cd your-project-folder
```

然后，运行以下命令启动：

```bash
claude
```

首次启动后需要先进行主题的选择等操作：

1. 选择喜欢的主题（回车）
2. 确认安全须知（回车）
3. 使用默认 Terminal 配置（回车）
4. 信任工作目录（回车）
5. 开始编程！🚀
