# SetCompShareTeamAmount — 设置成员额度

## 接口说明

设置团队成员的额度。支持对一个或多个成员批量操作。

### 使用限制

- 仅团队管理员可操作。
- 额度单位为分。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `SetCompShareTeamAmount` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `1001` |
| VirtualCompanyId | Array&lt;Uint32&gt; | 是 | 目标成员的虚拟企业 ID 列表 | `[60001, 60002]` |
| Amount | Uint | 是 | 额度（单位分） | `100000` |
| OperateType | String | 是 | 操作类型：`AllocateAmount`（分配额度）、`WithdrawAmount`（回收额度） | `AllocateAmount` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `SetCompShareTeamAmountResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| FailedMembers | Map&lt;Uint32, MemberAllocationError&gt; | 操作失败的成员信息，key 为 VirtualCompanyId | 见下方 |

### MemberAllocationError

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Code | Integer | 错误码 | `17001` |
| Message | String | 错误信息 | `额度不足` |

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
        resp = client.ucompshare().set_comp_share_team_amount({
            "TeamId": 1001,
            "VirtualCompanyId": [60001, 60002],
            "Amount": 100000,
            "OperateType": "AllocateAmount",
        })
        failed = resp.get("FailedMembers", {})
        if failed:
            for vid, info in failed.items():
                print(f"设置失败 - 成员 {vid}: {info['Message']}")
        else:
            print("全部设置成功")
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

	req := client.NewSetCompShareTeamAmountRequest()
	req.TeamId = ucloud.Uint(1001)
	req.VirtualCompanyId = []uint32{60001, 60002}
	req.Amount = ucloud.Uint(100000)
	req.OperateType = ucloud.String("AllocateAmount")

	resp, err := client.SetCompShareTeamAmount(req)
	if err != nil {
		fmt.Printf("设置失败: %s\n", err)
		return
	}
	if len(resp.FailedMembers) > 0 {
		for vid, info := range resp.FailedMembers {
			fmt.Printf("设置失败 - 成员 %d: %s\n", vid, info.Message)
		}
	} else {
		fmt.Println("全部设置成功")
	}
}
```

---

## 响应示例

```json
{
  "Action": "SetCompShareTeamAmountResponse",
  "RetCode": 0,
  "FailedMembers": {
    "60002": {
      "Code": 17001,
      "Message": "额度不足"
    }
  }
}
```
