# ResizeCompShareDisk — 扩容云盘

## 接口说明

扩容一块已有的云盘。仅支持扩容，不支持缩容。

### 使用限制

- 云盘所在实例需处于 `Stopped`（已关机）状态。
- 只能扩大容量，不能缩小。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `ResizeCompShareDisk` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UDiskId | String | 是 | 云盘 ID | `udisk-xxxx` |
| UHostId | String | 否 | 云盘所在实例 ID | `uhost-xxxx` |
| Size | Integer | 是 | 目标磁盘大小，单位 GB。必须大于当前容量 | `200` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `ResizeCompShareDiskResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| UDiskId | String | 云盘 ID | `udisk-xxxx` |

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
        resp = client.ucompshare().resize_comp_share_disk({
            "Zone": "cn-wlcb-01",
            "UDiskId": "udisk-xxxx",  # 云盘 ID，通过 DescribeCompShareInstance 的 DiskSet 获取
            "Size": 200,
        })
        print("扩容成功:", resp.get("UDiskId"))
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

	req := client.NewResizeCompShareDiskRequest()
	req.UDiskId = ucloud.String("udisk-xxxx") // 云盘 ID，通过 DescribeCompShareInstance 的 DiskSet 获取
	req.Size = ucloud.Int(200)

	resp, err := client.ResizeCompShareDisk(req)
	if err != nil {
		fmt.Printf("扩容失败: %s\n", err)
		return
	}
	fmt.Printf("扩容成功: %s\n", resp.UDiskId)
}
```

---

## 响应示例

```json
{
  "Action": "ResizeCompShareDiskResponse",
  "RetCode": 0,
  "UDiskId": "udisk-xxxx"
}
```
