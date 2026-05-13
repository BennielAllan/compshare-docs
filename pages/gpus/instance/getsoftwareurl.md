# GetSoftwareURL — 获取实例上软件的访问地址

## 接口说明

获取指定实例上运行的软件（如 JupyterLab、FileBrowser 等）的访问 URL。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetSoftwareURL` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |
| Software | String | 是 | 软件名称，可通过 [DescribeCompShareSoftwarePort](./describecompsharesoftwareport.md) 获取 | `JupyterLab` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetSoftwareURLResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| URL | String | 软件访问地址 | `http://x.x.x.x:8888` |

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
        resp = client.ucompshare().get_software_url({
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "Software": "JupyterLab",
        })
        print("访问地址:", resp.get("URL"))
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

	req := client.NewGetSoftwareURLRequest()
	req.UHostId = ucloud.String("uhost-xxxx") // 实例 ID，通过 DescribeCompShareInstance 获取
	req.Software = ucloud.String("JupyterLab")

	resp, err := client.GetSoftwareURL(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("访问地址: %s\n", resp.URL)
}
```

---

## 响应示例

```json
{
  "Action": "GetSoftwareURLResponse",
  "RetCode": 0,
  "URL": "http://x.x.x.x:8888"
}
```
