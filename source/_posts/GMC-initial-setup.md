---
title: GMC initial setup
date: 2022-01-15 00:41:13
thumbnail: http://www.etrendtalk.com/wp-content/uploads/2021/10/Google-merchant-center.png
tags: GMC
---

## Initial setup

1. 创建 GMC 账户 [ 注册 GMC ](https://support.google.com/merchants/answer/188493).

1. 配置以下帐户设置:
   - [ 网站所有权设置 ](https://support.google.com/merchants/answer/176793).
   - [ 税率设置（仅限美国）](https://support.google.com/merchants/answer/160162).
1. 在 GMC 中，找到商家 ID，即页面右上角帐户电子邮件地址上方的数字。
1. 在[ API 资源管理器 ](https://developers.google.com/shopping-content/reference/rest/v2.1/products/list?apix=true)设置`products.list`
   1. 输入`merchantId`. <small>所有其他请求参数都是可选的。</small>
   1. 在`Credentials`那里,选 `Google OAuth 2.0` and `API` key
   1. 点击`Execute`按钮
   1. 如果出现提示，请使用与您的 GMC 帐户关联的 Google 帐户登录
      ![image](https://raw.githubusercontent.com/dotennin/dotennin/main/assets/images/gmc-api-explorer.jpg)

### 如果设置正确,则会返回 200 状态, 但如果还没有创建商品的话, 则`products.list` 方法 不会返回任何商品.添加以后则会显示如下的返回值

---

## API

### products.list request

> #### cCURL
>
> ```curl
> curl \
>  'https://shoppingcontent.googleapis.com/content/v2.1/536169960/products?key=[YOUR_API_KEY]' \
>  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
>  --header 'Accept: application/json' \
>  --compressed
> ```
>
> #### HTTP
>
> ```http
> GET https://shoppingcontent.googleapis.com/content/v2.1/536169960/products?key=[YOUR_API_KEY] HTTP/1.1
>
> Authorization: Bearer [YOUR_ACCESS_TOKEN]
> Accept: application/json
> ```
>
> #### JAVASCRIPT
>
> ```javascript
> <script src="https://apis.google.com/js/api.js"></script>
> <script>
>  /**
>   * Sample JavaScript code for content.products.list
>   * See instructions for running APIs Explorer code samples locally:
>   * https://developers.google.com/explorer-help/guides/code_samples#javascript
>   */
>
>  function authenticate() {
>    return gapi.auth2.getAuthInstance()
>        .signIn({scope: "https://www.googleapis.com/auth/content"})
>        .then(function() { console.log("Sign-in successful"); },
>              function(err) { console.error("Error signing in", err); });
>  }
>  function loadClient() {
>    gapi.client.setApiKey("YOUR_API_KEY");
>    return gapi.client.load("https://shoppingcontent.googleapis.com/$discovery/rest?version=v2.1")
>        .then(function() { console.log("GAPI client loaded for API"); },
>              function(err) { console.error("Error loading GAPI client for API", err); });
>  }
>  // Make sure the client is loaded and sign-in is complete before calling this method.
>  function execute() {
>    return gapi.client.content.products.list({
>      "merchantId": 536169960
>    })
>        .then(function(response) {
>                // Handle the results here (response.result has the parsed body).
>                console.log("Response", response);
>              },
>              function(err) { console.error("Execute error", err); });
>  }
>  gapi.load("client:auth2", function() {
>    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
>  });
> </script>
> <button onclick="authenticate().then(loadClient)">authorize and load</button>
> <button onclick="execute()">execute</button>
> ```

### products.list response

> #### application/json
>
> ```json
> {
>   "kind": "content#productsListResponse",
>   "resources": [
>     {
>       "kind": "content#product",
>       "id": "online:ja:JP:jmanxfrv",
>       "offerId": "jmanxfrv",
>       "title": "ps5",
>       "description": "play station 5",
>       "imageLink": "https://www.dotenn.com/2022/01/13/4948872415026/",
>       "contentLanguage": "ja",
>       "targetCountry": "JP",
>       "channel": "online",
>       "availability": "in stock",
>       "brand": "sony",
>       "condition": "new",
>       "gtin": "4948872415026",
>       "price": {
>         "value": "120000.00",
>         "currency": "JPY"
>       }
>     }
>   ]
> }
> ```
