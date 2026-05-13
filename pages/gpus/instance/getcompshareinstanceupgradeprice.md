# GetCompShareInstanceUpgradePrice — 查询实例升配价格

## 接口说明

查询实例升降配的差价。传入目标 CPU/内存/GPU 规格，返回与当前配置的价格差。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetCompShareInstanceUpgradePrice` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |
| CPU | Integer | 否 | 目标 CPU 核数 | `32` |
| Memory | Integer | 否 | 目标内存大小，单位 MB | `131072` |
| GPU | Integer | 否 | 目标 GPU 卡数 | `2` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetCompShareInstanceUpgradePriceResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Price | Float | 升配差价（元），正数为补差价，负数为退费 | `356.00` |
| OriginalPrice | Float | 折前原价差额（元） | `356.00` |

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
        resp = client.ucompshare().get_comp_share_instance_upgrade_price({
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "CPU": 32,
            "Memory": 128 * 1024,
            "GPU": 2,
        })
        print(f"升配差价: {resp.get('Price')} 元")
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

	req := client.NewGetCompShareInstanceUpgradePriceRequest()
	req.UHostId = ucloud.String("uhost-xxxx") // 实例 ID，通过 DescribeCompShareInstance 获取
	req.CPU = ucloud.Int(32)
	req.Memory = ucloud.Int(128 * 1024)
	req.GPU = ucloud.Int(2)

	resp, err := client.GetCompShareInstanceUpgradePrice(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("升配差价: %.2f 元\n", resp.Price)
}
```

---

## 响应示例

```json
{
  "Action": "GetCompShareInstanceUpgradePriceResponse",
  "RetCode": 0,
  "Price": 356.00,
  "OriginalPrice": 356.00
}
```
