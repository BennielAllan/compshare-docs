# SetCompShareTeamRelation — 修改成员角色/移除成员

## 接口说明

修改团队成员的角色或状态，也可用于移除成员。

### 使用限制

- 仅团队管理员可操作。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `SetCompShareTeamRelation` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `1001` |
| Status | String | 是 | 操作类型：`Send`（发送邀请）、`Agree`（接受邀请）、`Reject`（拒绝邀请）、`Cancel`（取消待处理的邀请）、`UpdateRemarkName`（更新备注名） | `Cancel` |
| UserCompanyId | Uint32 | 否 | 用户企业 ID（`Cancel` 取消邀请、`UpdateRemarkName` 更新备注名时需传入） | `50002` |
| RemarkName | String | 否 | 备注名 | `张三` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `SetCompShareTeamRelationResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |

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
        resp = client.ucompshare().set_comp_share_team_relation({
            "TeamId": 1001,
            "Status": "Cancel",
            "UserCompanyId": 50002,
        })
        print("操作成功")
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

	req := client.NewSetCompShareTeamRelationRequest()
	req.TeamId = ucloud.Uint(1001)
	req.Status = ucloud.String("Cancel")
	req.UserCompanyId = ucloud.Uint(50002)

	_, err := client.SetCompShareTeamRelation(req)
	if err != nil {
		fmt.Printf("操作失败: %s\n", err)
		return
	}
	fmt.Println("操作成功")
}
```

---

## 响应示例

```json
{
  "Action": "SetCompShareTeamRelationResponse",
  "RetCode": 0
}
```
