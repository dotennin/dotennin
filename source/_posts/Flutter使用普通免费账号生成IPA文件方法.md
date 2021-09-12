---
title: Flutter使用普通免费账号生成IPA文件方法
date: 2021-04-25 17:57:56
tags:
  - Dart
  - Flutter
---

### 生成生成档案记录文件之前的操作可直接参考官网：https://flutter.dev/docs/deployment/ios

## 方法二选一

### 1. 使用 build ipa 命令

#### flutter build ipa 执行完之后会生成`Runner.xcarchive`文件， 生成路径为`build/ios/archive/`接着执行以下命令

```
 // Add abosulte path(Exact location of file in disk)
flutter build ipa --export-options-plist="---/build/ios/archive/Runner.xcarchive/Info.plist"
```

<div class="separator" style="clear: both;"><a href="https://1.bp.blogspot.com/-IzIA69sdVWM/YIUvED-gdgI/AAAAAAAATqA/HOMDq7A6y4wqxzOC9T19gawKvnTqd6YKgCNcBGAsYHQ/s0/Snipaste_2021-04-25_17-55-57.png" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" data-original-height="504" data-original-width="2728" src="https://1.bp.blogspot.com/-IzIA69sdVWM/YIUvED-gdgI/AAAAAAAATqA/HOMDq7A6y4wqxzOC9T19gawKvnTqd6YKgCNcBGAsYHQ/s0/Snipaste_2021-04-25_17-55-57.png"/></a></div>

### 2. 使用 build ios 命令

1. 执行 `flutter build ios` (它会生成 Runner.app 文件)
1. 在项目中找到生成的文件 build/ios/iphoneos/Runner.app
1. 创建一个目录`ProjectName`并把 Runner.app 移动到该目录
1. 使用 ZIP 压缩（生成 ProjectName.zip）
1. 最终把生成 ProjectName.zip 重命名生成`ProjectName.ipa`
