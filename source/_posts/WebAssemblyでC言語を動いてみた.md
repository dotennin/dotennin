---
title: WebAssemblyでC言語を動いてみた
date: 2022-10-30 23:20:53
tags:
  - WebAssembly
  - Javascript
---

<h4>
<span style="font-size: 15px;">準備：</span></h4>
<div>
<div style="background-color: white; border: 0px; box-sizing: inherit; color: #444444; font-family: &quot;helvetica neue&quot;, Helvetica, Arial, sans-serif; font-size: 15px; margin-bottom: 1em; margin-top: 1em; outline: 0px; padding: 0px; vertical-align: baseline;">
WebAssemblyにコンパイルするには、いくつかのツールが必要です、ここでは<span style="color: #252525; font-family: &quot;open sans&quot; , sans-serif; font-size: 16px;">Emscriptenを利用します、</span>詳しくは</div>
<div style="background-color: white; border: 0px; box-sizing: inherit; color: #444444; font-family: &quot;helvetica neue&quot;, Helvetica, Arial, sans-serif; font-size: 15px; margin-bottom: 1em; margin-top: 1em; outline: 0px; padding: 0px; vertical-align: baseline;">
<a href="https://developer.mozilla.org/ja/docs/WebAssembly/C_to_wasm">https://developer.mozilla.org/ja/docs/WebAssembly/C_to_wasm</a>を参考してください</div>
<div style="background-color: white; border: 0px; box-sizing: inherit; color: #444444; font-family: &quot;helvetica neue&quot;, Helvetica, Arial, sans-serif; font-size: 15px; margin-bottom: 1em; margin-top: 1em; outline: 0px; padding: 0px; vertical-align: baseline;">
<br />
試しに<b style="color: #222222; font-family: arial, sans-serif; font-size: 16px;">フィボナッチ</b><span style="color: #222222; font-family: &quot;arial&quot; , sans-serif; font-size: 16px;">数列</span><span style="color: #222222; font-family: &quot;arial&quot; , sans-serif; font-size: 16px;">を作って</span>100万回の計算した結果を各ブラウザとC言語でのスピードを比較してみます</div>
</div>
<pre style="background: #f0f0f0; border: 1px dashed #cccccc; color: black; font-family: &quot;arial&quot;; font-size: 12px; height: auto; line-height: 20px; overflow: auto; padding: 0px; text-align: left; width: 99%;"><code style="color: black; word-wrap: normal;"> #include&lt;stdio.h&gt;  
 #include&lt;time.h&gt;  
 void fibonacci(int n)  
 {  
      int first = 0, second = 1, next;  
      for (int i = 0; i &lt; n;
 i++)  
      {  
           next = first + second;  
           first = second;  
           second = next;  
      }  
 }  
 int main()  
 {  
      clock_t beg = clock();  
      for (int i = 0; i &lt; 1000000; i++)  
           fibonacci(46);  
      clock_t end = clock();  
      printf("1m fibonacci(46) in c: %lu\n", end-beg);  
 }</code></pre>
<div>
<br />
<span style="background-color: #f6f8fa; color: #4f4f4f; font-family: &quot;source code pro&quot; , &quot;dejavu sans mono&quot; , &quot;ubuntu mono&quot; , &quot;anonymous pro&quot; , &quot;droid sans mono&quot; , &quot;menlo&quot; , &quot;monaco&quot; , &quot;consolas&quot; , &quot;inconsolata&quot; , &quot;courier&quot; , monospace , &quot;pingfang sc&quot; , &quot;microsoft yahei&quot; , sans-serif; font-size: 14px; white-space: pre;">fibonacci.c</span>ファイルを作って上記のソースコードを埋め込み、次のコマンドを実行します<br />
<pre style="background: rgb(238, 238, 238); border: 0px; box-sizing: inherit; color: #4d4d4c; font-family: &quot;source code pro&quot;, Monaco, Menlo, Consolas, monospace; font-size: 0.95em; line-height: 22px; outline: 0px; overflow-wrap: break-word; padding: 10px 15px; vertical-align: baseline;"><b style="box-sizing: inherit;">emcc fibonacci.c -s WASM=1 -o <b style="box-sizing: inherit; font-size: 0.95em;">fibonacci</b></b><b style="box-sizing: inherit; font-size: 0.95em;">.html</b></pre>
<pre style="background: rgb(238, 238, 238); border: 0px; box-sizing: inherit; color: #4d4d4c; font-family: &quot;source code pro&quot;, monaco, menlo, consolas, monospace; line-height: 22px; outline: 0px; overflow-wrap: break-word; padding: 10px 15px; vertical-align: baseline;"><span style="font-size: 14.44px;"><b>emrun ./fibonacci.html</b></span></pre>
</div>
<div>
<div class="separator" style="clear: both; text-align: center;">
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="https://1.bp.blogspot.com/-lKR_8rrubT0/XbexByY6q_I/AAAAAAAANz0/KiFBt5zf7YkHH1GaUQeCFAdqnMW3ESvHgCNcBGAsYHQ/s1600/Screen%2BShot%2B2019-10-29%2Bat%2B12.23.15.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="728" data-original-width="996" src="https://1.bp.blogspot.com/-lKR_8rrubT0/XbexByY6q_I/AAAAAAAANz0/KiFBt5zf7YkHH1GaUQeCFAdqnMW3ESvHgCNcBGAsYHQ/s1600/Screen%2BShot%2B2019-10-29%2Bat%2B12.23.15.png" /></a></div>
<br /></div>
