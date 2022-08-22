---
title: WindowsでMacやLinux開発環境を整えてみた
date: 2020-03-03 22:28:07
tags:
  - OS
---

やりたこと：<br />
<a done="done" href="https://brew.sh/index_ja" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://brew.sh/index_ja&amp;ved=2ahUKEwjX2MfrhPznAhXKBIgKHWEAAjIQFjAAegQIBBAB" style="background-color: white; color: #660099; cursor: pointer; font-family: arial, sans-serif; font-size: small; text-decoration-line: none;"></a><br />

<h3 class="LC20lb DKV0Md" style="display: inline-block; font-size: 20px; font-weight: normal; line-height: 1.3; margin: 0px 0px 3px; padding: 4px 0px 0px;">
Homebrewやapt-getみたいなパッケージ管理アプリがほしい</h3>
<div>
<h3 class="LC20lb DKV0Md" style="display: inline-block; font-size: 20px; font-weight: normal; line-height: 1.3; margin: 0px 0px 3px; padding: 4px 0px 0px;">
bashではなくzshを使いたい</h3>
</div>
<div>
<span style="font-size: 20px;">Iterm2みたいな</span><span style="font-size: 20px;">マルチ</span><span style="font-size: 20px;">Terminalウィンドウズを実現したい</span></div>
<div>
<span style="font-size: 20px;"><br /></span></div>
<div>
<h2 style="background-color: white; border-bottom: 1px solid rgb(221, 221, 221); box-sizing: inherit; color: #333333; cursor: pointer; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-feature-settings: &quot;palt&quot;; font-size: 1.6em; line-height: 1.5; margin: 2.2em 0px 2.4rem; padding: 0px 0px 0.1em; position: relative;">
パッケージマネージャ導入</h2>
</div>
<div>
管理者権限でPowershellを開く、Chocolateyのインストール</div>
<div>
<div>
<pre style="border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: inherit; line-height: 1.8; padding: 0px;"></pre>
</div>
<div>
<pre style="border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: inherit; line-height: 1.8; padding: 0px;"><span class="nx" style="box-sizing: inherit; color: #8bdf4c;"><div class="code-frame" data-lang="diff" style="background-color: #364549; box-sizing: inherit; color: #e3e3e3; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-size: 0.9em; margin: 1.5em -32px; padding: 1em 32px; white-space: normal;">
<div class="highlight" style="box-sizing: inherit; overflow-x: auto; padding: 0.5em;">
<pre style="background-color: transparent; border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: inherit; line-height: 1.8; padding: 0px;"><div>
<pre style="border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-size: inherit; line-height: 1.8; padding: 0px;"><span class="nf" style="box-sizing: inherit; color: #8bdf4c;">Set-ExecutionPolicy</span><span class="w" style="box-sizing: inherit;"> </span><span class="nx" style="box-sizing: inherit; color: #8bdf4c;">AllSigned</span><span class="w" style="box-sizing: inherit;">
</span><span class="nf" style="box-sizing: inherit; color: #8bdf4c;">iex</span><span class="w" style="box-sizing: inherit;"> </span><span class="p" style="box-sizing: inherit;">((</span><span class="nf" style="box-sizing: inherit; color: #8bdf4c;">New-Object</span><span class="w" style="box-sizing: inherit;"> </span><span class="nx" style="box-sizing: inherit; color: #8bdf4c;">System.Net.WebClient</span><span class="p" style="box-sizing: inherit;">)</span><span class="o" style="box-sizing: inherit; color: #ff8095;">.</span><span class="nf" style="box-sizing: inherit; color: #8bdf4c;">DownloadString</span><span class="p" style="box-sizing: inherit;">(</span><span class="s1" style="box-sizing: inherit; color: #41b7d7;">'https://chocolatey.org/install.ps1'</span><span class="p" style="box-sizing: inherit;">))</span></pre>
</div>
<div>
<pre style="border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-size: inherit; line-height: 1.8; padding: 0px;"><span class="nx" style="box-sizing: inherit; color: #8bdf4c;">choco install chocolateygui</span></pre>
</div>
</pre>
</div>
</div>
</span></pre>
</div>
</div>
<div>
<br /></div>
<div>
<a href="https://chocolatey.org/install">https://chocolatey.org/install</a></div>
<div>
<h2 style="background-color: white; border-bottom: 1px solid rgb(221, 221, 221); box-sizing: inherit; color: #333333; cursor: pointer; font-family: -apple-system, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, &quot;Hiragino Kaku Gothic ProN&quot;, メイリオ, meiryo, sans-serif; font-feature-settings: &quot;palt&quot;; font-size: 1.6em; line-height: 1.5; margin: 2.2em 0px 2.4rem; padding: 0px 0px 0.1em; position: relative;">
ターミナルソフト</h2>
</div>
<div>
<pre style="border-radius: 0px; border: none; box-sizing: inherit; line-height: 1.8; padding: 0px;"><span class="nx" style="box-sizing: inherit;"><div class="code-frame" data-lang="diff" style="background-color: #364549; box-sizing: inherit; color: #e3e3e3; font-size: 0.9em; margin: 1.5em -32px; padding: 1em 32px; white-space: normal;">
<div class="highlight" style="box-sizing: inherit; overflow-x: auto; padding: 0.5em;">
<pre style="background-color: transparent; border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: inherit; line-height: 1.8; padding: 0px;"><span class="gi" style="box-sizing: inherit; color: #8bdf4c;"><pre style="border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-size: inherit; line-height: 1.8; padding: 0px;"><span class="nx" style="box-sizing: inherit; color: #8bdf4c;">choco install ConEmu</span></pre>
<pre style="border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-size: inherit; line-height: 1.8; padding: 0px;"><span class="nx" style="box-sizing: inherit; color: #8bdf4c;">choco install msys2-installer</span></pre>
</span></pre>
</div>
</div>
<span style="color: rgba(0, 0, 0, 0);">&nbsp;</span><div style="background-color: white; box-sizing: inherit; line-height: 1.9; padding: 0px; white-space: normal;">
<span style="color: #ba0000;">msys2</span><span style="color: #333333; font-size: 16px;">インストール終わったら、msysターミナルを開いて次のコマンドを実行する</span></div>
<span style="color: rgba(0, 0, 0, 0);">
</span><pre style="border-radius: 0px; border: none; box-sizing: inherit; line-height: 1.8; padding: 0px;"><span class="nx" style="box-sizing: inherit;"><div class="code-frame" data-lang="diff" style="background-color: #364549; box-sizing: inherit; color: #8bdf4c; margin: 1.5em -32px; padding: 1em 32px;">
<div class="highlight" style="box-sizing: inherit; overflow-x: auto; padding: 0.5em;">
<pre style="background-color: transparent; border-radius: 0px; border: none; box-sizing: inherit; line-height: 1.8; padding: 0px;"><span class="gi" style="box-sizing: inherit; color: #8bdf4c;"><pre style="border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-size: inherit; line-height: 1.8; padding: 0px; white-space: normal;"><span class="nx" style="box-sizing: inherit; color: #8bdf4c;">pacman -Syuu  # upgrade all packages</span></pre>
<span style="color: rgba(0, 0, 0, 0);"><span style="white-space: normal;">
</span></span><pre style="border-radius: 0px; border: none; box-sizing: inherit; color: inherit; font-size: inherit; line-height: 1.8; padding: 0px; white-space: normal;"><span class="nx" style="box-sizing: inherit; color: #8bdf4c;">pacman -Sy git curl zsh </span></pre>
<pre style="border-radius: 0px; border: none; box-sizing: inherit; line-height: 1.8; padding: 0px;"><span class="nx" style="box-sizing: inherit; font-size: 11.7px;">sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"</span></pre>
</span></pre>
</div>
</div>
<span style="color: #ba0000;">oh-my-zsh</span>インストール終わったら</span>My mintty&nbsp;config file (~/.minttyrc)を編集:</pre>
<pre style="border-radius: 0px; border: none; box-sizing: inherit; line-height: 1.8; padding: 0px;"><div class="CodeMirror cm-s-default" style="background: white; border: 1px solid rgb(217, 220, 221); box-sizing: border-box; clear: both; font-size: 13px; height: auto !important; overflow: hidden; position: relative; white-space: normal;">
<div class="CodeMirror-scroll" style="box-sizing: content-box; height: 400px; margin-bottom: 0px; margin-right: -30px; outline: none; overflow: visible !important; padding-bottom: 30px; position: relative;">
<div class="CodeMirror-sizer" style="border-right: 30px solid transparent; box-sizing: content-box; margin-bottom: 0px; margin-left: 29px; min-height: 26px; min-width: 319px; padding-bottom: 0px; padding-right: 0px; position: relative;">
<div style="box-sizing: border-box; position: relative; top: 0px;">
<div class="CodeMirror-lines" style="box-sizing: border-box; cursor: text; min-height: 1px; padding: 4px 0px;">
<div style="box-sizing: border-box; outline: none; position: relative;">
<div class="CodeMirror-code" style="box-sizing: border-box; outline: none;">
<div style="box-sizing: border-box; position: relative;">
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">BoldAsFont</span><span class="cm-operator" style="box-sizing: border-box;">=</span>no</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="2" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">Columns</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-number" style="box-sizing: border-box; color: #116644;">100</span></span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="3" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">Rows</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-number" style="box-sizing: border-box; color: #116644;">35</span></span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="4" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">Font</span><span class="cm-operator" style="box-sizing: border-box;">=</span>Lucida Console</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="5" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">FontHeight</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-number" style="box-sizing: border-box; color: #116644;">10</span></span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="6" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">ForegroundColour</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-number" style="box-sizing: border-box; color: #116644;">208</span>,208,208</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="7" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">BackgroundColour</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-number" style="box-sizing: border-box; color: #116644;">28</span>,28,28</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="8" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">CursorColour</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-number" style="box-sizing: border-box; color: #116644;">255</span>,175,0</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="9" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">IMECursorColour</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-number" style="box-sizing: border-box; color: #116644;">128</span>,224,160</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="10" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">Transparency</span><span class="cm-operator" style="box-sizing: border-box;">=</span>off</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="11" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">OpaqueWhenFocused</span><span class="cm-operator" style="box-sizing: border-box;">=</span>no</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="12" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">CursorType</span><span class="cm-operator" style="box-sizing: border-box;">=</span>line</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="13" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">CursorBlinks</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-builtin" style="box-sizing: border-box; color: #3300aa;">yes</span></span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="14" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">FontSmoothing</span><span class="cm-operator" style="box-sizing: border-box;">=</span>full</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="15" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">Locale</span><span class="cm-operator" style="box-sizing: border-box;">=</span>en_US</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="16" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">Charset</span><span class="cm-operator" style="box-sizing: border-box;">=</span>UTF-8</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="17" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">ScrollbackLines</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-number" style="box-sizing: border-box; color: #116644;">99000</span></span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="18" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">ScrollMod</span><span class="cm-operator" style="box-sizing: border-box;">=</span>shift</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="19" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">PgUpDnScroll</span><span class="cm-operator" style="box-sizing: border-box;">=</span><span class="cm-builtin" style="box-sizing: border-box; color: #3300aa;">yes</span></span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="20" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">CopyAsRTF</span><span class="cm-operator" style="box-sizing: border-box;">=</span>no</span></pre>
</div>
<div style="box-sizing: border-box; position: relative;">
<div class="CodeMirror-gutter-wrapper" style="background: none !important; border: none !important; box-sizing: border-box; left: -29px; position: absolute; width: 29px; z-index: 4;">
<div class="CodeMirror-linenumber CodeMirror-gutter-elt" data-line-number="21" style="box-sizing: content-box; color: #999999; cursor: default; left: 0px; min-width: 20px; padding: 0px 3px 0px 5px; position: absolute; text-align: right; white-space: nowrap; width: 20px; z-index: 4;">
</div>
</div>
<pre style="-webkit-tap-highlight-color: transparent; background: transparent; border-radius: 0px; border: 0px solid rgb(204, 204, 204); box-sizing: border-box; color: inherit; font-variant-ligatures: contextual; line-height: inherit; overflow-wrap: normal; overflow: visible; padding: 0px 4px; position: relative; word-break: break-all; z-index: 2;"><span style="box-sizing: border-box; padding-right: 29px;"><span class="cm-def" style="box-sizing: border-box; color: blue;">RightClickAction</span><span class="cm-operator" style="box-sizing: border-box;">=</span>paste</span></pre>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="CodeMirror-gutters" style="background-color: #f7f7f7; border-right: 1px solid rgb(221, 221, 221); box-sizing: content-box; height: 400px; left: 0px; min-height: 100%; position: absolute; top: 0px; white-space: nowrap; width: 30px !important; z-index: 3;">
<div class="CodeMirror-gutter CodeMirror-linenumbers" style="box-sizing: content-box; display: inline-block; height: 0px; margin-bottom: -30px; vertical-align: top; white-space: normal; width: 28px;">
</div>
</div>
</div>
</div>
<div pid="16" style="background-color: white; box-sizing: border-box; color: #222635; font-family: Cambria, serif; font-size: 19px; margin-bottom: 15px; margin-top: 5px; padding-top: 0px; white-space: normal;">
</div>
</pre>
</span></pre>
</div>
