---
title: App自动化测试（一）之环境搭建
banner_img: https://cdn.magdeleine.co/wp-content/uploads/2021/06/isorepublic-coffee-thanks-1-1400x933.jpg
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/cover-01/3.png
abbrlink: baaef441
date: 2021-12-26 14:28:25
tags:
	- Appium
categories:
	- Appium
---

## App自动化测试环境搭建

## 一、准备jdk环境

[jdk安装和配置环境变量](http://mypeng.site/post/54eecc7d.html)

## 二、准备SDK环境

#### 1、 [ADT Bundle下载](https://www.androiddevtools.cn/)

ADT Bundle包含了Eclipse、ADT插件和SDK Tools，是已经集成好的IDE，只需安装好Jdk即可开始开发，推荐初学者下载ADT Bundle，不用再折腾开发环境。

下载adt-bundle-windows-x64.zip

链接：https://pan.baidu.com/s/1ZHKmPcbV4NVvZwoDzdAKpg
提取码：2gf7

#### 2、ADT Bundle安装

把下载好的 adt-bundle-windows-x86_64-20140702.zip 解压即可。

 ![img](/img/environment/1895590-20200229210636360-1610818154.png)  

#### 3、配置环境变量

1. ##### 点击此电脑右击-->>点击属性

![img](/img/environment/1895590-20200229210702614-864284209.png)

2. ##### 配置SDK环境变量

变量名：ANDROID_HOME

变量值：D:\Program Files (x86)\adt-bundle-windows-x86_64-20140702\sdk（要填写你自己的地址）

![img](/img/environment/1895590-20200229210742813-1698355068.png)

3. ##### 在path中添加变量

```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\build-tools\28.0.3
```
#### 4、验证环境变量是否配置成功

在cmd窗口输入，adb 和 aapt验证环境变量是否配置成功。（** *注意：如果环境变量配置确定无误，但是输入命令出不来，就重启下电脑*）

![img](/img/environment/1895590-20200229210909009-805568491.png)

![img](/img/environment/1895590-20200229210835166-2050290710.png)

## 三、安装Appium
appium 是一个自动化测试开源工具，支持 iOS 平台和 Android 平台上的原生应用，web应用和混合应用。

#### 1、[Appium下载](https://github.com/appium/appium-desktop/releases/tag/v1.13.0)

百度云下载：
链接：https://pan.baidu.com/s/1Di8Qh5NEYeSmQoVFqH6crQ
提取码：huiq

#### 2、Appium安装

![img](/img/environment/1895590-20200229211000223-187798199.png)

1. 点击Appium-windows-1.13.0.exe进行安装。
   ![img](/img/environment/1895590-20200229211032271-1280305583.png)

2. 选择 仅为我安装，点击安装。

![img](/img/environment/1895590-20200229211014622-396878393.png)

3. 安装完成后打开后，可能会提示更新，切记莫更新！！

## 四、安装模拟器，或者使用真机

##### 模拟器推荐：

 [【雷电】](https://www.ldmnq.com/)

 [【夜神】](https://www.yeshen.com/)

## 五、安装Appium-Python-Client库

```python
Copypip install appium-python-client
# 下载不成功可以加上国内镜像
"""
镜像：
（1）阿里云 http://mirrors.aliyun.com/pypi/simple/
（2）豆瓣http://pypi.douban.com/simple/
（3）清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/
（4）中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/
（5）华中科技大学http://pypi.hustunique.com/
"""
pip install appium-python-client -i "https://pypi.doubanio.com/simple/" 
```

### 至此，环境搭建已完成。