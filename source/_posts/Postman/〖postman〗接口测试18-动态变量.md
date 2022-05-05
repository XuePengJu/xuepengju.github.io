---
title: 〖postman〗接口测试18-动态变量
abbrlink: 69ae7450
date: 2022-02-26 23:31:48
tags:
 - postman
categories:
  - postman
---

>  动态变量列表，其动态值在请求运行期间随机生成 。随机生成的值可用于请求的参数值 。

 <!-- more --> 要想使用动态变量，必须使用：pm.variables.replaceIn(),
##### 例如：

	pm.variables.replaceIn(‘{undefined{$randomFirstName}}’), 

需要注意的是，只能在前置脚本或断言中使用动态变量 。

### postman内置了非常多的动态变量，下面就列出一些常用的变量。

| 变量名                   | `描述....................`   | 例子                                                         |
| :----------------------- | :--------------------------- | :----------------------------------------------------------- |
| $guid                    | 一个uuid-v4风格GUID          | "611c2e81-2ccb-42d8-9ddc-2d0bfa65c1b4"                       |
| $timestamp               | 当前UNIX时间戳(以秒为单元)   | 1562757107                                                   |
| $randomUUID              | 随机的36个字符的UUID         | "6929bb52-3ab2-448a-9796-d6480ecad36b"                       |
| $randomAlphaNumeric      | 随机字母数字字符             | 6`，`"y"`，`"z"                                              |
| $randomBoolean           | 随机布尔值（真/假）          | true,false                                                   |
| $randomInt               | 1到1000之间的随机整数        | 302,454,921                                                  |
| $randomIP                | 随机的IPV4地址               | 241.102.234.100`，`216.7.27.38                               |
| $randomPassword          | 随机的15个字符的字母数字密码 | t9iXe7COoDKv8k3`，`QAzNFQtvR9cg2rq                           |
| $randomUserAgent         | 随机用户代理                 | Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.9.8; rv:15.6) Gecko/20100101 Firefox/15.6.6 |
| $randomFirstName         | 随机名字                     | Ethan`，`Chandler`，`Megane                                  |
| **`$randomLastName`**    | 随机姓氏                     | `Schaden`，`Schneider`，`Willms`                             |
| **`$randomFullName`**    | 随机的名字和姓氏             | `Connie Runolfsdottir`，`Sylvan Fay`，`Jonathon Kunze`       |
| **`$randomNamePrefix`**  | 随机名称前缀                 | `Dr.`，`Ms.`，`Mr.`                                          |
| **`$randomNameSuffix`**  | 随机名称后缀                 | `I`，`MD`，`DDS`                                             |
| **`$randomAvatarImage`** | 随机头像                     | `https://s3.amazonaws.com/uifaces/faces/twitter/johnsmithagency/128.jpg` |
| **`$randomWeekday`**     | 随机工作日                   | `Thursday`，`Friday`，`Monday`                               |
| **`$randomMonth`**       | 随机月份                     | `February`，`May`，`January`                                 |
| **`$randomDomainName`**  | 随机域名                     | `gracie.biz`，`armando.biz`，`trevor.info`                   |
| **`$randomEmail`**       | 随机电子邮件地址             | `Pablo62@gmail.com`，`Ruthe42@hotmail.com`，`Iva.Kovacek61@hotmail.com` |
| **`$randomUserName`**    | 随机用户名                   | `Jarrell.Gutkowski`，`Lottie.Smitham24`，`Alia99`            |
| **`$randomUrl`**         | 随机网址                     | `https://anais.net`，`https://tristin.net`，`http://jakob.name` |

接下来通过一张图来展示生成的随机数 。

 ![img](/img/blog/postman/18/018-01.png) 

 很多请求输入的参数值，填写的是固定的，如果想每次请求生成随机数，就可以用这个动态变量 。