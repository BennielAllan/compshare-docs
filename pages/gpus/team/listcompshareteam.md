# ListCompShareTeam — 查询已创建的团队列表

## 接口说明

查询当前账户已创建的团队列表。

### 使用限制

- 仅返回当前账户作为管理员创建的团队。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `ListCompShareTeam` |
| Region | String | 是 | 地域 | `cn-wlcb` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `ListCompShareTeamResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Teams | Array&lt;CompShareTeamInfo&gt; | 团队列表 | 见下方 |

### CompShareTeamInfo

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Id | Uint32 | 团队 ID | `1001` |
| Name | String | 团队名称 | `my-team` |
| CompanyId | Uint32 | 企业 ID | `50001` |
| Description | String | 团队简介 | `AI研发团队` |
| MemberCount | Integer | 成员数量 | `5` |

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
        resp = client.ucompshare().list_comp_share_team({})
        teams = resp.get("Teams", [])
        for team in teams:
            print(f"团队: {team['Name']} (ID: {team['Id']}, 成员数: {team['MemberCount']})")
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

	req := client.NewListCompShareTeamRequest()

	resp, err := client.ListCompShareTeam(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, team := range resp.Teams {
		fmt.Printf("团队: %s (ID: %d, 成员数: %d)\n", team.Name, team.Id, team.MemberCount)
	}
}
```

---

## 响应示例

```json
{
  "Action": "ListCompShareTeamResponse",
  "RetCode": 0,
  "Teams": [
    {
      "Id": 1001,
      "Name": "my-team",
      "CompanyId": 50001,
      "Description": "AI研发团队",
      "MemberCount": 5
    }
  ]
}
```
