# 部署安装 Dify

## 1. 下载Dify 

```bash
git clone https://github.com/langgenius/dify.git
cd dify/docker
```

## 2.复制 .env 配置文件

```bash
cp .env.example .env
```

## 3.配置docker加速
参考：加速地址：https://zhuanlan.zhihu.com/p/24461370776
```bash
sudo vim /etc/docker/daemon.json

#举例
{
    "registry-mirrors": [
        "https://docker.1ms.run",
        "https://docker.xuanyuan.me"
    ]
}
#重启docker服务
sudo systemctl restart docker
```

## 4.拉取镜像

```bash
cd dify/docker
sudo docker compose pull
```

## 5.启动Dify

```bash
cd dify/docker
docker compose up -d
```

