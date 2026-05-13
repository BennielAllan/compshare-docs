# CompShare 优云算力文档

[CompShare 优云算力平台](https://www.compshare.cn) 的帮助文档仓库。

---

## 导航结构

文档采用两级 `_meta.json` 组织，顶层入口在 `pages/_meta.json`：

| 目录 | 内容 |
|------|------|
| `pages/overview/` | 平台概述、会员权益、活动公告 |
| `pages/operation/` | GPU 操作指南（创建/登录/磁盘/镜像/计费） |
| `pages/gpus/` | GPU 服务 API 完整参考 |
| `pages/modelverse/` | 模型 API 服务（文本/图像/音频/视频） |
| `pages/uaccount/` | 账号与账单 |
| `pages/serviceagreement/` | 服务协议 |
| `public/` | 文档引用的图片资源 |

> `pages/_meta.json` 中的 `console` 条目是外链（控制台），无对应文档目录，跳过即可。

---

## AI 读取指南

### 定位文件的三步法

**第 1 步：按意图选一级目录**

| 用户意图 | 目录 |
|---------|------|
| API / 接口 / Action 名 | `pages/gpus/` |
| 怎么创建/登录/操作实例、磁盘、防火墙、镜像、计费 | `pages/operation/` |
| 账号 / 账单 / 团队管理 | `pages/uaccount/` |
| 模型 API（文本/图像/音频/视频） | `pages/modelverse/` |
| 平台介绍 / 产品概念 | `pages/overview/` |
| 服务协议 / SLA | `pages/serviceagreement/` |

**第 2 步：读子目录的 `_meta.json`**

每个目录下都有 `_meta.json`，键名即文件名或子目录名。判断方式：

```bash
ls -p pages/<category>/   # 有尾斜杠的是子目录，无的是文件
```

- 键对应 `.md` / `.mdx` 文件 → 直接读
- 键对应子目录 → 再读一层 `_meta.json`

**第 3 步：读目标 `.md` / `.mdx` 文件**

`.mdx` 是 markdown 超集，可能含 JSX 标签（如 `<Callout>`），直接当 markdown 读即可。

### API 文档规律

`pages/gpus/<sub>/` 下的键名就是 ActionName 全小写：

```
createcompshareinstance  →  Action: CreateCompShareInstance
describecompshareinstance  →  Action: DescribeCompShareInstance
```

每个 API 文件结构：接口说明 → 请求参数 → 响应参数 → 请求示例 → 响应示例。

### 典型路径示例

| 查询目标 | 文件路径 |
|---------|---------|
| 创建 GPU 实例 API | `pages/gpus/instance/createcompshareinstance.md` |
| 获取实例列表 API | `pages/gpus/instance/describecompshareinstance.md` |
| 常见错误码 | `pages/gpus/compshareerrorcode.md` |
| 怎么登录实例 | `pages/operation/gpu/logininstance.md` |
| 抢占式实例说明 | `pages/operation/gpuspot/gpuspot.md` |

---

## 相关链接

- 控制台：https://www.compshare.cn
- API 端点：https://api.compshare.cn
