---
title: 解决Worker 同源问题
date: 2021-02-08 22:42:15
tags:
  - Shell
---

<textarea border-style:dotted="border-style:dotted" class="markdown" disabled="disabled">  
  # 例如，如果您想让Chef为未打包的应用程序使用交互式安装程序，则此方法很有用。与Chef一起使用此方法时，有必要通过安装后是否存在可执行文件来保持幂等性。
  -----------------
## 安装expect工具：
1. expect
2. autoexpect
-------------
### 环境准备
```
  sudo yum install expect autoexpect
```
### expect脚本生成
```
  autoexpect sudo ./<输出文件>
```
----------------
### 自动安装
```
  chmod +x script.exp
  sudo ./script.exp
  ```
</textarea>
