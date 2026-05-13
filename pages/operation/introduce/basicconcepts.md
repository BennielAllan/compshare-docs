# GPU产品基本概念及功能概览

本文汇总使用GPU过程中涉及的基本概念，方便您查询和了解相关概念。

### [GPU实例](https://www.compshare.cn/docs/operation/gpu/createresources)
云上的虚拟GPU服务器，内含vCPU、GPU、内存、操作系统、网络、磁盘等基础组件，[支持卡型查看](https://www.compshare.cn/docs/operation/introduce/gpu)  。 

GPU实例支持创建、关机、删除、升降配、磁盘扩容与挂载、远程连接、制作镜像、外网服务等功能。

### 地域

地域由一个地理区域（通常是城市）内的多个隔离的且在物理上分隔的可用区组成。平台目前默认GPU计算实例所在地域为华北二（乌兰察布）。

### [镜像](https://www.compshare.cn/docs/operation/gpu/community)

提供了运行实例所需的信息，包括操作系统、初始化应用数据等，平台目前支持4中镜像类型。

- **基础镜像：** 

平台官方提供的框架镜像，如PyTorch、Tensorflow等，底层为Docker环境。

- **系统镜像：** 

平台官方提供的系统镜像，如Windows、Ubuntu等，底层为虚机环境（VM）。

- **私有镜像：** 

用户自制的镜像，方便后续部署，私有镜像占用的存储空间需要收费，收费规则详见[计费说明](https://www.compshare.cn/docs/operation/charge/bill)。

- **社区镜像：** 

用户自制镜像后，可公开发布到社区共社区用户使用。社区镜像支持标价，镜像费用归镜像发布者收益。注：社区镜像作者发布或更新自己的镜像时，请从公共镜像或私有镜像里部署！从社区镜像里保存的镜像只能自己使用，无法再次公开发布，如果该社区镜像是收费的，保存后，每次使用该镜像也是需要向镜像作者付费 [相关介绍见制作社区镜像](https://www.compshare.cn/docs/operation/image/imagecommunity)。

### [模型库](https://www.compshare.cn/docs/operation/gpu/usepublicmode)
平台提供的公共模型库，预下载丰富AI模型，用户直接调用公共模型目录即可使用。仅支持容器实例（基础镜像、社区镜像），模型已下载至/models目录下。

### [云硬盘](https://www.compshare.cn/docs/operation/gpu/disk)
一种能够灵活创建并提供高级管理功能的云硬盘设备。其采用可用区内多份跨机柜物理机备份机制，平台使用的系统盘和数据盘都是SSD云盘，SSD云硬盘保证数据持久性99.999999%。平台提供100GB免费容量的系统盘，数据盘可选择是否进行挂载。

### [云存储](https://www.compshare.cn/docs/operation/gpu/s3describe)
多实例间的共享存储，提供了对象存储的常用上传、下载功能，相关介绍详见云存储。

### 网络
内网IP和外网IP由系统统一分配，外网IP为固定IP，平台所有实例免费共享2Gb带宽。

### [网络加速](https://www.compshare.cn/docs/operation/gpu/uaaa)
应用仓库加速，提升平台GPU实例对海外资源访问下载服务质量的网络加速产品。主要面向于开展诸如AIGC、代码仓库管理等业务的客户，面对大模型网站下载缓慢、Github访问卡顿丢包等问题，使用网络加速可以将用户的访问下载请求通过骨干网转发，从而加速用户的GPU实例访问如Github、Huggingface、Civitai等合规的海外域名，即开即加速。

### [防火墙](https://www.compshare.cn/docs/operation/gpu/firewall)
为实例提供防火墙功能，通过将防火墙规则绑定到实例，即能对实例公网访问进行控制管理，为实例安全提供必要的保障，相关介绍详见防火墙

