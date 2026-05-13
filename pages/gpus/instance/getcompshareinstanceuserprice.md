# GetCompShareInstanceUserPrice — 查询实例当前计费信息

## 接口说明

查询创建算力共享实例的价格。可指定单一计费模式查询，也可不传 `ChargeType` 同时获取所有计费模式（按月、按天、按时、抢占式）的价格。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetCompShareInstanceUserPrice` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| GpuType | String | 是 | GPU 类型 | `4090` |
| GPU | Integer | 是 | GPU 卡数 | `1` |
| CPU | Integer | 是 | CPU 核数 | `16` |
| Memory | Integer | 是 | 内存大小，单位 MB | `65536` |
| ChargeType | String | 否 | 计费模式。不传则同时返回所有模式的价格。枚举值：`Month`（按月）、`Day`（按天）、`Postpay`（后付费）、`Spot`（抢占式） | `Month` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetCompShareInstanceUserPriceResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| PriceDetails | Array of Object | 折后价格明细列表 | — |
| OriginalPriceDetails | Array of Object | 原价明细列表（结构同 PriceDetails） | — |
| ListPriceDetails | Array of Object | 目录价明细列表（结构同 PriceDetails） | — |

### PriceDetails 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| ChargeType | String | 计费模式 |
| Instance | Float | 实例价格（CPU + 内存 + GPU，单位：元） |
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
        # 查询所有计费模式的价格
        resp = client.ucompshare().get_comp_share_instance_user_price({
            "Zone": "cn-wlcb-01",
            "GpuType": "4090",
            "GPU": 1,
            "CPU": 16,
            "Memory": 64 * 1024,
        })
        for price in resp.get("PriceDetails", []):
            print(f"  {price['ChargeType']}: 实例 {price.get('Instance', 0)} 元")
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

	req := client.NewGetCompShareInstanceUserPriceRequest()
	req.GpuType = ucloud.String("4090")
	req.GPU = ucloud.Int(1)
	req.CPU = ucloud.Int(16)
	req.Memory = ucloud.Int(64 * 1024)

	resp, err := client.GetCompShareInstanceUserPrice(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, price := range resp.PriceDetails {
		fmt.Printf("  %s: 实例 %.2f 元\n", price.ChargeType, *price.Instance)
	}
}
```

---

## 响应示例

```json
{
  "Action": "GetCompShareInstanceUserPriceResponse",
  "RetCode": 0,
  "PriceDetails": [
    {"ChargeType": "Month", "Instance": 1068.00, "SystemDisks": 120.00},
    {"ChargeType": "Day", "Instance": 71.20, "SystemDisks": 8.00},
    {"ChargeType": "Postpay", "Instance": 1.48, "SystemDisks": 0.18},
    {"ChargeType": "Spot", "Instance": 1.04, "SystemDisks": 0.18, "InstanceDiscountType": 0}
  ],
  "OriginalPriceDetails": [
    {"ChargeType": "Month", "Instance": 1068.00, "SystemDisks": 120.00},
    {"ChargeType": "Day", "Instance": 71.20, "SystemDisks": 8.00},
    {"ChargeType": "Postpay", "Instance": 1.66, "SystemDisks": 0.18},
    {"ChargeType": "Spot", "Instance": 1.66, "SystemDisks": 0.18}
  ]
}
```
