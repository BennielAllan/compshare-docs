# GetCompShareTeamInfo — 获取团队详情

## 接口说明

获取指定团队的详细信息及成员关系列表。可通过 TeamId 或 VirtualCompanyId 查询，二选一。

### 使用限制

- TeamId 与 VirtualCompanyId 二选一，至少传入其中一个。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetCompShareTeamInfo` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 否* | 团队 ID（与 VirtualCompanyId 二选一） | `1001` |
| VirtualCompanyId | Uint32 | 否* | 虚拟企业 ID（与 TeamId 二选一） | `60001` |

> **\*** TeamId 与 VirtualCompanyId 必须传入其中一个。

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetCompShareTeamInfoResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Team | CompShareTeamInfo | 团队基本信息 | 见下方 |
| TeamRelation | Array&lt;CompShareTeamRelationInfo&gt; | 团队成员关系列表 | 见下方 |

### CompShareTeamInfo

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Id | Uint32 | 团队 ID | `1001` |
| Name | String | 团队名称 | `my-team` |
| CompanyId | Uint32 | 企业 ID | `50001` |
| Description | String | 团队简介 | `AI研发团队` |

### CompShareTeamRelationInfo

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| TeamId | Uint32 | 团队 ID | `1001` |
| TeamName | String | 团队名称 | `my-team` |
| UserCompanyId | Uint32 | 用户企业 ID | `50001` |
| VirtualCompanyId | Uint32 | 虚拟企业 ID | `60001` |
| Status | String | 成员状态 | `joined` |
| RemarkName | String | 备注名 | `张三` |
| AllocateAmount | Int64 | 已分配额度（单位分） | `100000` |
| AvailableAmount | Int64 | 可用额度（单位分） | `80000` |

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
        resp = client.ucompshare().get_comp_share_team_info({
            "TeamId": 1001,
        })
        team = resp.get("Team", {})
        print(f"团队: {team['Name']} (ID: {team['Id']})")
        for member in resp.get("TeamRelation", []):
            print(f"  成员: {member['RemarkName']} (状态: {member['Status']}, 可用额度: {member['AvailableAmount']})")
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

	req := client.NewGetCompShareTeamInfoRequest()
	req.TeamId = ucloud.Uint(1001)

	resp, err := client.GetCompShareTeamInfo(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("团队: %s (ID: %d)\n", resp.Team.Name, resp.Team.Id)
	for _, member := range resp.TeamRelation {
		fmt.Printf("  成员: %s (状态: %s, 可用额度: %d)\n", member.RemarkName, member.Status, member.AvailableAmount)
	}
}
```

---

## 响应示例

```json
{
  "Action": "GetCompShareTeamInfoResponse",
  "RetCode": 0,
  "Team": {
    "Id": 1001,
    "Name": "my-team",
    "CompanyId": 50001,
    "Description": "AI研发团队"
  },
  "TeamRelation": [
    {
      "TeamId": 1001,
      "TeamName": "my-team",
      "UserCompanyId": 50001,
      "VirtualCompanyId": 60001,
      "Status": "joined",
      "RemarkName": "张三",
      "AllocateAmount": 100000,
      "AvailableAmount": 80000
    }
  ]
}
```
