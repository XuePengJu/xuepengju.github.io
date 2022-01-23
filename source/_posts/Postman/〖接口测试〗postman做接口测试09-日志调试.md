---
title: 〖接口测试〗postman做接口测试09-日志调试
abbrlink: 344e3c5b
date: 2022-01-15 00:39:30
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(9).png
tags:
 - postman
categories:
  - postman
---

> 在做接口测试时，经常会因为代码写的有问题导致报错，这时通过查看日志就显得非常重要了，postman也提供了这样的功能，它允许我们在脚本中编写打印语句，查看打印的结果 ; 同时也可以查看每个请求的日志信息 。

## postman日志用的是什么编程语言？

在postman中编写日志打印语句使用的是JavaScript，编写的位置可以是Pre-request Script 或Tests标签中。编写打印语句如：console.log("hello,postman")

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/09-001.png) 

 

## 那么打印的日如何看呢 ？

在postman中有俩个入口，第一个入口就是：view-show postman console 。

第二个入口就是左下角第三个图标 。

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/09-002.png) 

 

### 打开的日志界面

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/09-003.png) 

 

这里面有几个比较实用的功能：

搜索日志：输入URL或者打印的日志就能直接搜索出我们想要的请求和日志，这对我们在众多日志中查找某一条日志是非常方便的 。

- 按级别搜索：可以查询log,info,warning,error级别的日志 ，有助于我们更快定位到错误 。


- 查看原始报文(Show raw log)：如果习惯看原始请求报文的话，这个功能可能更方便些 。


- 隐藏请求(Hide network)：把请求都隐藏掉，只查看输出日志 。


总之，通过这个功能，我们在请求接口报错时，通过打印响应的日志，就能很轻松的找到问题原因了 。
