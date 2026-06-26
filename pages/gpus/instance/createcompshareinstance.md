# CreateCompShareInstance — 创建GPU实例

## 接口说明

创建一台优云智算 GPU 实例。调用成功后返回实例短 ID（`UHostIds`），可通过 `DescribeCompShareInstance` 查询实例状态。

### 使用限制

- 创建前建议调用 `CheckCompShareResourceCapacity` 确认目标规格在当前可用区是否有足够资源。该接口会针对指定的 GpuType、CPU 平台、镜像和磁盘配置模拟调度，返回每种 GPU/CPU/Memory 组合的可用状态。
- 实例创建数量受账户等级配额限制，详见下方「配额说明」。
- 账户存在未支付订单时，无法创建新实例。
- `CLOUD_RSSD` 磁盘类型仅 A800 机型支持。
- 抢占式实例（`Spot`）不支持以下 GPU 类型：4090_48G、A800、H20、P40、2080。

### 配额说明

| 账户等级 | 最大实例数 |
|---------|-----------|
| 未充值（Level 0） | 1 |
| Level 1（已充值） | 5 |
| Level 2 | 20 |
| Level 3 | 50 |
| Level 4 | 100 |

白名单用户配额独立配置，不受上述限制。

---

## 请求参数

### 公共参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称，固定值 | `CreateCompShareInstance` |
| Region | String | 是 | 地域。通过 `DescribeCompShareSupportZone` 获取 | `cn-wlcb` |
| Zone | String | 是 | 可用区。通过 `DescribeCompShareSupportZone` 获取 | `cn-wlcb-01` |

### 实例规格参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| GpuType | String | 是 | GPU 卡型号。枚举值见下方「GPU 类型列表」 | `4090` |
| GPU | Integer | 是 | GPU 卡数量。取值范围 1\~8 或 1\~10，因卡型号而异，详见「GPU 类型列表」 | `1` |
| CPU | Integer | 是 | 虚拟 CPU 核数。需与 GPU 类型和卡数匹配，可通过 `DescribeAvailableCompShareInstanceTypes` 查询合法组合 | `16` |
| Memory | Integer | 是 | 内存大小，单位 MB。必须为 1024 的整数倍，需与 GPU/CPU 匹配 | `65536` |
| MachineType | String | 否 | 机型，默认 `G`。当前仅支持 `G`（GPU 型） | `G` |
| MinimalCpuPlatform | String | 否 | CPU 平台。`Auto` 表示自动选择（优先 AMD，不足时回退 Intel）；也可指定 `Intel/Auto` 或 `Amd/Auto`。部分 GPU 型号仅支持 Intel 平台（H20、A800、A100、P40、4090_48G、3080Ti、2080Ti、2080、V100S） | `Auto` |

### 镜像与登录参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| CompShareImageId | String | 是 | 算力共享平台镜像 ID。包括系统镜像、自制镜像和社区镜像。镜像必须处于 Available 状态 | `compshare-image-xxx` |

### 磁盘参数

磁盘通过 `Disks` 数组传入，至少包含一块系统盘（`IsBoot=true`）。

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Disks.N.IsBoot | Boolean | 是 | 是否为系统盘。`true` 为系统盘，`false` 为数据盘 | `true` |
| Disks.N.Type | String | 是 | 磁盘类型。枚举值：`CLOUD_SSD`（SSD云盘）、`CLOUD_RSSD`（RSSD云盘，仅A800支持）、`CLOUD_NORMAL`（普通云盘）、`LOCAL_NORMAL`（普通本地盘）、`LOCAL_SSD`（SSD本地盘） | `CLOUD_SSD` |
| Disks.N.Size | Integer | 是 | 磁盘大小，单位 GB。系统盘免费额度为 200GB | `60` |

### 计费参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| ChargeType | String | 否 | 计费模式，默认 `Month`。枚举值：`Month`（按月）、`Day`（按天）、`Dynamic`（按时）、`Postpay`（后付费）、`Spot`（抢占式，实际以后付费运行，可能被回收） | `Month` |
| Quantity | Integer | 否 | 购买时长，默认 `1`。`Month` 时为月数，`Day` 时为天数。不支持传 `0`（购买到月末） | `1` |

### 其他参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Name | String | 否 | 实例名称，默认 `host`。最长 63 个字符，支持中文、英文、数字及 `_` `.` `,` `:` `-` | `my-gpu-instance` |
| Remark | String | 否 | 实例备注信息，可用于存储创建页面选择的驱动等自定义信息 | `driver:535.129.03` |
| SecurityGroupId | String | 否 | 防火墙 ID。不传则系统根据镜像端口自动创建防火墙 | `firewall-xxx` |
| MaxCount | Integer | 否 | 批量创建数量 | `1` |
| EnableUS3 | Boolean | 否 | 是否挂载 US3 对象存储（仅容器镜像生效） | `true` |

---

## GPU 类型列表

| GpuType | 显存 | 最大 GPU 数 | 最大 CPU | 最大内存（GB） | CPU 平台 | 支持抢占式 |
|---------|------|:-----------:|:--------:|:-------------:|----------|:----------:|
| `4090` | 24GB | 10 | 140 | 680 | Intel / AMD | 是 |
| `4090_48G` | 48GB | 8 | 124 | 940 | Intel / AMD | 否 |
| `5090` | — | 8 | 124 | 940 | Intel / AMD | 是 |
| `A100` | 80GB | 8 | 124 | 1024 | Intel | 是 |
| `A800` | 80GB | 8 | 124 | 1800 | Intel | 否 |
| `H20` | 96GB | 8 | 188 | 1800 | Intel | 否 |
| `3090` | 24GB | 8 | 124 | 450 | AMD | 是 |
| `3080Ti` | 12GB | 8 | 12 | 125 | Intel | 是 |
| `2080Ti` | 11GB | 8 | 48 | 192 | — | 是 |
| `2080` | 11GB | 8 | 92 | 334 | — | 否 |
| `P40` | 24GB | 8 | 48 | 502 | — | 否 |
| `V100S` | 32GB | 8 | 92 | 576 | — | 是 |

> CPU 与内存的合法组合需通过 `DescribeAvailableCompShareInstanceTypes` 查询，非任意搭配。

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `CreateCompShareInstanceResponse` |
| RetCode | Integer | 返回码。`0` 表示成功，非 `0` 为错误 | `0` |
| Message | String | 错误信息。成功时为空 | `""` |
| UHostIds | Array of String | 创建成功的实例短 ID 列表 | `["uhost-xxx"]` |
| Warning | Array of String | 警告信息列表（如有） | `[]` |

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
        resp = client.ucompshare().invoke("CreateCompShareInstance", {
            "Region": "cn-wlcb",
            "Zone": "cn-wlcb-01",
            "MachineType": "G",
            "CompShareImageId": "compshareImage-xxxx",  # 替换为实际的镜像 ID
            "GPU": 1,
            "GpuType": "4090",
            "CPU": 16,
            "Memory": 64 * 1024,  # 单位 MB，64 * 1024 = 64GB
            "ChargeType": "Dynamic",
            "Name": "my-instance",
            "Disks": [
                {
                    "IsBoot": "true",
                    "Size": 200,           # 系统盘大小，单位 GB
                    "Type": "CLOUD_SSD",
                }
            ],
        })
        print("实例创建成功，UHostIds:", resp.get("UHostIds"))
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
	Type   string // CLOUD_SSD / CLOUD_RSSD / CLOUD_NORMAL
	Size   *int   // 磁盘大小 (GB)
}

type CreateCompShareInstanceRequest struct {
	request.CommonBase
	MachineType      *string
	CompShareImageId *string
	GpuType          *string
	GPU              *int
	CPU              *int
	Memory           *int // 单位 MB
	ChargeType       *string `required:"false"`
	Name             *string `required:"false"`
	Quantity         *int    `required:"false"`
	Disks            []DiskParam
}

type CreateCompShareInstanceResponse struct {
	response.CommonBase
	UHostIds []string `json:"UHostIds"` // 创建成功的实例 ID 列表
}

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucloud.NewClient(&cfg, &credential)

	req := &CreateCompShareInstanceRequest{
		MachineType:      ucloud.String("G"),
		CompShareImageId: ucloud.String("compshareImage-xxxx"), // 替换为实际的镜像 ID
		GpuType:          ucloud.String("4090"),
		GPU:              ucloud.Int(1),
		CPU:              ucloud.Int(16),
		Memory:           ucloud.Int(64 * 1024), // 单位 MB，64 * 1024 = 64 GB
		ChargeType:       ucloud.String("Dynamic"),
		Name:             ucloud.String("my-instance"),
		Disks: []DiskParam{
			{IsBoot: "true", Type: "CLOUD_SSD", Size: ucloud.Int(200)},
		},
	}
	req.SetRegion("cn-wlcb")
	req.SetZone("cn-wlcb-01")
	resp := &CreateCompShareInstanceResponse{}

	if err := client.InvokeAction("CreateCompShareInstance", req, resp); err != nil {
		fmt.Printf("调用失败: RetCode=%d Msg=%s err=%v\n", resp.RetCode, resp.Message, err)
		return
	}
	fmt.Printf("实例创建成功，UHostIds: %v\n", resp.UHostIds)
}
```

---

## 响应示例

```json
{
  "Action": "CreateCompShareInstanceResponse",
  "RetCode": 0,
  "UHostIds": [
    "uhost-xxxx"
  ]
}
```
