# GetCompShareInstancePrice — 查询创建实例价格

## 接口说明

查询创建算力共享实例的价格，返回实例、磁盘、镜像的分项价格明细。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetCompShareInstancePrice` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| GpuType | String | 是 | GPU 类型 | `4090` |
| Gpu | Integer | 是 | GPU 卡数 | `1` |
| Cpu | Integer | 是 | CPU 核数 | `16` |
| Memory | Integer | 是 | 内存大小，单位 MB | `65536` |
| ChargeType | String | 否 | 计费模式。不传则同时返回所有模式的价格。枚举值：`Month`、`Day`、`Dynamic`、`Postpay`、`Spot` | `Month` |
| Disks.N.IsBoot | Boolean | 否 | 是否为系统盘 | `true` |
| Disks.N.Type | String | 否 | 磁盘类型 | `CLOUD_SSD` |
| Disks.N.Size | Integer | 否 | 磁盘大小（GB） | `60` |
| Volumes.N.Type | String | 否 | 共享存储类型 | `UDisk` |
| Volumes.N.Size | Integer | 否 | 共享存储大小（GB） | `100` |
| CompShareImageId | String | 否 | 镜像 ID（付费社区镜像时需传入） | `compshareImage-xxxx` |
| Quantity | Integer | 否 | 购买时长，默认 `1` | `1` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetCompShareInstancePriceResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| PriceDetails | Array of Object | 折后价格明细 | — |
| OriginalPriceDetails | Array of Object | 原价明细（结构同 PriceDetails） | — |
| ListPriceDetails | Array of Object | 目录价明细（结构同 PriceDetails） | — |

### PriceDetails 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| ChargeType | String | 计费模式 |
| Instance | Float | 实例价格（CPU + 内存 + GPU，元） |
| Disks | Float | 数据盘价格（元） |
| SystemDisks | Float | 系统盘价格（元） |
| CompShareImage | Float | 镜像价格（元，仅付费社区镜像） |
| InstanceDiscountType | Integer | 折扣类型。`1`：夜间折扣，`2`：节日折扣 |

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
        resp = client.ucompshare().get_comp_share_instance_price({
            "Zone": "cn-wlcb-01",
            "GpuType": "4090",
            "Gpu": 1,
            "Cpu": 16,
            "Memory": 64 * 1024,
            "ChargeType": "Month",
            "Disks": [{"IsBoot": True, "Type": "CLOUD_SSD", "Size": 60}],
        })
        for p in resp.get("PriceDetails", []):
            print(f"  实例: {p.get('Instance')} 元, 系统盘: {p.get('SystemDisks')} 元")
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

	req := client.NewGetCompShareInstancePriceRequest()
	req.GpuType = ucloud.String("4090")
	req.Gpu = ucloud.Int(1)
	req.Cpu = ucloud.Int(16)
	req.Memory = ucloud.Int(64 * 1024)
	req.ChargeType = ucloud.String("Month")

	resp, err := client.GetCompShareInstancePrice(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, p := range resp.PriceDetails {
		fmt.Printf("  实例: %.2f 元\n", *p.Instance)
	}
}
```

---

## 响应示例

```json
{
  "Action": "GetCompShareInstancePriceResponse",
  "RetCode": 0,
  "PriceDetails": [
    {"ChargeType": "Month", "Instance": 1068.00, "SystemDisks": 120.00}
  ],
  "OriginalPriceDetails": [
    {"ChargeType": "Month", "Instance": 1068.00, "SystemDisks": 120.00}
  ],
  "ListPriceDetails": [
    {"ChargeType": "Month", "Instance": 1068.00, "SystemDisks": 120.00}
  ]
}
```
