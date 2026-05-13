# ModifyCompShareImageShareAccount — 共享/取消共享镜像

## 接口说明

将自制镜像共享给其他账户，或取消已有的共享。被共享的账户可以使用该镜像创建实例。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `ModifyCompShareImageShareAccount` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| CompShareImageId | String | 是 | 镜像 ID | `compshareImage-xxxx` |
| AddAccounts.N | Integer | 否 | 要共享给的账户 ID 列表 | `12345` |
| RemoveAccounts.N | Integer | 否 | 要取消共享的账户 ID 列表 | `67890` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `ModifyCompShareImageShareAccountResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| InvalidAccounts | Array of Integer | 无效的账户 ID 列表（不存在的账户） | `[]` |

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
        resp = client.ucompshare().modify_comp_share_image_share_account({
            "CompShareImageId": "compshareImage-xxxx",  # 镜像 ID，通过 DescribeCompShareImages 获取
            "AddAccounts": [12345, 67890],
        })
        print("共享成功，无效账户:", resp.get("InvalidAccounts"))
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

	req := client.NewModifyCompShareImageShareAccountRequest()
	req.CompShareImageId = ucloud.String("compshareImage-xxxx") // 镜像 ID，通过 DescribeCompShareImages 获取
	req.AddAccounts = []int{12345, 67890}

	resp, err := client.ModifyCompShareImageShareAccount(req)
	if err != nil {
		fmt.Printf("操作失败: %s\n", err)
		return
	}
	fmt.Printf("共享成功，无效账户: %v\n", resp.InvalidAccounts)
}
```

---

## 响应示例

```json
{
  "Action": "ModifyCompShareImageShareAccountResponse",
  "RetCode": 0,
  "InvalidAccounts": []
}
```
