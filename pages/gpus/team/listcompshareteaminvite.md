# ListCompShareTeamInvite — 查询团队邀请记录

## 接口说明

查询当前用户收到的团队邀请记录列表。

### 使用限制

- 账户需完成实名认证。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `ListCompShareTeamInvite` |
| Region | String | 是 | 地域 | `cn-wlcb` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `ListCompShareTeamInviteResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Invites | Array<Object> | 邀请记录列表 | 见下表 |

### Invites 元素

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| TeamId | Integer | 团队 ID | `100001` |
| TeamName | String | 团队名称 | `AI研发团队` |
| TeamUseCompanyId | Integer | 团队管理者账户 ID | `100001` |
| UserCompanyId | Integer | 用户账户 ID | `200001` |
| VirtualCompanyId | Integer | 虚拟账户 ID | `300001` |
| Status | String | 邀请状态 | `Pending` |
| RemarkName | String | 备注名称 | `张三` |
| CreateTime | Integer | 创建时间（Unix 时间戳） | `1700000000` |

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
        resp = client.ucompshare().list_comp_share_team_invite({})
        print(resp["Invites"])
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

	req := client.NewListCompShareTeamInviteRequest()

	resp, err := client.ListCompShareTeamInvite(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("邀请记录: %+v\n", resp.Invites)
}
```

---

## 响应示例

```json
{
  "Action": "ListCompShareTeamInviteResponse",
  "RetCode": 0,
  "Invites": [
    {
      "TeamId": 100001,
      "TeamName": "AI研发团队",
      "TeamUseCompanyId": 100001,
      "UserCompanyId": 200001,
      "VirtualCompanyId": 300001,
      "Status": "Pending",
      "RemarkName": "张三",
      "CreateTime": 1700000000
    }
  ]
}
```
