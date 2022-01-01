---
title: ADB常用命令及其用法大全
tags:
  - 博客
abbrlink: 3447541d
date: 2021-11-28 22:33:53
---
## ADB常用命令及其用法大全
#### 前言：
> 本文主要记述ADB的常用命令，关于ADB用法大全，可参考文末链接

#### ADB简介：

ADB，即 Android Debug Bridge，它是 Android 开发/测试人员不可替代的强大工具，也是 Android 设备玩家的好玩具。安卓调试桥 (Android Debug Bridge, adb)，是一种可以用来操作手机设备或模拟器的命令行工具。它存在于 sdk/platform-tools 目录下。虽然现在 Android Studio 已经将大部分 ADB 命令以图形化的形式实现了，但是了解一下还是有必要的。
注： 有部分命令的支持情况可能与 Android 系统版本及定制 ROM 的实现有关。

#### 查看当前连接设备：
> 查看当前连接设备：
>
> > adb devices

> 查看当前设备的详细信息
>
> > adb devices -l

> 如果发现多个设备：
>
> > adb -s 设备号 其他指令

#### adb进程启动和终止
> 启动服务进程
>
> > adb start-server

> 杀死后台服务进程
>
> > adb kill-server

#### 查看当前运行的Activity:
> windows环境下:
>
> > adb shell dumpsys activity | findstr "mFocusedActivity"

> Linux、Mac环境下：
>
> > adb shell dumpsys activity | grep "mFocusedActivity"

#### 查看日志：
>> adb logcat

> 将adb日志保存到文件
>
> > adb logcat > 本地文件名

#### 安装apk文件：
>> adb install xxx.apk

> 此安装方式，如果已经存在，无法安装；推荐使用覆盖安装：
>
> > adb install -r xxx.apk

> 比分直接RUN出来的包是test-onlu的无法安装，推荐使用**-t**
>
> > adb install -r -t xxx.apk

#### 卸载App:
> adb uninstall com.zhy.app

> 如果想要保留数据，则：
>
> > adb uninstall -k com.zhy.app

#### 传递文件：
> 往手机SDCard传递文件：
>
> > adb push 文件名 手机端SDCard路径

> 例如：
>
> > adb push 帅照.jpg /sdcard/

> 从手机端下载文件：
>
> > adb pull /sdcard/xxx.txt

> 查看手机端安装的所有app包名:
>
> > adb shell pm list packages

#### 启动Activity:
> adb shell am start 包名/完整Activity路径

> 例如：
>
> > adb shell am start com.zhy.aaa/com.zhy.aaa.MainActivity

> 如果需要携带参数(携带一个Intent,Key 为name):
adb shell am start com.zhy.aaa/com.zhy.aaa.MainActivity -e name zhy

> 启动一个隐式的Intent:
>
> > adb shell am start -a "android.intent.action,VIEW" -d "https://www.google.com"

#### 发送广播：
> adb shell am broadcast -a "broadcastactionfilter"

> 如果需要携带参数（携带一个Intent,key为name）:
>
> > adb shell am broadcast -a "broadcastactionfilter" -e name zhy

#### 启动服务：
> adb shell am startservice "com.zhy.aaa/com.zhy.aaa.MyService"

#### 屏幕截图：
> 可以使用screencap命令来进行手机屏幕截图，例如：
>
> > adb shell screencap /sdcard/screen.png

#### 录制视频：
> 可以使用screenrecord[options] filename命令来录制屏幕视频;
> 例如：
>
> > adb shell screenrecord /sdcard/demo.mp4

#### 远程连接adb
> 通过 IP 地址连接设备。
>
> > adb connect [device-ip-address]

> 断开无线连接
>
> > adb disconnect [device-ip-address]



#### 速查 | ADB 用法大全|官方文档：
> http://www.wanandroid.com/blog/show/2310