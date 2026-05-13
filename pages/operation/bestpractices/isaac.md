# Isaac系列镜像使用教程

## 镜像介绍
![isaac](https://www-s.ucloud.cn/2026/01/347073ce45e4af93269d9ba082af1810_1767779935829.png)     

| 镜像名称 | 系统类型 | 使用方式 | 推荐部署卡型 |
| --- | --- | --- | --- |
| Isaac Sim Webrtc | Ubuntu | 搭配英伟达官方的WebRTC客户端使用，十分流畅 | 4090 |
| Isaac Sim VNC | Ubuntu | 搭配VNC远程工具使用，一般流畅，流畅程度受VNC工具性能影响 | 4090 |
| Isaac Sim | Windows | 搭配Windows远程工具使用 | 4090 |
| Isaac Lab | Windows | 搭配Windows远程工具使用 | 4090 |

注意：如遇Isaac客户端素材加载缺失，需要手动配置网络加速服务，配置方式见[配置外网加速](https://www.compshare.cn/docs/operation/gpu/uaaa)

## Isaac Sim WebRTC镜像使用
### WebRTC客户端安装
本地电脑下载客户端并安装
Isaac Sim WebRTC Streaming Client：https://docs.isaacsim.omniverse.nvidia.com/latest/installation/download.html#isaac-sim-latest-release

### 创建实例并使用
1. 使用Isaac Sim WebRTC镜像创建实例

2. 外网防火墙添加端口号：UDP 47995-49507, TCP 47995-49100

![isaac](https://www-s.ucloud.cn/2026/01/ae3dd377ad17a1fbfdb6a325eda5d2bb_1767779763054.png)     

3. 本地电脑打开Isaac Sim WebRTC Streaming Client 客户端，Server处输入外网IP地址

![isaac](https://www-s.ucloud.cn/2026/01/b32f11475433a8984a0e8f16dfa7e830_1767779763060.png)     

4. 加载Isaac Sim并使用

![isaac](https://www-s.ucloud.cn/2026/01/d55a9d922d80016ccce1bd04ce3eaeb9_1767779763073.png)     


## Isaac Sim VNC镜像使用
### VNC客户端安装
本地电脑安装VNC客户端，推荐

TigerVNC：https://tigervnc.org/

Vnc viewer：https://www.realvnc.com/en/connect/download/viewer/

### 创建实例并使用
1. 使用Isaac Sim VNC镜像创建实例

2. 外网防火墙添加端口号：5901（选择实例-更多操作-配置防火墙-编辑防火墙规则-添加规则-保存）

![isaac](https://www-s.ucloud.cn/2026/01/f35eefa9fa54a147fda0b2940ec7eb1d_1769052036576.png)     

3. 使用TigerVNC工具链接，VNC服务器框中输入  外网IP:5901

![isaac](https://www-s.ucloud.cn/2026/01/529d44441117e321bb0a41ad8264ce83_1767778698105.png)     

4. 输入登录信息，系统账号：ubuntu  系统密码：yQdLZy866

![isaac](https://www-s.ucloud.cn/2026/01/28d24f48f981656581ff9769681eeeb6_1767778698111.png)     

5. 进入VNC桌面，打开Terminal终端，输入Isaac Sim启动命令并执行

```
cd isaacsim/_build/linux-x86_64/release/
vglrun ./isaac-sim.sh
```
![isaac](https://www-s.ucloud.cn/2026/01/17f137d67549a2882e3b4146aa74c85e_1767778698144.png)     

注意：如果该步骤卡登录状态无法进入VNC桌面，请重启服务器再次尝试

6. 执行完毕后即可打开Isaac Sim客户端

![isaac](https://www-s.ucloud.cn/2026/01/d2e30bfa482bd728962caeb8133c3399_1767778698116.png)     

![isaac](https://www-s.ucloud.cn/2026/01/21aa35e05cde8fd71be01c8f7b8b8a38_1767778698132.png)     

## Isaac Lab/Sim Windows镜像使用
### 创建实例并登录服务器
1. 使用Isaac Lab、Isaac Sim镜像创建实例
2. 使用本地电脑远程登录服务器
Windows远程登录教程参考：[Windows服务器远程登录操作手册](https://www.compshare.cn/docs/operation/bestpractices/windows)

### 启动Isaac Lab服务
1. 服务器中打开CMD，按顺序执行命令
```
cd..
```
```
cd..
```
```
cd IsaacLab
```
```
python scripts\tutorials\00_sim\create_empty.py
```
![isaac](https://www-s.ucloud.cn/2026/01/7e6b5cc80a049c5925c085eb840d12c2_1767783025362.png)     

2. 等待命令执行完毕后，自动弹出客户端程序

![isaac](https://www-s.ucloud.cn/2026/01/45ee7b6e13d45abc5d52db30502df965_1767783025370.png)     


### 启动Isaac Sim服务
服务器中打开CMD，按顺序执行命令
```
cd c:\isaacsim\_build\windows-x86_64\release
```
```
isaac-sim.bat
```
