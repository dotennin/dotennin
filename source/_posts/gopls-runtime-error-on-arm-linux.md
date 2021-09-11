---
title: gopls runtime error on arm linux
date: 2021-08-17 01:13:15
tags:
  - GO
  - SHELL
---

```shell
  [coc.nvim] Failed to install 'gopls'
panic: runtime error: index out of range [0] with length 0

goroutine 5076 [running]:
golang.org/x/tools/internal/imports.(*ModuleResolver).init(0xc004132be0, 0x0, 0xc0006940c0)
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/imports/mod.go:85 +0xfac
golang.org/x/tools/internal/imports.(*ModuleResolver).ClearForNewMod(0xc004132be0)
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/imports/mod.go:194 +0xa2
golang.org/x/tools/internal/lsp/cache.(*view).RunProcessEnvFunc(0xc000290280, 0x1a123c0, 0xc005a352f0, 0xc006eef400, 0x0, 0x0)
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/lsp/cache/view.go:279 +0x33f
golang.org/x/tools/internal/lsp/source.AllImportsFixes(0x1a123c0, 0xc005a352f0, 0x1a245c0, 0xc00079c060, 0x1a10a80, 0xc0002b0720, 0x0, 0xc00035ed60, 0x2, 0x2, ...)
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/lsp/source/format.go:87 +0x479
golang.org/x/tools/internal/lsp.(*Server).codeAction(0xc00021dc80, 0x1a123c0, 0xc00595a390, 0xc005ea0780, 0xc005ea0780, 0x0, 0x0, 0x0, 0xc00466cd10)
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/lsp/code_action.go:68 +0x8f5
golang.org/x/tools/internal/lsp.(*Server).CodeAction(0xc00021dc80, 0x1a123c0, 0xc00595a390, 0xc005ea0780, 0xc005ea0780, 0x0, 0x0, 0x1038bc3, 0x17e0260)
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/lsp/server_gen.go:12 +0x4d
golang.org/x/tools/internal/lsp/protocol.serverHandler.Deliver(0x1a2cbc0, 0xc00021dc80, 0x1a123c0, 0xc00595a390, 0xc004291d00, 0x16e7e00, 0x1a10000)
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/lsp/protocol/tsserver.go:433 +0x1e38
golang.org/x/tools/internal/jsonrpc2.(*Conn).Run.func1(0xc00507cde0, 0xc004291d00, 0xc000365140, 0x1a123c0, 0xc00595a390, 0x0, 0x0, 0xc005e15ea0)
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/jsonrpc2/jsonrpc2.go:372 +0x160
created by golang.org/x/tools/internal/jsonrpc2.(*Conn).Run
	/Users/mark/go/pkg/mod/golang.org/x/tools@v0.0.0-20200316194252-fafb6e2e8a4a/internal/jsonrpc2/jsonrpc2.go:356 +0x850

Process gopls stderr finished
```

if you have such issue while installing gopls, you can just trying to install the differents arm version of golang

```
wget https://dl.google.com/go/go1.14.4.linux-armv6l.tar.gz
sudo tar -C /usr/local -xzf go1.14.4.linux-armv6l.tar.gz
rm go1.14.4.linux-arm64.tar.gz
```

then open the shell config here I used `.zshrc`

```
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/.local/gopath
```
