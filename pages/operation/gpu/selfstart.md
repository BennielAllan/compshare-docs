# 服务自启动脚本参考

**自启动的脚本需要放置在/start.d 目录下（若没有，则mkdir start.d），需要给脚本添加执行权限，即 chmod +x  脚本名 例如test.sh 则为：chmod +x test.sh**

## python虚拟环境自启动参考

```
#!/bin/bash   
```

## 进入项目目录
```
cd /workspace/joycaption\_webui
```
## 检查虚拟环境是否存在
```
if [ ! -d "venv" ]; then
echo "虚拟环境不存在，请先运行安装脚本"
exit 1
fi
```
## 激活虚拟环境
```
source venv/bin/activate
```
## 运行命令行工具
```
python joy2.py "\$@"
```
## 退出虚拟环境
```
deactivate
```

## comfyui 自启动脚本参考

```

#!/bin/bash

#激活基础Conda环境
source /root/miniconda3/etc/profile.d/conda.sh

#激活名为“comfyui”的虚拟环境
conda activate comfyui

#导航到ComfyUI目录
cd /root/ComfyUI

#启动应用并开放远程8188端口，将终端输出信息重定向到comfylog.txt文本文档
python main.py --listen 0.0.0.0 --port 8188 > comfylog.txt 2>&1

```

