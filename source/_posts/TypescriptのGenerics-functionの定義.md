---
title: TypescriptのGenerics functionの定義
date: 2019-10-30 23:41:56
tags:
  - JavaScript
  - Typescript
---

<h2 id="関数で利用" style="background-color: white; border-left: 3px solid var(--color-primary); box-sizing: inherit; color: #363636; font-family: &quot;Hiragino Kaku Gothic Pro&quot;, Meiryo, sans-serif; font-size: 1.4rem; line-height: 2.5rem; margin: 40px 0px 20px; padding: 0px 12px;">
<span style="color: #4a4a4a; font-size: 17.6px; font-weight: 400;">関数</span></h2>
<h2 id="関数で利用" style="background-color: white; border-left: 3px solid var(--color-primary); box-sizing: inherit; color: #363636; font-family: &quot;Hiragino Kaku Gothic Pro&quot;, Meiryo, sans-serif; font-size: 1.4rem; line-height: 2.5rem; margin: 40px 0px 20px; padding: 0px 12px;">
<pre style="-webkit-font-smoothing: auto; background-color: #322931; box-sizing: inherit; color: #4a4a4a; font-size: 0.875em; font-weight: 400; margin-bottom: 1em; overflow-wrap: break-word; overflow: auto; padding: 0px 1rem; white-space: pre-wrap;"><code class="hljs language-typescript" style="-webkit-font-smoothing: auto; background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: inherit; color: #b9b5b8; display: block; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 1em; overflow-x: auto; padding: 0.5em; white-space: pre;"><span class="hljs-function" style="box-sizing: inherit; color: #1290bf; font-style: inherit; font-weight: inherit;"><span class="hljs-keyword" style="box-sizing: inherit; color: #c85e7c; font-style: inherit; font-weight: inherit;">function</span> <span class="hljs-title" style="box-sizing: inherit; font-style: inherit; font-weight: inherit;">test</span>&lt;<span class="hljs-title" style="box-sizing: inherit; font-style: inherit; font-weight: inherit;">T</span>&gt;(<span class="hljs-params" style="box-sizing: inherit; color: #fd8b19; font-style: inherit; font-weight: inherit;">x: T</span>) </span>{
    <span class="hljs-keyword" style="box-sizing: inherit; color: #c85e7c; font-style: inherit; font-weight: inherit;">return</span> x
}
</code></pre>
<div style="box-sizing: inherit; color: #4a4a4a; font-size: 1.1rem; font-weight: 400; line-height: 1.7; margin-bottom: 1em; overflow-wrap: break-word; padding: 0px;">
アロー関数</div>
<pre style="-webkit-font-smoothing: auto; background-color: #322931; box-sizing: inherit; color: #4a4a4a; font-size: 0.875em; font-weight: 400; margin-bottom: 1em; overflow-wrap: break-word; overflow: auto; padding: 0px 1rem; white-space: pre-wrap;"><code class="hljs language-typescript" style="-webkit-font-smoothing: auto; background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: initial; background-repeat: initial; background-size: initial; box-sizing: inherit; color: #b9b5b8; display: block; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 1em; overflow-x: auto; padding: 0.5em; white-space: pre;"><span class="hljs-keyword" style="box-sizing: inherit; color: #c85e7c; font-style: inherit; font-weight: inherit;">const</span> test = &lt;T&gt;(x: T): <span class="hljs-function" style="box-sizing: inherit; color: #1290bf; font-style: inherit; font-weight: inherit;"><span class="hljs-params" style="box-sizing: inherit; color: #fd8b19; font-style: inherit; font-weight: inherit;">T</span> =&gt;</span> x
</code></pre>
</h2>
<h2 id="呼び出し型を明示的に指定" style="background-color: white; border-left: 3px solid var(--color-primary); box-sizing: inherit; color: #363636; font-family: &quot;Hiragino Kaku Gothic Pro&quot;, Meiryo, sans-serif; font-size: 1.4rem; line-height: 2.5rem; margin: 40px 0px 20px; padding: 0px 12px;">
</h2>
