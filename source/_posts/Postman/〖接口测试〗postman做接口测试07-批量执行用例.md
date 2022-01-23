---
title: 〖接口测试〗postman做接口测试07-批量执行用例
abbrlink: c4b6dbb9
date: 2022-01-12 23:05:36
tags:
 - postman
categories:
  - postman
---

>  当我们在一个Collection中编写了很多的接口测试用例，想一起执行这批用例，在postman中是如何操作呢 ？

# 实现步骤：

## 1. 选中一个Collection，点击右三角，在弹出的界面点击RUN
 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/07-001.png) 


## 2. 这是会弹出一个叫Collection Runner的界面，默认会把Collection中的所有用例选上.
 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/07-002.png) 

## 3. 点击界面下方的RUN Collection，就会对Collection选中的所有测试用例运行 。

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/07-003.png) 

### 对上面的几个红框内的功能进行简单说明：
断言统计：左上角的俩个0是统计当前Collection中断言成功的执行数和失败的执行数，如果没有编写断言默认都为0 。

- Run Summary: 运行结果总览，点击它可以看到每个请求中具体的测试断言详细信息 。

- Export Result：导出运行结果，默认导出的结果json文件 。

- Retry: 重新运行，点击它会把该Collection重新运行一遍

- New：返回到Runner，可以重新选择用例的组合 。

总体来说，这个功能主要是用于对一个Collection中的所有用例或部分用例进行批量运行，已达到手工回归测试的目的。
