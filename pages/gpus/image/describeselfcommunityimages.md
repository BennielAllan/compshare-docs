# DescribeSelfCommunityImages — 查询自己发布的社区镜像

## 接口说明

查询当前账户发布到社区的所有镜像，包含所有状态（审核中、已发布、已下架等）。本接口复用 [DescribeCommunityImages](./describecommunityimages.md) 的全部请求参数（如 `Name`、`Tag`、`SortCondition`、`IsFree` 等），下表仅列出常用参数。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeSelfCommunityImages` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Offset | Integer | 否 | 偏移量，默认 `0` | `0` |
| Limit | Integer | 否 | 每页数量，默认 `20` | `20` |

> 完整请求参数请参考 [DescribeCommunityImages](./describecommunityimages.md)。

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCommunityImagesResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| TotalCount | Integer | 镜像总数 | `3` |
| CompshareImageGroup | Array of [CompshareImageGroup](./DescribeCommunityImages.md#compshareimagegroup-结构) | 镜像分组列表 | — |

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
        resp = client.ucompshare().describe_self_community_images({
            "Limit": 20,
        })
        print(f"我发布的社区镜像数: {resp.get('TotalCount')}")
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

	req := client.NewDescribeSelfCommunityImagesRequest()
	req.Limit = ucloud.Int(20)

	resp, err := client.DescribeSelfCommunityImages(req)
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
  "Action": "DescribeCommunityImagesResponse",
  "RetCode": 0,
  "TotalCount": 2,
  "CompshareImageGroup": []
}
```
