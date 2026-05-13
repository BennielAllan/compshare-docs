# DescribeTeamMemberUnpaidOrderCount — 查询成员未支付订单数量

## 接口说明

查询指定团队成员的未支付订单数量及金额汇总。

### 使用限制

- 账户需完成实名认证。
- 需要团队管理员权限。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeTeamMemberUnpaidOrderCount` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `100001` |
| VirtualCompanyId | Uint32 | 是 | 成员虚拟账户 ID | `300001` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeTeamMemberUnpaidOrderCountResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| TotalCount | Int | 未支付订单总数 | `3` |
| Amount | String | 未支付总金额（元） | `150.00` |

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
        resp = client.ucompshare().describe_team_member_unpaid_order_count({
            "TeamId": 100001,
            "VirtualCompanyId": 300001,
        })
        print(f"未支付订单数: {resp['TotalCount']}")
        print(f"未支付总金额: {resp['Amount']}")
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

	req := client.NewDescribeTeamMemberUnpaidOrderCountRequest()
	req.TeamId = ucloud.Uint32(100001)
	req.VirtualCompanyId = ucloud.Uint32(300001)

	resp, err := client.DescribeTeamMemberUnpaidOrderCount(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("未支付订单数: %d, 未支付总金额: %s\n", resp.TotalCount, resp.Amount)
}
```

---

## 响应示例

```json
{
  "Action": "DescribeTeamMemberUnpaidOrderCountResponse",
  "RetCode": 0,
  "TotalCount": 3,
  "Amount": "150.00"
}
```
