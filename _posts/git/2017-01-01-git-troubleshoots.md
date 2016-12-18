---
layout: post

title: "Git troubleshoots"
date: 2017-01-01
time: "02:22"
category: "GIT"

author: "袁慎建"
published: true
type: "original"

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















