---
title: 【接口测试】postman做接口测试08-测试断言
abbrlink: 2ab40ef8
date: 2022-01-13 22:28:02
tags:
 - postman
categories:
  - postman
---

> 如果没有断言这个功能，那我们的测试就只能是通过我们人工比较预期结果和实际结果是否一致。有了这个功能就为我们做自动化提供了条件，postman中的断言也是非常方便的 。

# 我们先来了解下postman断言的一些特点 ，具体如下

### 断言编写位置：Tests标签

### 断言所用语言：JavaScript

### 断言执行顺序：在响应体数据返回后执行 。

### 断言执行结果查看：Test Results

在上面我们介绍到，编写的断言代码是JavaScript，那如果不会写怎么办 ？ 不用担心，因为postman已经给我们内置了一些常用的断言 。用的时候，只需从右侧点击其中一个断言，就会在文本框中自动生成对应断言代码块 。

 ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/08-001.png) 

# 接下来就让我们了解一些常用断言，还是按响应的组成来划分，分别是状态行，响应头，响应体。

状态行中又包括状态码，状态消息 。在postman也可以对这俩个进行断言

状态行中的断言：

### 断言状态码：Status code: code is 200

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);		//这里填写的200是预期结果，实际结果是请求返回结果
});
```
### 断言状态消息：Status code：code name has string

```javascript
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");	//断言响应状态消息包含OK
});
```
### 响应头中的断言

断言响应头中包含：Response headers:Content-Type header check
```javascript
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type"); //断言响应头存在"Content-Type"
});
```
### 断言响应体(重点)

断言响应体中包含XXX字符串：Response body:Contains string
```javascript
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});     
//注解
//pm.expect(pm.response.text()).to.include("string")      获取响应文本中包含string
```
### 断言响应体等于XXX字符串：Response body : is equal to a string

```javascript
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
//注解
//pm.response.to.have.body("response_body_string");   获取响应体等于response_body_string
```
### 断言响应体(json)中某个键名对应的值：Response body : JSON value check

```javascript
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(100);
});
//注解
//var jsonData = pm.response.json()   获取响应体，以json显示，赋值给jsonData .注意：该响应体必须返会是的json，否则会报错
//pm.expect(jsonData.value).to.eql(100)  获取jsonData中键名为value的值，然后和100进行比较
```
### 响应时间(一般用于性能测试)

断言响应时间：Response time is less than 200ms
```javascript
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);   //断言响应时间<200ms
});
```
### 案例说明：

针对以下接口返回的数据进行断言：
```json
{
    "cityid": "101010100",
    "city": "北京",
    "update_time": "22:34",
    "wea": "晴",
    "wea_img": "qing",
    "tem": "-2",
    "tem_day": "3",
    "tem_night": "-7",
    "win": "南风",
    "win_speed": "2级",
    "win_meter": "5km/h",
    "air": "43"
}
```
#### 断言响应状态码为200

#### 断言city等于北京

#### 断言cityid包含"101010100"

  ![img](https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/ArticlePictures/postman/08-002.png) 

>  总结，整体来说，如果用postman做接口测试，这个断言功能必不可少，其中我们常断言的响应体包含和JSON这俩个断言又是重重之重。