# ResizeCompShareInstance — 升降配实例

## 接口说明

调整算力共享实例的 CPU、内存、GPU 配置，或扩容指定磁盘。调整完成后实例保持 `Stopped` 状态，需主动调用 `StartCompShareInstance` 启动。

### 使用限制

- 仅 `Stopped`（已关机）状态的实例可以升降配。
- **计算升配和磁盘扩容不能同时进行**。单次请求只能二选一：
  - 调整 CPU/内存/GPU：传 `CPU`、`Memory`、`GPU` 参数
  - 扩容磁盘：传 `DiskId` + `DiskSpace` 参数
- 调整 CPU/内存/GPU 时，新规格需符合当前 GpuType 的合法组合，可通过 `DescribeAvailableCompShareInstanceTypes` 查询。
- 同一实例的操作存在并发锁（10 分钟 TTL），重复操作会返回 `InstanceOperationInProgress` 错误。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `ResizeCompShareInstance` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |

### 计算升降配参数（与磁盘扩容二选一）

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Cpu | Integer | 条件必填 | 目标 CPU 核数 | `32` |
| Memory | Integer | 条件必填 | 目标内存大小，单位 MB | `131072` |
| Gpu | Integer | 条件必填 | 目标 GPU 卡数 | `2` |
| WithoutGpu | Boolean | 否 | 是否切换为无卡模式，默认 `false` | `false` |

### 磁盘扩容参数（与计算升降配二选一）

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| DiskId | String | 条件必填 | 要扩容的磁盘 ID | `udisk-xxxx` |
| DiskSpace | Integer | 条件必填 | 目标磁盘大小，单位 GB。只能扩容，不能缩容 | `500` |

### 其他参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| CouponId | String | 否 | 代金券 ID | `coupon-xxx` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `ResizeCompShareInstanceResponse` |
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
        # 示例 1：调整 CPU/内存/GPU
        resp = client.ucompshare().resize_comp_share_instance({
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "Cpu": 32,
            "Memory": 128 * 1024,  # 128GB
            "Gpu": 2,
        })
        print("升配成功:", resp.get("UHostId"))

        # 示例 2：扩容磁盘
        resp = client.ucompshare().resize_comp_share_instance({
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "DiskId": "udisk-xxxx",  # 云盘 ID
            "DiskSpace": 500,
        })
        print("磁盘扩容成功:", resp.get("UHostId"))
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
	cfg.Zone = "cn-wlcb-01"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucompshare.NewClient(&cfg, &credential)

	// 调整 CPU/内存/GPU
	req := client.NewResizeCompShareInstanceRequest()
	req.UHostId = ucloud.String("uhost-xxxx") // 实例 ID，通过 DescribeCompShareInstance 获取
	req.Cpu = ucloud.Int(32)
	req.Memory = ucloud.Int(128 * 1024) // 128GB
	req.Gpu = ucloud.Int(2)

	resp, err := client.ResizeCompShareInstance(req)
	if err != nil {
		fmt.Printf("升配失败: %s\n", err)
		return
	}
	fmt.Printf("升配成功: %s\n", resp.UHostId)
}
```

---

## 响应示例

```json
{
  "Action": "ResizeCompShareInstanceResponse",
  "RetCode": 0,
  "UHostId": "uhost-xxxx"
}
```
