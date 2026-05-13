# 网络加速配置说明

有效提升海外资源访问下载的网络稳定性和速度，解决大模型网站下载缓慢、Github访问卡顿丢包等问题。

**已支持加速域名：**
*.github.com、*.nvidia.com、*.nvcr.io、*.docker.com、*.golang.org、*.googlesource.com、*.pythonhosted.org、*.pytorch.org、*.civitai.com、*.huggingface.co、*.anaconda.org、*.conda.io、*.anaconda.com、*.k8s.io、*.gcr.io、*.wandb.ai

优云智算网络加速产品通过独立 DNS 服务器提供优化解析服务，提升域名解析效率与稳定性。使用前需将示例默认 DNS 指向特定DNS解析服务器，以启用加速功能。

**注意：** 
- 容器实例（基础镜像、社区镜像）：开通网络加速后自动配置DNS解析优化，用户无需操作
- 虚机实例（系统镜像）：需要用户手动配置，以下为各操作系统云主机的具体配置步骤


## 虚机实例配置 DNS 服务器地址

请将私有网络中云主机的默认 DNS 修改为以下地址（主备顺序建议优先填写前者）：

```
100.90.90.90
100.90.90.100
```

## 不同操作系统下的DNS修改方式

### Ubuntu(含20.04/22.04/24.04)

1. 临时修改 DNS（立即生效，重启后失效）​

```
sudo vim /etc/resolv.conf
```

删除原有nameserver行，添加以下内容：

```
nameserver 100.90.90.90
nameserver 100.90.90.100
```

保存退出

2. 持久化配置（重启后保留）​
打开配置文件：
```
sudo vim /etc/netplan/50-cloud-init.yaml
```

找到 nameservers: 区域，修改为：

```
nameservers:
  addresses: [100.90.90.90, 100.90.90.100]  
```

保存并退出，让配置立即生效：

```
sudo netplan apply 
```

重启完成即可生效。


### Windows

1. 右键点击start,选择 network connections。

![image](https://static.ucloud.cn/docs/uaaa/images/1.png?v=1749119248)

2. 右键点击 Ethernet，选择Properties。

![image](https://static.ucloud.cn/docs/uaaa/images/2.png?v=1749119248)

3. 选择Internet Protocol Version4(TCP/IPv4）,并修改Preferred DNS server和Alternnate DNS server。

![image](https://static.ucloud.cn/docs/uaaa/images/3.png?v=1749119248)

4. 点击OK，即可修改成功。

## 验证配置生效

配置完成后，可通过以下命令验证 DNS 是否生效：

* Linux/macOS：`nslookup your-domain.com`，查看解析服务器是否为`100.90.90.90`或`100.90.90.100`。
* Windows：命令提示符执行nslookup，输入域名后查看 “服务器” 字段。
