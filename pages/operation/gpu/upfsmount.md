# 共享模型库挂载指南

### 从外网下载挂载工具

    wget https://upfs-public.cn-bj.ufileos.com/upfs_client-public-latest.tar.gz

#### 华北二地域从内网下载

    wget http://upfs-public-wlcb.internal-cn-wlcb.ufileos.com/upfs_client-public-latest.tar.gz

#### 上海二地域从内网下载

    wget http://upfs-public-sh2-01.internal-cn-sh2-01.ufileos.com/upfs_client-public-latest.tar.gz

### 解压安装包。

    tar zxvf upfs_client-public-latest.tar.gz

#### 执行安装脚本

    cd ./upfs_client-public-latest && sudo ./install.sh

### 挂载模型库(Linux)

#### 华北二挂载命令

    sudo mount -t upfs 100.65.128.139:10109,100.65.128.140:10109/upfs-13n5o97wrrr4 /mnt

#### 上海二挂载命令

    sudo mount -t upfs 10.23.253.252:10109,10.23.253.253:10109/upfs-1g4dorydmr89 /mnt

## Windows挂载(参考)

https://docs.ucloud.cn/upfs/upfs_guide/windows_mount
