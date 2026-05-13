# DescribeTeamMemberOrderCount — 查询成员订单数量

## 接口说明

查询指定团队成员的订单汇总数量及金额信息。

### 使用限制

- 账户需完成实名认证。
- 需要团队管理员权限。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeTeamMemberOrderCount` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `100001` |
| VirtualCompanyId | Uint32 | 是 | 成员虚拟账户 ID | `300001` |
| BeginTime | Uint64 | 否 | 起始时间（Unix 时间戳） | `1700000000` |
| EndTime | Uint64 | 否 | 结束时间（Unix 时间戳） | `1700086400` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeTeamMemberOrderCountResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| TotalCount | Int64 | 订单总数 | `128` |
| Amount | String | 订单总金额（元） | `1500.00` |
| AmountReal | String | 实付总金额（元） | `1200.00` |
| AmountFree | String | 免费额度总金额（元） | `100.00` |
| AmountCoupon | String | 优惠券抵扣总金额（元） | `200.00` |

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
        resp = client.ucompshare().describe_team_member_order_count({
            "TeamId": 100001,
            "VirtualCompanyId": 300001,
            "BeginTime": 1700000000,
            "EndTime": 1700086400,
        })
        print(f"订单总数: {resp['TotalCount']}")
        print(f"总金额: {resp['Amount']}")
        print(f"实付金额: {resp['AmountReal']}")
        print(f"免费额度: {resp['AmountFree']}")
        print(f"优惠券: {resp['AmountCoupon']}")
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

	req := client.NewDescribeTeamMemberOrderCountRequest()
	req.TeamId = ucloud.Uint32(100001)
	req.VirtualCompanyId = ucloud.Uint32(300001)
	req.BeginTime = ucloud.Uint64(1700000000)
	req.EndTime = ucloud.Uint64(1700086400)

	resp, err := client.DescribeTeamMemberOrderCount(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("订单总数: %d\n", resp.TotalCount)
	fmt.Printf("总金额: %s, 实付: %s, 免费额度: %s, 优惠券: %s\n",
		resp.Amount, resp.AmountReal, resp.AmountFree, resp.AmountCoupon)
}
```

---

## 响应示例

```json
{
  "Action": "DescribeTeamMemberOrderCountResponse",
  "RetCode": 0,
  "TotalCount": 128,
  "Amount": "1500.00",
  "AmountReal": "1200.00",
  "AmountFree": "100.00",
  "AmountCoupon": "200.00"
}
```
