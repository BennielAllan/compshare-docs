# 优云智算已上线的GPU卡型

## 已支持的GPU卡型

### 华北二A
| 型号 | 显存 | 单精 | 半精 | 详细参数 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 5090 | 32GB | 104.8T | 209.6T | [查看](https://www.techpowerup.com/gpu-specs/geforce-rtx-5090.c4216) | 凭借其32GB大显存和更高的计算能力，在处理大模型、8K内容创作和FP4加速方面表现更佳，适合需要高性能计算的场景 |
| 4090(48G) | 48GB | 82.58T | 165.2T |-| 作为推理卡4090的增强版本，将显存提升到了48G，满足原本使用A100(40G)、L40、L20等48G显存GPU的客户 ，适合视频生成、量化场景，性价比超高 |
| 4090 | 24GB | 82.58T | 165.2T | [查看](https://www.techpowerup.com/gpu-specs/geforce-rtx-4090.c3889) | 单卡FP16推理算力高于A800，适用于大语言模型的推理、CV、NLP、TTS、图像生成场景，性价比非常高 |
| 3080Ti | 12GB | 34.10T | 68.2T | [查看](https://www.techpowerup.com/gpu-specs/geforce-rtx-3080-ti.c3735) | 如果对显存要求不高则是非常合适的选择，需要使用cuda11.x，适合语言生成、数字人等场景 |
| 3090 | 24GB | 35.58T | 71.2T | [查看](https://www.techpowerup.com/gpu-specs/geforce-rtx-3090.c3622) | 可以看做3080Ti的扩显存版，性能和显存大小都非常够用，小场景性价比首选，需要使用cuda11.x |
| A100 | 80GB | 19.5T | 312T | [查看](https://www.techpowerup.com/gpu-specs/a100-sxm4-80-gb.c3746) | 显存大，非常适合做半精计算，因为有NVLink加持，多卡并行加速比非常高。需要使用cuda11.x |
| A800 | 80GB | 19.5T | 312T | [查看](https://www.techpowerup.com/gpu-specs/a800-sxm4-80-gb.c3966) | A100替代版，适用大模型训练和微调，优势FP8精度模型训练和推理 |
| H20 | 96GB | 34.10T | 148T | - | 适用大模型训练、微调、推理，优势MoE架构模型推理、FP8精度推理（UP 2.1倍A800） |
| P40 | 24GB | 11.76T | 11.76T | [查看](https://www.techpowerup.com/gpu-specs/tesla-p40.c2878) | 比较老的Pascal架构GPU，对于cuda11.x之前且对大显存有需求的算法是非常不错的选择 |
| 2080 | 8GB | 10.07T | 20.14T | [查看](https://www.techpowerup.com/gpu-specs/geforce-rtx-2080.c3224) | 十分老的卡型，适合跑TTS等小参数量的模型，性价比高 |


### 上海二B
| 型号 | 显存 | 单精 | 半精 | 详细参数 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 5090 | 32GB | 104.8T | 209.6T |[查看](https://www.techpowerup.com/gpu-specs/geforce-rtx-5090.c4216) | 凭借其32GB大显存和更高的计算能力，在处理大模型、8K内容创作和FP4加速方面表现更佳，适合需要高性能计算的场景 |
| 4090 | 24GB | 82.58T | 165.2T | [查看](https://www.techpowerup.com/gpu-specs/geforce-rtx-4090.c3889) | 单卡FP16推理算力高于A800，适用于大语言模型的推理、CV、NLP、TTS、图像生成场景，性价比非常高 |
| 2080Ti | 11GB | 13.45T | 26.90T | [查看](https://www.techpowerup.com/gpu-specs/geforce-rtx-2080-ti.c3305) | 十分老的卡型，适合跑TTS等小参数量的模型，性价比高 |
