# DetachCompshareDisk — 卸载云盘

## 接口说明

从算力共享实例上卸载一块云盘。卸载后云盘仍保留，可重新挂载到其他实例。

### 使用限制

- 系统盘不支持卸载。
- 实例需处于 `Stopped`（已关机）状态。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DetachCompshareDisk` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 否 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |
| UDiskId | String | 是 | 云盘 ID | `udisk-xxxx` |
| Device | String | 是 | 磁盘设备名，如 `/dev/vdb` | `/dev/vdb` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DetachCompshareDiskResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |

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
        resp = client.ucompshare().detach_compshare_disk({
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "UDiskId": "udisk-xxxx",  # 云盘 ID，通过 DescribeCompShareInstance 的 DiskSet 获取
            "Device": "/dev/vdb",
        })
        print("卸载成功")
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
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucompshare.NewClient(&cfg, &credential)

	req := client.NewDetachCompshareDiskRequest()
	req.UHostId = ucloud.String("uhost-xxxx") // 实例 ID，通过 DescribeCompShareInstance 获取
	req.UDiskId = ucloud.String("udisk-xxxx") // 云盘 ID，通过 DescribeCompShareInstance 的 DiskSet 获取
	req.Device = ucloud.String("/dev/vdb")

	_, err := client.DetachCompshareDisk(req)
	if err != nil {
		fmt.Printf("卸载失败: %s\n", err)
		return
	}
	fmt.Println("卸载成功")
}
```

---

## 响应示例

```json
{
  "Action": "DetachCompshareDiskResponse",
  "RetCode": 0
}
```
