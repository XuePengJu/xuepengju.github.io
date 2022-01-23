---
title: 〖接口测试〗postman做接口测试06-用例管理（Collection）
abbrlink: b8685e49
date: 2022-01-11 23:39:50
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(6).png
tags:
 - postman
categories:
  - postman
---

## 怎么解决用例满天飞的局面？

当我们对一个或多个系统中的很多用例进行维护时，首先想到的就是对用例进行分类管理，同时我们还要对这些做回归测试 。那么postman也提供了这样一个功能，就是Collection 。通过这个Collection就可以满足我们的上面说的需求。

### 先对Collection功能的使用场景做个简单总结 。

#### 用例分类管理，方便后期维护

#### 可以进行批量用例回归测试 。

## 那么Collection是如何去管理用例的呢 ？ 
先想象我们要测试一个系统，系统下有多个模块，每个模块下有很多的被测接口用例 。那么基于这个场景，我们来通过Collection来进行实现：

#### 1. 点击Collection，点击+New Collection，在弹出的输入框中输入Collection名称（这个就可以理解为所测试的系统）

![create](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/06-001.png)

#### 2. 选中新建的Collection右键，点击Add Folder ，在弹出对话框中输入文件夹名称（这个就可以理解为系统中的模块）
   ![create](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/06-002.png)

#### 3. 选中新建的Folder，点击Add Request ，在弹出的对话框中输入请求名称，这个就是我们所测试的接口，也可以理解为测试用例 。

![create](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/06-003.png)

那么通过以上三个步骤，达到的效果就是如图所示：
![create](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/06-004.png)


总结，通过上面的操作，我们实现了一个最简单的demo模型。但实际上，这个Collection的用处非常广，很多功能的使用都必须先创建Collection，比如用例的批量执行，Mock ，接口文档等功能 。
