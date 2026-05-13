# CheckCompShareResourceCapacity — 检查指定规格的资源可用性

## 接口说明

检查指定 GPU 类型、CPU 平台、镜像和磁盘配置下，各种 GPU/CPU/Memory 组合是否有足够的资源可创建实例。该接口会模拟真实的调度流程，返回每种规格组合的资源可用状态。

建议在调用 [CreateCompShareInstance](../instance/CreateCompShareInstance.md) 之前先调用此接口进行资源预检。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `CheckCompShareResourceCapacity` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| GpuType | String | 是 | GPU 类型 | `4090` |
| MachineType | String | 是 | 机型，固定 `G` | `G` |
| MinimalCpuPlatform | String | 是 | CPU 平台。`Intel/Auto`、`Amd/Auto` 或 `Auto` | `Auto` |
| CompShareImageId | String | 是 | 镜像 ID | `compshareImage-xxxx` |
| ChargeType | String | 是 | 计费模式。`Month`、`Day`、`Dynamic`、`Postpay`、`Spot` | `Month` |
| Disks.N.IsBoot | Boolean | 是 | 是否为系统盘 | `true` |
| Disks.N.Type | String | 是 | 磁盘类型 | `CLOUD_SSD` |
| Disks.N.Size | Integer | 是 | 磁盘大小（GB） | `60` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `CheckCompShareResourceCapacityResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Specs | Array of Object | 各规格组合的资源可用状态 | — |

### Specs 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Gpu | Integer | GPU 卡数 |
| Cpu | Integer | CPU 核数 |
| Mem | Integer | 内存大小（GB） |
| ResourceEnough | Boolean | 资源是否充足 |

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
        resp = client.ucompshare().invoke("CheckCompShareResourceCapacity", {
            "Region": "cn-wlcb",
            "Zone": "cn-wlcb-01",
            "GpuType": "4090",
            "MachineType": "G",
            "MinimalCpuPlatform": "Auto",
            "CompShareImageId": "compshareImage-xxxx",  # 镜像 ID，通过 DescribeCompShareImages 获取
            "ChargeType": "Dynamic",
            "Disks": [{"IsBoot": "true", "Type": "CLOUD_SSD", "Size": 60}],
        })
        for spec in resp.get("Specs", []):
            status = "可用" if spec["ResourceEnough"] else "不足"
            print(f"  GPU:{spec['Gpu']} CPU:{spec['Cpu']} Mem:{spec['Mem']}GB - {status}")
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

type DiskParam struct {
	IsBoot string // "true" = 系统盘, "false" = 数据盘
	Type   string // 磁盘类型: CLOUD_SSD / CLOUD_RSSD 等
	Size   *int   // 磁盘大小 (GB)
}

type CheckCompShareResourceCapacityRequest struct {
	request.CommonBase
	GpuType            *string
	MachineType        *string
	MinimalCpuPlatform *string
	CompShareImageId   *string
	ChargeType         *string
	Disks              []DiskParam
}

type ResourceSpec struct {
	Gpu            int  `json:"Gpu"`
	Cpu            int  `json:"Cpu"`
	Mem            int  `json:"Mem"` // 单位 GB
	ResourceEnough bool `json:"ResourceEnough"`
}

type CheckCompShareResourceCapacityResponse struct {
	response.CommonBase
	Specs []ResourceSpec `json:"Specs"`
}

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucloud.NewClient(&cfg, &credential)

	req := &CheckCompShareResourceCapacityRequest{
		GpuType:            ucloud.String("4090"),
		MachineType:        ucloud.String("G"),
		MinimalCpuPlatform: ucloud.String("Auto"),
		CompShareImageId:   ucloud.String("compshareImage-xxxx"), // 替换为真实镜像 ID，通过 DescribeCompShareImages 获取
		ChargeType:         ucloud.String("Dynamic"),
		Disks:              []DiskParam{{IsBoot: "true", Type: "CLOUD_SSD", Size: ucloud.Int(60)}},
	}
	req.SetRegion("cn-wlcb")
	req.SetZone("cn-wlcb-01")
	resp := &CheckCompShareResourceCapacityResponse{}

	if err := client.InvokeAction("CheckCompShareResourceCapacity", req, resp); err != nil {
		fmt.Printf("调用失败: RetCode=%d Msg=%s err=%v\n", resp.RetCode, resp.Message, err)
		return
	}
	for _, spec := range resp.Specs {
		status := "缺货"
		if spec.ResourceEnough {
			status = "有货"
		}
		fmt.Printf("  GPU:%d CPU:%d Mem:%dGB - %s\n", spec.Gpu, spec.Cpu, spec.Mem, status)
	}
}
```

---

## 响应示例

```json
{
  "Action": "CheckCompShareResourceCapacityResponse",
  "RetCode": 0,
  "Specs": [
    {"Gpu": 1, "Cpu": 16, "Mem": 32, "ResourceEnough": true},
    {"Gpu": 1, "Cpu": 16, "Mem": 64, "ResourceEnough": true},
    {"Gpu": 2, "Cpu": 32, "Mem": 128, "ResourceEnough": false}
  ]
}
```
