# UpdateCompShareStopScheduler — 设置/更新定时关机

## 接口说明

为算力共享实例设置或更新定时关机时间。到达指定时间后实例将自动关机。

### 使用限制

- 定时关机时间必须晚于当前时间至少 5 分钟。
- 抢占式实例不支持定时关机。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `UpdateCompShareStopScheduler` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| Zone | String | 是 | 可用区 | `cn-wlcb-01` |
| ProjectId | String | 是 | 项目 ID。获取方式见下方说明 | `org-xxx` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |
| SchedulerStopTime | Integer | 是 | 定时关机时间（Unix 时间戳），需 >= 当前时间 + 300 秒 | `1712649600` |

> **如何获取 ProjectId**：向同一网关（`api.compshare.cn`）发送 `GetProjectList` 请求即可获取，示例如下。

<details>
<summary>Python 获取 ProjectId</summary>

```python
resp = client.invoke("GetProjectList")
project_id = resp["ProjectSet"][0]["ProjectId"]  # 例如 "org-cwy2qk"
```
</details>

<details>
<summary>Go 获取 ProjectId</summary>

```go
// 使用与业务接口相同的 client（同一 api.compshare.cn 网关）
type GetProjectListReq struct{ request.CommonBase }
type Project struct {
    ProjectId   string `json:"ProjectId"`
    ProjectName string `json:"ProjectName"`
    IsDefault   bool   `json:"IsDefault"`
}
type GetProjectListResp struct {
    response.CommonBase
    ProjectSet []Project `json:"ProjectSet"`
}

req := &GetProjectListReq{}
resp := &GetProjectListResp{}
err := client.InvokeAction("GetProjectList", req, resp)
// resp.ProjectSet[0].ProjectId 即为 ProjectId，例如 "org-cwy2qk"
```
</details>

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `UpdateCompShareStopSchedulerResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| UHostId | String | 实例 ID | `uhost-xxxx` |

---

## 请求示例

### Python（使用 UCloud SDK）

```python
import time
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
        stop_time = int(time.time()) + 3600  # 1小时后关机
        resp = client.ucompshare().update_comp_share_stop_scheduler({
            "ProjectId": "org-xxx",   # 项目 ID，获取方式见文档上方说明
            "Zone": "cn-wlcb-01",
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
            "SchedulerStopTime": stop_time,
        })
        print("定时关机设置成功:", resp.get("UHostId"))
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
	"time"

	"github.com/ucloud/ucloud-sdk-go/services/ucompshare"
	"github.com/ucloud/ucloud-sdk-go/ucloud"
	"github.com/ucloud/ucloud-sdk-go/ucloud/auth"
)

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.Zone = "cn-wlcb-01"
	cfg.ProjectId = "org-xxx" // 项目 ID，获取方式见文档上方说明
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucompshare.NewClient(&cfg, &credential)

	req := client.NewUpdateCompShareStopSchedulerRequest()
	req.UHostId = ucloud.String("uhost-xxxx") // 实例 ID，通过 DescribeCompShareInstance 获取
	req.SchedulerStopTime = ucloud.Int64(time.Now().Unix() + 3600)

	resp, err := client.UpdateCompShareStopScheduler(req)
	if err != nil {
		fmt.Printf("设置失败: %s\n", err)
		return
	}
	fmt.Printf("定时关机设置成功: %s\n", resp.UHostId)
}
```

---

## 响应示例

```json
{
  "Action": "UpdateCompShareStopSchedulerResponse",
  "RetCode": 0,
  "UHostId": "uhost-xxxx"
}
```
