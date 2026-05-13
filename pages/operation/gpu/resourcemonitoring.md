# 虚机手动挂载和卸载监控(UBoltAgent)   
## Linux 安装手册   
### 安装前须知      
* 安装新版本 UBoltAgent，会卸载历史 Python 版本 uma（如果已安装）。
* 获取 UBoltAgent 安装包的命令需要在 UCloud 云主机中执行，否则无法正常下载。
* 为保证监控数据正常上报，云主机操作系统内部需放行TCP 协议的8088端口。
* 若 SELinux 为严格模式，请将 /etc/selinux/config 文件中的 SELINUX=disabled，并重启服务器以生效。
* CPU 云主机不同操作系统支持版本请参考 镜像列表。
* GPU 云主机支持机型请参考机型列表。
* 裸金属服务器支持机型请参考机型列表。   

### Linux 安装步骤   
#### 1. 以 root 用户登录云主机   
安装过程需要使用 root 用户登录云主机。   
#### 2. 下载监控组件（以 wget 命令为例）   
amd64 架构：   
```
wget http://umon.api.service.ucloud.cn/static/cloudwatch/uboltagent-v1.3.0-linux-amd64.tar.gz

```      
> 注意：使用内网下载监控组件前，请先登录 Linux 实例执行命令，并确保云服务器使用内网 DNS，否则将无法解析下载地址。若未安装 wget，请先安装wget或使用 curl 命令下载。    

amd64架构:   
``` 
curl -O http://umon.api.service.ucloud.cn/static/cloudwatch/uboltagent-v1.3.0-linux-amd64.tar.gz

```    
#### 3. 安装监控组件   
**解压缩安装包**   
amd64 架构：   
```
tar -zxf uboltagent-v1.3.0-linux-amd64.tar.gz

```
进入安装目录并授权脚本权限   
```
cd uboltagent
chmod a+x manage.sh

```   
执行安装脚本   
```   
./manage.sh install

```      
>安装过程中若出现错误，可查看日志文件： 
>/var/log/uboltagent_install.log   
#### 4. 验证安装状态   
**查看进程是否启动**   
执行命令如下：   
```
ps -ef | grep uboltagent

```   
若执行结果如下图所示，说明 UBoltAgent 相关进程已正常启动，则已经成功安装 UBoltAgent   

![图片](https://www-s.ucloud.cn/2026/01/5d717120e9eecf7aad42dc7f973f2bf3_1768816291860.png)    

**查看服务状态**       

执行命令如下：    
```
service uboltagent status
# 或者
systemctl status uboltagent

```   
若执行结果如下图所示，说明 UBoltAgent 服务状态正常    

![图片](https://www-s.ucloud.cn/2026/01/d0f4178e128c5b1da74ade7971f49a51_1768816442342.png)     

**登录云监控确认**   

等待约5分钟，进入云监控 CloudWatch->产品监控->点击资源详情，查看相关指标图表数据是否正常展示    

![图片](https://www-s.ucloud.cn/2026/01/a978f422dbfe158a6fb89d712512e695_1768816501526.png)     

### Linux卸载     
#### 1. 执行以下命令进行卸载：   
```
./manage.sh uninstall

```   
#### 2. 执行以下命令确认进程是否停止：   
``` 
ps -ef | grep uboltagent

```    
若无相关进程，说明已卸载成功。   

![图片](https://www-s.ucloud.cn/2026/01/f590b8438b0c2fa0d5e79355724e07e4_1768816728631.png)     

### 注意事项     
1. 防火墙和安全组：确保防火墙和安全组设置允许云主机访问监控服务器的地址。
2. UBoltAgent 版本兼容性：确保下载的UBoltAgent版本与您的云主机操作系统版本兼容。
3. 定期升级更新：建议定期检查并升级 UBoltAgent，以获得最新功能与安全补丁。
4. 遇到问题：如果在安装过程中遇到问题，可通过安装日志查看详细信息或者联系技术支持。 

## Windows 安装手册   
### windows安装    
**准备工作**   

* 安装和卸载时，都需要使用具有“管理员”权限的账户（如 Administrator 用户）登录 Windows 云主机。   
>注意：安装新版本 UBoltAgent，会卸载历史安装的版本。   
不同操作系统支持版本请参考 支持的CPU 云主机镜像列表。   
#### 安装步骤
##### 登录云主机   
登录云主机后，使用浏览器访问安装包下载路径：下载并保存安装包。注意由于浏览器安全设置，可能会有文件安全提示，请信任并下载保存。    
**操作系统windows2016+**     
``` 
http://umon.api.service.ucloud.cn/static/cloudwatch/uboltagent-v1.3.0-windows-amd64.exe

```  
**操作系统windows2012及以下版本**   
``` 
http://umon.api.service.ucloud.cn/static/cloudwatch/uboltagent-v1.3.0-windows-amd64-compat.exe

```    
>注意：   
使用内网下载监控组件前，请登录 Windows 实例执行命令，并且确保云服务器为内网DNS，否则将无法解析监控组件的下载地址   
##### 执行安装   
进入安装包存放目录，找到下载的安装包： uboltagent-v1.3.0-windows-amd64*.exe，双击该文件开始安装过程，按照安装向导提示完成安装。     

![图片](https://www-s.ucloud.cn/2026/01/f030b4d2003522a0b78e8f60ca2ae5f6_1768817082268.png)    

![图片](https://www-s.ucloud.cn/2026/01/160f6609e7c937b03aefaf7ce7450bdf_1768817111278.png)     

##### 确认安装状态   
###### 方法一：使用服务管理器 

1. 使用快捷键 `Win + R` 打开“运行”对话框，输入 `services.msc`并回车。    

![图片](https://www-s.ucloud.cn/2026/01/a682dfce3aca9cf3587eaa2193712d3d_1768817419154.png)     

2. 或通过：开始菜单 -> Windows 管理工具 -> 服务，打开服务管理器。    

![图片](https://www-s.ucloud.cn/2026/01/0fac0f185f85ebc01740e248a3752918_1768817442552.png)   

3. 找到名为 `UBoltAgent` 的服务，确认其状态为“正在运行”。 

![图片](https://www-s.ucloud.cn/2026/01/a41a43b78f12bac60081e13ce6519658_1768817468259.png)     

###### 方法二：查看日志文件    
进入 Agent 的安装目录，查看 `log` 目录下的日志文件，以获取更详细的运行状态信息。     

![图片](https://www-s.ucloud.cn/2026/01/dd840f103ef4be00184556e53098c2be_1768817540621.png)    

###### 方法三：查看云监控状态   
等待约 5 分钟，进入 控制台：资源监控-> 产品监控 -> 点击资源详情，确认监控数据是否上报。   

![图片](https://www-s.ucloud.cn/2026/01/a978f422dbfe158a6fb89d712512e695_1768817605902.png)    

### windows卸载    
1. 打开控制面板，点击“卸载程序”。    

![图片](https://www-s.ucloud.cn/2026/01/bfdba1c9c93f93ab21d168e8b5544ba4_1768817682837.png)        

2. 找到 UBoltAgent 程序，点击“卸载”，完成卸载操作。   

![图片](https://www-s.ucloud.cn/2026/01/7f5d546f7494c2360a11b3a63e45cf4d_1768817707769.png)       

### 注意事项   
1. 在执行任何安装或卸载操作之前，请确保已备份重要数据。
2. 如遇问题或错误消息，请参考官方文档或联系技术支持。
