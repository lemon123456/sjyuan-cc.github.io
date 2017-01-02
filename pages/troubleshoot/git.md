---
layout: default
menu_label: 
title: Git 锦囊
permalink: /troubleshoots/git
icon: glyphicon-saved
---

* content
{:toc}



### 将一个分支替换掉另一个分支
需求描述：存在两个分支，一个名为`development`，另一个为`release`，使用`release`替换掉`development`分支。

```sh
$ git checkout release
$ git merge -s ours development
$ git checkout development
$ git merge release
```















