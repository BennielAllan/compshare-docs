# DescribeCompShareImageTags — 获取镜像标签列表

## 接口说明

获取平台上所有可用的镜像标签，用于社区镜像筛选。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeCompShareImageTags` |
| Region | String | 是 | 地域 | `cn-wlcb` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCompShareImageTagsResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Tags | Array of String | 标签列表 | `["深度学习","LLM","图像生成"]` |
| TagsMap | Object | 标签分类映射（分类名 → 标签数组） | — |
| TagIndex | Array of String | 标签分类索引（有序） | `["框架","场景"]` |

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
        resp = client.ucompshare().describe_comp_share_image_tags({})
        print("标签:", resp.get("Tags"))
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

	req := client.NewDescribeCompShareImageTagsRequest()
	resp, err := client.DescribeCompShareImageTags(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("标签: %v\n", resp.Tags)
}
```

---

## 响应示例

```json
{
  "Action": "DescribeCompShareImageTagsResponse",
  "RetCode": 0,
  "Tags": ["深度学习", "LLM", "图像生成", "ComfyUI", "Stable Diffusion"],
  "TagsMap": {
    "框架": ["PyTorch", "TensorFlow"],
    "场景": ["LLM", "图像生成", "视频生成"]
  },
  "TagIndex": ["框架", "场景"]
}
```
