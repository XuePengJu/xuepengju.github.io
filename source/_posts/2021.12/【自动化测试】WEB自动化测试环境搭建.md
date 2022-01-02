---
title: 【自动化测试】WEB自动化测试环境搭建
abbrlink: a42e3f6d
date: 2021-12-08 23:54:16
tags:
---

一、selenium安装

Python3.x安装后就默认就会有pip（pip.exe默认在python的Scripts路径下），使用pip安装selenium：

在CMD命令行输入：pip install selenium 

二、Webdriver、geckodriver下载配置：

Webdriver下载路径：http://chromedriver.storage.googleapis.com/index.html，用于驱动打开Chrome；

geckodriver下载路径：https://github.com/mozilla/geckodriver/releases，用于驱动打开Firefox；

下载后放在python.exe相同目录下:

![img](https:////upload-images.jianshu.io/upload_images/17223368-b0594b2a52a4034b.png?imageMogr2/auto-orient/strip|imageView2/2/w/755/format/webp)

测试下：打开python自带编辑器IDLE

![img](https:////upload-images.jianshu.io/upload_images/17223368-d4dc876f1a52d488.png?imageMogr2/auto-orient/strip|imageView2/2/w/472/format/webp)

如果能正常运行就证明驱动安装成功

三、pyCharm设置

打开pyCharm,点开File-Settings加入selenium，如下图，点+搜索selenium，点Install Package

![img](https:////upload-images.jianshu.io/upload_images/17223368-e1a2c5f78a16bf5c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1194/format/webp)

二、mac环境搭建

1.前提

(1)mac系统自带python2.7，如果你要的是python3版本，需要自己下载安装。

(2)安装好IDE:pycharm

(3)安装好chrome浏览器

(4)下载chromedriver : http://npm.taobao.org/mirrors/chromedriver/2.36/（放到user/local/bin，打开访达-前往-前往文件夹：输入/usr/local/bin）

————————————————

2.安装selenium操作：

打开终端，输入：sudo pip3 install selenium（python2版本输入sudo pip install selenium） 

打开“终端”方法：

在 Mac 上，请执行以下一项操作：

点按程序坞中的“启动台”图标 ，在搜索栏中键入“终端”，然后点按“终端”。

在“访达”中，打开“/应用程序/实用工具”文件夹，然后连按“终端”，打开。

导入第三方的包，别人都有file→setting，我这怎么就是没有。也是心累。

在这里记录一下，免得跟多人入坑

1、PyCharm→Preferences→Project：项目名→Project Interpreter

![img](https:////upload-images.jianshu.io/upload_images/17223368-ea23f8ce76a0c6fc?imageMogr2/auto-orient/strip|imageView2/2/w/1003/format/webp)

2、点击这个加号可以导入新的库,点击install，这里以requests库为例

![img](https:////upload-images.jianshu.io/upload_images/17223368-2407675f4ef9d068?imageMogr2/auto-orient/strip|imageView2/2/w/924/format/webp)

3、查看是否已经存在

![img](https:////upload-images.jianshu.io/upload_images/17223368-58d95cbcea9a5638?imageMogr2/auto-orient/strip|imageView2/2/w/1003/format/webp)

库已经导入了。