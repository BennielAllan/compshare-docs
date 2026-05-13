# ListCompShareTeamOperateLog — 查询团队操作日志

## 接口说明

查询指定团队的操作日志列表，支持按操作类型、状态、时间范围筛选。

### 使用限制

- 账户需完成实名认证。
- 需要团队管理员权限。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `ListCompShareTeamOperateLog` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| TeamId | Uint32 | 是 | 团队 ID | `100001` |
| Limit | Int64 | 否 | 每页数量，默认 25，最大 100 | `25` |
| Offset | Int64 | 否 | 偏移量，默认 0 | `0` |
| BeginTime | Int64 | 否 | 起始时间（Unix 时间戳） | `1700000000` |
| EndTime | Int64 | 否 | 结束时间（Unix 时间戳） | `1700086400` |
| OperateType | Array<String> | 否 | 操作类型筛选 | `["InviteMember","RemoveMember"]` |
| Status | Array<String> | 否 | 状态筛选 | `["Success","Failed"]` |
| OrderByASC | Boolean | 否 | 是否按时间正序排列，默认倒序 | `false` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `ListCompShareTeamOperateLogResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Logs | Array<Object> | 操作日志列表 | 见下表 |
| Total | Uint32 | 日志总数 | `50` |
| OperateTypeList | Map | 操作类型枚举映射 | `{"InviteMember":"邀请成员"}` |
| StatusList | Map | 状态枚举映射 | `{"Success":"成功"}` |

### Logs 元素

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Content | String | 操作内容描述 | `管理员邀请张三加入团队` |
| OperateType | String | 操作类型 | `InviteMember` |
| CreateTime | Integer | 创建时间（Unix 时间戳） | `1700000000` |
| Status | String | 操作状态 | `Success` |

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
        resp = client.ucompshare().list_comp_share_team_operate_log({
            "TeamId": 100001,
            "Limit": 25,
            "Offset": 0,
        })
        print(f"总数: {resp['Total']}")
        for log in resp["Logs"]:
            print(f"{log['CreateTime']} - {log['OperateType']}: {log['Content']}")
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

	req := client.NewListCompShareTeamOperateLogRequest()
	req.TeamId = ucloud.Uint32(100001)
	req.Limit = ucloud.Int64(25)
	req.Offset = ucloud.Int64(0)

	resp, err := client.ListCompShareTeamOperateLog(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("总数: %d\n", resp.Total)
	for _, log := range resp.Logs {
		fmt.Printf("%d - %s: %s\n", log.CreateTime, log.OperateType, log.Content)
	}
}
```

---

## 响应示例

```json
{
  "Action": "ListCompShareTeamOperateLogResponse",
  "RetCode": 0,
  "Total": 50,
  "Logs": [
    {
      "Content": "管理员邀请张三加入团队",
      "OperateType": "InviteMember",
      "CreateTime": 1700000000,
      "Status": "Success"
    }
  ],
  "OperateTypeList": {
    "InviteMember": "邀请成员",
    "RemoveMember": "移除成员"
  },
  "StatusList": {
    "Success": "成功",
    "Failed": "失败"
  }
}
```
