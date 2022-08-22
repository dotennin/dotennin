---
title: shell脚本 自动交互式安装程序
date: 2021-02-08 22:44:59
tags:
  - Shell
---

# 例如，如果您想让 Chef 为未打包的应用程序使用交互式安装程序，则此方法很有用。与 Chef 一起使用此方法时，有必要通过安装后是否存在可执行文件来保持幂等性。

---

## 安装 expect 工具：

1. expect
2. autoexpect

---

### 环境准备

```
  sudo yum install expect autoexpect
```

### expect 脚本生成

```
  autoexpect sudo ./<输出文件>
```

---

### 自动安装

```
  chmod +x script.exp
  sudo ./script.exp
```
