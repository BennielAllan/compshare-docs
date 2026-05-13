# DescribeCommunityImages — 获取社区镜像列表

## 接口说明

获取算力共享平台的社区镜像列表，支持按名称、作者、标签等条件筛选，支持排序和分页。

---

## 请求参数

| 名称 | 类型 | 必填 | 描述 | 示例值 |
|------|------|:----:|------|--------|
| Action | String | 是 | 接口名称 | `DescribeCommunityImages` |
| Region | String | 是 | 地域 | `cn-wlcb` |
| CompShareImageId | String | 否 | 按镜像 ID 精确查询 | `compshareImage-xxxx` |
| GroupId | String | 否 | 按版本组 ID 筛选 | `group-xxxx` |
| Name | String | 否 | 按镜像名称模糊搜索 | `Stable Diffusion` |
| Author | String | 否 | 按作者精确匹配 | `UCloud` |
| FuzzySearch | String | 否 | 按镜像名称或作者模糊搜索 | `PyTorch` |
| Tag | Array of String | 否 | 按标签筛选（多个标签取交集） | `["深度学习"]` |
| IsFree | Boolean | 否 | 是否只查询免费镜像 | `true` |
| IsOfficial | Boolean | 否 | 是否只查询官方镜像 | `false` |
| IfAutoStart | Boolean | 否 | 是否只查询支持自启动的镜像 | `false` |
| SortCondition | Object | 否 | 排序条件。`Field` 可选：`Favor`（收藏数）、`PubTime`（发布时间）、`ImageUseTime`（使用次数）、`FavoritesCount`（收藏数）；`ASC` 为是否升序 | `{"Field":"PubTime","ASC":false}` |
| Offset | Integer | 否 | 偏移量，默认 `0` | `0` |
| Limit | Integer | 否 | 每页数量，默认 `20` | `20` |

---

## 响应参数

| 名称 | 类型 | 描述 | 示例值 |
|------|------|------|--------|
| Action | String | 响应名称 | `DescribeCommunityImagesResponse` |
| RetCode | Integer | 返回码，`0` 为成功 | `0` |
| TotalCount | Integer | 满足条件的镜像总数 | `100` |
| AvailableTotalCount | Integer | 已发布的镜像总数 | `95` |
| CompshareImageGroup | Array of [CompshareImageGroup](#compshareimagegroup-结构) | 镜像分组列表 | — |

### CompshareImageGroup 结构

社区镜像按版本组分组，每个组包含一个或多个版本。

| 名称 | 类型 | 描述 |
|------|------|------|
| GroupId | String | 版本组 ID |
| ImageName | String | 镜像名称 |
| ImageDesc | String | 镜像描述 |
| CreatedCount | Integer | 引用创建次数 |
| FavoritesCount | Integer | 收藏数 |
| RecommendCount | Integer | 推荐数 |
| ImageUseTime | Integer | 镜像使用时长 |
| IsFavorite | Boolean | 当前用户是否已收藏 |
| Status | String | 组状态。`Available`：可用（至少有一个已上线版本）；`UnAvailable`：不可用 |
| Data | Array of [CompShareImage](#compshareimage-结构) | 该组下的版本列表 |

### CompShareImage 结构

每个版本的详细信息。

| 名称 | 类型 | 描述 |
|------|------|------|
| CompShareImageId | String | 镜像 ID |
| Name | String | 版本名称 |
| Author | String | 作者昵称 |
| AuthInfo | Integer | 作者认证信息。`0`：普通创作者，`1`：官方账号，`2`：认证作者 |
| Status | String | 版本状态。`Available`：已上线，`Offline`：已下线，`Reviewing`：审核中 |
| Price | Float | 价格（元/小时），`0` 为免费 |
| VersionName | String | 版本号 |
| VersionDesc | String | 版本描述 |
| Description | String | 镜像描述 |
| Tags | Array of String | 标签列表 |
| SupportedGpuTypes | Array of String | 支持的 GPU 类型 |
| Cover | String | 封面图 URL |
| Container | String | `"True"`：容器镜像，`"False"`：虚机镜像 |
| AutoStart | Boolean | 是否支持自启动 |
| CreateTime | Integer | 创建时间（Unix 时间戳） |
| UpdateTime | Integer | 更新时间（Unix 时间戳） |
| PubTime | Integer | 发布时间（Unix 时间戳） |
| Size | Integer | 镜像大小（MB） |
| Readme | String | 使用说明（富文本） |
| QrCodeUrl | String | 作者二维码 URL |
| SoftwarePorts | Array of Object | 软件端口列表，含 `Software`（名称）和 `Port`（端口号） |

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
        resp = client.ucompshare().describe_community_images({
            "Tag": ["深度学习"],
            "SortCondition": {"Field": "PubTime", "ASC": False},
            "Limit": 20,
        })
        print(f"总数: {resp.get('TotalCount')}")
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

	req := client.NewDescribeCommunityImagesRequest()
	req.Limit = ucloud.Int(20)

	resp, err := client.DescribeCommunityImages(req)
	if err != nil {
		fmt.Printf("查询失败: %s\n", err)
		return
	}
	fmt.Printf("总数: %d\n", resp.TotalCount)
}
```

---

## 响应示例

```json
{
  "Action": "DescribeCommunityImagesResponse",
  "RetCode": 0,
  "TotalCount": 50,
  "AvailableTotalCount": 48,
  "CompshareImageGroup": []
}
```
