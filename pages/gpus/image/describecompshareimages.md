# DescribeCompShareImages — 获取平台镜像列表

## 接口说明

获取算力共享平台的系统镜像列表，支持按镜像 ID、镜像类型、名称等条件筛选，支持分页。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeCompShareImages` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 否 | 可用区 | `cn-wlcb-01` |
| CompShareImageId | String | 否 | 按镜像 ID 精确查询 | `compshareImage-xxxx` |
| ImageType | String | 否 | 镜像类型。枚举值：`System`（系统镜像）、`App`（应用镜像） | `System` |
| Name | String | 否 | 按镜像名称筛选 | `PyTorch` |
| Author | String | 否 | 按作者筛选 | `UCloud` |
| Tag | String | 否 | 按标签筛选 | `深度学习` |
| Offset | Integer | 否 | 偏移量，默认 `0` | `0` |
| Limit | Integer | 否 | 每页数量，默认 `20`，最大 `100` | `20` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCompShareImagesResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| TotalCount | Integer | 满足条件的镜像总数 | `50` |
| ImageSet | Array of Object | 镜像信息列表 | — |

### ImageSet 元素主要字段

| 名称 | 类型 | 描述 |
|------|------|------|
| CompShareImageId | String | 镜像 ID |
| Name | String | 镜像名称 |
| ImageType | String | 镜像类型 |
| Author | String | 作者 |
| Status | String | 镜像状态 |
| Tags | Array of String | 标签列表 |
| Description | String | 描述 |

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
        resp = client.ucompshare().describe_comp_share_images({
            "ImageType": "System",
            "Limit": 20,
            "Offset": 0,
        })
        print(f"总数: {resp.get('TotalCount')}")
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

	req := client.NewDescribeCompShareImagesRequest()
	req.ImageType = ucloud.String("System")
	req.Limit = ucloud.Int(20)

	resp, err := client.DescribeCompShareImages(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("总数: %d\n", resp.TotalCount)
	for _, img := range resp.ImageSet {
		fmt.Printf("  %s - %s\n", img.CompShareImageId, img.Name)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeCompShareImagesResponse",
  "RetCode": 0,
  "TotalCount": 2,
  "ImageSet": [
    {
      "CompShareImageId": "compshareImage-xxxx",
      "Name": "PyTorch 2.1",
      "ImageType": "System",
      "Author": "UCloud",
      "Status": "Available",
      "Tags": ["深度学习", "PyTorch"]
    }
  ]
}
```
