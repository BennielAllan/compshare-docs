# 重装实例-ReinstallCompShareInstance

重装优云智算平台实例

# Request Parameters
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Region|string|地域。 cn-wlcb |**Yes**|
|Zone|string|可用区。cn-wlcb-01|**Yes**|
|ProjectId|string|项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)|No|
|UHostId|string|实例Id|**Yes**|
|CompShareImageId|string|镜像Id|**Yes**|
|Password|string|实例的新密码|No|

# Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|返回码|**Yes**|
|Action|string|操作名称|**Yes**|
|UHostId|string|实例Id|**Yes**|

# Request Example
```
https://api.compshare.cn/?Action=ReinstallCompShareInstance
&Region=cn-zj
&Zone=cn-zj-01
&ProjectId=vQBurWEY
&UHostId=YNAiIZEC
&CompShareImageId=lXjZDcTq
&Password=FtKctudQ
```

# Response Example
```
{
    "Action": "ReinstallCompShareInstanceResponse", 
    "UHostId": "YHksHalJ", 
    "RetCode": 0
}
```

