# AttachCompshareDisk — 挂载已有云盘

## 接口说明

将一块已有的云盘挂载到指定的算力共享实例。

### 使用限制

- 云盘必须处于未挂载状态。
- `CLOUD_RSSD` 磁盘类型仅 A800 机型支持挂载。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `AttachCompshareDisk` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 要挂载到的实例 ID | `uhost-xxxx` |
| UDiskId | String | 是 | 云盘 ID | `udisk-xxxx` |
| DataDiskType | String | 否 | 数据盘类型（透传到底层 UDisk 挂载接口），留空由底层自动判定 | `SSDDataDisk` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `AttachCompshareDiskResponse` |
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
        resp = client.ucompshare().invoke("AttachCompshareDisk", {
            "Region": "cn-wlcb",
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "UDiskId": "udisk-xxxx",  # 云盘 ID，通过 DescribeCompShareInstance 的 DiskSet 获取
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

type AttachCompshareDiskRequest struct {
	request.CommonBase
	UHostId      *string
	UDiskId      *string
	DataDiskType *string `required:"false"`
}

type AttachCompshareDiskResponse struct {
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

	req := &AttachCompshareDiskRequest{
		UHostId: ucloud.String("uhost-xxxx"), // 实例 ID，通过 DescribeCompShareInstance 获取
		UDiskId: ucloud.String("udisk-xxxx"), // 云盘 ID，通过 DescribeCompShareInstance 的 DiskSet 获取
	}
	req.SetRegion("cn-wlcb")
	req.SetZone("cn-wlcb-01")
	resp := &AttachCompshareDiskResponse{}

	if err := client.InvokeAction("AttachCompshareDisk", req, resp); err != nil {
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
  "Action": "AttachCompshareDiskResponse",
  "RetCode": 0
}
```
