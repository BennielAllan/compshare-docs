# CreateCompShareTeam — 创建团队

## 接口说明

创建一个团队。创建者自动成为团队管理员。

### 使用限制

- 账户需完成实名认证。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `CreateCompShareTeam` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Name | String | 是 | 团队名称 | `my-team` |
| Description | String | 否 | 团队简介 | `AI研发团队` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `CreateCompShareTeamResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |

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
        resp = client.ucompshare().invoke("CreateCompShareTeam", {
            "Region": "cn-wlcb",
            "Name": "my-team",
            "Description": "AI研发团队",
        })
        print("创建成功")
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

	"github.com/ucloud/ucloud-sdk-go/ucloud"
	"github.com/ucloud/ucloud-sdk-go/ucloud/auth"
	"github.com/ucloud/ucloud-sdk-go/ucloud/request"
	"github.com/ucloud/ucloud-sdk-go/ucloud/response"
)

type CreateCompShareTeamRequest struct {
	request.CommonBase
	Name        *string
	Description *string `required:"false"`
}

type CreateCompShareTeamResponse struct {
	response.CommonBase
}

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucloud.NewClient(&cfg, &credential)

	req := &CreateCompShareTeamRequest{
		Name:        ucloud.String("my-team"),
		Description: ucloud.String("AI研发团队"),
	}
	req.SetRegion("cn-wlcb")
	resp := &CreateCompShareTeamResponse{}

	if err := client.InvokeAction("CreateCompShareTeam", req, resp); err != nil {
		fmt.Printf("调用失败: RetCode=%d Msg=%s err=%v\n", resp.RetCode, resp.Message, err)
		return
	}
	fmt.Println("创建成功")
}
```

---

## 响应示例

```json
{
  "Action": "CreateCompShareTeamResponse",
  "RetCode": 0
}
```
