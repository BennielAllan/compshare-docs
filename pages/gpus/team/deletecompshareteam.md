# DeleteCompShareTeam — 删除团队

## 接口说明

删除指定团队。仅团队管理员可删除，需先移除所有成员。

### 使用限制

- 仅团队管理员可操作。
- 需先移除团队中的所有成员后才可删除。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DeleteCompShareTeam` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `1001` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DeleteCompShareTeamResponse` |
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
        resp = client.ucompshare().delete_comp_share_team({
            "TeamId": 1001,
        })
        print("删除成功")
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

	req := client.NewDeleteCompShareTeamRequest()
	req.TeamId = ucloud.Uint(1001)

	_, err := client.DeleteCompShareTeam(req)
	if err != nil {
		fmt.Printf("删除失败: %s\n", err)
		return
	}
	fmt.Println("删除成功")
}
```

---

## 响应示例

```json
{
  "Action": "DeleteCompShareTeamResponse",
  "RetCode": 0
}
```
