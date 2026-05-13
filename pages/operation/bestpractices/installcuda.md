# Windows安装Nvidia驱动和Cuda   

适用于系统镜像（虚机）

## Nvidia 驱动安装   
### 第一步：下载   

nvidia官方驱动下载地址：https://www.nvidia.cn/geforce/drivers/ ，如下图所示，搜索对应windows nvidia驱动    

![图片](https://www-s.ucloud.cn/2025/05/49a9c2233942548d9683394d6d5e7dc4_1746587122512.png)        

![图片](https://www-s.ucloud.cn/2025/05/514bd97eda01f0bec18964608bec655e_1746587306003.png)    

#### GeForce Game Ready Driver      

定位：专为游戏玩家设计，优先优化游戏性能和新功能支持。   

特点：针对新发布的游戏提供“首日优化”，例如《最终幻想16》《黑神话：悟空》等，通过 DLSS 3/4 技术提升帧率和画质。集成 Reflex 低延迟技术，优化竞技类游戏的操作响应速度。驱动更新频率高，通常与新游戏发布同步，及时修复兼容性问题。   

####  NVIDIA Studio Driver   

定位：面向创意工作者（如视频剪辑师、3D 设计师），注重专业软件的稳定性和性能。    

特点：为 Adobe Premiere、DaVinci Resolve、Blender 等创作工具提供认证支持和优化，确保渲染加速、色彩精度等功能稳定运行。长期支持（Long-term Support, LTS），更新周期较长，减少因驱动变动导致的工作流中断,支持 NVIDIA Omniverse 等协作平台，优化多应用并行运行的资源分配     

### 第二步：驱动安装   

根据用途选择对应驱动下载，下载好后直接双击，点击OK 进行安装。   

![图片](https://www-s.ucloud.cn/2025/05/075ac8fb85a5b405180b7fa616130a5c_1746587559776.png)     

安装界面点击同意后，点击Next 进行安装   

![图片](https://www-s.ucloud.cn/2025/05/9ba6b80832e36d25fb9ae40300ea06c6_1746587621720.png)      

等待安装完成，如下图，Close即可，驱动安装完成 

![图片](https://www-s.ucloud.cn/2025/05/489580dd41b802e282a95f4105b74d10_1746587764274.png)     

### 第三步：验证驱动   

搜索栏，搜索PowerShell，输入`nvidia-smi` 可查看驱动是否安装成功，如下图显示则安装成功   

![图片](https://www-s.ucloud.cn/2025/05/bf255948a5a0586286f9cd53247879c5_1746587822666.png)    

##   Cuda安装    

### 第一步：下载   
  
官方地址：https://developer.nvidia.com/cuda-toolkit   

![图片](https://www-s.ucloud.cn/2025/05/2ca07e3cda8e2277ad8b8adc4dd9176e_1746588076259.png)    

点击Download Now进入下载界面，Windows 选择对应版本根据当前虚机镜像系统，eg：windows server 2022，如下图 

![图片](https://www-s.ucloud.cn/2025/05/1bc679b5c84f8ae5b9bdc5ee6609bd06_1746588205446.png)    

点击Download 下载即可，若选择其他Cuda版本，点击红框则查看历史版本列表，然后选择如上操作进行下载即可，如下图   

![图片](https://www-s.ucloud.cn/2025/05/78f3d7fff7af33ee89efb4bbd4ec6764_1746588273156.png)    

### 第二步：Cuda安装   

下载完成后，双击进行安装   

![图片](https://www-s.ucloud.cn/2025/05/751c664980b7d2ad08e2b6fc98fcd132_1746588376686.png)    

默认选项即可，点击Next下一步，直到开始安装   

![图片](https://www-s.ucloud.cn/2025/05/60ccb52ad532b5f44874c6b639571c2f_1746588429640.png)   

如下图，则表示安装完成   

![图片](https://www-s.ucloud.cn/2025/05/385dc26269e01d2b2e77abf977f87046_1746588480736.png)   

### 验证   

PowerShell 输入 `nvcc -V`，如图显示则Cuda安装完成    

![图片](https://www-s.ucloud.cn/2025/05/89bbe4d670ac8cea4c8742a4ad4d71b3_1746588648728.png)   

## Nvidia驱动和Cuda的卸载   

Windows 安装新版本驱动或者Cuda，安装软件会检测，卸载旧版本后进行新版本的安装。














