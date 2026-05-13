# GetCompShareInstanceMonitor — 获取实例监控数据

## 接口说明

获取算力共享实例的监控数据，包括 CPU 使用率、内存使用率、GPU 使用率和显存使用率等指标。

### 使用限制

- 支持批量查询多个实例，但查询多个实例时仅返回最近 60 秒的数据。
- 查询单个实例时可自定义时间范围（`StartTime` / `EndTime`）。
- 并发查询上限为 10 个实例。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetCompShareInstanceMonitor` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| UHostIds.N | String | 是 | 实例 ID 列表 | `uhost-xxxx` |
| StartTime | Integer | 否 | 查询起始时间（Unix 时间戳）。仅查询单个实例时有效，不传则默认最近 60 秒 | `1712563200` |
| EndTime | Integer | 否 | 查询结束时间（Unix 时间戳）。仅查询单个实例时有效，不传则默认当前时间 | `1712566800` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetCompShareInstanceMonitorResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Data | Object | 监控数据 | — |

### Data 结构

| 名称 | 类型 | 描述 |
|------|------|------|
| List | Array of Object | 实例监控数据列表 |

### List 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| UHostId | String | 实例 ID |
| Metrics | Array of Object | 监控指标列表 |

### Metrics 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| MetricKey | String | 指标名称，详见下方「指标列表」 |
| Tags | Object | 标签信息，包含 `uuid`、`disk`、`mount`、`gpu_bus_id` 数组 |
| Results | Array of Object | 指标数据 |

### Results 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| ResourceId | String | 资源短 ID |
| LongResourceId | String | 资源长 ID |
| TagMap | Object | 标签键值对映射 |
| Values | Array of Object | 时间序列数据点 |

### Values 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Timestamp | Integer | 时间戳 |
| Value | Float | 指标值 |

### 指标列表

**基础指标**（所有查询均返回）：

| MetricKey | 说明 | 单位 |
|-----------|------|------|
| `uhost_cpu_used` | CPU 使用率 | % |
| `cloudwatch_memory_usage` | 内存使用率 | % |
| `cloudwatch_sys_disk_used_per` | 系统盘使用率 | % |
| `cloudwatch_data_disk_used_per` | 数据盘使用率 | % |
| `cloudwatch_gpu_memory_usage` | GPU 显存使用率 | % |
| `cloudwatch_gpu_util` | GPU 使用率 | % |

**扩展指标**（仅查询单个实例且指定时间范围时返回）：

| MetricKey | 说明 | 单位 |
|-----------|------|------|
| `uhost_net_in_flow` | 网卡入带宽 | bps |
| `uhost_net_out_flow` | 网卡出带宽 | bps |
| `uhost_disk_read` | 磁盘读吞吐 | Bps |
| `uhost_disk_write` | 磁盘写吞吐 | Bps |

> **注意**：查询多个实例时（`UHostIds` 数量 > 1），系统强制查询最近 60 秒且仅返回基础指标集；查询单个实例且指定 `StartTime`/`EndTime` 时，返回基础 + 扩展全部指标。

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
        resp = client.ucompshare().get_comp_share_instance_monitor({
            "UHostIds": ["uhost-xxxx"],
        })
        for inst in resp.get("Data", {}).get("List", []):
            print(f"实例 {inst['UHostId']}:")
            for metric in inst.get("Metrics", []):
                print(f"  {metric['MetricKey']}: {metric.get('Results', [])}")
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

	req := client.NewGetCompShareInstanceMonitorRequest()
	req.UHostIds = []string{"uhost-xxxx"}

	resp, err := client.GetCompShareInstanceMonitor(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("监控数据: %+v\n", resp.Data)
}
```

---

## 响应示例

```json
{
  "Action": "GetCompShareInstanceMonitorResponse",
  "RetCode": 0,
  "Data": {
    "List": [
      {
        "UHostId": "uhost-xxxx",
        "Metrics": [
          {
            "MetricKey": "uhost_cpu_used",
            "Tags": {"uuid": ["uhost-xxxx"]},
            "Results": [
              {
                "ResourceId": "uhost-xxxx",
                "LongResourceId": "uhost-xxxx-long",
                "TagMap": {},
                "Values": [
                  {"Timestamp": 1712563200, "Value": 35.2},
                  {"Timestamp": 1712563260, "Value": 42.1}
                ]
              }
            ]
          },
          {
            "MetricKey": "cloudwatch_gpu_util",
            "Tags": {"gpu_bus_id": ["00000000:00:07.0"]},
            "Results": [
              {
                "ResourceId": "uhost-xxxx",
                "LongResourceId": "uhost-xxxx-long",
                "TagMap": {"gpu_bus_id": "00000000:00:07.0"},
                "Values": [
                  {"Timestamp": 1712563200, "Value": 78.5},
                  {"Timestamp": 1712563260, "Value": 82.3}
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```
