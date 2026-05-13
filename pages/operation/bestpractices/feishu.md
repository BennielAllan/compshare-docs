# 使用Clawdbot连接飞书
## 前置条件

- 已安装 Clawdbot 主程序，具体镜像+GPU部署可以参考上一篇文档
- 已在飞书开放平台创建自建应用

---

## 一、安装飞书插件

### 方法1：克隆到 extensions 目录（推荐）

```bash
# 进入 clawdbot extensions 目录
cd /root/clawdbot/extensions/

# 克隆飞书插件
git clone https://github.com/m1heng/clawdbot-feishu.git feishu

# 安装依赖
cd feishu && npm install
```

### 方法2：npm 直接安装

如果 `clawdbot plugins install` 报错 `NODE_OPTIONS` 问题：

```bash
# 清除环境变量后安装
NODE_OPTIONS="" clawdbot plugins install @m1heng-clawd/feishu

# 或直接用 npm
npm install @m1heng-clawd/feishu
```

---

## 二、飞书开放平台配置

### 1. 创建应用

1. 打开 [飞书开放平台](https://open.feishu.cn)
2. 创建自建应用
3. 在「凭证与基础信息」页面获取 **App ID** 和 **App Secret**

### 2. 开启必要权限

| 权限 | 说明 |
|------|------|
| `contact:user.base:readonly` | 获取用户信息 |
| `im:message` | 收发消息 |
| `im:message.p2p_msg:readonly` | 读取私聊消息 |
| `im:message.group_at_msg:readonly` | 读取群@消息 |
| `im:message:send_as_bot` | 以机器人身份发消息 |
| `im:resource` | 上传下载图片文件 |

### 3. 配置长连接模式

进入「事件与回调」→「订阅方式」→ 选择 **使用长连接接收事件/回调**

### 4. 添加回调事件

进入「事件与回调」→「事件配置」→ 添加以下事件：

| 事件名称 | 事件标识 | 说明 |
|---------|---------|------|
| 接收消息 | `im.message.receive_v1` | 接收用户发送的消息 |
| 消息已读 | `im.message.message_read_v1` | 消息已读回执（可选） |
| 机器人进群 | `im.chat.member.bot.added_v1` | 机器人被添加到群聊（可选） |
| 机器人出群 | `im.chat.member.bot.deleted_v1` | 机器人被移出群聊（可选） |

**必须添加的事件**：`im.message.receive_v1`（接收消息），否则机器人无法收到用户消息。

### 5. 发布应用

1. 进入「版本管理与发布」
2. 创建版本
3. 申请发布（自建应用可直接发布到企业内部）

---

## 三、配置 Clawdbot

```bash
# 设置飞书凭证（替换为你的实际值）
clawdbot config set channels.feishu.appId "cli_xxxxx"
clawdbot config set channels.feishu.appSecret "your_app_secret"
clawdbot config set channels.feishu.enabled true

# 可选配置
clawdbot config set channels.feishu.domain "feishu"            # 国内用 feishu，国际用 lark
clawdbot config set channels.feishu.connectionMode "websocket"  # 推荐 websocket
```

---

## 四、启动 Gateway

### Docker/云服务环境（无 systemd）

```bash
# 后台运行
nohup clawdbot gateway run --verbose > ~/clawdbot.log 2>&1 &
disown
```

### 有 Supervisor 的环境

创建配置文件 `/etc/supervisor/conf.d/clawdbot.conf`：

```ini
[program:clawdbot]
command=/root/.local/bin/clawdbot gateway run
directory=/root
autostart=true
autorestart=true
stderr_logfile=/var/log/clawdbot.err.log
stdout_logfile=/var/log/clawdbot.out.log
user=root
environment=PATH="/root/.local/bin:/usr/local/bin:/usr/bin:/bin"
```

启动：

```bash
supervisorctl reread
supervisorctl update
supervisorctl start clawdbot
```

### 本地环境（有 systemd）

```bash
clawdbot gateway install
clawdbot gateway start
```

---

## 五、验证连接状态

### 查看进程

```bash
ps aux | grep clawdbot
```

正常应显示 `clawdbot-gateway` 进程，状态为 `Sl`（运行中）。

### 查看日志

```bash
# 查看飞书连接状态
tail -50 ~/clawdbot.log | grep -i feishu

# 实时查看日志
tail -f ~/clawdbot.log
```

成功连接会显示：

```
[feishu] starting feishu provider (mode: websocket)
[feishu] bot open_id resolved: ou_xxxxx
[feishu] WebSocket client started
```

### Gateway 状态

```bash
clawdbot gateway status
```

---

## 六、常见问题

### 1. `NODE_OPTIONS` 报错

```bash
# 临时清除环境变量
NODE_OPTIONS="" clawdbot plugins install @m1heng-clawd/feishu
```

### 2. 端口已被占用

```bash
# 杀掉旧进程
pkill -9 -f clawdbot

# 等待端口释放后重启
sleep 3 && nohup clawdbot gateway run --verbose > ~/clawdbot.log 2>&1 &
disown
```

### 3. 进程状态为 `Tl`（已停止）

```bash
# 强制杀掉并重启
pkill -9 -f clawdbot
sleep 3 && nohup clawdbot gateway run --verbose > ~/clawdbot.log 2>&1 &
disown
```

### 4. 修改配置后重启

```bash
# 修改配置
clawdbot config set channels.feishu.appId "新的appId"
clawdbot config set channels.feishu.appSecret "新的appSecret"

# 重启 gateway
pkill -9 -f clawdbot
sleep 2 && nohup clawdbot gateway run --verbose > ~/clawdbot.log 2>&1 &
disown
```

---

## 七、网络要求

飞书插件使用 **WebSocket 长连接模式**（主动向外连接），无需开放入站端口。

只需确保：
- ✅ 出站 443 端口开放
- ✅ 能解析 `open.feishu.cn`

---

## 八、测试

1. 在飞书搜索你的机器人
2. 发送消息测试
3. 查看日志确认消息处理：

```bash
tail -f ~/clawdbot.log
```

