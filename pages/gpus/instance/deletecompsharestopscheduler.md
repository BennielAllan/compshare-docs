# DeleteCompShareStopScheduler — 取消定时关机

## 接口说明

取消算力共享实例已设置的定时关机任务。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DeleteCompShareStopScheduler` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| ProjectId | String | 是 | 项目 ID。获取方式见下方说明 | `org-xxx` |
| UHostId | String | 是 | 实例 ID | `uhost-xxxx` |

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
| Action | String | 响应名称 | `DeleteCompShareStopSchedulerResponse` |
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
        resp = client.ucompshare().invoke("DeleteCompShareStopScheduler", {
            "Region": "cn-wlcb",
            "ProjectId": "org-xxx",   # 项目 ID，获取方式见文档上方说明
            "UHostId": "uhost-xxxx",  # 实例 ID，通过 DescribeCompShareInstance 获取
        })
        print("定时关机已取消:", resp.get("UHostId"))
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

type DeleteCompShareStopSchedulerRequest struct {
	request.CommonBase
	UHostId *string
}

type DeleteCompShareStopSchedulerResponse struct {
	response.CommonBase
	UHostId string `json:"UHostId"`
}

func main() {
	cfg := ucloud.NewConfig()
	cfg.Region = "cn-wlcb"
	cfg.BaseUrl = "https://api.compshare.cn"

	credential := auth.NewCredential()
	credential.PublicKey = "my_public_key"   // 替换为你的公钥，从 https://console.compshare.cn/uaccount/api_manage 获取
	credential.PrivateKey = "my_private_key" // 替换为你的私钥
	client := ucloud.NewClient(&cfg, &credential)

	req := &DeleteCompShareStopSchedulerRequest{
		UHostId: ucloud.String("uhost-xxxx"), // 实例 ID，通过 DescribeCompShareInstance 获取
	}
	req.SetRegion("cn-wlcb")
	req.SetProjectId("org-xxx") // 项目 ID，获取方式见文档上方说明
	resp := &DeleteCompShareStopSchedulerResponse{}

	if err := client.InvokeAction("DeleteCompShareStopScheduler", req, resp); err != nil {
		fmt.Printf("调用失败: RetCode=%d Msg=%s err=%v\n", resp.RetCode, resp.Message, err)
		return
	}
	fmt.Printf("定时关机已取消: %s\n", resp.UHostId)
}
```

---

## 响应示例

```json
{
  "Action": "DeleteCompShareStopSchedulerResponse",
  "RetCode": 0,
  "UHostId": "uhost-xxxx"
}
```
