---
title: X11-forwaring-with-ssh
date: 2022-10-24 19:02:55
tags:
  - shell
---

First you need uncomment this lines in /etc/ssh/ssh_config on server:

```shell
X11Forwarding yes
```

The second step is connect to server with -X and execute Chromium

```
ssh -X user@hostname chromium
```

You will see it on client computer.

BTW, you don't want to use the -Y flag instead of the -X flag?

Quite simply, the difference between -X and -Y is that -Y [enables trusted X11 forwarding](https://manpages.debian.org/buster/openssh-client/ssh.1.en.html#Y).
