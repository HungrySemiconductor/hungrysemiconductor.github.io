---
data: 2025-07-17
categories: [网站搭建]
tags: [GitHub Pages, jekyll]
description: 本文介绍了使用GitHub Pages+Jekyll创建个人静态网站的步骤
comments: true
---

# 静态网站搭建（一）

## 内容简介

> 🚩**Tech Contents**：本文介绍了使用GitHub Pages+Jekyll创建个人静态网站的步骤

> **GitHub Pages**：**静态网站托管服务**，自动将仓库中的代码变为网站/免费提供`<用户名>.github.io`域名/随最新推送实时更新
<br>**Jekyll**：**静态网站生成器**，将`MarkDown`文件自动转换为网页，提供主题模板/支持博客功能
<br>**Custom URLs**：支持配置**自定义域**

---

## 搭建步骤

### GitHub仓库创建[^foot1]

1. 新建仓库，命名方式为`<username>.github.io`
2. 克隆仓库到本地，自动生成远程配置
3. 提交并推送一个html文件，在浏览器上验证`username.github.io`是否正常访问


### Jekyll安装使用[^foot2][^foot3]

#### Jekyll安装指南

1. 安装Ruby，为Jekyll提供运行环境 [rubyinstaller.org Downloads](https://rubyinstaller.org/downloads/)
2. 验证ruby和gem安装，cmd中分别使用命令`ruby -v`  `gem -v`
3. 安装Jekyll，cmd中使用命令`gem install jekyll bundler`
4. 验证Jekyll安装，cmd中使用命令`jekyll -v`

#### Jekyll快速搭建测试

1. 在克隆的文件夹中打开git bash，使用`jekyll new <myblog>`
2. 创建完成后，使用命令`cd <myblog>`进入文件夹
3. 使用命令`jekyll serve`，可以在浏览器中输入`http://localhost:4000`看到jekyll模板生成的静态页面

![Desktop View](/img/2025-07-17/image01.png)
_Jekyll生成的静态页面_



>上述过程最好全程开代理，且new操作一般会有较长等待时间，本文Jekyll新建myblog时安装了41个gems
{: .prompt-tip }




[^foot1]:[GitHub Pages](https://pages.github.com/)
[^foot2]:[Win安装 Ruby+Jekyll视频教程](https://www.bilibili.com/video/BV1qs41157ZZ?spm_id_from=333.788.player.switch&vd_source=dd2b7c41f54e83182372ee62c303b855&p=3)
[^foot3]:[Jekyll • 简单静态博客网站生成器](https://jekyllcn.com/docs/home/)