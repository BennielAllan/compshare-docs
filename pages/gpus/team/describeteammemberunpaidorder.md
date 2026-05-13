# DescribeTeamMemberUnpaidOrder — 查询成员未支付订单

## 接口说明

查询指定团队成员的未支付订单列表。

### 使用限制

- 账户需完成实名认证。
- 需要团队管理员权限。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeTeamMemberUnpaidOrder` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `100001` |
| VirtualCompanyId | Uint32 | 是 | 成员虚拟账户 ID | `300001` |
| BeginTime | Int64 | 否 | 起始时间（Unix 时间戳） | `1700000000` |
| EndTime | Int64 | 否 | 结束时间（Unix 时间戳） | `1700086400` |
| Limit | Int | 否 | 每页数量 | `25` |
| Offset | Int | 否 | 偏移量，默认 0 | `0` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeTeamMemberUnpaidOrderResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| OrderInfos | Array<Object> | 未支付订单列表 | 见下表 |

### OrderInfos 元素

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| OrderNo | String | 订单号 | `order-20231115002` |
| OrderType | String | 订单类型 | `Buy` |
| OrderState | String | 订单状态 | `Unpaid` |
| Amount | String | 订单金额（元） | `50.00` |
| ChargeType | String | 计费类型 | `Month` |
| ResourceId | String | 资源 ID | `uhost-yyy` |
| CreateTime | Integer | 创建时间（Unix 时间戳） | `1700000000` |

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
        resp = client.ucompshare().describe_team_member_unpaid_order({
            "TeamId": 100001,
            "VirtualCompanyId": 300001,
            "Limit": 25,
            "Offset": 0,
        })
        for order in resp["OrderInfos"]:
            print(f"订单号: {order['OrderNo']}, 金额: {order['Amount']}, 资源: {order['ResourceId']}")
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
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucompshare.NewClient(&cfg, &credential)

	req := client.NewDescribeTeamMemberUnpaidOrderRequest()
	req.TeamId = ucloud.Uint32(100001)
	req.VirtualCompanyId = ucloud.Uint32(300001)
	req.Limit = ucloud.Int(25)
	req.Offset = ucloud.Int(0)

	resp, err := client.DescribeTeamMemberUnpaidOrder(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, order := range resp.OrderInfos {
		fmt.Printf("订单号: %s, 金额: %s, 资源: %s\n", order.OrderNo, order.Amount, order.ResourceId)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeTeamMemberUnpaidOrderResponse",
  "RetCode": 0,
  "OrderInfos": [
    {
      "OrderNo": "order-20231115002",
      "OrderType": "Buy",
      "OrderState": "Unpaid",
      "Amount": "50.00",
      "ChargeType": "Month",
      "ResourceId": "uhost-yyy",
      "CreateTime": 1700000000
    }
  ]
}
```
