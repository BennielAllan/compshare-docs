# 删除轻量算力共享平台虚机实例-TerminateCompShareInstance

删除轻量算力共享平台虚机实例

# Request Parameters
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Region|string|地域。 cn-wlcb |**Yes**|
|Zone|string|可用区。cn-wlcb-01|**Yes**|
|ProjectId|string|项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)|No|
|UHostId|string|虚机资源id|**Yes**|

# Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|返回码|**Yes**|
|Action|string|操作名称|**Yes**|
|UHostId|string|虚机资源id|**Yes**|

# Request Example
```
https://api.compshare.cn/?Action=TerminateCompShareInstance
&Region=cn-zj
&Zone=cn-zj-01
&ProjectId=MmpOcBdp
&UHostId=LhxmWZes
```

# Response Example
```
{
    "Action": "TerminateCompShareInstanceResponse", 
    "InRecycle": "QKREBgnO", 
    "UHostId": "TJYRSKuk", 
    "RetCode": 0
}
```

