---
title: 〖postman〗接口测试17-pm对象解析
abbrlink: '22131793'
date: 2022-02-26 13:16:11
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/transparent_picture/transparent_picture%20(17).png
tags:
 - postman
categories:
  - postman
---

> pm对象包含了正在执行的脚本有关的所有信息，并允许一个对象访问正在发送的请求或已收到的响应数据。它还允许设置环境和全局变量 。

## 1.pm.sendRequest:
该功能允许发送HTTP/HTTPS请求。并且要求在Pre-request Script或Tests标签中使用。

发送一个get请求

//发送一个get请求，请求成功后设置一个环境变量
```
pm.sendRequest('http://cx.shouji.360.cn/phonearea.php?number=13012345678', function (err, res) {
    if (err) {
        console.log(err);
    } else {
        pm.environment.set("xab", "123");
    }
});
```
发送一个post请求
```
const PostRequest = {
  url: 'http://ihrm-test.itheima.net/api/sys/login',
  method: 'POST',
  header: 'Content-Type:application/json',
  body: {
    mode: 'raw',
    raw: JSON.stringify({ "mobile": '13800000002',"password":"123456" })
  }
};
pm.sendRequest(PostRequest, function (err, res) {
  console.log(err ? err : res.json());
});
```
发送的请求中添加断言
```
pm.sendRequest('https://www.baidu.com', function (err, res) {
  if (err) { console.log(err); }
  pm.test('断言响应数据', function () {
    pm.expect(err).to.equal(null);
    pm.expect(res).to.have.property('code', 200);
    pm.expect(res).to.have.property('status', 'OK');
  });
});
```
这个功能也非常的有用，具体使用场景我们在后面的章节后详细介绍 。

## 2.pm.variables
局部变量，作用范围更小，定义的变量想要在一个请求中使用，就可以使用这个变量 。

- pm.variables.has("var_name") ：检查当前作用域内是否存在变量var_name，返回boolean类型

- pm.variables.get("var_name") ：获取局部变量var_name的值

- pm.variables.set("var_name", "value") : 设置局部变量var_name的值为value

- pm.variables.toObject() ：返回包含本地范围内所有变量的对象


## 3.pm.environment
环境变量，如果某个集合导入环境后，该集合下的请求都可以使用环境变量 。

- pm.environment.name : 获取当前环境的名字

- pm.environment.has("var_name"):检查环境变量中是否存在变量var_name，返回boolean类型。

- pm.environment.get("var_name") :获取环境变量var_name的值

- pm.environment.set("var_name","value") :设置环境变量var_name的值为value

- pm.environment.replaceIn("var_name") :将动态变量{{var_name}}语法替换为其实际的解析值

- pm.environment.toObject() :以单个对象的形式返回所有环境变量

- pm.environment.unset("var_name") 在当前选定的环境中删除具有给定名称的变量。

- pm.environment.clear() : 清除当前所选环境中的所有变量。


## 4.pm.collectionVariables
集合变量，只是针对集合有效的变量 。

- pm.collectionVariables.has("var_name") :检查集合变量中是否存在变量var_name，返回boolean类型

- pm.collectionVariables.get(“var_name”) : 获取集合变量var_name的值

- pm.collectionVariables.set(“var_name”, "value") :设置集合变量var_name的值为value

- pm.collectionVariables.replaceIn("var_name") :将动态变量{{var_name}}语法替换为其实际的解析值

- pm.collectionVariables.toObject():以对象的形式返回变量及其值的列表。

- pm.collectionVariables.unset("var_name") : 清除指定的集合变量

- pm.collectionVariables.clear() : 清除所有集合变量。


## 5.pm.globals
全局变量，只要申明了全局变量，对postman工具内的任何请求和集合都有效 。

- pm.globals.has(“var_name”) : 检查全局变量中是否存在变量var_name，返回boolean类型

- pm.globals.get(“var_name”) ： 获取全局变量var_name的值

- pm.globals.set(“var_name”, "value") : 设置全局变量var_name的值为value

- pm.globals.replaceIn(“var_name”) : 将动态变量{{var_name}}语法替换为其实际的解析值

- pm.globals.toObject() : 以对象的形式返回变量及其值的列表。

- pm.globals.unset("var_name") : 清除指定的全局变量。

- pm.globals.clear() :清除所有全局变量。


## 6.pm.request
request为脚本执行请求。对于前置脚本，这是将要发送的请求，在测试脚本中，这是已发送的请求 。

request包含以下结构信息：

- pm.requests.url: 包含发出请求的URL，返回json数据，主要包括了url中的protocol,host,path,query,variable部分 。可以通过.解析出每一部分 。

- pm.request.headers ：包含发送请求的headers ，返回列表数据 。

- pm.request.method ： 发送的请求方法

- pm.request.body ：包含与请求正文相关的所有数据

- pm.request.headers.add(headerName）：为当前请求添加请求头headerName

- pm.request.headers.remove (headerName)：删除请求头中的headerName

- pm.request.headers.upsert({ key: headerName:String, value: headerValue:String}) : 插入给定当前请求的键值对 。（如果该键不存在，否则将已存在的键值更新为新值）


## 7.pm.response
pm.response对象包含与收到的响应有关的所有信息 。响应信息格式如下：

- pm.response.code : 返回响应状态码

- pm.response.status : 返回响应状态消息

- pm.response.headers：返回响应头

- pm.response.responseTime ： 返回响应时间

- pm.response.responseSize： 返回响应大小

- pm.response.text()：返回响应体的文本数据

- pm.response.json() ：返回响应体的json数据


## 8.pm.test
格式：pm.test(testName:String, specFunction:Function)

我们可以使用此方法在Pre-request Script 或Tests标签中，即使该方法内部存在错误，也可以确保脚本的其余部分不会被阻塞。

示例：

测试异步：done可以将可选的回调添加到pm.test
```
 pm.test('async test', function (done) {
    setTimeout(() => {
        pm.expect(pm.response.code).to.equal(200);
        done();
    }, 1500);
  });
pm.test.index() ：从特定位置获取总数测试
```
## 9.pm.expect
格式：pm.expect(assertion:*)

pm.expect是一个通用的断言函数。这是ChaiJS期望的BDD库的基础。使用该库，可以很容易地编写语法易读的测试。

此功能对于处理来自response或的数据断言很有用variables。有关使用的断言测试示例pm.expect。

测试脚本中提供了Response Assertion API

- pm.response.to.have.status(code:Number)
	
- pm.response.to.have.status(reason:String)

- pm.response.to.have.header(key:String)

- pm.response.to.have.header(key:String, optionalValue:String)

- pm.response.to.have.body()

- pm.response.to.have.body(optionalValue:String)

- pm.response.to.have.body(optionalValue:RegExp)

- pm.response.to.have.jsonBody()

- pm.response.to.have.jsonBody(optionalExpectEqual:Object)

- pm.response.to.have.jsonBody(optionalExpectPath:String)

- pm.response.to.have.jsonBody(optionalExpectPath:String, optionalValue:*)

- pm.response.to.have.jsonSchema(schema:Object)

- pm.response.to.have.jsonSchema(schema:Object, ajvOptions:Object)