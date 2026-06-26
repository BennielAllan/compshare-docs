# CompShare 优云算力文档

[CompShare 优云算力平台](https://www.compshare.cn) 的帮助文档仓库。

- 控制台：https://www.compshare.cn
- API 端点：`https://api.compshare.cn`
- 文档源码：本仓库 `pages/` 目录（基于 Nextra，含 `_meta.json` 用于站点导航）

---

## 平台概述

* 平台介绍
  * [平台简介](pages/overview/platform/introduce.md)
  * [加入社群](pages/overview/platform/wechat.md)
* 用户等级与推荐
  * [会员等级](pages/overview/member/membership.md)
  * [用户推荐](pages/overview/member/userrecommendations.md)
* 产品更新公告
  * [GPU 新功能发布记录](pages/overview/announcement/update-gpu.md)
  * [模型 API 新功能发布记录](pages/overview/announcement/update-llm.md)
* 活动及价格更新公告
  * [4090 降价 - 2025.12](pages/overview/specialevent/event3.md)
  * [双 11 夜间折扣 - 2025.11](pages/overview/specialevent/event2.md)
  * [双 11 多卡型降价 - 2025.11](pages/overview/specialevent/event1.md)
  * [2025 国庆 9 折活动（已结束）](pages/overview/specialevent/event0.md)

## GPU 操作指南

* 产品介绍
  * [【新人必看】快速开始指南](pages/operation/introduce/quickstart.md)
  * [功能概览](pages/operation/introduce/basicconcepts.md)
  * [已上线卡型](pages/operation/introduce/gpu.md)
* 实例操作
  * [镜像选择](pages/operation/gpu/community.md)
  * [创建实例](pages/operation/gpu/createresources.md)
  * [登录实例](pages/operation/gpu/logininstance.md)
  * [本地数据上传](pages/operation/gpu/uploaddata.md)
  * [文件管理](pages/operation/gpu/filebrowser.md)
  * [制作私有镜像](pages/operation/gpu/releasecommunity.md)
  * [调用公共模型库](pages/operation/gpu/usepublicmodel.md)
  * [防火墙及端口设置](pages/operation/gpu/firewall.md)
  * [配置外网加速](pages/operation/gpu/uaaa.md)
  * [云硬盘扩容与挂载](pages/operation/gpu/disk.md)
  * [云存储挂载](pages/operation/gpu/s3describe.md)
  * [模型库挂载](pages/operation/gpu/upfsmount.md)
  * [自启动](pages/operation/gpu/selfstart.md)
  * [手动安装监控](pages/operation/gpu/resourcemonitoring.md)
  * [无卡模式](pages/operation/gpu/cardlessmode.md)
* [GPU 抢占式实例](pages/operation/gpuspot/gpuspot.md)
* 发布社区镜像
  * [如何发布社区镜像](pages/operation/image/imagecommunity.md)
  * [更新已发布的社区镜像](pages/operation/image/versionmanagement.md)
* 计费与回收
  * [计费概览](pages/operation/charge/bill.md)
  * [计费方式说明](pages/operation/charge/billdescribe.md)
  * [到期或欠费说明](pages/operation/charge/expirydate.md)
  * [续费管理](pages/operation/charge/Renewal.md)
  * [回收规则](pages/operation/charge/recycle.md)
* 最佳实践
  * [Isaac 系列镜像使用教程](pages/operation/bestpractices/isaac.md)
  * [Windows 实例远程登录手册](pages/operation/bestpractices/windows.md)
  * [通过 VNC 搭建 Ubuntu 图形界面](pages/operation/bestpractices/createVNC.md)
  * [Ubuntu 安装 Dify](pages/operation/bestpractices/installdify.md)
  * [Ubuntu 安装 Docker](pages/operation/bestpractices/installdocker.md)
  * [Windows 安装 Nvidia 驱动与 Cuda](pages/operation/bestpractices/installcuda.md)
  * [Ubuntu 安装 Nvidia 驱动与 Cuda](pages/operation/bestpractices/installlinux.md)
  * [LangBot 部署 QQ / 微信 / 飞书 / 钉钉机器人](pages/operation/bestpractices/installlangbot.md)
  * [Clawdbot 连接 Telegram](pages/operation/bestpractices/telegram.md)
  * [Clawdbot 连接飞书](pages/operation/bestpractices/feishu.md)

## GPU 服务 API 文档

> **命名规律**：`pages/gpus/<sub>/<key>.md` 中 `<key>` 为 ActionName 全小写，例如 `createcompshareinstance.md` 对应 `CreateCompShareInstance`。每篇文件结构：接口说明 / 使用限制 → 请求参数 → 响应参数 → 请求示例 → 响应示例。

* 总览
  * [API 接口范例](pages/gpus/operationexample.md)
  * [常见错误码](pages/gpus/compshareerrorcode.md)
* GPU 实例
  * [创建 GPU 资源](pages/gpus/instance/createcompshareinstance.md)
  * [获取实例资源列表](pages/gpus/instance/describecompshareinstance.md)
  * [启动实例](pages/gpus/instance/startcompshareinstance.md)
  * [关闭实例](pages/gpus/instance/stopcompshareinstance.md)
  * [删除实例](pages/gpus/instance/terminatecompshareinstance.md)
  * [重启实例](pages/gpus/instance/rebootcompshareinstance.md)
  * [重装实例](pages/gpus/instance/reinstallcompshareinstance.md)
  * [重置实例密码](pages/gpus/instance/resetcompshareinstancepassword.md)
  * [升降配实例](pages/gpus/instance/resizecompshareinstance.md)
  * [修改实例名称](pages/gpus/instance/modifycompshareinstancename.md)
  * [设置 / 更新定时关机](pages/gpus/instance/updatecompsharestopscheduler.md)
  * [取消定时关机](pages/gpus/instance/deletecompsharestopscheduler.md)
  * [获取支持的可用区列表](pages/gpus/instance/describecompsharesupportzone.md)
  * [获取可用机型列表](pages/gpus/instance/describeavailablecompshareinstancetypes.md)
  * [获取机型族列表](pages/gpus/instance/describecompsharemachinetypefamilies.md)
  * [检查指定规格的资源可用性](pages/gpus/instance/checkcompshareresourcecapacity.md)
  * [查询网络加速服务状态](pages/gpus/instance/checkcompsharenetoptimizer.md)
  * [查询软件端口映射列表](pages/gpus/instance/describecompsharesoftwareport.md)
  * [查询模型仓库模型列表](pages/gpus/instance/describemodelrepositorymodels.md)
  * [获取实例上软件的访问地址](pages/gpus/instance/getsoftwareurl.md)
  * [获取实例监控数据](pages/gpus/instance/getcompshareinstancemonitor.md)
  * [查询创建实例价格](pages/gpus/instance/getcompshareinstanceprice.md)
  * [查询实例升配价格](pages/gpus/instance/getcompshareinstanceupgradeprice.md)
  * [查询实例当前计费信息](pages/gpus/instance/getcompshareinstanceuserprice.md)
  * [查询退费金额](pages/gpus/instance/getcompsharerefundprice.md)
* 实例镜像
  * [获取自制镜像列表](pages/gpus/image/describecompsharecustomimages.md)
  * [创建自制镜像](pages/gpus/image/createcompsharecustomimage.md)
  * [删除算力平台自制镜像](pages/gpus/image/terminatecompsharecustomimage.md)
  * [查询镜像制作进度](pages/gpus/image/getcompshareimagecreateprogress.md)
  * [更新镜像信息](pages/gpus/image/updatecompshareimage.md)
  * [获取平台镜像列表](pages/gpus/image/describecompshareimages.md)
  * [获取镜像标签列表](pages/gpus/image/describecompshareimagetags.md)
  * [获取社区镜像列表](pages/gpus/image/describecommunityimages.md)
  * [查询指定用户的社区镜像](pages/gpus/image/describeusercommunityimages.md)
  * [查询自己发布的社区镜像](pages/gpus/image/describeselfcommunityimages.md)
  * [发布镜像到社区](pages/gpus/image/publishcompshareimage.md)
  * [收藏镜像](pages/gpus/image/addfavoriteimage.md)
  * [取消收藏镜像](pages/gpus/image/removefavoriteimage.md)
  * [查询已收藏的镜像列表](pages/gpus/image/describefavoriteimages.md)
  * [共享 / 取消共享镜像](pages/gpus/image/modifycompshareimageshareaccount.md)
  * [查询镜像已共享的账户列表](pages/gpus/image/describecompshareimageshareaccounts.md)
  * [查询他人共享给自己的镜像](pages/gpus/image/describecompsharesharingimages.md)
* 磁盘与云存储
  * [创建并挂载云盘](pages/gpus/data/createandattachcompsharedisk.md)
  * [挂载已有云盘](pages/gpus/data/attachcompsharedisk.md)
  * [卸载云盘](pages/gpus/data/detachcompsharedisk.md)
  * [删除云盘](pages/gpus/data/deletecompsharedisk.md)
  * [扩容云盘](pages/gpus/data/resizecompsharedisk.md)
  * [查询云盘扩容价格](pages/gpus/data/getcompshareattacheddiskupgradeprice.md)
  * [挂载 US3 对象存储到实例](pages/gpus/data/attachus3.md)
  * [云存储文件上传与下载](pages/gpus/data/us3fileoperation.md)
* 团队管理
  * [创建团队](pages/gpus/team/createcompshareteam.md)
  * [删除团队](pages/gpus/team/deletecompshareteam.md)
  * [更新团队信息](pages/gpus/team/updatecompshareteam.md)
  * [获取团队详情](pages/gpus/team/getcompshareteaminfo.md)
  * [查询已创建的团队列表](pages/gpus/team/listcompshareteam.md)
  * [查询已加入的团队列表](pages/gpus/team/listcompshareteamjoined.md)
  * [邀请成员加入团队](pages/gpus/team/createcompshareteamrelation.md)
  * [修改成员角色](pages/gpus/team/setcompshareteamrelation.md)
  * [设置成员额度](pages/gpus/team/setcompshareteamamount.md)
  * [查询团队邀请记录](pages/gpus/team/listcompshareteaminvite.md)
  * [查询团队操作日志](pages/gpus/team/listcompshareteamoperatelog.md)
  * [查询成员产品类型列表](pages/gpus/team/listmemberproducttype.md)
  * [查询成员订单列表](pages/gpus/team/describeteammemberorder.md)
  * [查询成员订单数量](pages/gpus/team/describeteammemberordercount.md)
  * [查询成员未支付订单](pages/gpus/team/describeteammemberunpaidorder.md)
  * [查询成员未支付订单数量](pages/gpus/team/describeteammemberunpaidordercount.md)
  * [导出团队账单](pages/gpus/team/downloadteamorder.md)

## 模型 API 服务指南

* [模型 API 产品介绍](pages/modelverse/introduce/modelapi.md)
* [按量计费说明](pages/modelverse/price.md)
* 套餐包使用说明
  * [套餐包快速上手](pages/modelverse/package_plan/package.md)
  * [套餐计费逻辑](pages/modelverse/package_plan/logic.md)
  * [套餐用量统计](pages/modelverse/package_plan/stats.md)
  * [客户端接入](pages/modelverse/package_plan/usecases.md)
  * [OpenClaw 附加权益](pages/modelverse/package_plan/openclaw.md)
* 按量 API 调用指南
  * [快速开始](pages/modelverse/models/quick-start.md)
  * [常见问题答疑](pages/modelverse/models/qa.md)
  * 通用说明
    * [认证鉴权](pages/modelverse/models/common/certificate.md)
    * [错误码](pages/modelverse/models/common/error-code.md)
  * 文本生成
    * [如何获取模型列表](pages/modelverse/models/text_api/models.md)
    * [模型协议支持说明](pages/modelverse/models/text_api/model-competi.md)
    * [API 支持与扩展字段说明](pages/modelverse/models/text_api/api-expand.md)
    * [OpenAI-Completions 说明](pages/modelverse/models/text_api/openai_compatible.md)
    * [OpenAI-Response 说明](pages/modelverse/models/text_api/response_api.md)
    * [Embeddings 向量嵌入](pages/modelverse/models/text_api/embeddings.md)
    * [Gemini 快速开始](pages/modelverse/models/text_api/gemini_compatible.md)
    * [Claude (Anthropic) 兼容说明](pages/modelverse/models/text_api/claude_compatible.md)
    * [DeepSeek-OCR 模型调用示例](pages/modelverse/models/text_api/deepseek-ocr.md)
    * 思考模型配置
      * [DeepSeek 思考模型](pages/modelverse/models/text_api/thinking/deepseek.md)
      * [豆包思考模型](pages/modelverse/models/text_api/thinking/doubao.md)
  * 图片生成
    * [gemini-2.5-flash-image（Nano Banana）](pages/modelverse/models/image_api/gemini-2.5-flash-image.md)
    * [gemini-3-pro-image（Nano Banana 2）](pages/modelverse/models/image_api/gemini-3-pro-image.md)
    * [black-forest-labs/flux.1-dev](pages/modelverse/models/image_api/black-forest-labs-flux.1-dev.md)
    * [black-forest-labs/flux-kontext-pro](pages/modelverse/models/image_api/black-forest-labs-flux-kontext-pro.md)
    * [black-forest-labs/flux-kontext-pro/multi](pages/modelverse/models/image_api/black-forest-labs-flux-kontext-pro-multi.md)
    * [black-forest-labs/flux-kontext-pro/text-to-image](pages/modelverse/models/image_api/black-forest-labs-flux-kontext-pro-text-to-image.md)
    * [black-forest-labs/flux-kontext-max](pages/modelverse/models/image_api/black-forest-labs-flux-kontext-max.md)
    * [black-forest-labs/flux-kontext-max/multi](pages/modelverse/models/image_api/black-forest-labs-flux-kontext-max-multi.md)
    * [black-forest-labs/flux-kontext-max/text-to-image](pages/modelverse/models/image_api/black-forest-labs-flux-kontext-max-text-to-image.md)
    * [stepfun-ai/step1x-edit](pages/modelverse/models/image_api/stepfun-ai-step1x-edit.md)
    * [Qwen/Qwen-Image](pages/modelverse/models/image_api/Qwen-Qwen-Image.md)
    * [Qwen/Qwen-Image-Edit](pages/modelverse/models/image_api/Qwen-Qwen-Image-Edit.md)
    * [gpt-image-1](pages/modelverse/models/image_api/gpt-image-1.md)
    * [gpt-image-1.5](pages/modelverse/models/image_api/gpt-image-1.5.md)
    * [doubao-seedream-4.5](pages/modelverse/models/image_api/doubao-seedream-4.5.md)
  * 视频生成
    * [OpenAI/Sora2-T2V](pages/modelverse/models/video_api/OpenAI-Sora2-T2V.md)
    * [OpenAI/Sora2-T2V-Pro](pages/modelverse/models/video_api/OpenAI-Sora2-T2V-Pro.md)
    * [OpenAI/Sora2-I2V](pages/modelverse/models/video_api/OpenAI-Sora2-I2V.md)
    * [OpenAI/Sora2-I2V-Pro](pages/modelverse/models/video_api/OpenAI-Sora2-I2V-Pro.md)
    * [Wan-AI/Wan2.2-I2V](pages/modelverse/models/video_api/Wan-AI-Wan2.2-I2V.md)
    * [Wan-AI/Wan2.2-T2V](pages/modelverse/models/video_api/Wan-AI-Wan2.2-T2V.md)
    * [Wan-AI/Wan2.5-I2V](pages/modelverse/models/video_api/Wan-AI-Wan2.5-I2V.md)
    * [Wan-AI/Wan2.5-T2V](pages/modelverse/models/video_api/Wan-AI-Wan2.5-T2V.md)
    * [Wan-AI/Wan2.6-I2V](pages/modelverse/models/video_api/Wan-AI-Wan2.6-I2V.md)
    * [Wan-AI/Wan2.6-T2V](pages/modelverse/models/video_api/Wan-AI-Wan2.6-T2V.md)
    * [MiniMax/Hailuo-2.3-I2V](pages/modelverse/models/video_api/MiniMax-Hailuo-2.3-I2V.md)
    * [MiniMax/Hailuo-2.3-T2V](pages/modelverse/models/video_api/MiniMax-Hailuo-2.3-T2V.md)
    * [doubao-seedance-1-5-pro](pages/modelverse/models/video_api/doubao-seedance-1-5-pro-251215.md)
    * Vidu 系列
      * [Vidu / 文生视频](pages/modelverse/models/video_api/vidu/Vidu-Text2Video.md)
      * [Vidu / 图生视频](pages/modelverse/models/video_api/vidu/Vidu-Img2Video.md)
      * [Vidu / 参考图生视频](pages/modelverse/models/video_api/vidu/Vidu-Reference2Video.md)
      * [Vidu / 首尾帧生视频](pages/modelverse/models/video_api/vidu/Vidu-StartEnd2Video.md)
      * [Vidu / 视频延长](pages/modelverse/models/video_api/vidu/Vidu-Extend.md)
      * [Vidu / 对口型](pages/modelverse/models/video_api/vidu/Vidu-LipSync.md)
  * 音频生成
    * [IndexTTS](pages/modelverse/models/audio_api/ttts.md)
    * [自定义音色](pages/modelverse/models/audio_api/custom_voice_api.md)
    * [IndexTeam/IndexTTS 扩展参数](pages/modelverse/models/audio_api/IndexTeam-IndexTTS-extend.md)
    * [Suno 音乐生成](pages/modelverse/models/audio_api/suno.md)
    * [MiniMax/speech-hd](pages/modelverse/models/audio_api/minimax-speech.md)
* 最佳实践
  * [OpenClaw 接入指南](pages/modelverse/best_practice/openclaw.md)
  * [Claude Code 接入指南](pages/modelverse/best_practice/claudecode.md)
  * [Codex 接入指南](pages/modelverse/best_practice/codex.md)
  * [OpenCode 接入指南](pages/modelverse/best_practice/opencode.md)
  * [ComfyUI 插件接入](pages/modelverse/best_practice/comfyui.md)
  * 常见客户端接入 API
    * [Dify](pages/modelverse/best_practice/usecases/dify.md)
    * [RAGFlow](pages/modelverse/best_practice/usecases/ragflow.md)
    * [AnythingLLM](pages/modelverse/best_practice/usecases/anythingllm.md)
    * [纳米 AI](pages/modelverse/best_practice/usecases/nami.md)
    * [n8n](pages/modelverse/best_practice/usecases/n8n.md)
    * [GPT4All](pages/modelverse/best_practice/usecases/gpt4all.md)
    * [Cherry Studio](pages/modelverse/best_practice/usecases/cherrystudio.md)
    * [Chatbox](pages/modelverse/best_practice/usecases/chatbox.md)
    * [ChatHub](pages/modelverse/best_practice/usecases/chathub.md)
    * [ChatWise](pages/modelverse/best_practice/usecases/chatwise.md)
    * [OpenWeb UI](pages/modelverse/best_practice/usecases/openwebui.md)
    * [Obsidian](pages/modelverse/best_practice/usecases/obsidian.md)
  * MCP 说明
    * [MCP 简介](pages/modelverse/best_practice/mcp/mcpgeneral.md)
    * [通过 CLINE 接入 MCP 服务](pages/modelverse/best_practice/mcp/MCPServer.md)
    * [通过 UCloud API 实现 MCP Client](pages/modelverse/best_practice/mcp/MCPClient.md)

## 账号与账单

* 账号注册
  * [注册流程](pages/uaccount/account/register.md)
  * [注销账号](pages/uaccount/account/cancelaccount.md)
* 实名认证
  * [认证概览](pages/uaccount/identity/authentication.md)
  * [个人认证](pages/uaccount/identity/personal.md)
  * [高校认证](pages/uaccount/identity/edu.md)
  * [企业认证](pages/uaccount/identity/company.md)
* 团队管理
  * [团队功能概览](pages/uaccount/team/team.md)
  * [管理员账号操作说明](pages/uaccount/team/teambulider.md)
  * [团队成员账号操作说明](pages/uaccount/team/teammember.md)
* 账单与发票
  * [账号充值](pages/uaccount/bill/charge.md)
  * [提现规则](pages/uaccount/bill/withdrawalrules.md)
  * [查看账单](pages/uaccount/bill/checkbill.md)
  * [开具发票](pages/uaccount/bill/invoice.md)

## 服务协议

* [协议概览](pages/serviceagreement/overview.md)
* [优云智算服务框架协议](pages/serviceagreement/frame.md)
* [优云智算云服务法律声明及隐私政策](pages/serviceagreement/privacy.md)
* [优云智算用户协议](pages/serviceagreement/user.md)
* [优云智算云平台安全规则](pages/serviceagreement/safe.md)
* [优云智算激励活动协议](pages/serviceagreement/incentive.md)
