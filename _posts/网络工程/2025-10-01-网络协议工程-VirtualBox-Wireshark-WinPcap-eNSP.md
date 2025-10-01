---
title: 网络协议工程 - eNSP及相关软件安装
data: 2025-10-01
categories: [网络工程]
description: 谨以此文记录用时一天半的软件安装与配置的非常非常曲折的经历
tags: [eNSP, VirtualBox, WinPcap, Wireshark, Win7]
comments: true
---

## 网络协议工程 - 相关软件安装

> 谨以此文记录用时一天半的软件安装与配置的非常非常曲折的经历

> 本文主要参考教程，**安装前一定要看，帮助熟悉安装流程！！！**：[华为eNSP网络模拟器安装详细教程（2024）-云社区-华为云](https://bbs.huaweicloud.com/blogs/422935)

## 0. eNSP安装前提 

![01](/img/2025-10-01/image01.png)
## 1. WinPcap 4.1.3

> 安装难度最简单的一个软件，直接装就行
>
> 可能会遇到的问题与解决方法如下

![02](/img/2025-10-01/image02.png)

## 2. Wireshark 2.6.6

- **版本库**（当前eNSP仅支持2.6.6版本的wireshark）
[Index of /download/win64/all-versions](https://1.as.dl.wireshark.org/win64/all-versions/)
  
- **最新版本**（**不要安装！！！不要安装！！！不要安装！！！**）

  [官网-Wireshark-Go Dee-Download](https://www.wireshark.org/download.html)

## 3. VirtualBox 5.2.30

- VirtualBox安装链接（需要下载3个文件，注意一定要版本号一致）

  - **版本库**（只要修改链接最后的版本号，就可以跳转到制定版本）

    [Index of http://download.virtualbox.org/virtualbox/5.2.30](https://download.virtualbox.org/virtualbox/7.2.2/)

  - **最新版本**（**不要安装！！！不要安装！！！不要安装！！！**）

    [官网 – Downloads – Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads)

- VirtualBox安装/使用教程

  [使用VirtualBox创建Windows 7虚拟机 - 知乎](https://zhuanlan.zhihu.com/p/393517485)

  [ win10虚拟机Oracle VM VirtualBox安装和使用教程 - 知乎](https://zhuanlan.zhihu.com/p/111567471)

  [超级详细的 VirtualBox 虚拟机安装 及入门教程，零基础入门到精通，收藏这篇就够了-CSDN博客](https://blog.csdn.net/logic1001/article/details/147259511)

- Windows各操作系统版本

  [Windows操作系统](https://next.itellyou.cn/Original/Index#cbp=Product?ID=6f677346-0a09-43fa-b60d-e878ed7625a0)

- 可能的报错及解决方法

  > 【报错】
  >
  > 安装系统镜像后打开虚拟机：
  >
  > `Raw-mode is unavailable courtesy of Hyper-V. (VERR_SUPDRV_NO_RAW_MODE_HYPER_V_ROOT).返回 代码:  E_FAIL (0x80004005) 组件:  ConsoleWrap 界面:  IConsole {872da645-4a9b-1727-bee2-5585105b9eed}`
  
  > 【原因】
  >
  > VirtualBox 的硬件虚拟化功能被 Hyper-V 占用了，只要 Windows 上启用了 Hyper-V 或相关虚拟化组件，VirtualBox 5.2.x 就不能用 “raw mode”，直接报这个错。
  
  > 【解决】
  >
  > 两个 **.bat** 脚本，用来关闭/开启Hyper
  
  ```
  @echo off 
  echo ==============================================
  echo  正在关闭 Hyper-V (为 VirtualBox 准备环境)
  echo ==============================================
  bcdedit /set hypervisorlaunchtype off
  echo.
  echo 已关闭 Hyper-V，请重启电脑后生效。
  pause
  ```
  {: file='disable_hyperv.bat'}
  
  ```
  @echo off
  echo ==============================================
  echo  正在开启 Hyper-V (恢复 WSL2/Docker 等功能)
  echo ==============================================
  bcdedit /set hypervisorlaunchtype auto
  echo.
  echo 已开启 Hyper-V，请重启电脑后生效。
  pause
  ```
  {: file='enable_hyperv.bat'}
  
  > 要跑 **eNSP/VirtualBox 5.2.x** → 先运行 `disable_hyperv.bat`
  >
  > 要用 **WSL2/Docker/Hyper-V** → 先运行 `enable_hyperv.bat`
  

## 4. eNSP

[华为eNSP网络模拟器安装详细教程（2024）-云社区-华为云](https://bbs.huaweicloud.com/blogs/422935)

> 安装eNSP之前需要安装好以上三个软件，否则无法顺利安装

![04](/img/2025-10-01/image04.png)

## 5. 后记

> 历经一天半（国庆假期/(ㄒoㄒ)/~~）
>
> 重装virtualbox 2次，重装eNSP 2次，重装wireshark 1次，下载系统镜像3次，创建虚拟机 5次
>
> 接下来记录一下问题与解决方法

- **娇生惯养的eNSP**

  - 找安装包像淘金

    > Huawei官网竟然没有这个软件的下载地址，搜索了半天还只能从别的博主的网盘中扒拉出来，都害怕不能够正常运行

  - 安装版本看运气

    > eNSP在安装时提示需要有3个其他软件的支持，如果检测到用户没有安装该这3个软件，那么就无法继续eNSP的安装
    >
    > 但是它也并未在安装步骤直接告知用户应该安装哪个版本，用户想当然是安装最新版本啦（**警告警告，此处埋雷**）
    >
    > **好消息：eNSP有帮助文档，里面直接给出了这3个软件的适配版本**
    >
    > **坏消息：在安装好的eNSP的界面里才能打开帮助文档，所以用户安装的3个软件很有可能是eNSP不支持的版本**

- **纠缠不休的VirtualBox**

  - eNSP送的礼物

    >由于在不了解eNSP其支持的3个软件的适配版本情况下，用户安装了其他版本的VirtualBox，需要重新安装
    >
    >**好消息：从版本库中可以轻松找到所适配的版本**
    >
    >**坏消息：VirtualBox的一键卸载并不完全，还会有VB*命名的残留文件，需要开安全模式才能够彻底清除**

  - 系统镜像安装的崎岖之路

    > 创建虚拟机后添加系统镜像文件
    >
    > 1. 不能进入虚拟机，**报错 unavailable Hyper 并闪退**，原因是上述问题中的Hyper问题，通过开关Hyper的脚本解决了
    > 2. 能进入虚拟机，But，**报错找不到硬/软件**，原因是一开始的系统版本选择错误，VirtualBox并不能直接识别添加的系统镜像版本，而是需要手动选择版本才能提供对应的配置服务
    > 3. 能进入虚拟机且进入系统安装界面，But，**安装100%后提示文件已损坏**，经历了整整4次，每次花费1h+（==原因分析见后文，头痛头痛==）

    ![05](/img/2025-10-01/image05.png)

- **安装展开极慢-频频报错系统文件损坏**

  > 1. 重新下载系统镜像3次，【未解决】，但能够确定镜像是完整无损的
  > 2. 修改虚拟机配置信息，扩大内存和硬盘，【未解决】，但能够确定默认的配置信息不是问题核心
  > 3. **修改“虚拟机/虚拟硬盘”放置的位置，从U盘通通移动到本地上，相当于在本地上全部重新装一遍**，【**完美解决**】

  ![06](/img/2025-10-01/image06.png)

  ![08](/img/2025-10-01/image08.png)

- 问题根源

  > 为了省空间，我一开始将所有的文件全部安装在U盘中，但实际上这并不科学
  >
  > U盘读写速度慢、连接不稳定，安装Windows系统时，需要向虚拟硬盘写入成千上万个小文件，这是一个**持续、高强度的写入过程，U盘的速度完全无法承受**，这直接导致了 “展开文件需要一小时” 的极端情况。
  >
  > 将文件全部在主机上操作时，展开文件明显快了很多，当时我就知道这回终于稳了！

- 真的被DS的描述笑死

  ![09](/img/2025-10-01/image09.png)

  > **这部分其实是今天要解决的核心问题，但是直到下午我才意识到这点，耽误了很多不必要的安装时间，甚至产生自我怀疑**
  >
  > **下一次安装软件我会更加谨慎，最好搞明白它的运行机制再安装，提高工作效率**

  ![07](/img/2025-10-01/image07.png) 


