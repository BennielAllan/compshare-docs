# 获取实例资源列表-DescribeCompShareInstance

获取用户所有地域下实例资源信息列表

# Request Parameters
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Region|string|地域。 cn-wlcb |No|
|Zone|string|可用区。cn-wlcb-01|No|
|ProjectId|string|项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)|No|
|UHostIds.N|string|【数组】UHost主机的资源ID，例如UHostIds.0代表希望获取信息 的主机1，UHostIds.1代表主机2。 如果不传入，则返回当前Region 所有符合条件的UHost实例。|No|
|Offset|int|列表起始位置偏移量，默认为0|No|
|Limit|int|返回数据长度，默认为20，最大100|No|

# Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|返回码|**Yes**|
|Action|string|操作名称|**Yes**|
|TotalCount|int|UHostInstance总数|**Yes**|
|UHostSet|array|云主机实例列表，每项参数可见下面 UHostInstanceSet|**Yes**|

## CompShareInstanceSet
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Zone|string|可用区|No|
|UHostId|string|实例Id|No|
|MachineType|string|机型信息|No|
|CpuPlatform|string|CPU平台。如"Intel/Auto"、"Amd/Auto"等等|No|
|CompShareImageId|string|镜像Id|No|
|CompShareImageName|string|镜像名称|No|
|CompShareImageOwnerAlias|string|镜像来源|No|
|CompShareImageBillId|string|用于镜像计费的Id|No|
|CompShareImageStatus|string|镜像状态|No|
|CompShareImageType|string|镜像类型- System 系统镜像- App 应用镜像- Custom 自制镜像- Community 社区镜像|No|
|InstanceType|string|实例类型。"UHost": 普通主机；"Container": 容器主机|No|
|Password|string|主机密码。由Base64编码|No|
|SshLoginCommand|string|SSH登录命令|No|
|Name|string|实例名称|No|
|Tag|string|实例业务组|No|
|Remark|string|实例备注|No|
|State|string|实例状态，枚举值：<br> >初始化: Initializing; <br> >启动中: Starting; <br>> 运行中: Running; <br>> 关机中: Stopping; <br> >关机: Stopped <br> >安装失败: Install Fail; <br> >重启中: Rebooting; <br> >升级改配中: Resizing; <br> > 未知(空字符串，获取状态超时或出错)：|No|
|ChargeType|string|计费模式，枚举值为： Year，按年付费； Month，按月付费； Dynamic，按时付费；Postpay，按需付费|No|
|CPU|int|虚拟CPU核数，单位: 个|No|
|Memory|string|内存大小，单位：MB|No|
|GpuType|string|GPU类型。如: "4090"|No|
|GPU|int|GPU个数|No|
|GraphicsMemory|object|GPU显存信息|No|
|AutoRenew|string|是否自动续费，自动续费：“Yes”，不自动续费：“No”|No|
|IsExpire|string|是否过期。Yes：已过期；No：未过期|No|
|OsName|string|虚机镜像的名称|No|
|OsType|string|虚机镜像操作系统类型。"Linux"\"Windows"|No|
|TotalDiskSpace|int|总的数据盘存储空间|No|
|CpuArch|string|CPU架构。"x86_64"/"i386"等|No|
|DiskSet|array|详情见UHostDiskSet|No|
|IPSet|array|详情见UHostIPSet|No|
|Softwares|array|软件地址|No|
|InstancePrice|float|主机价格|No|
|CompShareImagePrice|float|镜像价格|No|
|ExpireTime|string|过期时间|No|
|CreateTime|string|创建时间|No|
|SetId|int|【内部API返回】宿主所在Set Id|No|
|HostIp|string|【内部API返回】宿主IP|No|
|PodId|string|【内部API返回】udisk podId|No|
|HugepageCfg|string|【内部API返回】大页内存|No|
|QemuVersion|string|【内部API返回】Qemu版本号|No|
|QemuFullVersion|string|【内部API返回】Qemu完整版本号|No|
|UUID|string|【内部API返回】资源长Id|No|
|PostPayShutdown|bool|【内部API返回】后付费关机|No|
|SupportWithoutGpuStart|bool|此实例是否支持无卡开机|No|
|WithoutGpuSpec|object|无卡配置规格，详情见：WithoutGpuSpecInfo|No|

## GraphicsMemory
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Value|int|值，单位是GB|No|
|Rate|int|交互展示参数，可忽略|No|

## UHostDiskSet
|Parameter name|Type|Description|Required|
|---|---|---|---|
|DiskType|string|磁盘类型。请参考[磁盘类型](https://docs.ucloud.cn/api/uhost-api/disk_type)。|**Yes**|
|IsBoot|string|是否是系统盘。枚举值：<br> > True，是系统盘 <br> > False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。|**Yes**|
|Encrypted|string|"true": 加密盘 "false"：非加密盘|No|
|Type|string|【建议不再使用】磁盘类型。系统盘: Boot，数据盘: Data,网络盘：Udisk|No|
|DiskId|string|磁盘ID|No|
|Name|string|UDisk名字（仅当磁盘是UDisk时返回）|No|
|Drive|string|磁盘盘符|No|
|Size|int|磁盘大小，单位: GB|No|
|BackupType|string|备份方案。若开通了数据方舟，则为DATAARK|No|

## UHostIPSet
|Parameter name|Type|Description|Required|
|---|---|---|---|
|IPMode|string|IPv4/IPv6；|**Yes**|
|Default|string|内网 Private 类型下，表示是否为默认网卡。true: 是默认网卡；其他值：不是。|No|
|Mac|string|内网 Private 类型下，当前网卡的Mac。|No|
|Weight|int|当前EIP的权重。权重最大的为当前的出口IP。|No|
|Type|string|国际: Internation，BGP: Bgp，内网: Private|No|
|IPId|string|外网IP资源ID 。(内网IP无对应的资源ID)|No|
|IP|string|IP地址|No|
|Bandwidth|int|IP对应的带宽, 单位: Mb  (内网IP不显示带宽信息)|No|
|VPCId|string|IP地址对应的VPC ID。（北京一不支持，字段返回为空）|No|
|SubnetId|string|IP地址对应的子网 ID。（北京一不支持，字段返回为空）|No|
|NetworkInterfaceId|string|弹性网卡为默认网卡时，返回对应的 ID 值|No|

## SoftwareAddr
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Name|string|软件名称|No|
|URL|string|软件地址|No|

## WithoutGpuSpec
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Cpu|int|cpu|No|
|Memory|int|内存|No|
|Gpu|int|gpu|No|

# Request Example
```
https://api.compshare.cn/?Action=DescribeCompShareInstance
&Region=cn-zj
&Zone=cn-zj-01
&ProjectId=IoMVpdoj
&UHostIds.N=cnHQCXgZ
&Tag=iDnowauu
&Offset=2
&Limit=9
&VPCId=YVTTNJzc
&SubnetId=xsDQoSws
&NoEIP=false
&ResourceType=zFIXncgL
&UDiskIdForAttachment=true
&WithoutGpu=false
```

# Response Example
```
{
    "Action": "DescribeCompShareInstanceResponse", 
    "TotalCount": 8, 
    "UHostSet": [
        {
            "RestrictMode": "VTendLlO", 
            "Zone": "xdLgDoph", 
            "OsName": "gMqlgBlI", 
            "HostType": "jpATaXsk", 
            "SecGroupInstance": false, 
            "State": "TnNuGSYE", 
            "Memory": 6, 
            "HotPlugMaxCpu": 8, 
            "NetCapability": "kTFrfCiG", 
            "BootDiskState": "wfcQeKzE", 
            "CPU": 5, 
            "BasicImageName": "fFSjyQry", 
            "SpotAttribute": {}, 
            "IPv6Feature": false, 
            "IPSet": [
                {
                    "VPCId": "ASpSKtze", 
                    "Weight": 8, 
                    "Default": "tgnSjelJ", 
                    "IP": "ZmBtTbhB", 
                    "NetworkInterfaceId": "FauzdzHm", 
                    "IPMode": "UulHwAYv", 
                    "Bandwidth": 8, 
                    "SubnetId": "SYfTyiiN", 
                    "Mac": "ACuDMaqD", 
                    "IPId": "subuipxK", 
                    "Type": "XtwAFLux"
                }
            ], 
            "HpcFeature": true, 
            "ImageId": "rOLrvehW", 
            "AutoRenew": "KHTdKhxO", 
            "UDHostAttribute": {}, 
            "TotalDiskSpace": 6, 
            "OsType": "uTGzcPdd", 
            "SubnetType": "sDBMGbYE", 
            "CloudInitFeature": false, 
            "Remark": "zATjHVlb", 
            "Name": "pkIdkUfV", 
            "EpcInstance": true, 
            "IsolationGroup": "dMNyStGT", 
            "KeyPair": {}, 
            "UHostId": "wMwHWPOr", 
            "GPU": 1, 
            "LifeCycle": "SwXCLmkq", 
            "CpuPlatform": "aKtmIaxl", 
            "MachineType": "IqVoJXvL", 
            "HiddenKvm": false, 
            "StorageType": "FEFUzaYx", 
            "HotplugFeature": false, 
            "UHostType": "NwCllZUf", 
            "BasicImageId": "AFGqwjpj", 
            "ExpireTime": 4, 
            "Tag": "MHPHAgpt", 
            "GpuType": "syCegFMi", 
            "NetworkState": "FcaxZMik", 
            "ChargeType": "xePQZDOs", 
            "RdmaClusterId": "ncMkxiOT", 
            "CreateTime": 7, 
            "TimemachineFeature": "GiqxwKDZ"
        }
    ], 
    "RetCode": 0
}
```

