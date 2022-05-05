---
title: 【公开api接口】字符串加密/解密API接口
abbrlink: 689fc75c
date: 2022-01-13 23:48:20
tags: API
categories: [技术积累]
toc: true
---
> 一个公开的加解密接口记录学习<!-- more -->

 - 接口地址：https://api.vvhan.com/api/jm
 - 返回格式： JSON
 - 请求方式：GET

#### 请求示例(加密)：

> https://api.vvhan.com/api/jm?key=自定义密码&string=需要加密的内容&type=en

#### 请求示例(解密)：

> https://api.vvhan.com/api/jm?key=自定义密码&string=需要解密的内容&type=de

#### 参数说明

| 名称   | 必填 | 类型   | 说明                        |
| :----- | :--- | :----- | :-------------------------- |
| key    | 否   | string | 自定义密匙                  |
| string | 是   | string | 加/解密内容                 |
| type   | 否   | string | en表示加密,de表示解密(默认) |

#### 返回数据

```
加密：{"enmissString":"InFYZ0VPKzVzTkdxUWlxV1VXVnA5cmtCenRxYkNTY3JUeVwvVWtxTm16VHNjPSI="}
解密：{"demissString":小韩网络}
```


## 示例代码

```
<?phpheader('Content-type:text/json;charset=utf-8;');
$key=$_GET['key'];
$string=$_GET['string'];
$type=$_GET['type'];
$result = file_get_contents('https://api.vvhan.com/api/jm?key='.$key.'&string='.$string.'&type='.$type);
echo $result;?>
```