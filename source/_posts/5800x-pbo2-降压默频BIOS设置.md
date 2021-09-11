---
title: 5800x pbo2 降压默频BIOS设置
date: 2021-09-12 01:11:01
tags: PC
---

#### 我的小机箱只能用 140 水冷渣散热， 只能把 PPT TDC EDC 限制在 105 75 130 左右才能在烤鸡不超 90 度。

#### 超过 90 度后开始降频率跑分反而更低。

#### 推荐使用[coreCycler](https://github.com/sp00n/corecycler)进行高低频 BOOST 测试分核降压曲线设置极限数值，它会对每个核心轮流调度， 一旦有问题会弹出错误显示出来，这样可以针对出错的核心加压增加稳定性。

#### 完整测试下来跑分比默认更高, R23 原来 1509 14700， 现在 1606 15500(室温 28 度)， 反而更省电了（原来 130 瓦，现在 100 瓦）。 FPU 烤鸡温度 AIDA64 显示在 85-90 度左右（5 分内），下边是我的参数设置， 仅供参考。

### 注： Negative value 这项要根据自己核心实际情况设置

AMD Overclocking(undervolt)

1. PBO -> advanced
2. Precision Boost Overdriver Scalar -> auto
3. All Core Curve Optimizer Sign -> Negative
4. PBO Limits -> manual PPT Limits[W]：112；TDC Limits[A]：77；EDC Limits[A]：137`（TDC设比较低主要用于限制多核同时运行带来的功耗增加，让HWI中CPU TDC Limit跑满上限值100%， 这样可以防止CPU撞温度墙而降频）`
5. Precision Boost Overdriver Scalar -> Manual
6. Precision Boost Overdriver Scalar -> 5X
7. Max CPU Boost Clock Override -> 0MHz
8. Favorites -> CPU Vcore Loadline Calibration -> auto
9. Curve Optimizer -> per Cores -> negative
   |Core|Negative|
   |-|-|
   |0|19|
   |1|5|
   |2|20|
   |3|18|
   |4|9|
   |5|19|
   |6|14|
   |7|22|
