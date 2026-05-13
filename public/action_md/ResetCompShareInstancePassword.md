# 重置算力平台实例密码-ResetCompShareInstancePassword

重置算力平台实例密码

# Request Parameters
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Region|string|地域。 cn-wlcb |**Yes**|
|Zone|string|可用区。cn-wlcb-01|**Yes**|
|ProjectId|string|项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)|No|
|UHostId|string|实例Id|**Yes**|
|Password|string|新密码。需经Base64编码|**Yes**|

# Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|返回码|**Yes**|
|Action|string|操作名称|**Yes**|
|UHostId|string|实例Id|**Yes**|

# Request Example
```
https://api.compshare.cn/?Action=ResetCompShareInstancePassword
&Region=cn-zj
&Zone=cn-zj-01
&ProjectId=bPGMZwvY
&UHostId=FawcbRha
&Password=ctmwOSIg
```

# Response Example
```
{
    "Action": "ResetCompShareInstancePasswordResponse", 
    "UHostId": "VigQIiTv", 
    "RetCode": 0
}
```

