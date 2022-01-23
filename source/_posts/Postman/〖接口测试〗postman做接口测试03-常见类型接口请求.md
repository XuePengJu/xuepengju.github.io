---
title: 〖接口测试〗postman做接口测试03-常见类型接口请求
abbrlink: 66841aa6
date: 2021-03-20 20:18:17
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(3).png
tags:
 - postman
categories:
  - postman
---


在做接口测试时，我们经常遇到以下4种类型的接口，分别是查询参数接口，表单类型的接口，支持文件上传的接口以及json类型的接口 。那么这些类型的接口在postman如何去请求呢 ？

## 一、查询参数的接口请求

#### 1. 什么是查询参数?

> 所谓的查询参数，其实就是URL地址中问号（?）后面的部分就叫查询参数

比如：http://cx.shouji.360.cn/phonearea.php?number=13012345678 。在这个接口中，查询参数就是:number=13012345678 。而这一部分是由有键值对组成，格式为：key1=value1&key2=value2, 如果有多组键值对，需要用&隔开 。

#### 2. postman如何请求?

1. 在postman中实现这类接口请求非常简单，一般就需要明确俩个参数即可，一个是请求方法，一个请求地址。

2. 针对上面的那个接口，地址已经给出 ，而它的请求方法是get 。那么在postman中只需要把这俩个参数填写上即可请求 。


#### 3. 具体实现步骤：

1. 打开postman，新建一个请求。

2. 在请求方法中选择请求方法：GET,因为在postman中默认的请求方法就是GET,所以这一步可以忽略

3. 接口URL中输入地址，点击Send按钮就发送请求了 。


 ![img](https://img-blog.csdnimg.cn/20200414104224746.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ZlbnVzdGVjaDA5MTk=,size_16,color_FFFFFF,t_70) 

 

> 说明：查询参数的URL一般直接拷贝到输入的URL地址栏中就可以了，当然也可以把查询参数在Params中输入，俩者的效果是一样的 。

 

## 二、json类型的接口请求

#### 1. 什么是文件请求？


> json类型的请求参数是接口测试中最常见的一种情况了 ，常用于创建活动&商品等， 它的请求体类型为json,我们来看下这个请求报文 。

```
POST http://xxx/api/sys/login HTTP/1.1
Content-Type: application/json;charset=UTF-8

{"account":"root","password":"123456"}
```
根据以上报文，我们可以分析出，我们在postman只需要填写四个参数即可，具体如下：

请求方法：POST
请求地址：http://xxx/api/sys/login
请求体类型：json
请求体数据：{"account":"root","password":"123456"}

#### 2. 实现步骤：

1. 打开postman，新建一个请求 。

2. 在请求中设置以上四个参数，点击Send按钮。
3. 查看响应数据。

> 注意：在postman中设置请求体类型，需要选择body-> raw -JSON

 ![img](https://img-blog.csdnimg.cn/20200414104923196.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ZlbnVzdGVjaDA5MTk=,size_16,color_FFFFFF,t_70) 

 