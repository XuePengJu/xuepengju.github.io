---
title: 〖postman〗接口测试11-接口关联
tags:
  - postman
categories:
  - postman
abbrlink: adb093cd
date: 2022-02-08 00:13:08
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(11).png
---

# 什么是关联接口

在我们测试的接口中，经常出现这种情况 。 上一个接口的返回数据是下一个接口的输入参数 ，那么这俩个接口就产生了关联关系 。 这种关联在做接口测试时非常常见，那么在postman中，如何实现这种关联关系呢 ？我们通过一个案例来实现。

### 案例：

用户充值，需要用户先登录，然后在进行充值操作：

调用登录接口成功后会返回如下信息：

```
{

  "code": 0,

  "msg": "OK",

  "data": {

    "id": 4,

    "leave_amount": 6300.0,

    "mobile_phone": "15943873886",

    "reg_name": "Auto_Test",

    "reg_time": "2022-02-03 07:38:06.0",

    "type": 0,

    "token_info": {

      "token_type": "Bearer",

      "expires_in": "2022-02-07 16:24:08",

      "token": "eyJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJfaWQiOjQsImV4cCI6MTY0NDI1MTA0OH0.yXw4-_vnTJs3c1wPTwd8saMae8OP1jQ7Vlizvv0wygoD0ZCwX9Ahe6AHUEKsPJeOKkxfcXDXBcW4JNJ8mDkuvw"

    }

  },

}
```

而充值接口需要传入token，登录接口正好返回了token。那么这俩个接口就产生了关联 。那么在postman 可以通过以下三步完成这俩个接口的关联实现 。

### 实现步骤：

1. 登录获取后获取token
2. 将token保存到环境变量
3. 充值接口调用环境变量中的token就可以实现业务操作

 ![登录](/img/blog/postman/11/011-01.png) 
 ![充值](/img/blog/postman/11/011-02.png) 

>  可以看出，接口的关联的解决方案都是用的是变量中的知识，也就是说只要你明确了要提取的值，后面就是保存该值，然后在其他接口使用该值就可以了。