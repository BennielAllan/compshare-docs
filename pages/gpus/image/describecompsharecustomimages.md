# DescribeCompShareCustomImages — 获取自制镜像列表

## 接口说明

获取当前账户下的自制镜像列表，支持分页。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeCompShareCustomImages` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| CompShareImageId | String | 否 | 按镜像 ID 精确查询 | `compshareImage-xxxx` |
| Offset | Integer | 否 | 偏移量，默认 `0` | `0` |
| Limit | Integer | 否 | 每页数量，默认 `20` | `20` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCompShareCustomImagesResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| TotalCount | Integer | 镜像总数 | `3` |
| ImageSet | Array of Object | 自制镜像信息列表 | — |

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
        resp = client.ucompshare().describe_comp_share_custom_images({
            "Limit": 20,
        })
        print(f"总数: {resp.get('TotalCount')}")
        for img in resp.get("ImageSet", []):
            print(f"  {img['CompShareImageId']} - {img['Name']} - {img['Status']}")
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

	req := client.NewDescribeCompShareCustomImagesRequest()
	req.Limit = ucloud.Int(20)

	resp, err := client.DescribeCompShareCustomImages(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("总数: %d\n", resp.TotalCount)
}
```

---

## 响应示例

```json
{
  "Action": "DescribeCompShareCustomImagesResponse",
  "RetCode": 0,
  "TotalCount": 1,
  "ImageSet": [
    {
      "CompShareImageId": "compshareImage-xxxx",
      "Name": "my-custom-env",
      "ImageType": "Custom",
      "Status": "Available",
      "CreateTime": 1712563200
    }
  ]
}
```
