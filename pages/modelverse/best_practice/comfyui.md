# 在ComfyUI中使用ModelVerse API

## 关于ComfyUI
ComfyUI 是一个基于节点流程式界面的 Stable Diffusion GUI，通过将 Stable Diffusion 的流程拆分成节点，实现了更精准的工作流定制和完善的流程复现。

## 准备工作
### 第一步：安装ComfyUI
请参考 [ComfyUI 官方文档](https://www.comfy.org/zh-cn/) 进行安装。

### 第二步：安装UCloud插件
1. 打开ComfyUI右上角 **Manager**，点击 **Custom Nodes Manager**。
2. 查询 "comfyui-comphshare"。
3. 点击 **Install**。
4. 重启ComfyUI。

### 第三步：新建 Compshare Node 节点
您可以在左侧节点列表中找到我们开发的自定义插件节点进行添加，或在画布空白处右键，选择“UCLOUD_MODELVERSE”分类下的相关节点进行添加。
![custome_nodes](https://www-s.ucloud.cn/2026/01/566976beda634d2d47eeac6f5ce78928_1768808206154.png)

### 第四步：获取优云智算 API Key
1. [点击这里获取您的 API Key](https://console.compshare.cn/light-gpu/api-keys)。
2. 将获取的 API Key 添加到 **Modelverse Client** 节点中。
![api-key-2](https://www-s.ucloud.cn/2026/01/387dbe092f62e4799543ec5f0a36f1df_1768808298846.png)


## 快速上手：自动加载工作流
现在，你的笔记本也能轻松生成在自媒体上爆火的萌宠自拍图像，比如让一只橘猫去巴黎旅行：
![cat-paris](https://www-s.ucloud.cn/2026/01/67eb10025aa1a594c7ee5f27a0e80270_1768808640141.png)

**提示词**：
> This is an iPhone selfie perspective photograph, orange tabby cat wearing sunglasses, sitting in front of Eiffel Tower in Paris, happy expression, warm sunset lighting, travel photography style.

## 核心节点介绍
ModelVerse 插件不仅支持标准的文生图、图生图，还引入了**文本生成**功能，结合 AI 提示词优化，让您可以在 ComfyUI 中构建更强大的 AI 工作流。

- **Modelverse Client**：配置 API Key 的入口，是所有工作流的起点。
- **Modelverse Chat**：文本生成节点，可以用于生成、优化、改写提示词。
- **Modelverse [Model Name] Text2Image**：文生图节点，支持`Flux Kontext Max`和`Flux Kontext Pro`等多种先进模型。
- **Modelverse [Model Name] T2V/I2V**：视频生成节点，`T2V`支持文生视频，`I2V`支持图生视频，目前支持`Wan-AI`系列模型。
- **Modelverse [Model Name] Edit**：图像编辑节点，用于对生成图片进行局部优化或风格调整，支持`Step1X Edit`等。

## 文生图 (Text-to-Image)
使用 ModelVerse 的`Text2Image`节点，可以轻松将文字创意变为高质量图片。

![文生图工作流](https://www-s.ucloud.cn/2026/01/12aea99ba278eeb1dc57c0531d31faed_1768808640179.png)

## 文生视频 (Text-to-Video)
通过`T2V`节点，现在可以直接在 ComfyUI 中将文本描述转换为动态视频。

![文生视频工作流](https://www-s.ucloud.cn/2026/01/6e37d2df2e0567181b233345df3b2ced_1768808640186.png)

## 高级工作流：文本生成 -> 图像/视频
这是我们插件的独特优势。您可以先用`Modelverse Chat`节点（如选用`zai-org/glm-4.5`模型）生成或优化提示词，然后将输出的文本直接输入到`Text2Image`或`T2V`节点中，实现全自动的内容创作。

这个工作流极大地提升了创作效率和创意的多样性。

## 多图批量处理
用 **Flux Kontext Pro (Multi-inputs)** 可以批量生成系列作品：
![multi-input](https://www-s.ucloud.cn/2026/01/503f4f0fce452f5d1461fda6ee31952e_1768808640162.png)

一次输入，可以同时生成：
![multi-output](https://www-s.ucloud.cn/2026/01/33f2c2accad76e6ee9026e816725280e_1768808640167.png)

## 细节优化与图像编辑
对于不满意的细节，可以用 **Step1X-Edit** 精修：

```
# 精修眼神光
Add bright reflection in cat's eyes

# 调整胡须细节
Enhance whiskers detail and texture

# 优化背景虚化
Improve background bokeh effect
```
![edit-1](https://www-s.ucloud.cn/2026/01/97a3fc4d7436067b9fb6a4aaebc5f1d2_1768808640142.png)
![edit-2](https://www-s.ucloud.cn/2026/01/cedce3b25bf21934c48997850db935d2_1768808640147.png)

这种局部编辑能力，让最终效果达到专业摄影水准。

## 技巧分享：提示词优化实战
经过大量测试，我们总结了几个关键技巧：

### 1. 提示词结构化
**基础结构**
```
[拍摄设备] + [视角描述] + [宠物特征] + [环境背景] + [光影氛围] + [风格定义]
```

**实战例子**
```
iPhone 13 Pro selfie perspective + 
golden retriever with happy expression + 
Santorini blue dome background + 
golden hour lighting + 
travel photography style
```

### 2. 模型选择策略
**文生图首选**
- **Flux Kontext Max Text2Image**: 质量最高

**图片编辑优选**
- **Flux Kontext Pro**: 细节处理强

**创意探索用**
- **Flux Dev**: 风格化能力出众

**批量制作用**
- **Multi-inputs版本**: 效率最高

## 常见问题解答

### 关于 import VideoFromFile 报错
如果您在更新我们的 ComfyUI 插件后遇到 “import VideoFromFile Error” 报错，请将 ComfyUI 升级到最新版本后重试。
