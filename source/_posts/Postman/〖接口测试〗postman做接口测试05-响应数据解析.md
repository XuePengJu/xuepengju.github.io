---
title: 〖接口测试〗postman做接口测试05-响应数据解析
abbrlink: 9656df9f
date: 2022-01-10 22:33:29
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(5).png
tags:
  - postman
categories:
  - postman
---

## 什么是返回？
响应数据是发送请求后经过服务器处理后返回的结果，响应是由三部分组成，分别是状态行、响应头、响应体。我们来看下[postman](https://so.csdn.net/so/search?q=postman)的响应数据展示 

![百度搜索](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/postman%E5%81%9A%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%9505-001.png)

在postman中的响应数据展示：
状态行：Status：200 OK
响应头：Headers + Cookies，需要注意的是Cookies是包含在响应头中的，但是为了明显，工具会分开显示
响应体：Body

## 返回测试什么？
那么这些数据对我们做接口测试有什么作用呢 ？
Body和Status是我们做接口测试的重点，一般来说我们都会验证响应体中的数据和响应状态码
Test Results 是我们编写断言后，可以查看断言的执行结果 ，所以这个对我们也很有用 。
Time 和Size 是我们做性能测试时，可以根据这俩个参数来对所测接口的性能做一个简单的判断。

## 返回里有什么？
接下来我们再来关注下Body中的几个显示主题，分别是：Pretty，Raw，Preview .
![百度搜索](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/postman%E5%81%9A%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%9505-002.png)

Pretty:翻译成中文就是漂亮 ， 也就是说返回的Body数据在这个标签中查看 ，都是经过格式化的，格式化后的数据看起来更加直观，所以postman默认展示的也是这个选项。比如返回html页面，它会经过格式化成HTML格式后展示，比如返回json，那么也会格式化成json格式展示 。

需要说明的是，我们所测的接口多会返回json,这时我们看json数据时，只需要点击HTML后的小三角，选择JSON即可。

Raw：翻译成中文未经过加工的，也就是原始数据 ，原始数据一般都是本文格式的，未经过格式化处理的，一般在抓包工具中都有这个选项 。

Preview：翻译成中文就是预览，这个选项一般对返回HTML的页面效果特别明显，如请求百度后返回结果，点击这个选项后就直接能查看到的页面 ，如下图 。同时这个选项和浏览器抓包中的Preview也是一样的 。
![百度搜索](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/postman%E5%81%9A%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%9505-003.png)