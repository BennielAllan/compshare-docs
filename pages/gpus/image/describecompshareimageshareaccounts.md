# DescribeCompShareImageShareAccounts — 查询镜像已共享的账户列表

## 接口说明

查询一个自制镜像当前已共享给哪些账户。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeCompShareImageShareAccounts` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| CompShareImageId | String | 是 | 镜像 ID | `compshareImage-xxxx` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCompShareImageShareAccountsResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| AccountSet | Array of Object | 已共享的账户列表 | — |

### AccountSet 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| AccountName | String | 账户名称 |
| AccountId | Integer | 账户 ID |

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
        resp = client.ucompshare().describe_comp_share_image_share_accounts({
            "CompShareImageId": "compshareImage-xxxx",  # 镜像 ID，通过 DescribeCompShareImages 获取
        })
        for acct in resp.get("AccountSet", []):
            print(f"  {acct['AccountId']} - {acct['AccountName']}")
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

	req := client.NewDescribeCompShareImageShareAccountsRequest()
	req.CompShareImageId = ucloud.String("compshareImage-xxxx") // 镜像 ID，通过 DescribeCompShareImages 获取

	resp, err := client.DescribeCompShareImageShareAccounts(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, acct := range resp.AccountSet {
		fmt.Printf("  %d - %s\n", acct.AccountId, acct.AccountName)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeCompShareImageShareAccountsResponse",
  "RetCode": 0,
  "AccountSet": [
    {"AccountId": 12345, "AccountName": "user@example.com"}
  ]
}
```
