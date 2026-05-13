# 共享算力平台帮助文档

## 添加文档

1. 在`pages`目录下添加`markdown`文件，如`demo.mdx`
2. 编辑`demo.mdx`文档内容
3. 编辑`pages/_meta.json`，设置侧边栏的文档显示标题和位置，如：

```js
{
  ...
  "demo": "Demo Page",
  ...
}
```

## 发布

- 编辑完提交后，等待 CICD 执行完毕，访问[Test03 预览地址](http://compshare-docs.prj-console.svc.x6.u4/docs)查看更新；
- Test03 预览确认无误后，手动点击 CICD 中的`job-prod-deploy`执行线上发布。

## 预览

Test03 地址：http://compshare-docs.prj-console.svc.x6.u4/docs
