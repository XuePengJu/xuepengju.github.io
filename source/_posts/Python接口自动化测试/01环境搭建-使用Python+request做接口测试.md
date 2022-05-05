---
title: 01环境搭建-使用Python+requests做接口测试
abbrlink: 9d1414ba
date: 2022-05-03 23:55:01
tags:
  - Python接口自动化测试
categories:
  - Python接口自动化测试
---

## 一、为什么使用Python+requests做接口测试

**选用合适的库做接口测试 为什么要重点学习requests模块，而不是urllib**

- requests的底层实现就是urllib
- requests在python2 和python3中通用，方法完全一样
- requests简单易用
- Requests能够自动帮助我们解压(gzip压缩的等)响应内容
- Requests：让HTTP服务人类！

OK，开始愉快的学习requests库吧，在python的标准库中，虽然提供了urllib,utllib2,httplib，但是做接口测试，requests真心好，正如官方说的，“让HTTP服务人类”，一言以蔽之，说明一切，关于它的方法论，这里不是讨论的重点，重点是我们要开始学习它。<!-- more --> 

## 二、安装request库
安装request库的方式非常简单，安装命令为：

	pip  install requests

![1651595044388](/img/blog/Python接口自动化测试/1651595044388.png)

看到显示Successfully installed...表示安装成功。

可以试验下，输入import requests然后回车，没有报错就确认时安装成功了。

![1651595166002](/img/blog/Python接口自动化测试/1651595166002.png)



## 三、在Pycharm里面做个小demo体验下

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time : 2022/5/5 14:24
# @Author : 夏见。
# @File : test01.py

import requests

res = requests.get('http://httpbin.org/get')

print(res.json())

```

![1651732273876](/img/blog/Python接口自动化测试/1651732273876.png)