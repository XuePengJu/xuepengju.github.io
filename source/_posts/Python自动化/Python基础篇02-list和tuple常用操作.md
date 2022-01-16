---
title: Python基础篇02-list和tuple常用操作
date: 2022-01-16 15:48:20
abbrlink: d2331223
tags:
 - Python自动化
categories:
  - Python自动化
---




# 列表

- 列表用[]定义
- 如果列表有多个元素,元素和元素用逗号隔开
- 用[下标]方式访问列表中具体的元素
- 下标从0开始
  - 列表中第一个元素下标为0
- 如果下标超过列表中元素的范围,程序出错

## list常用方法

- insert(索引, 值)
  - 往列表指定的索引位置插入指定的值

- append(值)
  - 在列表的最后追加指定的值
- extend(列表)
  - 把指定列表追加到后面,相当于两个列表合并
- 列表名[索引] = 值
  - 修改列表元素的值

### 代码举例：

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-


def list_add_method():
    list_date = []
    return list_date


# 遍历输出列表所以内容
def get_all_data(data):
    for n in data:
        print("list_data第", data.index(n), end="")
        print("个数据为：", n)
    print("_" * 100)
    print()


if __name__ == '__main__':
    data = list_add_method()
    data.append("append在末尾添加数据")
    get_all_data(data)

    data.insert(0, "insert在指定索引位置增加数据")
    get_all_data(data)

    list_extend_date = ["飞花", "血月"]
    # extend方法 追加另一个列表的值到这个列表
    data.extend(list_extend_date)
    get_all_data(data)
    
    data[1] = "修改index为1的数据为NONE"
    get_all_data(data)

```



## 删除列表元素

- del(列表名[索引])
  - 删除列表指定索引位置的元素
- 列表名.remove(值)
  - 删除列表中指定值
- 列表名.pop()
  - 删除最后一个元素
- 列表名.pop(索引)
  - 删除指定索引位置元素
  - 类似于del
- 列表名.clear()
  - 删除列表所有元素

### 代码举例：

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-


def list_del_method():
    list_date = ["采薇采薇，薇亦作止", "曰归曰归，岁亦莫止", "靡室靡家，猃狁之故", "不遑启居，猃狁之故"]
    return list_date


# 遍历输出列表所以内容
def get_all_data(data):
    for n in data:
        print("list_data第", data.index(n), end="")
        print("个数据为：", n)
    print("_" * 100)
    print()


if __name__ == '__main__':
    data = list_del_method()
    get_all_data(data)

    del (data[0])  # 删除指定索引的数据
    get_all_data(data)

    data.pop(1)  # 删除指定索引数据
    get_all_data(data)

    data.pop()  # 删除末尾数据
    get_all_data(data)

    data.clear()  # 清空列表
    get_all_data(data)

```



## 统计列表元素

- 列表名.count(值)
  
  - 统计指定值在列表中出现的次数
  
- 列表名.index(值)
  - 计算指定值的下标
  - 如果有多个相同的值,返回第一个值的下标
  - 如果值不存在,程序出错

###  代码举例：

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-


def list_del_method():
    list_date = [5, 5, 4, 1, 7, 4, 5, 1, 6, 8, 8, 6, 6]
    return list_date


# 遍历输出列表所以内容
def get_all_data(data):
    for n in data:
        # 列表index函数，获取当前下标的值
        print("list_data第", data.index(n), end="")
        print("个数据为：", n)
    print("_" * 100)
    print()


if __name__ == '__main__':
    data = list_del_method()
    print("_" * 100)

    # 打印6在列表中出现了几次
    print("6在列表中出现了", data.count(6), "次")
    print("_" * 100)

```


## 列表排序

- 列表名.sort()
  - 升序排序
- 列表名.sort(reverse=True)
  - 降序排序
- 列表名.reverse()
  - 逆置,把列表中所有的元素颠倒过来

###  代码举例：

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-


def list_del_method():
    list_date = [5, 5, 4, 1, 7, 4, 5, 1, 6, 8, 8, 6, 6]
    return list_date


# 遍历输出列表所以内容
def get_all_data(data):
    for n in data:
        # 列表index函数，获取当前下标的值
        print("list_data第", data.index(n), end="")
        print("个数据为：", n)
    print("_" * 100)
    print()


if __name__ == '__main__':
    data = list_del_method()
    print("_" * 100)

    print("升序排序")
    data.sort()  # 升序排序
    get_all_data(data)

    print("降序排序")
    data.sort(reverse=True)  # 降序排序
    get_all_data(data)

    print("逆置，反转")
    data.reverse()
    get_all_data(data)

```

# 拆包

- 拆包就是把列表或者元组或者集合以及字典中的每个元素拆分出来
- 变量1, 变量2, 变量n = 列表名
  - 等号左边变量的数量要和等号右边列表中元素的数量一致

# 列表推导式

- 可以快速的生成一个比较大的列表
- [x for x in range(10)]
  - 从1到9,9个数字
- [x for x in range(3, 100)]
  - 从3到99
- 带条件的推导式
- [x for x in range(1, 100) if x % 3 == 0]
  - 从1到99所有能被3整除的数字

### 代码举例：

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-


if __name__ == '__main__':
    # 列表推导式 定义一个长列表
    # 从1到99步长为2的所以数字
    data = [x for x in range(1, 100, 2)]
    # 从1到99所以能被3整除的数字
    data1 = [x for x in range(1, 100, 2) if x % 3 == 0]
    # 解包list
    print(*data)
    print(*data1)
```

# 公共方法

- dir查看对象所有的方法
	- dir(变量名)
- len返回非数字类型的元素数量
  - 包括列表,字符串,元组等
- len(变量名)
- max(列表)
  - 返回列表中最大的元素
- min(列表)
  - 返回列表中最小的元素
- 值 in 列表
  - 判断指定的值是否在列表里面,如果在返回True,否则返回False
  - 可以是列表,也可以是字符串和其他非数字类型
- 值 not in 列表
  - 判断指定的值是否不在列表里面,如果不在,返回True,在返回False


# 元组

- 元组和列表类似,区别是元组的元素不能修改
- 通过()定义元组
- a = ()
  - 定义一个空元组
- a = (1, )
  - 定义一个只有一个元素的元组
- a = (1, 2, 3)
  - 定义有三个元素的元组
- 定义元组的时候可以省略()
- a = 1, 2, 3

### 代码举例：

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-


if __name__ == '__main__':
    # 元祖和列表区别式，元祖定义后不可修改
    # 定义一个空元祖
    tuple01 = ()

    # 定义1个值得元祖，需要在值后面加，
    str = ("Test")
    tuple02 = ("Test",)
    print("str的类型为：", type(str))
    print("tuple02的类型为：", type(tuple02))

    # 定义元祖可省略括号
    tuple03 = "Test", "我是元祖", "Test"

    print("tuple03的类型为：", type(tuple03))
    print(*tuple03)

    for n in tuple03:
        print(tuple03.index(n))
        print(tuple03.count(n))

```

## 元组和列表的区别

- 元组可以理解为一个只读的列表,除了修改元素方法不同,其他方法和列表相同

## 元组和列表的转换

- 列表变量 = list(元组变量)
  - 把元组转换为列表
- 元组变量 = tuple(列表变量)
  - 把列表转换为元组
- 在python中转化数据类型就是用, 数据类型的关键字(要转化的内容)
  - 要转化内容一定是可转化的

### 代码举例：

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-


if __name__ == '__main__':
    # 元祖和列表区别式，元祖定义后不可修改
    # 定义一个空元祖
    tuple01 = ("Test", "我是元祖", "Test")

    print(type(tuple01))
    list01 = list(tuple01)
    print(type(list01))
    list01.append("转list后可修改数据")
    # 在转回tuple
    tuple02 = tuple(list01)
    print(type(tuple02))
    print(*tuple02)

```







