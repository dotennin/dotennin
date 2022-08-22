---
title: Puppeteer on arm machine
date: 2021-02-27 22:47:41
tags:
  - JavaScript
  - Arm
  - CI
---

### Install Chromium by running:

```
rakutenS git:(master) ✗ sudo apt install chromium-browser chromium-codecs-ffmpeg
```

### Find chromium-browser folder

```
➜  rakutenS git:(master) ✗ which chromium-browser
/usr/bin/chromium-browser
```

### Change the executablePath to the below

index.js

```
const puppeteer = require('puppeteer');

(async () => {
 const browser = await puppeteer.launch({
     headless: true,
     executablePath: '/usr/bin/chromium-browser',
     args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();
await page.goto('https://example.com');
await page.screenshot({path: 'example.png'});

await browser.close();
})();
```

Thats all , enjoy!
