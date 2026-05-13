# 套餐调用及客户端配置

新套餐包采用独立的 BaseURL 及 API Key 
- API调用BaseURL（兼容OpenAI与Anthropic）：https://cp.compshare.cn
- API Key：套餐管理 - [获取API Key](https://console.compshare.cn/light-gpu/model-manage)

客户端配置 Base URL 参考
- openclaw/hermes/opencode/cursor/copilot等配置：https://cp.compshare.cn/v1
- claudecode配置：https://cp.compshare.cn
- trae/workbubby配置：https://cp.compshare.cn/v1/chat/completions

## 各客户端配置指南

### Cursor
![cursor](https://www-s.ucloud.cn/2026/05/f1d5042a39c847e2cab6cfb8e141f1a1_1778478136213.PNG)

### Trae
![trae](https://www-s.ucloud.cn/2026/05/58315381eb7b3af0f5073899be91add4_1778583286887.png)

### Claude Code
通过CC Switch配置，注意请求地址为：https://cp.compshare.cn
![cc](https://www-s.ucloud.cn/2026/05/6a293b19ef709f593f3f383501a85c40_1778478136198.png)

直接修改setting.json文件
```
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://cp.compshare.cn",
    "ANTHROPIC_AUTH_TOKEN": "你的套餐API key",
    "ANTHROPIC_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_REASONING_MODEL": "deepseek-v4-pro"
  },
  "autoUpdatesChannel": "latest"
}
```

### OpenClaw
![openclaw](https://www-s.ucloud.cn/2026/05/c372c35f42c1d11176a2de7414450847_1778478136201.png)


### Hermes
输入指令进入hermes模型配置，选择custom endpoint，然后按图示配置
```
hermes model
```
![hermes](https://www-s.ucloud.cn/2026/05/3ba2f2c703845e67b90946756b083c4f_1778478136210.png)

### WorkBubby

![workbubby](https://www-s.ucloud.cn/2026/05/2c22b1f56fa331d1b99b5fabc388a129_1778478641732.png)


### OpenCode
打开opencode.json文件，根据需求模型修改配置，并覆盖粘贴保存
```
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "compshare": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "compshare",
      "options": {
        "baseURL": "https://cp.compshare.cn/v1",
        "apiKey": "your-api-key",
      },
      "models": {
        "glm-5.1": {
          "name": "glm-5.1",
        }
      }
    }
  }
}
```
