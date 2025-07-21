---
data: 2025-07-17
categories: [网站搭建]
tags: [GitHub Pages, jekyll]
description: 本文介绍了Jekyll主题的下载与使用
comments: true
---

# 静态网站搭建（二）

## 内容简介

> 🚩 **Tech Contents**：本文介绍了**Jekyll主题的下载与使用**。

> Github+Jekyll已经过了黄金期（2015-2018年），一开始找到的主题基本上都是7~10年前的项目，虽然设计非常美观，但由于这些主题依赖的Ruby gem版本早已不兼容现代环境，所以频频报错。
<br>由于我又非常菜，一方面无法解决部分版本过时问题，另一方面又无力自己独立写出一个主题，所以只能不考虑设计偏好而选择最新的、且最好有人维护的主题。
<br>直到我发现了**jekyll-theme-chirpy**，一个直到2025年仍被维护的宝藏主题，安装使用过程非常丝滑、顺畅！


## 搭建模板
1. **创建自己的仓库**
<br>作者给出了该项目的模板，直接进入仓库，点击<kbd>Use this template</kbd>创建自己的仓库，以`<username>.github.io`命名即可
2. **克隆项目到本地**
<br>使用`bundle install`安装`Gemfile`中的`Ruby`依赖
3. **浏览个人网页**
<br>使用`bundle exec jekyll serve`，获取到本地服务器http://locoalhost:4000，即可在网页上浏览

> 模板链接：[cotes2020/chirpy-starter: A website startup template using the Chirpy theme gem.](https://github.com/cotes2020/chirpy-starter)
{: .prompt-info }

## 网站部署
1. **配置`_config.yml`文件**
<br>填写`url`为`https://<username>.github.io`的格式，**注意结尾不要带 /**
2. **额外配置**
<br>如果本地计算机未运行Linux，还需要使用`$ bundle lock --add-platform x86_64-linux`更新锁定文件(Gemfile.locak)的平台列表
3. **开启`GitHub Actions`**
<br>进入`GitHub`中该项目的仓库，从上边栏打开`setting`页面，从侧边栏打开`Pages`页面，`Build and deployment`的`source`处选择<kbd>GitHub Action</kbd>
4. **运行网页**
<br>在本地提交、推送一次，即可使用专属URL`https://<username>.github.io`打开自己了的网页了！

> 操作文档：[Chirpy-Getting Stared](https://chirpy.cotes.page/posts/getting-started/)
{: .prompt-info }

> 使用`GitHub Actions`自动部署后，在本地的修改需要通过`bundle exec jekyll serve --livereload`才能启动实时预览
{: .prompt-warning }
