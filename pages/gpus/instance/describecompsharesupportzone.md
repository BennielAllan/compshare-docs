# DescribeCompShareSupportZone — 获取支持的可用区列表

## 接口说明

获取算力共享平台当前支持的所有可用区信息，包括地域和可用区的 ID 及名称。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeCompShareSupportZone` |
| Region | String | 是 | 地域 | `cn-wlcb` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCompShareSupportZoneResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| ZoneInfo | Array of Object | 可用区信息列表 | — |

### ZoneInfo 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Region | String | 地域名称 |
| Zone | String | 可用区名称 |
| Describe | String | 可用区显示名称 |

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
        resp = client.ucompshare().describe_comp_share_support_zone({})
        for zone in resp.get("ZoneInfo", []):
            print(f"  {zone['Zone']} - {zone['Describe']}")
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

	req := client.NewDescribeCompShareSupportZoneRequest()
	resp, err := client.DescribeCompShareSupportZone(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, zone := range resp.ZoneInfo {
		fmt.Printf("  %s - %s\n", zone.Zone, zone.Describe)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeCompShareSupportZoneResponse",
  "RetCode": 0,
  "ZoneInfo": [
    {"Region": "cn-wlcb", "Zone": "cn-wlcb-01", "Describe": "华北二A"},
    {"Region": "cn-sh2", "Zone": "cn-sh2-02", "Describe": "上海二"}
  ]
}
```
