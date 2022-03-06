---
title: 〖接口测试〗postman做接口测试16-生成测试报告
abbrlink: 43b8c324
date: 2022-02-20 16:54:38
tags:
 - postman
categories:
  - postman
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(16).png
---

# 生成测试报告

postman生成测试报告需要一个插件：newman ，并且这个插件需要先安装 。

## 安装步骤：

1. 安装nodejs: newman是由nodejs开发，所以要先安装它的运行环境，下载地址：http://nodejs.cn/download/ 。安装成功后需要验证：在cmd窗口中输入node -v,如果输出node的版本信息，则证明安装成功。

2. 安装newman：安装成功nodejs后，会自动安装一个包管理工具npm(类似于python中的pip)。通过它就可以直接安装newman。 打开cmd窗口输入：npm install -g newman .安装成功后进行验证：newman -v 。如果输出newman的版本信息，则证明安装成功 。

3. 安装newman-reporter-html:通过这个插件可以指定报告的生成路径和名称。同样打开cmd窗口输入：npm install -g newman-reporter-html.安装成功后进行验证：npm list -g --depth 0.如果能出现newman-reporter-html包及版本及证明安装成功 。

通过newman生成测试报告必须在cmd执行，命令执行：newman run <collection> [options] ，其中options中有很多参数，接下来我们来解析这些参数。

### 命令解析：
- -e : 可选，指定一个URL或者postman的环境变量脚本文件。如果集合中指定了环境变量，则需要添加这个参数。

- -g：可选，指定一个URL或者postman的全局变量脚本文件，如果集合中指定了全局变量，则需要加这个参数 。

- -r：可选，指定测试报告的类型，如果想生成对应的报告类型，需要添加这个参数，典型的有html,json,cli，若不添加，默认为cli。

- -d：可选，指定一个数据参数化文件 ，如果有参数化文件，需要添加这个选项。

- --reporter-html-export：可选，指定生成报告的路径和文件名，如果不添加该参数，默认会生成一个newman的文件夹，里面存放着生成的测试报告

输入的命令就可以是下面这样的 。

> newman run collect_a.json [-e environment_b.json] [-r html] [--reporter-html-export report.html]  其中[]内的参数是可选的。

### 案例说明：
#### 案例1：通过newman生成测试报告，集合为一个URL。

##### 命令：

```
newman run https://www.getpostman.com/collections/6e95413b91fe582ec78d
```

说明：run后面跟的链接可以通过分享得到

#### 案例2：通过newman生成测试报告，报告格式为默认:cli

```
newman run A.postman_collection.json  -r cli //默认的展示结果如下图所示。
```


![img](/img/blog/postman/16/016-01.png)


#### 案例3：通过newman生成测试报告，需要添加环境变量文件，并且生成HTML报告 。

```
newman run B.postman_collection.json -e test.postman_environment.json -r html
```


#### 案例4：通过newman生成测试报告，需要制定报告路径和文件名称。

```
newman run B.postman_collection.json -e test.postman_environment.json -r html --reporter-html-export report.html
```

//生成的测试报告会存放在当前路径下，报告名为：report.html

> 虽然newman提供了强大的生成测试报告功能，但是目前为止，生成的测试报告都是在我们本地，那如果想要把报告展示给团队成员查看呢 ？ 我们就可以通过jenkins进行持续集成，把生成的报告展示在Jenkins上，甚至可以将报告通过邮件发送给团队成员 。