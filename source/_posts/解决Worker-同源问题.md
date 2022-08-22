---
title: 解决Worker 同源问题
date: 2020-10-15 22:42:15
tags:
  - Web Worker
---

<textarea border-style:dotted="border-style:dotted" class="markdown" disabled="disabled" style="height: 322px; margin: 0px; width: 369px;"> 
## 解决方法：
1. 将动态生成的脚本转换成Blob对象。
2. 然后给这个Blob对象创建一个URL。
3. 最后将这个创建好的URL作为地址传给Worker的构造函数。
  
```
let script = 'console.log("hello world!");'
let workerBlob = new Blob([script], { type: "text/javascript" });
let url = URL.createObjectURL(workerBlob);
let worker = new Worker(url);
```

</textarea>
