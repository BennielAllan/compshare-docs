# 本地数据上传至GPU实例
**注意：不同类型的镜像，登录名及端口号不同，SSH远程连接时请注意区分。**

社区镜像、基础镜像可使用Jupyter、SCP、FileZilla、XFTP等多种方式上传

| 镜像类型 | 登录名 | 端口 | 密码 |
| --- | --- | --- | --- |
| 社区镜像、基础镜像 | root | 23 | 见控制台 |   

系统镜像无预装，可使用SCP、FileZilla、XFTP等方式上传   

| 镜像类型 | 登录名 | 端口 | 密码 |
| --- | --- | --- | --- |
| Ubuntu | ubuntu | 22 | 见控制台 |      

### JupyterLab上传   
通过JupyterLab上传，和网盘类似，优点简单，但是只支持文件上传，不支持文件夹。 

**步骤一：登录JupyterLab**    

![登录](https://www-s.ucloud.cn/2025/08/0039c1b789cdd05d2ef5fd8620cb1883_1755049474045.png)     

**步骤二：点击图片中红框处的按钮来上传文件**    

![登录](https://www-s.ucloud.cn/2025/01/31e7307bc29a969111fd5ce422a02cc9_1737614649321.png)    
 

### SCP远程拷贝   
SCP（Secure Copy Protocol） 是一种基于 SSH（安全外壳协议） 的文件传输协议，用于在本地计算机和远程服务器之间安全地传输文件。它通过 SSH 提供了强加密的文件传输功能，确保数据在传输过程中不会被窃听或篡改。   

**SCP安装**   
Linux用户可以直接输入命令行，如果您是Windows用户，默认Windows系统未安装SSH客户端，推荐下载使用[Cmder工具](https://cmder.app/)，免安装解压即用。   

**SCP使用**   
**步骤一：**   
实例开机，找到实例外网IP地址，实例用户名为root，社区镜像创建的实例，端口号为23（虚机实例用户名为ubuntu，端口号为22）。   

![登录](https://www-s.ucloud.cn/2025/08/8e7ca79b73fbef461886ef5bdb692e7d_1755049474042.png)    

**步骤二：**   
注意下方指令需要在您本地的机器上执行，向实例中拷贝数据，而不是在实例中执行该命令;    
将本地文件或文件夹拷贝到远程：  

`scp -rP <端口号> <本地文件/文件夹路径> <远程用户名>@<实例外网IP地址>:<实例目标路径>`   

举例：   

`scp -rP 23 myfile.txt root@192.168.1.1:/home/root/ `   

将本地电脑的`myfile.txt`文件，下载在到IP地址为`192.168.1.1`的实例，实例用户名为root，端口为23，实例下载路径为`home/root`    

将实例中的数据拷贝到本地:   

`scp -rP <端口号> <用户名>@<实例外网IP地址>:<实例中的文件/文件夹> <本地文件/文件夹>`    
实例用户名为root，端口为23。


### FileZilla上传   
FileZilla是一个免费开源的FTP(文件传输协议)软件‌，分为客户端版本和服务器版本。FileZilla客户端版本是一个高效且易于使用的FTP客户端工具，而FileZilla服务器版本则是一个支持FTP和SFTP的FTP服务器软件。      

**FileZilla安装**    

下载地址：https://www.filezilla.cn/download/client ，选择对应自己电脑的版本进行安装，   
Linux最简单的安装方式：`sudo apt install filezilla`   


**FileZilla使用** 

**步骤一：实例开机，找到服务器外网IP地址**    

![登录](https://www-s.ucloud.cn/2025/08/8e7ca79b73fbef461886ef5bdb692e7d_1755049474042.png)    

**步骤二：打开FileZilla，选择文件-站点管理器-新站点，协议选择SFTP，输入主机、端口号、用户名、密码，点击连接。**      

主机：服务器的外网IP地址   

端口号：23   

用户名：root   

密码：SSH登录密码 

注意：虚机实例用户名为ubuntu，端口号为22

![登录](https://www-s.ucloud.cn/2025/01/bf1ec7516a593b4ac3f34db2a8554a8c_1737618051411.png)    

**步骤三：连接成功后，即可进行文件传输**   

![登录](https://www-s.ucloud.cn/2025/01/dad43ffd851938c284dcbf28c6f8679c_1737618121218.png)    


### XFTP上传
XFTP是一个功能强大的SFTP、FTP 文件传输软件

**XFTP安装：** 

XFTP一款是付费版软件，但是可通过官方途径申请免费许可，方式如下

**步骤一：访问网址，[点击官方链接直接下载安装使用](https://www.xshell.com/zh/free-for-home-school/)**     

![下载](
https://www-s.ucloud.cn/2025/01/f904015f4bbe7a480bd8ce3586aa1bf2_1735802851538.png)   
**步骤二：输入用户名和邮箱，点击“提交”，验证电子邮件地址的链接将发送到您指定的电子邮件地址，通过邮箱链接验证并完成注册。**    

![邮件](
https://www-s.ucloud.cn/2025/01/c2c631c1e45f121cc93682f27db9a6e1_1735802998385.png)   
**步骤三：重启软件后即可开始使用**   

**XFTP使用**   

**步骤一：实例开机，找到服务器外网IP地址**    

![外网IP](
https://www-s.ucloud.cn/2025/08/8e7ca79b73fbef461886ef5bdb692e7d_1755049474042.png)   

**步骤二：打开XFTP，选择文件-新建会话，输入主机、端口号、用户名、密码，点击确定并连接**

主机：服务器的外网IP地址   端口号：23   用户名：root    密码：SSH登录密码   

注意：虚机实例用户名为ubuntu，端口号为22
 
 ![ping](
https://www-s.ucloud.cn/2025/01/11d94795977ce39524bcb008dc65e4a1_1735803448311.png)

**步骤三：链接成功后，即可进行文件传输**   

![上传](
https://www-s.ucloud.cn/2025/01/2b5f393b293e99ad6a1f692d615a3b1f_1735803546064.png)


### 云存储上传    
云储存可以将实例与实例之间的文件传输建立通道，并且您可以将文件上传到云储存中，或从云储存下载到本地。当上传文件到云储存后，所有挂载云储存的实例都能立即看到此文件。    

**本地上传文件至云储存**    

**步骤一：创建并命名云存储空间 https://console.compshare.cn/ufile**     

**步骤二：点击上传文件，将需要上传的本地目录或文件直接拖拽到对应区域**       

![上传](
https://www-s.ucloud.cn/2025/01/51d5fa73792c2fab9b740ce034187328_1737706301710.png)   
     

**使用goofys挂载文件存储到服务器**    

安装与使用：适用的操作系统：Linux，MacOS    

**步骤一：下载可执行文件，使用如下命令解压到指定目录**     

`1 tar -xzvf goofys-0.21.1.tar.gz`    

**步骤二：默认在 `$HOME/.aws/credentials` 文件里面配置 bucket 的公私钥，格式如下**     

` 1 [default]`   

` 2 aws_access_key_id = TOKEN_*****9206d`   

` 3 aws_secret_access_key = 93614*******b1dc40`     
 
**步骤三：执行挂载命令 `./goofys --endpoint your_ufile_endpoint your_bucket your_local_mount_dir`**     

` 1 ./goofys  --endpoint http://internal.s3-cn-bj.ufileos.com/suning2 ./mount_test:`     

挂载效果如图：    

![上传](
https://www-s.ucloud.cn/2025/01/b45d310c4cb76c6656b752ad17a2ab53_1737706778163.png)     



