# GetCompShareRefundPrice — 查询退费金额

## 接口说明

查询删除实例后可退还的金额。支持批量查询多个实例。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetCompShareRefundPrice` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostIds.N | String | 是 | 实例 ID 列表 | `uhost-xxxx` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetCompShareRefundPriceResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| RefundPriceSet | Array of Object | 退费信息列表 | — |

### RefundPriceSet 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| UHostId | String | 实例 ID |
| Code | Integer | 状态码，`0` 为可退费 |
| Message | String | 状态说明 |
| RefundPrice | Float | 可退金额（元） |

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
        resp = client.ucompshare().get_comp_share_refund_price({
            "Zone": "cn-wlcb-01",
            "UHostIds": ["uhost-xxxx"],
        })
        for item in resp.get("RefundPriceSet", []):
            print(f"  {item['UHostId']}: {item.get('RefundPrice')} 元")
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

	req := client.NewGetCompShareRefundPriceRequest()
	req.UHostIds = []string{"uhost-xxxx"}

	resp, err := client.GetCompShareRefundPrice(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, item := range resp.RefundPriceSet {
		fmt.Printf("  %s: %.2f 元\n", item.UHostId, *item.RefundPrice)
	}
}
```

---

## 响应示例

```json
{
  "Action": "GetCompShareRefundPriceResponse",
  "RetCode": 0,
  "RefundPriceSet": [
    {"UHostId": "uhost-xxxx", "Code": 0, "Message": "", "RefundPrice": 235.50}
  ]
}
```
