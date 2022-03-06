---
title: 〖postman〗接口测试19-Collection-Runner
abbrlink: 6556c33b
date: 2022-02-27 18:44:07
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(19).png
tags:
 - postman
categories:
  - postman
---

> 经常我们要把编写好的用例进行回归测试，这时我们就可以通过Runner来选择我们要运行的测试集进行回归。




进入Runner有俩个入口，第一个就是选择一个<font color="#CD7F32">集合</font> ，点击右三角进入（批量执行用例），第二个就是在postman的导航栏左侧 （如图），打开的界面如下。

![img](/img/blog/postman/19/019-01.png)

![img](/img/blog/postman/19/019-02.png)

功能说明：

- All Collections : 列出所有集合，可以选择一个集合运行
- Environment : 环境列表 ，当选择的集合使用到了环境，这里就必须选择 ,反之，可不选。
- Iterations :迭代次数，这里面更多的使用场景读取外部文件进行参数化 。当然一个集合也可以重复运行。
- Delay ：请求间的间隔时间，默认为0也就是没有间隔 。
- Data ： 读取数据文件进行参数化的选项 。
- Save Seponses : 保存响应数据，默认情况不开启 ，但是当集合中有请求报错时，我们打开此选项 。就可以在Run Result查看每个请求的响应结果 。
- keep variable values : 持久变量，默认为开启状态，开启后，前面请求的变量设置的值，后面有请求修改此值，会覆盖此值 。
- run collection without using stord cookies : 不使用cookies保存的值运行
- Save cookies after collection run : 集合中的请求在执行期间创建/更新cookie 。打开此选项，可以将cookie保存到cookie管理器，从而覆盖任何现有的cookie。
- Recent RUN ：右侧是保存了最近运行的结果，可以点击打开查看 。也可以下载 和删除 。
- Import/Export :可以将运行结果导出后再导入结果进行查看 。