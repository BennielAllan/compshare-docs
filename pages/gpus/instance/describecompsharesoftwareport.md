# DescribeCompShareSoftwarePort — 查询软件端口映射列表

## 接口说明

获取平台支持的所有软件及其对应的端口号，如 JupyterLab、SSH、FileBrowser 等。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeCompShareSoftwarePort` |
| Region | String | 是 | 地域 | `cn-wlcb` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCompShareSoftwarePortResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| SoftwarePort | Array of Object | 软件端口映射列表 | — |

### SoftwarePort 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Software | String | 软件名称 |
| Port | Integer | 端口号 |

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
        resp = client.ucompshare().describe_comp_share_software_port({})
        for sp in resp.get("SoftwarePort", []):
            print(f"  {sp['Software']}: {sp['Port']}")
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

	req := client.NewDescribeCompShareSoftwarePortRequest()
	resp, err := client.DescribeCompShareSoftwarePort(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, sp := range resp.SoftwarePort {
		fmt.Printf("  %s: %d\n", *sp.Software, *sp.Port)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeCompShareSoftwarePortResponse",
  "RetCode": 0,
  "SoftwarePort": [
    {"Software": "JupyterLab", "Port": 8888},
    {"Software": "SSH", "Port": 22},
    {"Software": "FileBrowser", "Port": 443}
  ]
}
```
