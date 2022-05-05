---
title: 〖postman〗接口测试04-常见类型接口请求
abbrlink: be476180
date: 2021-03-27 20:38:24
tags:
  - postman
categories:
  - postman
---

接下来我们介绍俩种表单 ，分别是：application/x-www-form-urlencoded和multipart/form-data。它们都支持表单请求，所不同的是后一种支持上传文件，而前一种只支持表单 。 <!-- more --> 

## 三、表单类型的请求

#### 1. 什么是表单 ？
> 简单理解就是在请求头中查看Content-Type，它的值如果是:application/x-www-form-urlencoded .那么就说明客户端提交的数据是以表单形式提交的

我们都知道，在发送HTTP请求的时候，一个请求中一般包含三个部分，分别是请求行，请求头，请求体 。不同的接口，请求体的数据类型是不一样的，比较常见的一种就是表单类型，见下图

 ![img](/img/blog/postman/04/04-01.png) 

#### 2. postman中如何请求？


在postman请求上图的接口，我们只需要填写四个参数，分别是：

请求方法：POST
请求URL：http://localhost/index.php?m=Home&c=User&a=do_login&t=0.21942974229794432
请求头：Content-Type：application/x-www-form-urlencoded
请求体： username=13088888888&password=123456&verify_code=8888

#### 3. 实现步骤：

   1. 打开postman，新建一个请求 。
   2. 在请求中设置以上四个参数，点击Send按钮。
   3. 在postman中设置请求体类型为，需要选择body-> x-www-form-urlencoded
   4. 查看响应数据。


 ![img](/img/blog/postman/04/04-02.png) 

## 四、支持上传文件的表单请求

#### 1. 什么是文件请求？

在做接口测试时，也会遇到需要上传文件的接口，比如微信的更新头像。这就需要另外一种表单的支持：multipart/form-data。这种类型的表单既支持上面类型的表单请求，同时支持上传文件。 它的请求报文往往是这样的。
```
POST http://localhost/index.php/home/Uploadify/imageUp/savepath/head_pic/pictitle/banner/dir/images.html HTTP/1.1
Content-Type: multipart/form-data
file=a1.jpg
```
这种类型的接口，在postman中该如何请求呢 ？ 我们先分析需要填写的参数 。
请求方法：POST
请求URL：http://localhost/index.php/home/Uploadify/imageUp/savepath/head_pic/pictitle/banner/dir/images.html
请求类型：multipart/form-data
请求体：file=a1.jpg

#### 2. 实现步骤：

1. 打开postman，新建一个请求 。
2. 在请求中设置以上四个参数，点击Send按钮。
3. 注意：在postman中设置请求体类型，需要选择body-> form-data 。
4. file中要选择File类型，然后上传本地的文件 。
5. 查看响应数据。

 ![img](/img/blog/postman/04/04-03.png) 

> 总结 ，以上四种类型的接口就是我们常见的接口请求，简单的来说，其实就是在Body中分别选择form-data(支持上传文件)，x-www-form-urlencoded(表单),raw-json（json）。最后填写响应的请求数据即可 。