# OpenCode 接入指南

> 现在你可以通过OpenCode接入 [优云智算 平台](https://console.compshare.cn/light-gpu/model-subscription) 模型。

## 启动OpenCode向导

请确保您已安装OpenCode，请参考 [OpenCode官方文档](https://opencode.ai/docs/zh-cn/)

安装完成后找到对应文件（如没有请自行创建opencode.json）：

- linux：~/.config/opencode/opencode.json
- windows：\Users\您的用户名\.config\opencode\opencode.json

打开opencode.json文件，根据需求模型修改配置，并覆盖粘贴保存

gpt模型配置：
```bash
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "compshare": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "compshare",
      "options": {
        "baseURL": "https://api.modelverse.cn/v1",
        "apiKey": "your-api-key",
      },
      "models": {
        "gpt-5.4": {
          "name": "gpt-5.4",
        }
      }
    }
  }
}
```

claude模型配置
```bash
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "compshare": {
      "npm": "@ai-sdk/anthropic",
      "name": "compshare",
      "options": {
        "baseURL": "https://api.modelverse.cn/v1",
        "apiKey": "your-api-key",
      },
      "models": {
        "claude-opus-4-6": {
          "name": "claude",
        }
      }
    }
  }
}
```

配置完成后保存，打开OpenCode，模型供应商选择compshare即可。
