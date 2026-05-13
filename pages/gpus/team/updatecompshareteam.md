# UpdateCompShareTeam — 更新团队信息

## 接口说明

更新指定团队的名称或简介信息。

### 使用限制

- 仅团队管理员可操作。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `UpdateCompShareTeam` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `1001` |
| Name | String | 否 | 团队名称 | `new-team-name` |
| Description | String | 否 | 团队简介 | `更新后的团队简介` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `UpdateCompShareTeamResponse` |
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
        resp = client.ucompshare().update_comp_share_team({
            "TeamId": 1001,
            "Name": "new-team-name",
            "Description": "更新后的团队简介",
        })
        print("更新成功")
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

	req := client.NewUpdateCompShareTeamRequest()
	req.TeamId = ucloud.Uint(1001)
	req.Name = ucloud.String("new-team-name")
	req.Description = ucloud.String("更新后的团队简介")

	_, err := client.UpdateCompShareTeam(req)
	if err != nil {
		fmt.Printf("更新失败: %s\n", err)
		return
	}
	fmt.Println("更新成功")
}
```

---

## 响应示例

```json
{
  "Action": "UpdateCompShareTeamResponse",
  "RetCode": 0
}
```
