# DescribeFavoriteImages — 查询已收藏的镜像列表

## 接口说明

查询当前账户收藏的社区镜像列表，支持分页。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeFavoriteImages` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Offset | Integer | 否 | 偏移量，默认 `0` | `0` |
| Limit | Integer | 否 | 每页数量，默认 `20` | `20` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeFavoriteImagesResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| ImageSet | Array of Object | 收藏的镜像信息列表 | — |

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
        resp = client.ucompshare().describe_favorite_images({
            "Limit": 20,
        })
        for img in resp.get("ImageSet", []):
            print(f"  {img['CompShareImageId']} - {img['Name']}")
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

	req := client.NewDescribeFavoriteImagesRequest()
	req.Limit = ucloud.Int(20)

	resp, err := client.DescribeFavoriteImages(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, img := range resp.ImageSet {
		fmt.Printf("  %s - %s\n", img.CompShareImageId, img.Name)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeFavoriteImagesResponse",
  "RetCode": 0,
  "ImageSet": [
    {
      "CompShareImageId": "compshareImage-xxxx",
      "Name": "Stable Diffusion WebUI",
      "Author": "UCloud",
      "Status": "Available"
    }
  ]
}
```
