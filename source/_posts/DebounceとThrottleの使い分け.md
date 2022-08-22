---
title: DebounceとThrottleの使い分け
date: 2019-04-22 2:25:41
tags:
  - JavaScript
---

Throttle(take first): 決められた時間単位内（delay）、最初のアクションしか実行しない<br />

<pre style="background-color: #002b36; color: #93a1a1; font-family: 'Menlo'; font-size: 9.0pt;"><span style="color: #268bd2;">function </span><span style="color: #b58900;">throttle</span>(fn, delay) {
  <span style="color: #859900;">let </span><span style="color: #268bd2;">timerId</span>;
  <span style="color: #859900;">let </span><span style="color: #268bd2;">lastExecTime </span>= <span style="color: #d33682;">0</span>;
  <span style="color: #859900;">return </span>() =&gt; {
    <span style="color: #859900;">const </span><span style="color: #268bd2;">context </span>= <span style="color: #d33682;">this</span>;
    <span style="color: #859900;">const </span><span style="color: #268bd2;">args </span>= <span style="color: #268bd2; font-style: italic;">arguments</span>;
    <span style="color: #859900;">let </span><span style="color: #268bd2;">elapsedTime </span>= <span style="color: #268bd2; font-style: italic;">performance</span>.<span style="color: #b58900;">now</span>() - <span style="color: #268bd2;">lastExecTime</span>;
    <span style="color: #859900;">const </span><span style="color: #b58900;">execute </span>= () =&gt; {
      fn.<span style="color: #b58900;">apply</span>(<span style="color: #268bd2;">context</span>, <span style="color: #268bd2;">args</span>);
      <span style="color: #268bd2;">lastExecTime </span>= <span style="color: #268bd2; font-style: italic;">performance</span>.<span style="color: #b58900;">now</span>();
    }
    <span style="color: #859900;">if </span>(!<span style="color: #268bd2;">timerId</span>) {
      <span style="color: #b58900;">execute</span>();
    }
    <span style="color: #859900;">if </span>(<span style="color: #268bd2;">timerId</span>) {
      <span style="color: #b58900;">clearTimeout</span>(<span style="color: #268bd2;">timerId</span>);
    }
    <span style="color: #859900;">if </span>(<span style="color: #268bd2;">elapsedTime </span>&gt; delay) {
      <span style="color: #b58900;">execute</span>();
    } <span style="color: #859900;">else </span>{
      <span style="color: #268bd2;">timerId </span>= <span style="color: #b58900;">setTimeout</span>(<span style="color: #b58900;">execute</span>, delay);
    }
  }
}</pre>
<div class="separator" style="clear: both; text-align: left;">
<span style="text-align: start;">Debounce(take latest): 決められた時間単位内（delay）、&nbsp;何に実行されない場合、最後のアクションを実行する</span></div>
<pre style="background-color: #002b36; color: #93a1a1; font-family: 'Menlo'; font-size: 9.0pt;"><span style="color: #268bd2;">function </span><span style="color: #b58900;">debounce</span>(fn, interval) {
  <span style="color: #859900;">let </span><span style="color: #268bd2;">timerId</span>;
  <span style="color: #859900;">return </span>() =&gt; {
    <span style="color: #b58900;">clearTimeout</span>(<span style="color: #268bd2;">timerId</span>);
    <span style="color: #859900;">const </span><span style="color: #268bd2;">context </span>= <span style="color: #d33682;">this</span>;
    <span style="color: #859900;">const </span><span style="color: #268bd2;">args </span>= <span style="color: #268bd2; font-style: italic;">arguments</span>;
    <span style="color: #268bd2;">timerId </span>= <span style="color: #b58900;">setTimeout</span>(() =&gt; {
      fn.<span style="color: #b58900;">apply</span>(<span style="color: #268bd2;">context</span>, <span style="color: #268bd2;">args</span>);
    }, interval);
  }
}</pre>
<div class="separator" style="clear: both; text-align: center;">
<br /></div>
<div class="separator" style="clear: both; text-align: center;">
<a href="https://1.bp.blogspot.com/-2JTgh2_AyZU/XcT4AIw-c2I/AAAAAAAAN2Y/zsuhZTMh4fYjl3tXbG4JucjjouypZn7gQCNcBGAsYHQ/s1600/39B284FC-F6F2-4709-965D-7FBFC67C6D29.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="847" data-original-width="1600" height="338" src="https://1.bp.blogspot.com/-2JTgh2_AyZU/XcT4AIw-c2I/AAAAAAAAN2Y/zsuhZTMh4fYjl3tXbG4JucjjouypZn7gQCNcBGAsYHQ/s640/39B284FC-F6F2-4709-965D-7FBFC67C6D29.png" width="640" /></a></div>
<br />
Demo:&nbsp;<a href="http://demo.nimius.net/debounce_throttle/">http://demo.nimius.net/debounce_throttle/</a><br />
<br />
