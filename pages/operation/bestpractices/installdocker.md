# GPU实例如何安装Docker

适用于系统镜像（虚机）

## windows server 2022安装

###  开启Microsoft-Hyper-V

```bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

### 安装docker CE 版本  
  
```bash
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

查看 docker 安装版本，出现版本信息表示已经安装成功

```bash
docker version
```

## Ubuntu 安装 Docker 教程

## 1. 更新系统软件包
确保系统软件包为最新版本：
```bash
sudo apt update
```

## 2.安装依赖工具

```bash
apt-get install ca-certificates curl gnupg lsb-release
```

## 3.添加 Docker GPG 密钥

```bash
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

## 4.添加docker软件源

```bash
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

## 4.安装 Docker 引擎

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## 5. 验证安装

```bash
docker --version
```
