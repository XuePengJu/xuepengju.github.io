---
layout: post
title: 用 Python 画了一盘粽子送给大家
tags:
  - Python
categories:
  - Python
abbrlink: 448d76bd
date: 2022-06-02 17:37:18
---

明天就是端午节了，首先祝大家端午安康，说到端午节，粽子则是必不可少的，现在粽子的种类也是五花八门，但我还是喜欢传统的白棕子，你喜欢哪种粽子呢？在大家吃着美味粽子的同时，本文我们画一盘粽子送给大家。

先睹为快
我们先来欣赏一下最终的效果图：

![img](/img/blog/Python/1654162983.jpg)
<!-- more -->
## 奉上代码如下：

```python
import math
from time import sleep
from turtle import *

from typing import List, Any, Union


# 画粽子
def rice_dumpling():
    pensize(2)  # 画笔宽度
    pencolor(2, 51, 12)  # 画笔颜色
    fillcolor(4, 77, 19)  # 填充色
    begin_fill()
    fd(200)  # 向前
    circle(15, 120)  # 画圆弧
    fd(200)
    circle(15, 120)
    fd(200)
    circle(15, 120)
    fd(200)
    circle(15, 60)
    fd(100)
    circle(15, 90)
    fd(173)
    circle(1, 90)
    end_fill()
    penup()
    fd(100)
    right(60)
    back(105)
    a = pos()
    pendown()
    color(60, 67, 0)
    fillcolor(85, 97, 9)
    begin_fill()
    fd(120)
    goto(a)
    penup()
    back(15)
    left(90)
    fd(20)
    right(90)
    pendown()
    fd(150)
    right(120)
    fd(24)
    right(60)
    fd(120)
    right(60)
    fd(24)
    end_fill()
    begin_fill()
    left(110)
    fd(65)
    left(100)
    fd(24)
    left(80)
    fd(50)
    end_fill()


# 画盘子
def plate(a, b, angle, steps, rotateAngle):
    min_angle = (2 * math.pi / 360) * angle / steps
    rotate_angle = rotateAngle / 360 * 2 * math.pi
    penup()  # 起笔
    setpos(b * math.sin(rotate_angle), -b * math.cos(rotate_angle))
    pendown()  # 落笔
    for i in range(steps):
        next_point = [a * math.sin((i + 1) * min_angle), -b * math.cos((i + 1) * min_angle)]
        next_point: List[Union[float, Any]] = [
            next_point[0] * math.cos(rotate_angle) - next_point[1] * math.sin(rotate_angle),
            next_point[0] * math.sin(rotate_angle) + next_point[1] * math.cos(rotate_angle)]
        setpos(next_point)


# 移动
def move(x, y):
    penup()  # 起笔
    setpos(x, y)  # 画笔位置
    pendown()  # 落笔


# 文字
def word():
    write("祝大家端午安康", move=False, align="center", font=("Comic Sans", 18, "bold"))


if __name__ == '__main__':
    colormode(255)  # 颜色模式
    hideturtle()  # 隐藏画笔
    fillcolor(153, 229, 153)
    begin_fill()
    plate(300, 200, 360, 300, 0)
    end_fill()
    move(40, -50)
    rice_dumpling()
    move(20, 100)
    rice_dumpling()
    move(-50, -70)
    rice_dumpling()
    move(10, 150)
    word()
    sleep(5)
    # done()

```