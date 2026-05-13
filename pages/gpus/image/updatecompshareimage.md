# UpdateCompShareImage — 更新镜像信息

## 接口说明

更新自制镜像或社区镜像的名称、描述、标签、端口等元信息。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `UpdateCompShareImage` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| CompShareImageId | String | 是 | 镜像 ID | `compshareImage-xxxx` |
| GroupId | String | 否 | 版本组 ID | `group-xxxx` |
| Name | String | 否 | 镜像名称 | `my-updated-env` |
| Description | String | 否 | 镜像描述 | `更新了CUDA版本` |
| Visibility | Integer | 否 | 可见性。`0`：私有，`1`：公开 | `0` |
| Price | Float | 否 | 价格（元/小时）。公开时需设置，`0` 为免费 | `0` |
| Cover | String | 否 | 封面图（Base64 编码） | — |
| Readme | String | 否 | 使用说明（富文本） | — |
| Tags | Array of String | 否 | 标签列表 | `["深度学习","PyTorch"]` |
| VersionName | String | 否 | 版本名称 | `v2.0` |
| VersionDesc | String | 否 | 版本描述 | `升级PyTorch到2.1` |
| SupportedGpuTypes | Array of String | 否 | 支持的 GPU 类型列表 | `["4090","A100"]` |
| AutoStart | Boolean | 否 | 是否支持自启动 | `true` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `UpdateCompShareImageResponse` |
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
        resp = client.ucompshare().update_comp_share_image({
            "CompShareImageId": "compshareImage-xxxx",  # 镜像 ID，通过 DescribeCompShareImages 获取
            "Name": "my-updated-env",
            "Tags": ["深度学习", "PyTorch"],
        })
        print("更新成功")
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

	req := client.NewUpdateCompShareImageRequest()
	req.CompShareImageId = ucloud.String("compshareImage-xxxx") // 镜像 ID，通过 DescribeCompShareImages 获取
	req.Name = ucloud.String("my-updated-env")

	_, err := client.UpdateCompShareImage(req)
	if err != nil {
		fmt.Printf("更新失败: %s\n", err)
		return
	}
	fmt.Println("更新成功")
}
```

---

## 响应示例

```json
{
  "Action": "UpdateCompShareImageResponse",
  "RetCode": 0
}
```
