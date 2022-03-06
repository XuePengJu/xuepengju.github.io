---
title: 〖接口测试〗postman做接口测试13-认证(Authorization)
abbrlink: dcc42dc3
date: 2022-02-11 22:13:55
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(13).png
tags:
 - postman
categories:
  - postman
---

# Authorization是什么？
这又是一个非常实用的功能，对我们做接口测试来说，经常要处理登录认证的情况 。如果不用这个Authorization其实也能解决认证的问题，无非就是把要认证的数据按照要求在指定位置传入参数即可。比如我们之前测试的系统，登录后返回的token要在每个请求接口的headers中传入 。这时就需要在每个headers中都填写一个认证参数传入 ，但是这样做的话太过繁琐，如果使用认证(Authorization)功能的话，就会大大简化了我们的认证过程。

我们先来看下这个功能的具体位置及主要作用 。
 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/013-01.png)

Inherit auto from parent:从父级继承身份验证，是每个请求的默认选择 。这是一个很有用的功能，当我们对一个集合(collection)进行测试的时候，集合中的每个请求都需要获取token，那么如果我们在集合中把token处理好的话，那么该集合下的所有请求都会自动获取到这个token，也就省略了我们对每个token进行处理了。

### 实现步骤：
![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/013-02.png)

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/013-03.png)
 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/013-04.png)


### No Auth: 无需身份认证的可以选择这个 。
选中一个集合进行编辑，切换到Pre-Request Script.在这里请求登录接口 ，将返回的token值拿到，然后保存成全局变量 。

切换到Authorization选项卡，在这里直接获取token 。这里的获取token需要根据具体的项目 。比如我们所测试的项目正好是Bearer token这种形式 。直接在列表中使用这种方式输入{undefined{token}}即可。

向集合添加请求，无需进行token处理，所有接口都能请求成功 。

### API Key: 也有很多系统是通过这种认证方式，比如在请求头添加 model: data xxx-xxx-xxx-xxxx
![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/013-05.png)




### Bearer Token:很多系统都是以这种认证方式，就是在请求头中添加Authorization：Bearer Token 。那么使用这种认证就非常方便 。

![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/013-06.png)

> 总之，需要认证方式要根据所测试的系统而定，通过Authorization来处理认证后，能大大节省我们的工作量。