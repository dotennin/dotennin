---
title: 为 Python 设置 Google API 客户端库
date: 2022-01-15 11:43:45
tags: GMC
---

### 为 Python 设置 Google API 客户端库需要完成以下步骤：

1. 配置本地开发环境

   1. 下载`Python`对应的 [Google API client libraries](https://developers.google.com/api-client-library)
   1. 配置`Python`虚拟环境[Python virtual environment](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)
   1. 创建一个`~/shopping-samples/content/`目录

      > 这个路径，以及在步骤 5 中创建的 `merchant-info.json` 文件的文件名，在步骤 7 中下载的 Content API samples 目录中的 `python/shopping/content/common.py` 文件中定义。

1. 下载`content-api`

   1. 在 [ Merchant Center ](https://merchants.google.com/) 的“设置”菜单中，选择 Content API
   1. 点击认证
   1. 添加 `API` key
   1. 保存 `content-api.json` 到本地

1. 将下载的 content-api.json 改名为 `service-account.json`

   > 此文件名在 `_constants.py` 文件中定义，该文件位于第 7 步中下载的 Content API 示例目录中的 `python/shopping/content/` 中。

1. 将 `service-account.json` 文件移动到主目录`/shopping-samples/content/`。
1. 在主目录`/shopping-samples/content/` 中，创建一个空的 `Merchant-info.json` 文件, 并添加以下文本。

   ```json
   {
   "merchantId": your Merchant Center merchant ID,
   "accountSampleUser": "the email address associated with your Merchant Center account"
   }

   ```

1. 克隆（或下载并解压）[ googleads/googleads-shopping-samples ](https://github.com/googleads/googleads-shopping-samples) GitHub repo 到电脑上的任何位置, 它不一定在主目录或~/shopping-samples/content/。
1. 安装所需依赖，导航到`googleads-shopping-samples/python/`并运行:
   ```
   pip install -r requirements.txt
   ```

### 现在已经配置好了 Python API 客户端, 接下来可以和`the Content API`一起进行 API 调用。
