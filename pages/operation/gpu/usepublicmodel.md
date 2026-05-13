# 公共模型库使用方法及示例

平台提供公共模型库，预下载丰富AI模型，用户直接调用公共模型目录即可使用。

**注意：** 目前仅容器实例支持，以下模型已下载至/models目录下，可直接使用。

![图片](https://www-s.ucloud.cn/2025/01/a08f69630eecc8bdd3528c0598b6a526_1737711866851.png)

控制台查询已支持模型

![模型库](https://www-s.ucloud.cn/2025/08/b5145c1d7891719fb2ef29ab2004c076_1755059825209.png)    

若需要的[HuggingFace](https://huggingface.co/models)与[ModelScope](https://www.modelscope.cn/models)官网模型暂未被下载至公共模型库，并且较大不想自己进行下载，联系官网运营提交模型下载地址


## 语言模型场景使用方法及示例
通过vllm、ollama等推理框架，直接调用公共模型库中的模型路径即可。

### vllm
```
# vllm 框架
vllm serve <大模型路径> --port 8000

# 举例模型库的DeepSeek-R1-Distill-Qwen-32B, 复制模型库对应path，如下使用即可
vllm serve /model/HuggingFace/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B --port 8000
```

### ollama
```
# ollama 启动 
ollama serve --models /path/to/your/models

# 举例模型库的llama3，复制模型库对应path，如下使用即可
ollama serve --models /model/ollama/models/manifests/registry.ollama.ai/library/llama3
```

### 其他框架
若其他框架根据其框架内部设定是支持更改启动时模型的path路径，那更换对应模型库的path进行使用即可。

## ComfyUI使用方法及示例
ComfyUI无法直接调用公共模型库，需搭配脚本使用，[脚本下载](https://compshare.cn-bj.ufileos.com/sl.sh)

### sl.sh 脚本使用指南

#### 功能简介
`sl.sh` 是一个用于创建软链接（符号链接）的 Bash 脚本，支持以下功能：
1. 为单个目录创建软链接。
2. 为单个文件创建软链接。
3. 将源路径下的所有文件和文件夹按原始结构创建软链接。

#### 使用步骤

##### 1. 运行脚本
在终端中运行以下命令，以脚本位置在/root/sl.sh为例：
```bash
bash /root/sl.sh
```

##### 2. 选择操作类型
脚本会提示选择操作类型：
```
请选择要创建软链接的对象类型：
1. 目录
2. 文件
3. 源路径下的所有文件和文件夹
```
输入对应的数字（1、2 或 3）并按回车。

##### 3. 输入源路径
脚本会提示输入源路径：
```
请输入源路径:
```
输入需要创建软链接的目录或文件路径。

##### 4. 输入目标路径
脚本会提示输入目标路径，并显示当前路径：
```
请输入目标路径（直接回车将创建到当前路径：/your/current/path）:
```
输入目标路径或直接回车使用当前路径。

##### 5. 完成创建
脚本会根据选择自动创建软链接，并显示操作结果。

#### 示例截图

##### 选择操作类型
![选择操作类型](https://www-s.ucloud.cn/2025/08/c156019e890bdebdb3f35adc6673378f_1754649481063.png)

##### 输入路径（路径最前方如果没有/，需要连续点键盘左箭头键，将光标移动到最前面，手动补上）
![输入路径](https://www-s.ucloud.cn/2025/08/eaf5ed69406a3f1fee0e1a4d61dc9380_1754649481060.png)

##### 路径复制方法
![路径复制方法](https://www-s.ucloud.cn/2025/08/2b995be3b78a54f78057701ea560ffb5_1754649481072.png)

##### 创建结果
![创建结果](https://www-s.ucloud.cn/2025/08/6daa902cfec2f350928416f54cfca6b9_1754649481066.png)

#### 注意事项
1. 确保源路径存在且可访问。
2. 目标路径需要有写入权限。
3. 如果目标路径已存在同名文件或目录，操作会失败。

### 常见问题

#### 如何解决权限问题？
确保脚本有执行权限：
```bash
chmod +x sl.sh
```

#### 有了执行权限以后，可以省略bash命令：
```bash
./sl.sh #sl.sh在当前路径
/root/sl.sh #sl.sh在/root/下
```

#### 如何调试脚本？
可以添加 `-x` 参数运行脚本以显示详细日志：
```bash
bash -x sl.sh
```
