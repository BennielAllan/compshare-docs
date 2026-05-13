# 云硬盘扩容与挂载   
云硬盘作为云计算场景基础块存储产品，为GPU实例提供持久化存储空间的块设备硬盘。其具有独立的生命周期，基于网络分布式访问，为GPU实例提供的数据大容量、高可靠、可扩展、高易用、低成本的硬盘。     

当您选择的镜像为容器镜像（社区镜像、基础镜像），创建出来的实例为容器类型，默认挂载路径为：/cloud
当您选择的镜像为系统镜像，创建出来的实例为虚机类型，默认挂载路径为：/data   

## 系统盘   
系统盘与实例强绑定，跟随实例一起创建及释放，默认100G免费，最高支持扩容至1000G。系统盘计费及回收规则见计费与回收。   

### 系统盘扩容

当您选择的镜像为系统镜像，创建出来的实例为虚机类型，在进行磁盘扩容操作以后，需要进入主机内部进行相关配置；如果实例为容器类型，则不需要进行相关配置，配置方法如下：

#### 1. 扩容规则

| 类型 | 磁盘上限 | 支持扩容操作 |
| --- | - | --- |
| 云盘 |  1000GB | 创建主机、更改配置、更换镜像 |

#### 2. 扩容步骤

##### 2.1创建/重装时扩容：

1. 在创建/重装主机页面，选择系统盘大小；
2. 等待创建/重装完毕，此时底层块设备已扩容完成；
3. 进入主机查看文件系统是否已扩容完毕。

##### 2.2创建后通过更改配置扩容：

1. 选择“更改配置” -> “更改磁盘容量” -> 系统盘；
2. 等待扩容结束，主机进入关机状态，此时底层块设备已扩容完成；
3. 开机，进入主机查看文件系统是否已扩容完毕。

 ##### 2.3查看文件系统是否扩容完毕：

######  Linux 

   ``` 
   df -TH
   ```
    
######  Windows 

    这台电脑->查看C盘大小是否与控制台一致
   

> 如文件系统并未扩容完毕，则需要执行**系统内扩容步骤**。

#### 3. 系统内扩容步骤

######  Linux 

* 步骤1：安装growpart

Cloud-init支持版镜像中已默认安装growpart，其余版本需要自行安装，过程如下：

CentOS：

    yum install -y epel-release
    yum install -y cloud-utils

Ubuntu：

    sudo apt-get install cloud-initramfs-growroot
    
    
* 步骤2：扩容分区表

```
LANG=en_US.UTF-8
growpart /dev/vda 1
```

> CentOS6和Debian8，可能会遇到内核以及工具链不支持热重载分区表的情况，如遇此情况，扩容分区表后需重启一次操作系统。

* 步骤3：扩容文件系统

```
resize2fs /dev/vda1 (ext4文件系统)
xfs_growfs /dev/vda1 (xfs文件系统) 或xfs_growfs /
```
* 步骤4：确认

查看是否扩容完成：
```
    df -TH
```
    
######  Windows 
在“计算机管理”中选择扩展卷，即可完成扩容。具体操作步骤如下：

![](public/sysdisk_step1.jpg)

![](public/sysdisk_step2.jpg)
![](public/sysdisk_step3.jpg)
![](public/sysdisk_step4.jpg)
![](public/sysdisk_step5.jpg)
![](public/sysdisk_step6.jpg)
![](public/sysdisk_step7.jpg)
![](public/sysdisk_step8.jpg)


## 数据盘   
数据盘与实例不强绑定，用户可根据需求切换数据盘绑定实例，切数据盘实行单独回收逻辑，计费及回收规则见计费与回收。    

### 数据盘创建   
1. 通过控制台前往云硬盘产品页面，点击创建云硬盘按钮来创建数据盘：   

![image](https://www-s.ucloud.cn/2025/04/da435a85b2d1deeacc53ef6382ad70e9_1745738770864.png)   

2. 每个云硬盘最小容量为10G，最大为1500G，您可以按照需求配置和创建硬盘：     

![image](https://www-s.ucloud.cn/2025/04/878ff88939b4a64828acc0fef23173e8_1745738807134.png)   

3. 在创建硬盘时，会默认为您选择挂载的实例，你也可以选择暂不挂载实例创建一个待挂载的硬盘：   

![image](https://www-s.ucloud.cn/2025/04/01f961373387b075e5c4ff19979a4ae3_1745738861289.png)     

4. 完成基础配置后，填写硬盘名称及付费信息，点击立即购买按钮即可完成数据盘创建。   

### 数据盘挂载   

1. 首先，在实例列表中找到想要挂载数据盘的实例，点击最右侧按钮，在更多操作中点击挂载云硬盘选项：   

![image](https://www-s.ucloud.cn/2025/04/7d38f338b0ee95e2272f1b9350ec701f_1745738925503.png)    

**如果您没有未挂载的云硬盘，则需要先前往云硬盘产品页面完成数据盘创建：**   

![image](https://www-s.ucloud.cn/2025/04/28e3ba9431dad2248d3cb52e29c53d43_1745738974830.png)      

2. 当存在一至多个可挂载的云硬盘时，您可以选择想要挂载的云硬盘并点击确定进行挂载：  

![image](https://www-s.ucloud.cn/2025/04/4a261ab6f95fbeb8339b40a34289732c_1745739038677.png)      

### 数据盘卸载   

1. 若您在挂载云硬盘后想要进行卸载，则需要前往云硬盘产品页面，找到对应的云硬盘点击卸载按钮：   

![image](https://www-s.ucloud.cn/2025/04/4128b80dfcf65bfae6d0db3c81166a97_1745739097884.png)       

2. 确认好对应的硬盘名称和挂载实例后，点击确定按钮进行卸载：   

![image](https://www-s.ucloud.cn/2025/04/4cabc33a61f8050285fc12ffb3f772ff_1745739138283.png)     

3. 卸载后的云硬盘不会被删除，而是从已挂载转为可用状态：   

![image](https://www-s.ucloud.cn/2025/04/ca13fd935d9f86829737141abef45695_1745739176830.png)     

4. 后续您可以选择将可用的云硬盘挂载到其他实例，也可以通过最右侧的删除确认并删除相应的云硬盘：   

![image](https://www-s.ucloud.cn/2025/04/9a35dc6d3bee37a9dc649fa778eacbf2_1745739221349.png)      

### 数据盘扩容
#### 1. 扩容步骤

##### 磁盘类型：SSD云硬盘

在控制台选择“更改配置”，当前支持在线升级，但需要完成**系统内扩容步骤**。

> 如文件系统并未扩容完毕，则需要执行**系统内扩容步骤**。

#### 2. 系统内扩容步骤

######  Linux 

* 查看数据盘的文件系统类型（升级操作需要针对ext4和xfs两种文件系统采取不同的操作） 
```
df -ihT
```

![image](public/ext4.png)

![image](public/xfs.png)

* 如果是ext4文件格式的操作系统，请在云主机内部进行以下操作（如CentOS6）  

``` 
resize2fs /dev/vdb
``` 

* 如果是xfs文件格式的操作系统，请在云主机内部进行以下操作（如CentOS7）  

``` 
xfs_repair /dev/vdb
xfs_growfs /data
``` 

* 确认是否扩容成功 
```
df -TH
```

######  Windows 
在主机上操作，cmd中输入**diskpart.exe**，**list volume**，选择要扩展大小的逻辑卷，输入要扩展大小extend
[size=n]， 或extend将所有未分配大小扩展到选择的逻辑卷。

![image](public/disk_extend.png)
    


#### 3. 扩容前无本地数据盘的主机


######  Linux 
升级后，需在云主机内做如下操作：

1. 可选择ext4或xfs两种文件系统格式来格式化数据盘

2. 将数据盘设置为ext4文件格式（CentOS6的默认文件系统格式）：
``` 
mkfs -t ext4 /dev/vdb 
mount /dev/vdb /data/
```

3. 编辑/etc/fstab，将对应配置写入fstab
``` 
/dev/vdb   /data  ext4  defaults,noatime 0 0
```

4. 将数据盘设置为xfs格式（CentOS7的默认文件系统格式）：
```
mkfs.xfs /dev/vdb
mount -t xfs /dev/vdb /data
```

5. 编辑/etc/fstab，加入如下内容
```
/dev/vdb /data xfs defaults,noatime 0 0  
```


######  Windows 
在主机上操作，cmd中输入**diskpart.exe**

1. 输入**list disk**，**select disk n** (请根据实际情况，填写n的具体数值），选中数据盘;
2. 输入**create partition primary**，创建分区;
3. 输入**list volume**，可看到创建的卷。输入**format fs=ntfs quick** 进行分区;
4. 输入**assign**,分配驱动器号;
5. 输入**exit**退出，系统中已可看到已创建的磁盘。

![image](public/create_new_disk.png)









