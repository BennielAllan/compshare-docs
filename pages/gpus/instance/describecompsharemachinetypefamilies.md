# DescribeCompShareMachineTypeFamilies — 获取机型族列表

## 接口说明

获取所有 GPU 机型族的完整信息，包括规格配置、磁盘类型、CPU 平台等。返回按可用区分组的机型数据。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeCompShareMachineTypeFamilies` |
| Region | String | 是 | 地域 | `cn-wlcb` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCompShareMachineTypeFamiliesResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| MachineTypes | Array of Object | 机型族列表 | — |
| MachineTypesMap | Object | 按可用区 ID 分组的机型族映射 | — |

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
        resp = client.ucompshare().describe_comp_share_machine_type_families({})
        for mt in resp.get("MachineTypes", []):
            print(f"  {mt['Name']} - {mt.get('Description', '')}")
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
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucompshare.NewClient(&cfg, &credential)

	req := client.NewDescribeCompShareMachineTypeFamiliesRequest()
	resp, err := client.DescribeCompShareMachineTypeFamilies(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, mt := range resp.MachineTypes {
		fmt.Printf("  %s\n", mt.Name)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeCompShareMachineTypeFamiliesResponse",
  "RetCode": 0,
  "MachineTypes": [
    {"Name": "4090", "Description": "NVIDIA GeForce RTX 4090"},
    {"Name": "A100", "Description": "NVIDIA A100 80GB"}
  ]
}
```
