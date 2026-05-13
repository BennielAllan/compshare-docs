# ListCompShareTeamJoined — 查询已加入的团队列表

## 接口说明

查询当前账户已加入的团队列表，支持按加入状态过滤。

### 使用限制

- 仅返回当前账户作为成员加入的团队。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `ListCompShareTeamJoined` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Status | String | 否 | 按加入状态过滤 | `joined` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `ListCompShareTeamJoinedResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| JoinedTeams | Array&lt;CompShareTeamJoinedInfo&gt; | 已加入的团队列表 | 见下方 |

### CompShareTeamJoinedInfo

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| TeamId | Uint32 | 团队 ID | `1001` |
| TeamName | String | 团队名称 | `my-team` |
| UserCompanyId | Uint32 | 用户企业 ID | `50001` |
| VirtualCompanyId | Uint32 | 虚拟企业 ID | `60001` |
| Status | String | 加入状态 | `joined` |
| RemarkName | String | 备注名 | `张三` |
| CreateTime | Integer | 加入时间（Unix 时间戳） | `1700000000` |

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
        resp = client.ucompshare().list_comp_share_team_joined({
            "Status": "joined",
        })
        joined_teams = resp.get("JoinedTeams", [])
        for team in joined_teams:
            print(f"团队: {team['TeamName']} (状态: {team['Status']}, 备注: {team['RemarkName']})")
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

	req := client.NewListCompShareTeamJoinedRequest()
	req.Status = ucloud.String("joined")

	resp, err := client.ListCompShareTeamJoined(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, team := range resp.JoinedTeams {
		fmt.Printf("团队: %s (状态: %s, 备注: %s)\n", team.TeamName, team.Status, team.RemarkName)
	}
}
```

---

## 响应示例

```json
{
  "Action": "ListCompShareTeamJoinedResponse",
  "RetCode": 0,
  "JoinedTeams": [
    {
      "TeamId": 1001,
      "TeamName": "my-team",
      "UserCompanyId": 50001,
      "VirtualCompanyId": 60001,
      "Status": "joined",
      "RemarkName": "张三",
      "CreateTime": 1700000000
    }
  ]
}
```
