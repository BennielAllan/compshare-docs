# TerminateCompShareInstance — 删除实例

## 接口说明

删除一台算力共享实例，释放计算资源。删除后系统盘数据将被清除；数据盘默认保留，可通过 `ReleaseUDisk=true` 同时删除。

### 使用限制

- 仅 `Stopped`（已关机）状态的实例可以删除。运行中的实例需先调用 [StopCompShareInstance](./stopcompshareinstance.md) 关机。
- 同一实例的操作存在并发锁（10 分钟 TTL），重复操作会返回 `InstanceOperationInProgress` 错误。
- 删除操作会同时解绑 EIP、清理关联的计费资源。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `TerminateCompShareInstance` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |
| ReleaseUDisk | Boolean | 否 | 是否同时删除挂载的数据盘。`true` 删除，`false`（默认）保留 | `false` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `TerminateCompShareInstanceResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| UHostId | String | 实例 ID | `uhost-xxxx` |
| InRecycle | String | 是否进入回收站 | `"Yes"` |

---

## 请求示例

### Python（使用 UCloud SDK）

安装 SDK：

```bash
pip install --upgrade ucloud-sdk-python3
```

示例代码：

```python
from ucloud.core import exc
from ucloud.client import Client


def main():
    client = Client({
        "region": "cn-wlcb",
        "public_key": "my_public_key",    # 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
        "private_key": "my_private_key",   # 替换为你的私钥
        "base_url": "https://api.compshare.cn",
    })

    try:
        resp = client.ucompshare().terminate_comp_share_instance({
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx"
        })
        print("删除成功:", resp.get("UHostId"))
    except exc.UCloudException as e:
        print(e)


if __name__ == "__main__":
    main()
```

### Go（使用 UCloud SDK）

安装依赖：

```bash
go get github.com/ucloud/ucloud-sdk-go
```

示例代码：

```go
package main

import (
	"fmt"

	"github.com/ucloud/ucloud-sdk-go/services/ucompshare"
	"github.com/ucloud/ucloud-sdk-go/ucloud"
	"github.com/ucloud/ucloud-sdk-go/ucloud/auth"
)

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.Zone = "cn-wlcb-01"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucompshare.NewClient(&cfg, &credential)

	req := client.NewTerminateCompShareInstanceRequest()
	req.UHostId = ucloud.String("uhost-xxxx") // 实例 ID，通过 DescribeCompShareInstance 获取

	resp, err := client.TerminateCompShareInstance(req)
	if err != nil {
		fmt.Printf("删除失败: %s\n", err)
		return
	}
	fmt.Printf("删除成功: %s\n", resp.UHostId)
}
```

---

## 响应示例

```json
{
  "Action": "TerminateCompShareInstanceResponse",
  "RetCode": 0,
  "UHostId": "uhost-xxxx",
  "InRecycle": "Yes"
}
```
