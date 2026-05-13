# DeleteCompshareDisk — 删除云盘

## 接口说明

删除一块云盘。删除后数据不可恢复。

### 使用限制

- 云盘必须处于未挂载状态。已挂载的云盘需先调用 [DetachCompshareDisk](./detachcompsharedisk.md) 卸载。
- 已删除的云盘重复调用本接口将幂等返回成功。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DeleteCompshareDisk` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UDiskId | String | 是 | 云盘 ID | `udisk-xxxx` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DeleteCompshareDiskResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| UDiskId | String | 已删除的云盘 ID | `udisk-xxxx` |

---

## 请求示例

### Python（使用 UCloud SDK）

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
        resp = client.ucompshare().delete_compshare_disk({
            "Zone": "cn-wlcb-01",
            "UDiskId": "udisk-xxxx",  # 云盘 ID，通过 DescribeCompShareInstance 的 DiskSet 获取
        })
        print("删除成功:", resp.get("UDiskId"))
    except exc.UCloudException as e:
        print(e)


if __name__ == "__main__":
    main()
```

### Go（使用 UCloud SDK）

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

	req := client.NewDeleteCompshareDiskRequest()
	req.UDiskId = ucloud.String("udisk-xxxx") // 云盘 ID，通过 DescribeCompShareInstance 的 DiskSet 获取

	resp, err := client.DeleteCompshareDisk(req)
	if err != nil {
		fmt.Printf("删除失败: %s\n", err)
		return
	}
	fmt.Printf("删除成功: %s\n", resp.UDiskId)
}
```

---

## 响应示例

```json
{
  "Action": "DeleteCompshareDiskResponse",
  "RetCode": 0,
  "UDiskId": "udisk-xxxx"
}
```
