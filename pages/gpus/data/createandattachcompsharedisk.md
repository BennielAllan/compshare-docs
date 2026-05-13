# CreateAndAttachCompshareDisk — 创建并挂载云盘

## 接口说明

创建一块云盘并自动挂载到指定的算力共享实例。创建成功后返回云盘 ID（`UDiskId`）。

### 使用限制

- 实例必须处于 `Running` 或 `Stopped` 状态。
- `CLOUD_RSSD` 磁盘类型仅 A800 机型支持。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `CreateAndAttachCompshareDisk` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 要挂载到的实例 ID | `uhost-xxxx` |
| Size | Integer | 是 | 磁盘大小，单位 GB | `100` |
| DiskType | String | 是 | 磁盘类型。枚举值：`SSDDataDisk`（SSD 数据盘）、`RSSDDataDisk`（RSSD 数据盘，仅 A800 支持）、`DataDisk`（普通数据盘）、`EfficiencyDataDisk`（高效数据盘） | `SSDDataDisk` |
| Name | String | 是 | 磁盘名称 | `my-data-disk` |
| ChargeType | String | 否 | 计费模式。枚举值：`Month`（按月）、`Day`（按天）、`Dynamic`（按时）、`Postpay`（后付费） | `Month` |
| Quantity | Integer | 否 | 购买时长，默认 `1` | `1` |
| CouponId | String | 否 | 代金券 ID | `coupon-xxx` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `CreateAndAttachCompshareDiskResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| UDiskId | String | 创建成功的云盘 ID | `udisk-xxxx` |

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
        resp = client.ucompshare().create_and_attach_compshare_disk({
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "Size": 100,
            "DiskType": "CLOUD_SSD",
            "Name": "my-data-disk",
        })
        print("创建并挂载成功，UDiskId:", resp.get("UDiskId"))
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

	req := client.NewCreateAndAttachCompshareDiskRequest()
	req.UHostId = ucloud.String("uhost-xxxx") // 实例 ID，通过 DescribeCompShareInstance 获取
	req.Size = ucloud.Int(100)
	req.DiskType = ucloud.String("CLOUD_SSD")
	req.Name = ucloud.String("my-data-disk")

	resp, err := client.CreateAndAttachCompshareDisk(req)
	if err != nil {
		fmt.Printf("创建失败: %s\n", err)
		return
	}
	fmt.Printf("创建并挂载成功，UDiskId: %s\n", resp.UDiskId)
}
```

---

## 响应示例

```json
{
  "Action": "CreateAndAttachCompshareDiskResponse",
  "RetCode": 0,
  "UDiskId": "udisk-xxxx"
}
```
