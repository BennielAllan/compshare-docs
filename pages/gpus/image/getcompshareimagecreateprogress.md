# GetCompShareImageCreateProgress — 查询镜像制作进度

## 接口说明

查询自制镜像的制作进度，返回制作百分比和预计剩余时间。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetCompShareImageCreateProgress` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| CompShareImageId | String | 是 | 镜像 ID | `compshareImage-xxxx` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetCompShareImageCreateProgressResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Process | Float | 制作进度百分比（0\~100） | `65.5` |
| TotalDuration | Integer | 预计总耗时（秒） | `300` |
| RemainingDuration | Integer | 预计剩余时间（秒） | `105` |

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
        resp = client.ucompshare().get_comp_share_image_create_progress({
            "Zone": "cn-wlcb-01",
            "CompShareImageId": "compshareImage-xxxx",  # 镜像 ID，通过 DescribeCompShareImages 获取
        })
        print(f"进度: {resp.get('Process')}%")
        print(f"剩余时间: {resp.get('RemainingDuration')}s")
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

	req := client.NewGetCompShareImageCreateProgressRequest()
	req.CompShareImageId = ucloud.String("compshareImage-xxxx") // 镜像 ID，通过 DescribeCompShareImages 获取

	resp, err := client.GetCompShareImageCreateProgress(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("进度: %.1f%%\n", *resp.Process)
}
```

---

## 响应示例

```json
{
  "Action": "GetCompShareImageCreateProgressResponse",
  "RetCode": 0,
  "Process": 65.5,
  "TotalDuration": 300,
  "RemainingDuration": 105
}
```
