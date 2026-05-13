# 创建轻量级算力平台主机资源-CreateCompShareInstance

创建轻量级算力平台主机资源

# Request Parameters
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Region|string|地域。 cn-wlcb |**Yes**|
|Zone|string|可用区。cn-wlcb-01|**Yes**|
|ProjectId|string|项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)|No|
|Disks.N.IsBoot|bool|是否是系统盘。枚举值：<br> > True，是系统盘 <br> > False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。|**Yes**|
|Disks.N.Type|string|磁盘类型。请参考[磁盘类型](api/uhost-api/disk_type)。|**Yes**|
|Disks.N.Size|int|磁盘大小，单位GB。请参考[磁盘类型](api/uhost-api/disk_type)。|**Yes**|
|MachineType|string|云主机机型（V2.0），在本字段和字段UHostType中，仅需要其中1个字段即可。枚举值["N", "C", "G", "O", "OS", "OM", "OPRO", "OMAX", "O.BM", "O.EPC"]。参考[云主机机型说明](api/uhost-api/uhost_type)。|**Yes**|
|GPU|int|GPU卡核心数。仅GPU机型支持此字段（可选范围与MachineType+GpuType相关）|**Yes**|
|Memory|int|内存大小。单位：MB。范围 ：[1024, 262144]，取值为1024的倍数（可选范围参考控制台）。默认值：8192|**Yes**|
|CPU|int|虚拟CPU核数。可选参数：1-64（具体机型与CPU的对应关系参照控制台）。默认值: 4。|**Yes**|
|GpuType|string|GPU类型，枚举值["K80", "P40", "V100", "T4","T4A", "T4S","2080Ti","2080Ti-4C","1080Ti", "T4/4", "MI100", "V100S",2080","2080TiS","2080TiPro","3090","A100"]，MachineType为G时必填|**Yes**|
|CompShareImageId|string|镜像ID|**Yes**|
|LoginMode|string|主机登陆模式。密码（默认选项）: Password|No|
|ChargeType|string|计费模式。枚举值为: <br> > Month，按月付费；<br> > Day，按天付费；<br> > Dynamic，按小时预付费 <br> > Postpay，按小时后付费（支持关机不收费，目前仅部分可用区支持，请联系您的客户经理） <br> > Spot计费为抢占式实例(内测阶段) <br> 默认为月付|No|
|Quantity|int|购买时长。默认:值 1。按小时购买（Dynamic/Postpay）时无需此参数。 月付时，此参数传0，代表购买至月末。|No|
|MinimalCpuPlatform|string|最低cpu平台，枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake", "Intel/CascadelakeR", "Intel/IceLake", "Amd/Epyc2", "Amd/Auto","Ampere/Auto","Ampere/Altra"],默认值是"Intel/Auto"。|No|
|Password|string|UHost密码。请遵照[字段规范](api/uhost-api/specification)设定密码。密码需使用base64进行编码，举例如下：# echo -n Password1 \| base64UGFzc3dvcmQx。|No|
|Name|string|实例名称|No|
|SecurityGroupId|string|防火墙Id|No|

# Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|返回码|**Yes**|
|Action|string|操作名称|**Yes**|
|UHostIds|array|UHost实例Id集合|**Yes**|

# Request Example
```
https://api.compshare.cn/?Action=CreateCompShareInstance
&Region=cn-zj
&Zone=cn-zj-01
&ProjectId=lnUhAYpT
&ImageId=KSuPKTtW
&LoginMode=dnnfRljU
&Disks.N.IsBoot=true
&Disks.N.Type=ptHJPOco
&Disks.N.Size=5
&MachineType=iyENElDv
&GPUType=pzRkInee
&GPU=VkyjzhQy
&ChargeType=USDhlfAP
&Quantity=7
&MinimalCpuPlatform=QErLvHVg
&Memory=1
&MaxCount=6
&Password=UwOdhzOu
&CPU=1
&Name=ACsfjhFW
&SecurityGroupId=DhXQhVSq
```

# Response Example
```
{
    "Action": "CreateCompShareInstanceResponse", 
    "IPs": [
        "hhySlhCv"
    ], 
    "RetCode": 0, 
    "UHostIds": [
        "NIdfqvRv"
    ]
}
```

