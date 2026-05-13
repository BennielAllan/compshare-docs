# CreateCompShareTeamRelation — 邀请成员加入团队

## 接口说明

邀请一个或多个用户加入指定团队。仅团队管理员可操作，单次最多邀请 100 人。

### 使用限制

- 仅团队管理员可操作。
- 单次请求最多邀请 100 名成员。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `CreateCompShareTeamRelation` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `1001` |
| UserInfo | Array&lt;UserInfoItem&gt; | 是 | 邀请的用户列表，最多 100 条 | 见下方 |

### UserInfoItem

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| UserCompanyId | Uint32 | 是 | 用户企业 ID | `50001` |
| RemarkName | String | 否 | 备注名 | `张三` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `CreateCompShareTeamRelationResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| ErrorMap | Map&lt;Uint32, ErrorInfo&gt; | 邀请失败的用户信息，key 为 UserCompanyId | 见下方 |

### ErrorInfo

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Message | String | 错误信息 | `用户已在团队中` |
| Code | Integer | 错误码 | `16001` |

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
        resp = client.ucompshare().create_comp_share_team_relation({
            "TeamId": 1001,
            "UserInfo": [
                {"UserCompanyId": 50002, "RemarkName": "张三"},
                {"UserCompanyId": 50003, "RemarkName": "李四"},
            ],
        })
        error_map = resp.get("ErrorMap", {})
        if error_map:
            for uid, info in error_map.items():
                print(f"邀请失败 - 用户 {uid}: {info['Message']}")
        else:
            print("全部邀请成功")
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

	req := client.NewCreateCompShareTeamRelationRequest()
	req.TeamId = ucloud.Uint(1001)
	req.UserInfo = []ucompshare.UserInfoItem{
		{UserCompanyId: ucloud.Uint(50002), RemarkName: ucloud.String("张三")},
		{UserCompanyId: ucloud.Uint(50003), RemarkName: ucloud.String("李四")},
	}

	resp, err := client.CreateCompShareTeamRelation(req)
	if err != nil {
		fmt.Printf("邀请失败: %s\n", err)
		return
	}
	if len(resp.ErrorMap) > 0 {
		for uid, info := range resp.ErrorMap {
			fmt.Printf("邀请失败 - 用户 %d: %s\n", uid, info.Message)
		}
	} else {
		fmt.Println("全部邀请成功")
	}
}
```

---

## 响应示例

```json
{
  "Action": "CreateCompShareTeamRelationResponse",
  "RetCode": 0,
  "ErrorMap": {
    "50003": {
      "Message": "用户已在团队中",
      "Code": 16001
    }
  }
}
```
