---
title: 〖postman〗接口测试14-导入导出
tags:
  - postman
categories:
  - postman
abbrlink: 6172e27e
date: 2022-02-15 22:59:55
---

这又是一个非常实用的功能。可以将postman中的集合脚本，环境变量、全局变量导出，然后分享到团队成员，也可以通过导出后的脚本通过newman生成测试报告。更牛的是可以把浏览器，抓包工具，接口文档(swagger)中的数据包导入到postman中，并且会自动生成一个请求 。非常非常的方便 。 <!-- more --> 

## 1.导出

### 导出集合脚本

选择其中一个集合，点击右边的三个点（...）,选择‘export’.

在弹出的对话框Collection v2.1(recommended),点击‘Export’ .

选择本地路径保存即可，默认导入的文件格式是json且文件名中含有Collection,这样能区分出是集合文件 。

### 导出环境/全局变量

选择右上角的小齿轮(MANAGE ENVIRONMENT)，

如果是选择环境变量导出，只需要在点击对应环境的下载图标

如果是选择全局变量导出，点击Globals,再点击Download as JSON .

选择本地路径保存即可，默认导出的文件格式是json文件名找那个含有environemnt或globals，可以区分出这是环境变量文件或全局变量文件

 ![img](/img/blog/postman/14/014-01.png) 

简单来说，导出后的文件主要就是以下几个目的：

​	分享给团队成员

​	生成测试报告

​	数据备份

## 2.导入

导入有四个选项，支持从文件导入，文件夹导入，从链接导入，粘贴文本导入。导入的入口：

 ![img](/img/blog/postman/14/014-02.png) 

### Import File：从文件导入

可以支持集合文件导入，环境/全局变量文件导入(json)，通过抓包工具保存的请求文件导入 。

无论是导入集合文件还是变量文件，都需要提前把对应的文件导出 。 当然此功能的使用场景就是团队成员相互分享脚本 。

  ![img](/img/blog/postman/14/014-03.png) 

### 导入fiddler数据：

可以将fiddler的抓取到的数据包导出，然后在postman中导入，就会在postman自动生成请求，无需任何修改 。具体实现步骤如下：

从fiddler中选择一个请求，然后导出脚本文件 。

在postman中的import File 中导入即可

会自动将请求转变成postman脚本。

 ![img](/img/blog/postman/14/014-04.png) 

 ![img](/img/blog/postman/14/014-05.png) 

 ![img](/img/blog/postman/14/014-06.png) 

### Import Folder：选择从文件夹导入。

有时候我们导出的集合需要用到环境变量，所以，需要把集合文件和环境变量文件都要导出，把它们放在一个文件夹下，如团队成员需要时，可以选择Import Folder直接一次性都导入即可。

### Import From Link：通过链接导入也可以将集合分享给团队成员。

但 使用这个功能需要先注册账号且登录才可以 。具体实现步骤如下 ：

选择一个集合，点击分享

 ![img](/img/blog/postman/14/014-07.png) 

在弹出的界面点击Get public link

 ![img](/img/blog/postman/14/014-08.png)

 ![img](/img/blog/postman/14/014-09.png)  



 选择Import-Import From Link 进行导入

 ![img](/img/blog/postman/14/014-10.png) 

Paste Raw Text：这个功能可以将浏览器的数据包或接口文档（swagger）的数据粘贴进来自动生成请求 ，无需任何修改，就可以直接发送请求 。非常的赞 。

实现步骤：

在浏览器中抓取到想要的包，然后右键copy出Curl的数据包

在postman的import中将数据粘贴进来，就会自动生成了对应的请求 。

  ![img](/img/blog/postman/14/014-11.png) 

 ![img](/img/blog/postman/14/014-12.png) 

 ![img](/img/blog/postman/14/014-13.png) 

下面的这个截图是从接口文档swagger，将这个数据包拷贝粘贴到上面的文本中(Paste Raw Text) 也可以自动生成请求 。

 ![img](/img/blog/postman/14/014-14.png) 

 

>  总之，这个功能非常实用，尤其是可以把浏览器或抓包工具中的数据包导入进来直接使用，大大的减少了我们的接口实现时间 。

  <！--more--> 