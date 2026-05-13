# PublishCompShareImage — 发布镜像到社区

## 接口说明

将自制镜像发布到社区镜像市场，供其他用户使用。可设置为免费或付费。

### 使用限制

- 仅**容器镜像**制作的自制镜像可以发布到社区。虚机镜像不支持发布。
- 镜像必须处于 `Available` 状态。
- 发布后镜像进入审核流程。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `PublishCompShareImage` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| CompShareImageId | String | 是 | 要发布的镜像 ID | `compshareImage-xxxx` |
| GroupId | String | 否 | 版本组 ID。更新已有社区镜像时传入 | `group-xxxx` |
| CommunityImageName | String | 否 | 社区镜像显示名称 | `我的AI环境` |
| VersionName | String | 是 | 版本名称，必须符合版本号格式（如 `v1.0`） | `v1.0` |
| VersionDesc | String | 否 | 版本描述 | `首次发布` |
| Price | Float | 否 | 价格（元/小时），`0` 表示免费 | `0` |
| Cover | String | 否 | 封面图（Base64） | — |
| Tags | Array of String | 否 | 标签列表 | `["深度学习","PyTorch"]` |
| Description | String | 否 | 镜像描述 | `预装PyTorch 2.1` |
| Readme | String | 否 | 使用说明（富文本） | — |
| SupportedGpuTypes | Array of String | 否 | 支持的 GPU 类型 | `["4090","A100"]` |
| AutoStart | Boolean | 否 | 是否支持自启动 | `true` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `PublishCompShareImageResponse` |
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
        resp = client.ucompshare().publish_comp_share_image({
            "CompShareImageId": "compshareImage-xxxx",  # 镜像 ID，通过 DescribeCompShareImages 获取
            "CommunityImageName": "我的AI环境",
            "VersionName": "v1.0",
            "Price": 0,
            "Tags": ["深度学习", "PyTorch"],
            "Description": "预装PyTorch 2.1和CUDA 12.1",
        })
        print("发布成功，等待审核")
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

	req := client.NewPublishCompShareImageRequest()
	req.CompShareImageId = ucloud.String("compshareImage-xxxx") // 镜像 ID，通过 DescribeCompShareImages 获取
	req.CommunityImageName = ucloud.String("我的AI环境")
	req.VersionName = ucloud.String("v1.0")

	_, err := client.PublishCompShareImage(req)
	if err != nil {
		fmt.Printf("发布失败: %s\n", err)
		return
	}
	fmt.Println("发布成功，等待审核")
}
```

---

## 响应示例

```json
{
  "Action": "PublishCompShareImageResponse",
  "RetCode": 0
}
```
