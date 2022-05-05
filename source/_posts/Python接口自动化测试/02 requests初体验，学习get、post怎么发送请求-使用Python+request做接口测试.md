---
title: 02 requests初体验，学习get、post怎么发送请求-使用Python+request做接口测试
abbrlink: 69423a58
date: 2022-05-05 15:11:34
tags:
  - Python接口自动化测试
categories:
  - Python接口自动化测试
---

# requests库基本使用
**发送一个请求分3步：**

1. 拼接请求： 请求包含url，params(url参数) [data(请求数据)]  [headers(请求头)] [cookies]等
2. 发送请求，获取响应：支持get，post等各种方法发送，返回的是一个响应对象
3. 解析响应: 打印响应内容<!-- more --> 

### 一、一个最简单的GET请求
打开Pycharm，新建一个demo项目，项目下新建一个Python文件，输入以下内容：

```python
# 导入requests包
import requests 

# 1. 拼接请求
url = "http://httpbin.org/get"  # 这里只有url，字符串格式
# 2. 发送请求，获取响应
res = requests.get(url) # res即返回的响应对象
# 3. 解析响应，打印相应内容
print(res.text)  # 输出响应的文本
```

### 二、带参数的GET请求
1、请求参数拼接到URL后面

```python
import requests 

url = "http://httpbin.org/get?key=ec961279f453&find=helloword"  # 参数可以写到url里
res = requests.get(url=url) # 第一个url指get方法的参数，第二个url指上一行我们定义的接口地址
print(res.text)  
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/bb2ea127b4bc43ab8fa90e00acee3641.png)

2、请求参数写到params里

```python
import requests 

url = "http://httpbin.org/get"
params = {"key":"ec961279f453","find":"hello word"} # 字典格式，单独提出来，方便参数的添加修改等操作
res = requests.get(url=url, params=params) 
print(res.text)  
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/6b1e0f23f6de41d39ef20e7e05b9b3df.png)

### 三、传统表单类POST请求（x-www-form-urlencoded）
```python
import requests

url = "http://httpbin.org/post"
data = {"name": "xiajian", "age": 22}  # Post请求发送的数据，字典格式
res = requests.post(url=url, data=data)  # 这里使用post方法，参数和get方法一样
print(res.text)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/c705000a8b4d40fdaffc0c38902fbaca.png)

### 四、JSON类型的POST请求（application/json）
1、使用字符串入参去请求post请求

```python
import requests

url = "http://httpbin.org/post"
# 字符串入参
data = '''{
    "name": "xiajian",
    "age": 22
            }'''  # 多行文本, 字符串格式，也可以单行（注意外层有引号，为字符串） data = '{"name": "xiajian", "age": 22}'
print(type(data))  # 打印data数据类型
res = requests.post(url=url, data=data)  # data支持字典或字符串
print(res.text) 
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/48d84e40caf24c52b6fb6a0fe90c1ffa.png)

> data请求参数支持字典也支持字符串，如果是字典格式，requests方法会将其按照默认表单urlencoded格式转换为字符串，如果是字符串则不转化

如果data以字符串格式传输需要遵循以下几点：

- 必须是严格的JSON格式字符串，里面必须用双引号，k-v之间必须有逗号，布尔值必须是小写的true/false等等
- 不能有中文，直接传字符串不会自动编码
---
2、使用json去请求post请求

```python
import requests

url = "http://httpbin.org/post"
data = {
    "name": "xiajian",
    "age": 22
}  # 字典格式，方便添加
res = requests.post(url=url, json=data)  # JSON参数会自动将字典格式转为合法的JSON文本并添加headers
print(res.text)
  
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/d084c4abbf4d4352847b256b12db63d5.png)