---
title: 【01】Shell特殊位置变量
abbrlink: 3bd3916a
date: 2022-01-09 15:32:32
tags:
  - Shell脚本
categories:
  - Shell脚本
---

## 1). $0 获取脚本名称

```shell
[root@aliyun shell]# cat test.sh
echo $0

[root@aliyun shell]# sh test.sh
test.sh
[root@aliyun shell]#
[root@aliyun shell]# sh /root/shell/test.sh
/root/shell/test.sh

# 如果只想获取脚本名称 basename
[root@aliyun shell]# basename test.sh
test.sh
[root@aliyun shell]# basename /root/shell/test.sh
test.sh
[root@aliyun shell]#

```



## 2). $n表示脚本的第n个参数

```shell
# 实例1
[root@aliyun shell]# cat test.sh
echo "超过9个变量不加引号"
echo $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11

echo "超过9个变量需要加花括号"
echo $1 $2 $3 $4 $5 $6 $7 $8 $9 ${10} ${11}

[root@aliyun shell]#
[root@aliyun shell]# sh test.sh {a..z}
超过9个变量不加引号
a b c d e f g h i a0 a1
超过9个变量需要加花括号
a b c d e f g h i j k
[root@aliyun shell]#
[root@aliyun shell]# sh test.sh {1..20}
超过9个变量不加引号
1 2 3 4 5 6 7 8 9 10 11
超过9个变量需要加花括号
1 2 3 4 5 6 7 8 9 10 11

# 实例2
[root@aliyun shell]# cat test.sh
[ $# -ne 2 ] && echo "请输入两个参数" && exit 1002
name=$1
age=$2
echo $name $age

[root@aliyun shell]# sh test.sh xiajian 22 dd
请输入两个参数
[root@aliyun shell]# sh test.sh xiajian
请输入两个参数
[root@aliyun shell]# sh test.sh xiajian 22
xiajian 22
[root@aliyun shell]#

```

## 3). $# 获取脚本传参的个数

```shell
[root@aliyun shell]# cat test.sh
echo $#
[root@aliyun shell]# sh test.sh n1 n2 n3 n4
4
[root@aliyun shell]#

```

## 4). $? 获取上一条命令返回结果 0 为成功 非0失败

```shell
[root@aliyun shell]# ll
total 8
-rw-r--r-- 1 root root 54 Jan  9 16:09 killshell.sh
-rw-r--r-- 1 root root  8 Jan  9 16:46 test.sh
[root@aliyun shell]# echo $?
0
[root@aliyun shell]# lsl
bash: lsl: command not found...
[root@aliyun shell]# echo $?
127
[root@aliyun shell]#
```

## 5). $! 获取上一个在后台运行脚本的PID

```shell
[root@aliyun shell]# tail -f killshell.sh &
[1] 5268
[root@aliyun shell]# sh test.sh &
pid=$!
echo $pid
sleep 5
kill -9 $pid

[root@aliyun shell]# echo $!
5268
[root@aliyun shell]#
```



## 6). $$ shell本身的pid

```shell
[root@aliyun shell]# echo $$
14975
[root@aliyun shell]#
```

## 7). $@ 获取所有参数列表

```shell
[root@aliyun shell]# cat test.sh
echo $@
[root@aliyun shell]# sh test.sh {a..z}
a b c d e f g h i j k l m n o p q r s t u v w x y z
```

## 8)$* 获取所有参数列表

```shell
[root@aliyun shell]# cat test.sh
echo $*
[root@aliyun shell]# sh test.sh {a..z}
a b c d e f g h i j k l m n o p q r s t u v w x y z

# $*不加引号和$@一样,在循环里加引号时，“$@”会把引起来的内容作为一个变量
[root@aliyun shell]# set -- "I am" xiajian student
[root@aliyun shell]# echo $*
I am xiajian student
[root@aliyun shell]# echo $@
I am xiajian student
[root@aliyun shell]# for i in $*;do echo $i;done
I
am
xiajian
student
[root@aliyun shell]# for i in $@;do echo $i;done
I
am
xiajian
student
[root@aliyun shell]# for i in "$@";do echo $i;done
I am
xiajian
student
[root@aliyun shell]# for i in "$*";do echo $i;done
I am xiajian student
```

