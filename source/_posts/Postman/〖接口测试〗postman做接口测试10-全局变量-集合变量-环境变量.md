---
title: 〖接口测试〗postman做接口测试10-全局变量/集合变量/环境变量
abbrlink: c98d9940
date: 2022-01-23 21:13:56
tags:
 - postman
categories:
  - postman
---

> 变量可以使我们在请求或脚本中存储和重复使用其值，通过将值保存在变量中，可以在集合，环境或请求中引用。

对我们做接口测试来说，又是一个非常重要的功能 。

## 在postman常用的三种变量分别是全局变量，环境变量，集合变量 。

> 全局变量：一旦申明了全局变量，全局有效，也就是说postman中的任何集合，任何请求中都可以使用这个变量。它的作用域是最大的 。

> 环境变量：要申明环境变量，首先的创建环境，然后在环境中才能创建变量 。如果要想使用环境变量，必须先选择(导入)这个环境，这样就可以使用这个环境下的变量了 。需要说明的是环境也可以创建多个 。每个环境下又可以有多个变量 。

> 集合变量：集合变量是针对集合的，也就是说申明的变量必须基于某个集合，它的使用范围也只是针对这个集合有效 。

其中，他们的作用域范围依次从大到小：全局变量>集合变量>环境变量 。 当在几个不同的范围内都申明了相同的变量时，则会优先使用范围最小的变量使。

## 想要使用变量中的值只需俩个步骤，分别是定义变量和获取变量 。

    1.定义变量（设置变量）
    
    2.获取变量（访问变量）

### 1. 定义变量

定义全局变量和环境变量，点击右上角的小齿轮，弹出如下界面，就可以根据需求定义全局变量或者环境变量了。

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/010-01.png) 

已经定义的全局变量和环境变量，可以进行快速查看

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/010-02.png) 

### 2.定义集合变量

#### 2.1 选择一个集合，打开查看更多动作(...)菜单，然后点击编辑 。选择“变量”选项卡以编辑或添加到集合变量。

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/010-03.png) 

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/010-04.png) 


#### 2.2 定义变量除了以上方式，还有另外一种方式 。但是这种方式在不同的位置定义，编写不一样。

在URL，Params , Authorization , Headers , Body中定义：

手工方式创建一个空的变量名

在以上的位置把想要的值选中右击，选中Set：环境|全局 ，选中一个变量名，点击后就会保存到这个变量中

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/010-05.png) 

在Tests，Pre-requests Script：

定义全局变量：pm.collectionVariables.set("变量名",变量值)

定义环境变量：pm.environment.set("变量名"，变量值)

定义集合变量：pm.variables.set("变量名",变量值)

### 3.获取变量

定义好变量，接下来就可以使用变量了 。需要注意的是，在不同的位置获取变量，编写的规则也是不一样的 。

如果在请求参数中获取变量，无论是获取全局变量，还是环境变量，还是集合变量，获取的方式都是一样的编写规则：{undefined{变量名}} 。

请求参数指的是：URL，Params , Authorization , Headers , Body

如果是在编写代码的位置(Tests,Pre-requests Script)获取变量，获取不同类型的变量，编写的代码都不相同，具体如下：

获取环境变量：pm.environment.get(‘变量名’)

获取全局变量：pm.globals.get('变量名')

获取集合变量：pm.pm.collectionVariables.get.get('变量名')

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/010-06.png) 

变量的使用场景非常广泛，比如我们后面要提到的接口关联，请求前置脚本都会使用到变量 。

