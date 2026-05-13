# 模型API服务-新功能发布记录

## 2026年3月   
- 上线OpenClaw服务
- 上线bge-reranker-v2-m3 、kling-v3-omni、vidu-one-click-mv、mimo-v2-pro、mimo-v2-flash、MiroThinker-1.7、MiniMax-M2.7、MiniMax-M2.7-highspeed等模型API

## 2026年2月   
- 上线MiniMax-M2.5、GLM-5、豆包Seed系列等模型API
- ​Coding Plan上线：套餐不限制使用场景，API可调用

## 2026年1月   
上线Wan2.6、DeepSeek-OCR-2、MiniMax-M2、Kling O1、vidu-lip等模型API

## 2025年12月
**上线GLM 4.7模型API**

GLM-4.7 是智谱最新旗舰模型，GLM-4.7 面向 Agentic Coding 场景强化了编码能力、长程任务规划与工具协同，并在多个公开基准的当期榜单中取得开源模型中的领先表现。通用能力提升，回复更简洁自然，写作更具沉浸感。在执行复杂智能体任务，在工具调用时指令遵循更强，Artifacts 与 Agentic Coding 的前端美感和长程任务完成效率进一步提升。

**上线DeepSeek-V3.2、DeepSeek-V3.2-Speciale模型API**

DeepSeek-V3.2 的目标是平衡推理能力与输出长度，适合日常使用，例如问答场景和通用 Agent 任务场景。在公开的推理类 Benchmark 测试中，DeepSeek-V3.2 达到了 GPT-5 的水平，仅略低于 Gemini-3.0-Pro；相比 Kimi-K2-Thinking，V3.2 的输出长度大幅降低，显著减少了计算开销与用户等待时间。

**上线IndexTTS-2模型API**

IndexTTS-2是由IndexTeam开发的高质量语音合成模型，支持零样本语音克隆和歌声合成，能够根据参考音频的声音特征生成自然流畅的语音。


## 2025年11月
**上线Kimi-K2-Thinking模型API**


## 2025年10月
**上线Qwen3-max、Qwen-Plus、Qwen-Plus-Thinking模型API**

**上线 Qwen3-VL-235B-A22B-Instruct 和 Qwen3-VL-235B-A22B-Thinking模型API：**

Qwen3系列视觉理解模型，多模态思考能力显著增强，模型在STEM与数学推理方面进行了重点优化；视觉感知与识别能力全面提升、OCR能力迎来重大升级。

**上线sora2 文生视频、图生视频模型：**

新模型以 Sora 的架构为基础，但功能水平达到了旧版视频模型难以企及的高度，包括更精准的物理模拟、更逼真的画面呈现、同步音频、更强大的可操控性，以及更广泛的视频表现风格。已全面支持 OpenAI Sora 2 视频生成 API,提供包括标准分辨率和高清分辨率在内的 6 种不同模型。

**上线GLM-4.6模型：**

Z.ai 正式发布其旗舰大模型 GLM-4.6。与前代 GLM-4.5 相比，这一代模型在上下文窗口、推理能力、智能体协作与代码生成等方面均实现了显著突破。尤其是 200K 超长上下文窗口 与 Claude 级别的代码性能，被认为是对国内外大模型竞争格局的一次强力冲击。GLM-4.6 的发布不仅意味着性能的升级，更代表 Z.ai 在智能体生态和真实场景任务执行力上进一步逼近国际顶尖水平，展现出断层领先的潜力。

**上线DeepSeek-V3.2模型：**

DeepSeek 3.2在 V3.1-Terminus 的基础上引入了 DeepSeek 稀疏注意力机制——一种稀疏注意力机制，旨在探索和验证在长上下文场景下训练和推理效率的优化。


## 2025年9月

**上线Wan2.5 文生视频、图生视频模型：**

Wan2.5是由阿里通义千问团队研发视频生成模型，视频支持生成和画面匹配的人声、音效和背景音乐，支持10S时长，单次生成即可实现更完整的剧情故事，支持24帧/秒的1080P高清视频，画面质量能够满足电影级场景的创作需求。

**上线Qwen-Image、Qwen-Image-Edit等图视频模型：**

Qwen-Image是由阿里通义千问团队研发的200亿参数图像生成基础模型，采用MMDiT架构，于2025年8月5日正式开源。Qwen-Image具有强大的文字渲染能力和精准的图像编辑能力。

**上线Doubao-Seed-1.6系列模型：**

Seed-1.6是字节跳动Seed团队推出的最新通用模型系列，融合了多模态能力，支持自适应的深度思考、多模态理解、图形界面操作，且支持 256K 长上下文的深度推理。



## 2025年8月

**上线DeepSeek-V3.1模型：**

DeepSeek-V3.1 是在 DeepSeek-V3.1-Base 的基础上进行后训练的，后者是通过两阶段长上下文扩展方法构建的，遵循原始 DeepSeek-V3 报告中概述的方法。通过收集更多的长文档并大幅扩展两个训练阶段来扩大了数据集。32K 扩展阶段增加了 10 倍至 630B tokens，而 128K 扩展阶段则增加了 3.3 倍至 209B tokens。此外，DeepSeek-V3.1 使用 UE8M0 FP8 格式的数据进行训练，以确保与微缩数据格式兼容。

## 2025年7月

**上线Qwen3-Coder模型：**

Qwen3-Coder-480B-A35B-Instruct 是由 Qwen 团队开发的混合专家 (MoE) 代码生成模型。该模型针对函数调用、工具使用以及基于存储库的长上下文推理等代理编码任务进行了优化。该模型总共包含 4800 亿个参数，每次前向传递有 350 亿个活跃参数（160 位专家中的 8 位）。

**上线GLM-4.5模型：**

GLM-4.5 是Z.AI最新的旗舰基础模型，专为基于代理的应用构建。它采用混合专家 (MoE) 架构，支持高达 128k 个 token 的上下文长度。GLM-4.5 在推理、代码生成和代理对齐方面提供了显著增强的功能。

**上线Kimi-K2模型：**

上新开源模型Kimi-K2，是一款具备超强代码和 Agent 能力的 MoE 架构基础模型，总参数 1T，激活参数 32B。在通用知识推理、编程、数学、Agent 等主要类别的基准性能测试中，K2 模型的性能超过其他主流开源模型。


## 2025年6月

**上线Flux系列图像生成模型：**

包含Flux Dev、Flux Kontext Pro、Flux Kontext Max、Flux Kontext Pro Multi、Flux Kontext Max Multi、Flux Kontext Pro-Text to Image、Flux Kontext Max-Text to Image 共6款模型，支持文生图、图生图、多图编辑等多种功能，按调用次数计费。

**上线阶跃Step 1模型：**

开放源代码的多模态图像编辑模型，接近 GPT‑4o 与 Gemini2 Flash 性能，支持自然语言驱动的区域修正与风格变换。

**上线文心4.5系列模型：**

包含ERNIE 4.5 Turbo、ERNIE 4.5 Turbo VL、ERNIE X1 Turbo，具备更强的理解、规划、反思与进化能力，适用于中文问答、写作、文案等场景。


## 2025年5月

模型API服务正式上线，提供多种大模型调用能力，包括DeepSeek-V3、DeepSeek-R1、Qwen3-235B、QwQ等，支持Chat API、文本生成等功能。

**产品包含以下子模块：**

* **模型广场：** 提供可调用的模型列表，包括DeepSeek-V3（64K上下文）、DeepSeek-R1（推理优化）、Qwen3-235B（开源大模型）等，支持不同场景需求；
* **模型体验：** 用户可在控制台直接体验聊天对话，测试模型效果，支持流式与非流式输出；
* **API Key管理：** 支持创建和管理API Key，用于鉴权调用，采用标准OpenAI兼容格式，方便开发者迁移；
* **调用统计：** 提供API调用次数、延迟、费用等数据监控，帮助用户优化使用策略。

**使用说明：**

* **接口地址（URL）**：`https://api.modelverse.cn/v1/chat/completions`
* **API Key：** 需在控制台申请，用于身份验证；
* **模型ID：** 和HuggingFace保持一致，如deepseek-ai/DeepSeek-R1-0528、deepseek-ai/DeepSeek-V3-0324。

**价格与计费：**

* **按Token计费：** 不同模型的输入/输出价格不同（如DeepSeek-V3-0324输入2元/百万Token，输出8元/百万Token）。
