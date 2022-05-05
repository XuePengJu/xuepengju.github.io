---
title: 〖postman〗接口测试21-读取外部文件进行数据参数化
abbrlink: f46b70d8
date: 2022-02-27 21:11:53
tags:
 - postman
categories:
  - postman
---

测试过程中，常会遇到一个接口要验证很多的测试[数据](/posts/f46b70d8/)，而所输入的参数和验证的参数又几乎是一样的。这样我们就会首先想到数据参数化，在postman中也提供了数据参数化功能。 <!-- more --> 它需要把数据单独的存放在一个文件中管理，然后通过读取这个文件实现所有的数据的验证，具体如下：

### 实现步骤 。

1. 创建数据文件，支持数据格式文件分别为[csv](/posts/f46b70d8/)和接送
2. 请求中替换[参数](/posts/f46b70d8/)变量，定义到文件中的参数名需要在请求中替换
   - 请求参数中替换通过:{undefined{参数名}}
   - 代码中替换通过:data.参数名
3. 通过Runner-Data读取数据文件来运行。

### 案例说明

- 请求天气接口，输入不同的城市id，会返回不同的城市和天气情况 ，需对返回城市和天气进行验证 。

##### 1.创建city.json 或 city.json ,格式如下

   ![img](/img/blog/postman/21/021-01.png)

   ![img](/img/blog/postman/21/021-02.png)

​    

##### 2.在请求中替换参数：city_id,city,weather .

   > 其中city_id在[URL](/posts/f46b70d8/)中替换，故通过{undefined{}}替换 。
   >
   > city和weather在Tests中替换，需要通过data.city , data.weather

   ![img](/img/blog/postman/21/021-03.png)

​    

##### 3.选择数据文件导入
![img](/img/blog/postman/21/021-04.png)

##### 4.查询运行结果 

![img](/img/blog/postman/21/021-05.png)

需要说明的是，通过数据参数化的脚本，就不能通过点击Send按钮正常去发送请求验证了，如果点击Send按钮，脚本读取不到参数会报错 。 