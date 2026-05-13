# 在Dify中使用优云智算LLM API  
## 关于Dify
Dify 是一款开源的大语言模型(LLM) 应用开发平台。它融合了后端即服务（Backend as Service）和 LLMOps 的理念，使开发者可以快速搭建生产级的生成式 AI 应用。

## 在Dify中使用LLM API
### 第一步：[获取 API Key](https://console.compshare.cn/light-gpu/api-keys)

### 使用方式一：通过Dify插件市场安装
1. 登录Dify，进入Dify插件市场 https://cloud.dify.ai/plugins?category=discover

2. 搜索**优云智算**，找到对应插件并安装

![dify](https://www-s.ucloud.cn/2025/08/cf99305871943b11e379f812fb36328e_1755150713557.png)

3. 输入优云智算模型API Key

![dify](https://www-s.ucloud.cn/2025/08/640ec886aa96413b8704407ef822100b_1755150713559.png)

4. 接入完成

![dify](https://www-s.ucloud.cn/2025/08/f2af21154c00a6f61a3c4bc8d8de3603_1755150713554.png)


### 使用方式二：通过OpenAI-API安装
1. 在Dify中右上角点击用户名 -> 设置

![dify](https://www-s.ucloud.cn/2025/05/078d598684b883370efa5a7a84a37d0c_1748427192978.png)

2. 在在模型供应商中安装OpenAI-API-compatible

![dify](https://www-s.ucloud.cn/2025/05/3c68c98a1ac97df6332199c423e2ddce_1748427192982.png)

3.点击添加模型
  - 模型类型选择LLM
  - 模型名称填写您所使用的模型ID，例如 `deepseek-ai/DeepSeek-R1` `deepseek-ai/DeepSeek-V3-0324` `deepseek-ai/DeepSeek-Prover-V2-671B` `Qwen/QwQ-32B` `Qwen/Qwen3-235B-A22B`
  - API Key从控制台上获取
  - URL填写`https://deepseek.modelverse.cn/v1`

![dify](https://www-s.ucloud.cn/2025/05/7d5bd1aea02a464c28debd1d3bbc5815_1748427192973.png)


