# CreateCompShareCustomImage — 创建自制镜像

## 接口说明

基于一台已有的算力共享实例制作自制镜像。制作过程中实例仍可正常使用，可通过 [GetCompShareImageCreateProgress](./GetCompShareImageCreateProgress.md) 查询进度。

### 使用限制

- 同一实例同一时间只能有一个镜像制作任务。
- 虚机镜像实例：`Running` 或 `Stopped` 状态均可制作。
- 容器镜像实例：仅 `Running` 状态可制作（`Stopped` 状态会返回错误）。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `CreateCompShareCustomImage` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 源实例 ID | `uhost-xxxx` |
| Name | String | 是 | 镜像名称 | `my-custom-env` |
| Description | String | 否 | 镜像描述 | `预装了PyTorch 2.1和CUDA 12.1` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `CreateCompShareCustomImageResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| CompShareImageId | String | 创建的镜像 ID | `compshareImage-xxxx` |

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
        resp = client.ucompshare().invoke("CreateCompShareCustomImage", {
            "Region": "cn-wlcb",
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "Name": "my-custom-env",
            "Description": "预装了PyTorch 2.1和CUDA 12.1",
        })
        print("镜像创建中，CompShareImageId:", resp.get("CompShareImageId"))
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

type CreateCompShareCustomImageRequest struct {
	request.CommonBase
	UHostId     *string
	Name        *string
	Description *string `required:"false"`
}

type CreateCompShareCustomImageResponse struct {
	response.CommonBase
	CompShareImageId string `json:"CompShareImageId"`
}

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucloud.NewClient(&cfg, &credential)

	req := &CreateCompShareCustomImageRequest{
		UHostId:     ucloud.String("uhost-xxxx"), // 实例 ID，通过 DescribeCompShareInstance 获取
		Name:        ucloud.String("my-custom-env"),
		Description: ucloud.String("预装了PyTorch 2.1和CUDA 12.1"),
	}
	req.SetRegion("cn-wlcb")
	req.SetZone("cn-wlcb-01")
	resp := &CreateCompShareCustomImageResponse{}

	if err := client.InvokeAction("CreateCompShareCustomImage", req, resp); err != nil {
		fmt.Printf("调用失败: RetCode=%d Msg=%s err=%v\n", resp.RetCode, resp.Message, err)
		return
	}
	fmt.Printf("镜像创建中，CompShareImageId: %s\n", resp.CompShareImageId)
}
```

---

## 响应示例

```json
{
  "Action": "CreateCompShareCustomImageResponse",
  "RetCode": 0,
  "CompShareImageId": "compshareImage-xxxx"
}
```
