---
title: 解决微软商店无法安装软件以及XBOX无法登录账号的问题
date: 2022-02-06 02:57:31
tags: Microsoft
---

[Fix: Unable to sign in to Xbox account in Windows 10/11](https://windowsreport.com/unable-to-sign-in-xbox-account-windows-10/)

如果以上链接的操作方法不行的话， 可以使用如下方法清除网络缓存

1.  按下【windows + x】组合键打开超级菜单，点击【命令提示符（管理员）】;
1.  在命令提示符框中输入：

        ```shell
        netsh winsock reset

        netsh winhttp reset proxy

        netsh int ip reset

        ipconfig /release

        ipconfig /renew

        ipconfig /flushdns

        ipconfig /registerdns
        ```

如果仍然无法登录，通常这和 VPN、dns 或是网络运营商有关 可以进行以下操作

1. 关闭所有 VPN
1. 更换 dns 为 114.114.114.114
1. 使用其它网络运营商提供的服务（如电信更换为联通，可以使用手机提供的热点进行尝试）
1. 打开 ie-设置-Internet 选项-高级 然后勾选所有带 tls 和 ssl 的选项并点击应用，然后重新启动计算机看看。（推荐）

