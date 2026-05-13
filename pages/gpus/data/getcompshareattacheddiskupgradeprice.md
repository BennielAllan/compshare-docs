# GetCompShareAttachedDiskUpgradePrice — 查询云盘扩容价格

## 接口说明

查询已挂载云盘扩容到目标大小的价格。返回结果中包含云盘和快照服务的价格明细。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `GetCompShareAttachedDiskUpgradePrice` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |
| DiskId | String | 是 | 云盘 ID | `udisk-xxxx` |
| DiskSpace | Integer | 是 | 目标磁盘大小，单位 GB | `200` |
| BackupMode | String | 否 | 备份模式。枚举值：`NONE`、`DATAARK`、`SNAPSHOT`。默认保持当前磁盘已启用的备份模式 | `NONE` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `GetCompShareAttachedDiskUpgradePriceResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Price | Float | 扩容差价（元） | `50.00` |
| OriginalPrice | Float | 折前原价差额（元） | `50.00` |
| ListPrice | Float | 目录价差额（元，无任何折扣） | `50.00` |
| PriceDetail | Object | 折后价格明细 | — |
| OriginalPriceDetail | Object | 折前原价明细（结构同 PriceDetail） | — |
| ListPriceDetail | Object | 目录价明细（结构同 PriceDetail） | — |

### PriceDetail 结构

| 名称 | 类型 | 描述 |
|------|------|------|
| UDisk | Float | 云盘扩容费用（元） |
| Snapshot | Float | 快照服务费用（元） |

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
        resp = client.ucompshare().invoke("GetCompShareAttachedDiskUpgradePrice", {
            "Region": "cn-wlcb",
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "DiskId": "udisk-xxxx",   # 云盘 ID
            "DiskSpace": 200,
        })
        print(f"扩容差价: {resp.get('Price')} 元")
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

type GetCompShareAttachedDiskUpgradePriceRequest struct {
	request.CommonBase
	UHostId   *string
	DiskId    *string
	DiskSpace *int // 目标大小 (GB)
}

type GetCompShareAttachedDiskUpgradePriceResponse struct {
	response.CommonBase
	Price         float64 `json:"Price"`         // 扩容差价 (元)
	OriginalPrice float64 `json:"OriginalPrice"` // 折前原价差额 (元)
}

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucloud.NewClient(&cfg, &credential)

	req := &GetCompShareAttachedDiskUpgradePriceRequest{
		UHostId:   ucloud.String("uhost-xxxx"), // 实例 ID，通过 DescribeCompShareInstance 获取
		DiskId:    ucloud.String("udisk-xxxx"), // 云盘 ID
		DiskSpace: ucloud.Int(200),
	}
	req.SetRegion("cn-wlcb")
	req.SetZone("cn-wlcb-01")
	resp := &GetCompShareAttachedDiskUpgradePriceResponse{}

	if err := client.InvokeAction("GetCompShareAttachedDiskUpgradePrice", req, resp); err != nil {
		fmt.Printf("调用失败: RetCode=%d Msg=%s err=%v\n", resp.RetCode, resp.Message, err)
		return
	}
	fmt.Printf("扩容差价: %.2f 元\n", resp.Price)
}
```

---

## 响应示例

```json
{
  "Action": "GetCompShareAttachedDiskUpgradePriceResponse",
  "RetCode": 0,
  "Price": 50.00,
  "OriginalPrice": 50.00,
  "PriceDetail": {
    "UDisk": 50.00,
    "Snapshot": 0.00
  },
  "OriginalPriceDetail": {
    "UDisk": 50.00,
    "Snapshot": 0.00
  }
}
```
