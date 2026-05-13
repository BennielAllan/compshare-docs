# DescribeModelRepositoryModels — 查询模型仓库模型列表

## 接口说明

查询公共模型仓库中的模型列表，支持按名称和标签筛选。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeModelRepositoryModels` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| name | String | 否 | 按模型名称模糊搜索（不区分大小写） | `llama` |
| tags | String | 否 | 按标签筛选 | `LLM` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeModelRepositoryModelsResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| Models | Array of Object | 模型列表 | — |

### Models 元素结构

| 名称 | 类型 | 描述 |
|------|------|------|
| Name | String | 模型名称 |
| Path | String | 模型路径 |
| Tag | String | 标签（逗号分隔） |
| Size | String | 模型大小 |
| CreateTime | Integer | 创建时间（Unix 时间戳） |

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
        resp = client.ucompshare().describe_model_repository_models({
            "name": "llama",
        })
        for model in resp.get("Models", []):
            print(f"  {model['Name']} - {model['Size']} - {model['Tag']}")
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

	req := client.NewDescribeModelRepositoryModelsRequest()
	req.Name = ucloud.String("llama")

	resp, err := client.DescribeModelRepositoryModels(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	for _, model := range resp.Models {
		fmt.Printf("  %s - %s\n", model.Name, model.Size)
	}
}
```

---

## 响应示例

```json
{
  "Action": "DescribeModelRepositoryModelsResponse",
  "RetCode": 0,
  "Models": [
    {"Name": "Llama-3-8B", "Path": "/models/llama-3-8b", "Tag": "LLM,Meta", "Size": "16GB", "CreateTime": 1712563200}
  ]
}
```
