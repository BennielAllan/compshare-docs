# ModifyCompShareInstanceName — 修改实例名称

## 接口说明

修改算力共享实例的名称。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `ModifyCompShareInstanceName` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 否 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |
| Name | String | 是 | 新实例名称。最长 63 个字符，支持中文、英文、数字及 `_` `.` `,` `:` `-` | `my-new-name` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `ModifyCompShareInstanceNameResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| UHostId | String | 实例 ID | `uhost-xxxx` |

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
        resp = client.ucompshare().modify_comp_share_instance_name({
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "Name": "my-new-name",
        })
        print("修改成功:", resp.get("UHostId"))
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

	req := client.NewModifyCompShareInstanceNameRequest()
	req.UHostId = ucloud.String("uhost-xxxx") // 实例 ID，通过 DescribeCompShareInstance 获取
	req.Name = ucloud.String("my-new-name")

	resp, err := client.ModifyCompShareInstanceName(req)
	if err != nil {
		fmt.Printf("修改失败: %s\n", err)
		return
	}
	fmt.Printf("修改成功: %s\n", resp.UHostId)
}
```

---

## 响应示例

```json
{
  "Action": "ModifyCompShareInstanceNameResponse",
  "RetCode": 0,
  "UHostId": "uhost-xxxx"
}
```
