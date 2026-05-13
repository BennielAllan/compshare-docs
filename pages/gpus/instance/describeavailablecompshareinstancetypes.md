# DescribeAvailableCompShareInstanceTypes — 获取可用机型列表

## 接口说明

获取指定地域下可售/售罄的所有 GPU 机型信息，包括每种机型的 CPU/内存/GPU 合法组合、磁盘类型、CPU 平台等。创建实例前可调用此接口确认可用配置。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeAvailableCompShareInstanceTypes` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 否 | 可用区 | `cn-wlcb-01` |
| MachineTypes.N | String | 否 | 按机型名称筛选 | `4090` |
| InstanceType | String | 否 | 实例类型。枚举值：`uhost`（普通实例，默认）、`spot`（抢占式实例） | `uhost` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeAvailableCompShareInstanceTypesResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| AvailableInstanceTypes | Array of Object | 可用机型列表 | — |

### AvailableInstanceTypes 元素字段

| 名称 | 类型 | 描述 |
|------|------|------|
| Name | String | 机型名称（即 GpuType），如 `4090`、`A800` |
| Zone | String | 可用区 |
| Status | String | 售卖状态。枚举值：`Normal`（可售）、`SoldOut`（售罄） |
| Description | String | 机型描述 |
| MachineSizes | Array of [MachineSize](#machinesize-结构) | GPU 数量与对应的 CPU/内存组合 |
| CpuPlatforms | [CpuPlatforms](#cpuplatforms-结构) | 支持的 CPU 平台，按厂商分组 |
| Disks | Array of [AvailableDisk](#availabledisk-结构) | 支持的磁盘类型及约束 |
| GraphicsMemory | [GraphicsMemory](#graphicsmemory-结构) | 显存信息 |
| Performance | Object | 性能评级，含 `Value`（分值）和 `Rate`（星级） |
| MachineClass | String | 机器类别，当前为 `GPU` |
| ParentType | String | 父机型，当前为 `G` |

### CpuPlatforms 结构

按 CPU 厂商分组的平台列表，**不是数组，而是对象**。

| 名称 | 类型 | 描述 |
|------|------|------|
| Intel | Array of String | Intel 平台列表，如 `["Intel/IceLake"]` |
| Amd | Array of String | AMD 平台列表，如 `["Amd/EPYC3", "Amd/EPYC2"]` |

> 某些机型可能只有 Intel 或只有 Amd 字段。

### GraphicsMemory 结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Value | Integer | 显存大小（GB） |
| Rate | Integer | 显存评级 |

### MachineSize 结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Gpu | Integer | GPU 卡数 |
| Collection | Array of Object | 该卡数下可选的 CPU/内存组合 |

Collection 元素：

| 名称 | 类型 | 描述 |
|------|------|------|
| Cpu | Integer | CPU 核数 |
| Memory | Array of Integer | 可选的内存值列表，**单位为 GB**（注意：`CreateCompShareInstance` 等接口的 Memory 参数使用 MB） |
| MinimalCpuPlatform | Array of String | 该组合支持的 CPU 平台列表 |

### AvailableDisk 结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Name | String | 磁盘组名称，如 `cloudDisk` |
| BootDisk | Array of DiskType | 支持的系统盘类型 |
| DataDisk | Array of DiskType | 支持的数据盘类型 |

DiskType 元素：

| 名称 | 类型 | 描述 |
|------|------|------|
| Name | String | 磁盘类型，如 `CLOUD_SSD`、`CLOUD_RSSD` |
| InstantResize | Boolean | 是否支持在线扩容 |
| MinimalSize | Integer | 最小容量（GB），系统盘可能无此字段 |
| MaximalSize | Integer | 最大容量（GB） |
| Features | Array of String | 支持的特性，如 `SNAPSHOT`、`DATAARK` |

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
        resp = client.ucompshare().describe_available_comp_share_instance_types({
            "Zone": "cn-wlcb-01",
        })
        for t in resp.get("AvailableInstanceTypes", []):
            print(f"  {t['Name']} - {t['Status']}")
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

	req := client.NewDescribeAvailableCompShareInstanceTypesRequest()
	resp, err := client.DescribeAvailableCompShareInstanceTypes(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, t := range resp.AvailableInstanceTypes {
		fmt.Printf("  %s - %s\n", t.Name, t.Status)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeAvailableCompShareInstanceTypesResponse",
  "RetCode": 0,
  "AvailableInstanceTypes": [
    {
      "Name": "4090",
      "Zone": "cn-wlcb-01",
      "Status": "Normal",
      "Description": "RTX40系",
      "CpuPlatforms": {
        "Intel": ["Intel/IceLake"],
        "Amd": ["Amd/EPYC3", "Amd/EPYC2"]
      },
      "Disks": [
        {
          "Name": "cloudDisk",
          "BootDisk": [
            {"Name": "CLOUD_SSD", "InstantResize": true, "MaximalSize": 1000, "Features": ["SNAPSHOT"]}
          ],
          "DataDisk": [
            {"Name": "CLOUD_SSD", "MinimalSize": 10, "MaximalSize": 1500, "Features": ["SNAPSHOT"]}
          ]
        }
      ],
      "MachineSizes": [
        {
          "Gpu": 1,
          "Collection": [
            {"Cpu": 16, "Memory": [64, 94], "MinimalCpuPlatform": ["Amd/Epyc2", "Amd/Epyc3", "Intel/IceLake"]}
          ]
        },
        {
          "Gpu": 2,
          "Collection": [
            {"Cpu": 32, "Memory": [128, 192], "MinimalCpuPlatform": ["Amd/Epyc2", "Amd/Epyc3", "Intel/IceLake"]}
          ]
        }
      ],
      "GraphicsMemory": {"Value": 24, "Rate": 3},
      "Performance": {"Value": 83, "Rate": 3},
      "MachineClass": "GPU",
      "ParentType": "G"
    }
  ]
}
```

> **单位注意**：`Memory` 字段的值单位为 **GB**。创建实例（`CreateCompShareInstance`）和价格查询（`GetCompShareInstancePrice`）等接口的 Memory 参数单位为 **MB**，需要进行转换（如 64 GB = 65536 MB）。
