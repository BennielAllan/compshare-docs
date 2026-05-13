# Linux安装Nvidia驱动和Cuda

适用于系统镜像（虚机）

## 安装驱动      
**举例4090系列驱动安装**   
### 第一步：驱动官方下载地址：https://www.nvidia.cn/drivers/lookup/   
![图片](https://www-s.ucloud.cn/2025/05/80c9df0f1096b3f39e5c34d4e8328c1c_1747708016997.png)     
![图片](https://www-s.ucloud.cn/2025/05/eaec225e875499ef5770f016b11f0773_1747708075166.png)   

Product Type：（4090、3090、2080、2080Ti、3080Ti 等）/  （A800、A100、V100S、T4、L20 等）   
Geforce Data Center / TeslaProduct Series：选择对应产品系列：eg 4090:  / V100S: GeForce RTX 40 Series V-Series    
Product： 选择具体显卡型号： eg 4090:  / V100S: NVIDIA Geforce 4090 Tesla V100S   

![图片](https://www-s.ucloud.cn/2025/05/2d23e743d9b43652eb2d37991e3f3d81_1747708845783.png)   

**点击查看**   
![图片](https://www-s.ucloud.cn/2025/05/a877bd56d20572c524ee19408c69e43f_1747708908158.png)    

**右键复制链接地址**   

```  
wget https://us.download.nvidia.com/XFree86/Linux-x86_64/550.90.07/NVIDIA-Linux-x86_64-550.90.07.run   
```

### 第二步：安装驱动   
``` 
chmod +x NVIDIA-Linux-x86_64-550.90.07.run
sudo ./NVIDIA-Linux-x86_64-550.90.07.run
```   

### 第三步：安装完成校验   
``` 
nvidia-smi
```    

**显示如图则表示驱动安装成功** 

![图片](https://www-s.ucloud.cn/2025/05/edebe6d5ae730a6fa9061123d342a467_1747709300791.png)   



## 安装CUDA   
### 第一步：官网下载CUDA ：https://developer.nvidia.com/cuda-toolkit-archive   
选择对应系统和CUDA版本（执行 # nvidia-smi 可查看驱动适配的最高cuda版本，小于等于Nvidia驱动的cuda版本）   

![图片](https://www-s.ucloud.cn/2025/05/fc0d602528e8efd1e86dd049542cbe0d_1747709415877.png)    

然后wget下载到虚机本地，然后sudo sh cuda_xxxxxxx_linux.run 进行安装。   

![图片](https://www-s.ucloud.cn/2025/05/a7f104f97fc1c2af23b0fcc1f313c88a_1747709495565.png)   

### 第二步：打X的则是选择安装的，Install等待安装完成。如下图所示：    

![图片](https://www-s.ucloud.cn/2025/05/0adcfd57c4155e74b286d9cf14ac7106_1747709635142.png)   


### 第三步：配置环境变量，添加软链接，添加环境变量

``sudo vim /etc/profile`` 编辑文件，在末尾添加；   

```
export CUDA_HOME=/usr/local/cuda
export PATH=$PATH:/usr/local/cuda/bin
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH
```

保存退出，添加软链接
``sudo ln -s /usr/local/cuda-10.1 /usr/local/cuda`` （修改版本号即可，eg：10.1）
重启``reboot``   

### 第四步：验证cuda环境是否配置完成   
``nvcc -V`` 则表示环境配置完成   

![图片](https://www-s.ucloud.cn/2025/05/e2f46beed47dc9740bee3cef6e7f1258_1747709895979.png)   


## Q&A   
1.  Nouveau驱动未禁止    

![图片](https://www-s.ucloud.cn/2025/05/93cfe1c460b2b2e8810106420cb12278_1747710033415.png)      

点击OK，选择Yes让Nvidia驱动自主创建，一直OK，退出后，reboot。    

![图片](https://www-s.ucloud.cn/2025/05/00ccb86babf2128c427d549f9c73c2d7_1747710066857.png)    

2. kernel-devel 与kernel-headers版本不一致   

![图片](https://www-s.ucloud.cn/2025/05/a428e56dd79228fcf0ee22b2f1c93487_1747710118844.png)     

```
uname -a
Centos  
rpm -qa | grep -E "kernel-devel|kernel-headers"
kernel-devel
sudo yum install kernel-devel-$(uname -r)
Ubuntu
sudo apt-get update
sudo apt-get install linux-headers-$(uname -r)
Reboot
```

**注：若找不到对应的内核版本，则需要网上搜索抑或升级内核版本，匹配对应的软件版本号**   




