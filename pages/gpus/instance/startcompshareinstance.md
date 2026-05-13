# 启动实例-StartCompShareInstance

启动优云智算平台实例

# Request Parameters
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Region|string|地域。 cn-wlcb |**Yes**|
|Zone|string|可用区。cn-wlcb-01|**Yes**|
|ProjectId|string|项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)|No|
|UHostId|string|实例Id|**Yes**|
|WithoutGpu|bool|是否进行无卡开机|No|

# Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|返回码|**Yes**|
|Action|string|操作名称|**Yes**|
|UHostId|string|实例Id|**Yes**|

# Request Example
```
https://api.compshare.cn/?Action=StartCompShareInstance
&Region=cn-zj
&Zone=cn-zj-01
&ProjectId=cEMGtAkM
&UHostId=NHNZFdXi
&WithoutGpu=false
```

# Response Example
```
{
    "Action": "StartCompShareInstanceResponse", 
    "UHostId": "jkHGryKM", 
    "RetCode": 0
}
```

