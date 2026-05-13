# TerminateCompShareCustomImage — 删除自制镜像

## 接口说明

删除一个自制镜像。已发布到社区的镜像需先下架后才能删除。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `TerminateCompShareCustomImage` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| CompShareImageId | String | 是 | 镜像 ID | `compshareImage-xxxx` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `TerminateCompShareCustomImageResponse` |
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
        resp = client.ucompshare().terminate_comp_share_custom_image({
            "Zone": "cn-wlcb-01",
            "CompShareImageId": "compshareImage-xxxx",  # 镜像 ID，通过 DescribeCompShareImages 获取
        })
        print("删除成功")
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
	cfg.Zone = "cn-wlcb-01"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucompshare.NewClient(&cfg, &credential)

	req := client.NewTerminateCompShareCustomImageRequest()
	req.CompShareImageId = ucloud.String("compshareImage-xxxx") // 镜像 ID，通过 DescribeCompShareImages 获取

	_, err := client.TerminateCompShareCustomImage(req)
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
  "Action": "TerminateCompShareCustomImageResponse",
  "RetCode": 0
}
```
