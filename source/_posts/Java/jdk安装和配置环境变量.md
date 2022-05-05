---
title: jdk安装和配置环境变量
abbrlink: 54eecc7d
date: 2021-05-26 20:51:29
tags:
---

> 学习JAVA，必须得安装一下JDK(java development kit java开发工具包)，配置一下环境就可以学习JAVA了，下面是下载和安装JDK的教程： <!-- more --> 

## 1.JDK下载地址：

http://www.oracle.com/technetwork/java/javase/downloads/index.html

点开链接你应该看到如下图所示的界面：

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjIxODE2ODgy?x-oss-process=image/format,png) 

## 2.点击上图中箭头所指的地方，会出现下面的这个界面，此时你需要根据你的电脑系统来进行对应的版本进行选择，在选择版本和下载之前你需要首先接收协议，具体界面如下图所示：

### 3.双击以后进行JDK的安装（记得按照第二幅图修改一下安装路径，不要什么东西都安装到系统盘。。。）：

#### （1）双击进行安装界面如下所示：

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjIyMDI3NzMy?x-oss-process=image/format,png) 

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjMwMTM2NDcy?x-oss-process=image/format,png)

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjMwMTQ5MzQ3?x-oss-process=image/format,png)

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjMwMjAwMDgy?x-oss-process=image/format,png)

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjMwMjEyMjM3?x-oss-process=image/format,png) 

  ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjMwMjIyNTY1?x-oss-process=image/format,png)

## 4.安装完成后，需要进行环境变量的配置，右键我的电脑—属性----高级系统设置就会看到下面的界面：

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjIyODUzMTEy?x-oss-process=image/format,png) 

## 5.点击上图中的环境变量，然后开始环境变量的配置：

##### （1）点击系统变量下面的新建按钮，变量名JAVA_HOME（代表你的JDK安装路径），值对应的是你的JDK的安装路径。

  ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjIzMDE5ODAw?x-oss-process=image/format,png) 

##### （2）继续在系统变量里面新建一个CLASSPATH变量，其变量值如下图所示：

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjIzMjAxMjM4?x-oss-process=image/format,png) 

此处需要注意：最前面有一个英文状态下的小圆点。。。。很多初学者在配置环境变量的时候就会跌倒在这个坑里。

##### （3）在你的系统变量里面找一个变量名是PATH的变量，需要在它的值域里面追加一段如下的代码：

> %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;

此时你应该在你原有的值域后面追加，记得在原有的值域后面记得添加一个英文状态下的分号。
最后点击确定，此时JDK的环境变量配置就完成了。

## 6.测试自己所配置的环境变量是否正确

（1）WINDOWS+R键，输入cmd，进入命令行界面，如下所示：

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjIzNzM1MTAw?x-oss-process=image/format,png) 

（2）输入java -version命令，可以出现如下图的提示，你可以看你安装的JDK版本。

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjIzOTAxNTA3?x-oss-process=image/format,png) 

（3）输入javac命令可以出现如下的提示：

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjI0MDA1ODgy?x-oss-process=image/format,png) 

（4）输入java命令就会出现如下图所示的结果

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjI0MTMwMjI2?x-oss-process=image/format,png) 

## 7.写一段代码可以验证一下

##### （1）我在E盘新建了一个文件夹叫javafile，在里面有一个Java文件，名字叫TestJava.java，此时需要注意，你的文件名字后缀一定是.java

##### （2）你需要在你的文件里面写下面的代码：
```
public class TestJava{
	public static void main(String[] args){
		System.out.println("I am a  java new learner!");
	}
}
```
##### （3）继续windows+r键进入dos命令行，你需要首先进入你java文件所在的目录，然后分别使用javac命令对你的java文件进行编译，然后使用java命令来解析你的javac命令编译的结果，就会如下图所示这样：

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjI0OTQxNzc4?x-oss-process=image/format,png) 

此处一定要注意：必须进入文件所在的目录；其次使用javac命令 文件的名字的后面一定要跟着.java的文件后缀；使用java命令时.java后缀可以不用写。
当你执行完javac命令如果没有错误提示，说明通过了编译，就会在你的文件目录下生成一个同名的.class文件。

 ![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwNjE4MjI1MjAxNjI5?x-oss-process=image/format,png) 

如果你完成了以上的所有，并且结果显示正确，那么说明你的JDK安装和环境配置都很成功，此时你就可以开始你的JAVA学习了。
JDK1.8 API链接：
http://docs.oracle.com/javase/8/docs/api/
JAVA tutorials:
http://docs.oracle.com/javase/tutorial/