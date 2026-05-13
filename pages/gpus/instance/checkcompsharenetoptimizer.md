# CheckCompShareNetOptimizer — 查询网络加速服务状态

## 接口说明

查询当前账户是否已开通网络加速服务（海外模型下载加速）。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `CheckCompShareNetOptimizer` |
| Region | String | 否 | 地域。不传则查询所有地域 | `cn-wlcb` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `CheckCompShareNetOptimizerResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Optimized | Boolean | 是否已开通加速 | `true` |
| Info | Array of Object | 各地域的加速状态 | — |

### Info 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Region | String | 地域 |
| Optimized | Boolean | 该地域是否已开通加速 |

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
        resp = client.ucompshare().check_comp_share_net_optimizer({})
        print("加速状态:", resp.get("Optimized"))
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

	req := client.NewCheckCompShareNetOptimizerRequest()
	resp, err := client.CheckCompShareNetOptimizer(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("加速状态: %v\n", resp.Optimized)
}
```

---

## 响应示例

```json
{
  "Action": "CheckCompShareNetOptimizerResponse",
  "RetCode": 0,
  "Optimized": true,
  "Info": [
    {"Region": "cn-wlcb", "Optimized": true}
  ]
}
```
