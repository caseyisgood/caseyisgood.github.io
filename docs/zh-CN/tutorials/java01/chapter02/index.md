---
prev: 
    text: '第1章 - 绪论'
    link: '/zh-CN/tutorials/java01/chapter01'
next: false

title: '第2章 - 初识程序与Java | Java编程：从识字到创作 · Ⅰ '
description: '本章介绍程序的基本概念、Java语言的发展历程和特点，以及Java的运行机制，帮助读者建立对编程和Java语言的初步认知。'
keywords: 
  - Java编程
  - 程序概念
  - Java语言
  - Java教程
  - 编程入门
author: '王凯鑫'
date: '2025-05-25'
---

# 第2章 - 初识程序与Java

## 2.1 程序的概念

不知道一提到“程序”一词，首先出现在大家脑海中的画面是什么呢？是凌晨三点程序员盯着满是bug的屏幕疯狂挠头，是科技公司CEO在发布会侃侃而谈，还是电影中黑客手敲键盘攻破各个系统的场面呢？

在理解程序这一概念之前，我们不妨先来看看编程语言是什么。

### 2.1.1 编程语言
若要我说，与程序员最相近的职业，恐怕不是什么算法工程师，也不是什么数据分析师，而是翻译家。翻译家的工作是将一国人民不懂的语言翻译成另一种语言，使人们理解本读不懂的文字背后的意思。而程序员则是将人类的语言翻译为计算机可以理解的语言，使计算机能够执行我们想要它执行的任务。举个不切实际的例子，这世界上若是没有计算机科学这门系统性的学科，而又存在孤立的编程课程，我个人认为将它放在人文学院，与英语、法语、西班牙语等语言课程并列共大家学习，恐怕也不为过。

::: info 何为
**编程语言**：一种计算机和人类能够理解和识别的语言。
:::

因此，不论各位读者曾经的学术与职业背景如何，只要你有一颗好奇心，都一定能够掌握编程这项技能。

### 2.1.2 程序

理解了编程语言是什么，我们一起先来看看**程序（Program）** 的定义：

::: info 何为
**程序**：一组计算机能识别和执行的有序指令集，用于完成特定的任务或解决特定的问题。
:::

是不是已经开始头疼了？别急，让我们先来看一个情景小故事。

王小明的美国朋友约小翰来他家做客，小明妈妈让他帮忙做番茄炒蛋，可小明以前没有做过，于是小明妈妈告诉小明：先把番茄洗干净，再把番茄切成小块，再把鸡蛋打散，然后把番茄和鸡蛋一起炒起来，最后再把炒好的番茄蛋放到盘子里，一道香喷喷的番茄炒蛋就做好了。小明妈妈生怕小明记不住，于是为小明写了一份菜谱：

```
1. 把番茄洗干净
2. 把番茄切成小块
3. 把鸡蛋打散
4. 把番茄和鸡蛋一起炒起来
5. 把炒好的番茄炒蛋放到盘子里
```

这样，每次小明需要做番茄炒蛋时，只需要照着菜谱一步一步做就行了。在这个情景下，小明的**特定任务**就是做番茄炒蛋，而菜谱就是一个**有序指令集**，已经满足了”程序“定义的两个特点，唯一未满足的条件就是**计算机识别和执行**。因此，若小明使用了一台可以读懂该格式的菜谱并做菜的机器，则我们就满足了**特定任务**、**有序指令集**和**计算机识别和执行**这三个条件，此时便可以说这份菜谱就是一个程序。

### 2.1.3 编程
约小翰吃完番茄炒蛋后，觉得惊为天人，一想到回到美国后就不能迟到如此正宗的番茄炒蛋就非常伤心，于是王小明决定将自己的菜谱传递给约小翰，可是约小翰看不懂小明妈妈写的中文菜谱，于是王小明就将菜谱用英语写了一份：

```
1. Rinse the tomatoes
2. Cut the tomatoes into small pieces
3. Beat the eggs until well-scrambled
4. Stir-fry the tomatoes and eggs together
5. Plate the scrambled tomatoes and eggs
```

于是，约小翰就可以看懂番茄炒蛋的菜谱了。编程就是这样一个类似的过程，把只有人类可以理解的自然语言转换为计算机也可以理解并执行的编程语言的过程。

## 2.2 Java语言简介

### 2.2.1 Java简要历程
1991年，Sun Microsystems公司成立了”Green“项目组，由James Gosling领导开发一款名为Oak的编程语言。1995年，Oak正式更名为Java，并在1996年首次发布了JDK1.0。2009年，甲骨文公司（Oracle Corporation）宣布收购Sun Microsystems公司。

### 2.2.2 Java的三个版本
Sun Microsystems公司在1999年发布了Java的三个版本：J2SE、J2EE和J2ME。J2表示Java的第二个版本，SE表示Standard Edition，即标准版；EE表示Enterprise Edition，即企业版；ME表示Micro Edition，即微型版。

- **Java SE（Standard Edition，标准版）**
  Java SE提供了Java语言的核心功能，可用于开发通用的桌面和服务器应用程序，提供了网络、数据结构、图形用户界面等方面的基本库和API。例如，我们后续会使用的IntelliJ IDEA（一款Java开发的集成开发环境）就是使用Java SE开发的；大家熟知的沙盒游戏《我的世界》（Java版）也是使用Java SE开发的。
- **Java EE（Enterprise Edition，企业版）**
- Java EE构建于Java SE的基础之上，旨在开发大规模、分布式、多层的企业级应用程序，提供了企业级应用程序开发所需的各种技术和工具。例如，领英（LinkedIn）就是使用Java EE开发的；亚马逊网络服务（AWS）后端服务也是使用Java EE开发的。
- **Java ME（Micro Edition，微型版）**
- Java ME专为硬件条件有限的设备而设计，如手机和嵌入式系统等。它提供部分Java SE的库，并针对小型设备提供了专门的API，从而能够在各种硬件上实现可移植的应用程序。例如，大家所熟知的游戏《愤怒的小鸟》的一些早期版本就是用Java ME开发的；诺基亚S40上的游戏《贪吃蛇》也是用Java ME开发的。

### 2.2.3 Java的特点

Java语言有许多特点，这里我们主要介绍以下三点：
- Java是一门面向对象（OOP）的语言
- Java是一门跨平台的语言
- Java是一门兼具编译和解释的语言

在介绍面向对象的语言是什么之前，我们先介绍一下类与对象的概念。类就像一张图纸，而对象则是根据图纸造出来的实例。如果我有一张造”车“的图纸，那么根据这张图纸造出来的每一辆车都是属于”车“这个类的一个个对象。一个对象主要又由两部分组成：属性和行为。属性就是这个对象的特征，比如一辆车的颜色、品牌、型号等；行为则是这个对象可以做什么，比如一辆车可以启动、停止、加速、减速等。因此，如果我们说一门语言是面向对象的，意思这门语言将所有东西都视作具有属性和行为的对象。

Java是一门跨平台的语言，这意味着我们可以在不同的操作系统上运行Java程序，而不需要为每个操作系统都重新编写程序。这是因为Java程序是通过Java虚拟机（JVM）来运行的，而JVM是一个可以在不同操作系统上运行的虚拟机。因此，我们只需要编写一次Java程序，就可以在不同的操作系统上运行，而不需要为每个操作系统都重新编写程序。

Java是一门兼具编译和解释的语言。编写完Java程序后，我们需要将Java程序编译成字节码，然后在运行时由JVM解释执行，也正是这一个过程使得Java程序具有跨平台的特性。

是不是觉得有些懵啦？没关系，我们接下来会详细讲解Java虚拟机（JVM）、Java运行环境（JRE）、Java开发工具包（JDK）的概念与关系，以及编译和解释的区别，帮助你更好地理解Java的运行机制！

## 2.3 Java运行机制

### 2.3.1 Java虚拟机（JVM）

Java最重要的特点之一就是跨平台，而实现这一特性背后最关键的技术就是Java虚拟机（JVM）。

:::info 何为
**Java虚拟机（Java Virtual Machine, JVM）**：Java虚拟机是一种可以运行Java字节码的虚拟机软件。
:::

系统环境就与我们生活的环境一样，在生活中，不同的环境下栖息着不同的生物，而不同的操作系统能够运行的程序也不尽相同。


## 2.4 第一个Java程序