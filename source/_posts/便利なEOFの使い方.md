---
title: 便利なEOFの使い方
date: 2022-10-29 10:53:42
tags: Shell
---

<h2 style="background-color: white; border-bottom: 1px solid rgb(221, 221, 221); box-sizing: inherit; color: #333333; cursor: pointer; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-feature-settings: &quot;palt&quot;; font-size: 1.6em; line-height: 1.5; margin: 2.2em 0px 2.4rem; padding: 0px 0px 0.1em; position: relative;">
ヒアドキュメントとは</h2>
<div class="code-frame" data-lang="lang" style="background-color: #364549; box-sizing: inherit; color: #e3e3e3; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-size: 0.9em; margin: 1.5em -32px; padding: 1em 32px;">
<div class="highlight" style="box-sizing: inherit; overflow-x: auto; padding: 0.5em;">
<pre style="background-color: transparent; border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: inherit; line-height: 1.8; padding: 0px;">echo line1
echo line2
echo line3
</pre>
</div>
</div>
<div style="background-color: white; box-sizing: inherit; color: #333333; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-size: 16px; line-height: 1.9; padding: 0px;">
上記のような事を下記に置き換える事ができます。</div>
<div class="code-frame" data-lang="lang" style="background-color: #364549; box-sizing: inherit; color: #e3e3e3; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-size: 0.9em; margin: 1.5em -32px; padding: 1em 32px;">
<div class="highlight" style="box-sizing: inherit; overflow-x: auto; padding: 0.5em;">
<pre style="background-color: transparent; border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: inherit; line-height: 1.8; padding: 0px;">cat &lt;&lt;EOF
line1
line2
line3
EOF
</pre>
</div>
</div>
<div style="background-color: white; box-sizing: inherit; color: #333333; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-size: 16px; line-height: 1.9; padding: 0px;">
シンプルですね。<br style="box-sizing: inherit;" />ファイルを作りたいときはリダイレクトするだけです。</div>
<div class="code-frame" data-lang="lang" style="background-color: #364549; box-sizing: inherit; color: #e3e3e3; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-size: 0.9em; margin: 1.5em -32px; padding: 1em 32px;">
<div class="highlight" style="box-sizing: inherit; overflow-x: auto; padding: 0.5em;">
<pre style="background-color: transparent; border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: inherit; line-height: 1.8; padding: 0px;">cat &lt;&lt;EOF &gt; test
line1
line2
line3
EOF</pre>
</div>
</div>
