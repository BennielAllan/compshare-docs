# 镜像介绍与选择  

镜像主要用于容器化技术中，使得程序可以直接利用GPU资源，便于深度学习、高性能计算等任务的执行，同时简化环境配置和应用部署。不同镜像类型默认登陆名及端口号如下：   

| 镜像类型 | 系统类型 | 登录名 | 端口 | 密码 |
| --- | --- | --- | --- | --- |
| 社区镜像 | 容器 | root | 23 | 见控制台 |   
| 平台镜像-基础镜像 | 容器 | root | 23 | 见控制台 |  
| 平台镜像-系统镜像 | 虚拟-Ubuntu | ubuntu | 22 | 见控制台 |      
| 平台镜像-系统镜像 | 虚机-Windows | administrator | - | 见控制台 |   

## 系统镜像  

**虚拟机，无任何预装环境，用户可根据项目需求自行选择Windows或者Ubuntu系统，并安装所需软件。**   

**Windows系统：** 通过图形界面进行系统管理和配置，对于不熟悉命令行的用户来说较为友好，Windows支持Windows Server 2019/2022版本。

**Ubuntu系统：** 通过命令行完成系统管理和配置任务通常，适合有一定技术背景的用户，Ubuntu支持22.04/24.04版本，Ubuntu可视化界面搭建可参考[通过VNC搭建Ubuntu图形界面](https://www.compshare.cn/docs/operation/bestpractices/createVNC)。    

**特别注意：通过系统镜像创建的实例为虚机类型，自制镜像后不支持发布至镜像社区。**   

![系统镜像](https://www-s.ucloud.cn/2024/12/055fbcb412dc678b53736241d0b52c4d_1735638258098.png)

## 基础镜像   

Docker环境，内置主流框架及版本的镜像，用户可根据自身需求选择。基础镜像打包应用后，支持发布至镜像社区，镜像发布流程见[发布社区镜像](https://www.compshare.cn/docs/operation/image/imagecommunity)。     
![基础镜像](https://www-s.ucloud.cn/2025/04/3b4860c55de3c08f4037ed4f6c263e38_1745734065520.png)

| 框架 | 框架版本 | python版本 | CUDA版本 |
| --- | --- | --- | --- |
| pytorch | 2.7.0 | 3.10 | 12.8 |
| pytorch | 2.7.0 | 3.10 | 12.6 | 
| pytorch | 2.6.0 | 3.10 | 12.6 |  
| pytorch | 2.6.0 | 3.10 | 12.4 | 
| pytorch | 2.5.1 | 3.10 | 12.4 | 
| pytorch | 2.4.0 | 3.10 | 12.4 | 
| pytorch | 2.3.0 | 3.12 | 12.1 |   
| pytorch | 2.3.0 | 3.10 | 12.1 |   
| pytorch | 2.1.2 | 3.10 | 11.8 |   
| pytorch | 2.1.0 | 3.10 | 12.1 |   
| pytorch | 2.0.0 | 3.8 | 11.8 |   
| pytorch | 1.13.0 | 3.8 | 11.6 |    
| pytorch | 1.8.1 | 3.8 | 11.1 |    
| TensorFlow | 2.9.0 | 3.8 | 11.2 |    
| TensorFlow | 2.5.0 | 3.8 | 11.2 |     
| TensorFlow | 1.15.5 | 3.8 | 11.4 |     
| Miniconda3 |  | 3.10 | 12.2 |     
| Miniconda3 |  | 3.10 | 12.1 |
| Miniconda3 |  | 3.10 | 11.8 |
| Miniconda3 |  | 3.8 | 11.8|     
 
**安装PyTorch**   [立即查看](https://pytorch.org/get-started/previous-versions/) 
   
**安装TensorFlow**  [立即查看](https://www.tensorflow.org/install/pip?hl=zh-cn)   

**安装其他版本的Python**    
> 构建一个虚拟环境名为：my-env，Python版本为3.7     
```
conda create -n my-env python=3.7
``` 

> 更新bashrc中的环境变量   
```
conda init bash && source /root/.bashrc
```

>切换到创建的虚拟环境：my-env   
```
conda activate my-env
```    

>验证   
```
python
```     

**特别注意**   
首先平台镜像中有没有您需要的Torch、TensorFlow等框架的相应版本，如果有首选平台内置的镜像；   

## 社区镜像
社区镜像专是一个旨在为AI用户提供一个安全、高效、易于构建业务环境的内容平台。它允许用户上传、管理和公开自定义的容器镜像，以支持多样化的云计算和AI多样场景的需求。镜像发布流程见[发布社区镜像](https://www.compshare.cn/docs/operation/image/imagecommunity)。  

### 核心功能
1. **镜像共享**   
用户可以将自己的容器自制镜像发布到社区，与其他用户共享，促进知识与资源的传播。这种共享机制不仅加速了应用的部署，还增强了社区的协作精神。   

2. **镜像发现**   
镜像社区提供了多种搜索工具，用户可以通过镜像名称关键词、镜像作者名称或场景标签快速发现所需的镜像。帮助用户能够轻松找到预配置的应用镜像，快速上手。   

3. **镜像使用**   
用户可以直接在部署实例界面从社区选取镜像，这种即选即用的模式大大提高了部署效率，降低了技术门槛。   

4. **用户自定义镜像**   
用户可以根据自己的业务需求定制镜像，包括环境、应用栈和配置参数，实现个性化的解决方案。   

![镜像社区](https://www-s.ucloud.cn/2025/08/40258e919cbdfc9bff2a325eb4fdfde6_1755017507360.png) 

## 自制镜像
自制镜像是指用户通过自己创建的实例制作的镜像，社区镜像、基础镜像、系统镜像均可制作镜像。   
除了在镜像列表中查看可以到您制作完成的镜像，还可以前往部署GPU实例页面，在平台镜像栏目进行查看：   

![自制镜像](https://www-s.ucloud.cn/2025/04/77f13d0a5ccb9e2104b17a1c5096a0d3_1745734224584.png)       
可通过自制镜像启动一个新的实例，验证软件安装和配置是否符合预期。
