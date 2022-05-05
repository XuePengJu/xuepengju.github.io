---
title: 〖postman〗接口测试20-建立工作流
abbrlink: ab3b7c7
date: 2022-02-27 19:00:43
tags:
 - postman
categories:
  - postman
---

在前面讲的Runner，如果运行集合中的请求，则是按照顺序运行所有请求 。 <!-- more --> 如下图，有4个请求，通过runner运行的话，会顺序这4个请求 。

![img](/img/blog/postman/20/020-01.png)

接下来要学习的这个功能，在脚本中就可以控制脚本的执行顺序，我们来看下这个函数：postman.setNextRequest()，它需要带一个参数 。该参数是要运行的请求名称或ID 。这个函数的功能可以控制请求的执行顺序。

---

**案例**：在登录用例中添加setNextRequest() ，判断登录接口返回值当code=0，就直接请求充值接口。
再次运行该集合，运行完登录接口，
- 当code=0，就会直接请求充值接口 ，只会运行3个接口，会跳过注册接口
![img](/img/blog/postman/20/020-02.png)

- 当code!=0，就会请求注册接口然后依次执行
![img](/img/blog/postman/20/020-03.png)


同样的4个请求，在接口中添加了postman.setNextRequest("xxx")功能后，执行完这个接口就会执行指定的接口，会跳过中间的接口 。