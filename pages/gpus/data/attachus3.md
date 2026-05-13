# AttachUS3 — 挂载 US3 对象存储到实例

## 接口说明

将 US3 对象存储桶挂载到算力共享实例，实例内可直接访问存储中的文件。

### 使用限制

- 调用前需在控制台 US3 模块中开通对应地域的存储桶，否则接口会因获取不到 bucket 返回错误。
- 实例需处于 `Running` 状态。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `AttachUS3` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `AttachUS3` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |

---

## 请求示例

### Python（使用 UCloud SDK）

安装 SDK：

```bash
pip install --upgrade ucloud-sdk-python3
```

示例代码：

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
        resp = client.ucompshare().invoke("AttachUS3", {
            "Region": "cn-wlcb",
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
        })
        print("挂载成功")
    except exc.UCloudException as e:
        print(e)


if __name__ == "__main__":
    main()
```

### Go（使用 UCloud SDK）

安装依赖：

```bash
go get github.com/ucloud/ucloud-sdk-go
```

示例代码：

```go
package main

import (
	"fmt"

	"github.com/ucloud/ucloud-sdk-go/ucloud"
	"github.com/ucloud/ucloud-sdk-go/ucloud/auth"
	"github.com/ucloud/ucloud-sdk-go/ucloud/request"
	"github.com/ucloud/ucloud-sdk-go/ucloud/response"
)

type AttachUS3Request struct {
	request.CommonBase
	UHostId *string
}

type AttachUS3Response struct {
	response.CommonBase
}

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucloud.NewClient(&cfg, &credential)

	req := &AttachUS3Request{
		UHostId: ucloud.String("uhost-xxxx"), // 实例 ID，通过 DescribeCompShareInstance 获取
	}
	req.SetRegion("cn-wlcb")
	req.SetZone("cn-wlcb-01")
	resp := &AttachUS3Response{}

	if err := client.InvokeAction("AttachUS3", req, resp); err != nil {
		fmt.Printf("调用失败: RetCode=%d Msg=%s err=%v\n", resp.RetCode, resp.Message, err)
		return
	}
	fmt.Println("挂载成功")
}
```

---

## 响应示例

```json
{
  "Action": "AttachUS3",
  "RetCode": 0
}
```
