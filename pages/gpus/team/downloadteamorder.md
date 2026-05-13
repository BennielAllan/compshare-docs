# DownloadTeamOrder — 导出团队账单

## 接口说明

导出指定团队的订单账单，返回 CSV 文件流。此接口为文件下载接口，响应内容为 CSV 格式数据，非标准 JSON 响应。

### 使用限制

- 账户需完成实名认证。
- 需要团队管理员权限。
- VirtualCompanyId 传 `0` 表示查询所有成员的订单。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DownloadTeamOrder` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `100001` |
| VirtualCompanyId | Uint32 | 否 | 成员虚拟账户 ID，`0` 查询所有成员 | `0` |
| BeginTime | Int64 | 否 | 起始时间（Unix 时间戳） | `1700000000` |
| EndTime | Int64 | 否 | 结束时间（Unix 时间戳） | `1700086400` |
| OrderStates | Array<String> | 否 | 订单状态筛选 | `["Paid","Unpaid"]` |

---

## 响应参数

此接口返回 CSV 文件流，非 JSON 格式。响应 Header 中包含：

| Header | 描述 | 示例值 |
|--------|------|--------|
| Content-Type | 内容类型 | `text/csv` |
| Content-Disposition | 文件下载信息 | `attachment; filename=team_order.csv` |

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
        resp = client.ucompshare().download_team_order({
            "TeamId": 100001,
            "VirtualCompanyId": 0,
            "BeginTime": 1700000000,
            "EndTime": 1700086400,
        })
        # 响应为 CSV 文件流，保存到本地
        with open("team_order.csv", "wb") as f:
            f.write(resp.content)
        print("导出成功: team_order.csv")
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
	"os"

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

	req := client.NewDownloadTeamOrderRequest()
	req.TeamId = ucloud.Uint32(100001)
	req.VirtualCompanyId = ucloud.Uint32(0)
	req.BeginTime = ucloud.Int64(1700000000)
	req.EndTime = ucloud.Int64(1700086400)

	resp, err := client.DownloadTeamOrder(req)
	if err != nil {
		fmt.Printf("导出失败: %s\n", err)
		return
	}

	// 响应为 CSV 文件流，保存到本地
	err = os.WriteFile("team_order.csv", resp.Data, 0644)
	if err != nil {
		fmt.Printf("写入文件失败: %s\n", err)
		return
	}
	fmt.Println("导出成功: team_order.csv")
}
```

---

## 响应示例

此接口返回 CSV 文件流，示例内容如下：

```csv
订单号,订单类型,订单状态,计费类型,金额,实付金额,资源ID,创建时间
order-20231115001,Buy,Paid,Dynamic,10.00,8.50,uhost-xxx,2023-11-15 00:00:00
order-20231115002,Buy,Unpaid,Month,50.00,50.00,uhost-yyy,2023-11-15 01:00:00
```
