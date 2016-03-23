---
layout: post

title: "高效技术领导者的5个锦囊妙计"
date: 2016-03-22
time: "23:01"
category: "CAREER"

author: "袁慎建"
publish: true
type: "translation"
source: "https://www.thoughtworks.com/insights/blog/5-tips-being-effective-tech-lead"

---



* content
{:toc}

---

>Becoming a Tech Lead is a tough transition for any developer, because only part of the skills and experience you had as a developer prepares you for the expectations of a new role. Instead of simply designing and writing code, a Tech Lead is suddenly responsible for an entire development team - and this means dealing with people, both technical and non-technical.

开发人员向技术领导者(简称TL)的转型通常是一个艰难的过程，因为他们已有的技能和经验只有小部分能帮助他们成为一个TL。除了简单的设计和编码，TL最重要的职责就是管理整个开发团队，这意味着TL要与不同角色的人进行沟通，不论是技术上的还是非技术的。

>The time a developer spent focusing on writing well-designed code does not translate into the skills necessary for understanding people, resolving conflict, or suddenly having to juggle more tasks than they can possibly achieve by themselves.

一个开发人员花在编写良好结构代码的时间并不能等效地转化成一些必要的技能，比如与人沟通，解决冲突，以及突然有可能需要同时处理多个他们自己并不太可能单独立即搞定的任务。

![Alt text]({{ "/assets/img/5-tips-for-being-an-effective-tech-lead-1.png" }})

>I present 5 tips for being an effective Tech Lead.

下面是如何成为一个高效TL的5个锦囊妙计

---

### 1. Learn to Delegate

>As a developer, you get a kick from working out what the hard, technical problem is to solve. You research different ways to solve the problem, seek the most simple solution and celebrate a victory when you want that red, failing test going green.

>As a Tech Lead, you cannot take on all the coding tasks, and cannot take on all the hard or interesting problems, regardless of your experience. You have many more responsibilities that need time and attention, and if you are focused solely on a single task, those other responsibilities will fail to be fulfilled. When you take on the harder problems, it also misses opportunities for other developers to grow and problem solve, which will lead to frustration and potentially people leaving your team!

>Of course, there are some problems when your experience and knowledge are important, but you do not want to be a bottleneck in solving problems, so you want to find a way to delegate and still be involved. Solutions might include kicking off a design session with developers to talk about general approaches, and reviewing progress with the developer on a regular basis to see if things are on track.

>As you and the developer build trust with each other, you can be less involved and fully delegate an activity to let you focus on more important tasks.

### 1.学会委托

作为一个开发人员，当你在工作中遇到了一个难以解决的技术问题时，你会查找各种解决方案，最终你挑了一个最简单的方案，然后你很高兴地庆祝你的测试如愿以偿的由红变绿。

作为一个TL，不管你的经验如何，你都不能去承担所有的编码工作，也不能去解决所有有挑战和有趣的问题。因为有更多的职责需要你去关注，而一旦你独自将自己专注在一个单独的任务里，你就不能兼顾其他的职责了。当你着手去解决棘手的难题时，这会剥夺团队其他开发人员成长的机会。这可能会让一些开发人员觉得没意思，进而选择离开团队。

当然，有时候你的经验和知识对于一些问题非常有用，但你又不想成为解决问题的一个瓶颈（译者注：意思是只有你能解决问题），所以你需要找到一种合适的方式将它委托给其他开发人员。你可以召集开发人员一起开会讨论一些常用的方案，将问题派给某些人去做，然后定期的检查他们的进展，确保进展在可控的范围内。

一旦你和开发人员的信任建立起来后，你就可以更少的参与到开发工作中，甚至你完全可以将一些事情委托出去，从而让你能够专注在更重要的事情上。


---

### 2. Find Time to Code

>The role is called "Tech Lead" for a reason, and it is essential that you find some time to spend in the codebase. Being involved in the code helps you build respect with the rest of the team, but it also helps keep your knowledge up to date and current with constraints, problems and the "shape" of the current codebase.

>If you do not spend time with the code, you run the risk of invoking the "Ivory Tower Architect" anti-pattern, leading technical decisions without understanding their real implications for implementation or maintenance. This anti-pattern has numerous side effects including destroying trust with developers, increasing the development time of new features, and increasing the accidental complexity of your software systems.

>There are many different ways a Tech Lead can find time to code, but it is essential that you make it a priority. This often means making difficult choices about where you spend your time. Tip #1 should help increase the amount of available time you have. I know some Tech Leads who will block out time in their calendar to ensure that there is always time during the week to write or review code with the other developers. I know of other Tech Leads who review commit logs, and provide feedback to developers - similar to a loose pair-programming style.

### 2.抽出时间写代码
TL这个角色存在是有其他原因的，最基本的一点是，你需要抽出时间花在代码库上。让自己熟悉代码能够有助于获得团队成员的尊敬，另外你的知识技能也得到更新，并且你还能清楚的了解代码库的当前的现状，比如代码库的一些约束和存在的问题。

如果你不花任何时间去写代码，你有可能践行了“象牙塔建筑师”这个反模式，导致了你在做一些技术决定的时候并没有理解代码实现以及维护背后真正的含义。而且这个反模式有很多的副作用，它会让你失去团队成员的信任，会延长新功能的开发时间，并且会增加软件系统的意外复杂性。

TL可以有很多方式抽出时间来编码，


---

### 3. Visualise Your Architecture

I have worked in several teams where developers had no idea how their task fit into a bigger picture. A small technical decision made by a developer might have a wider architectural impact, but is impossible to prevent if developers do not understand the broader picture.

An effective Tech Lead often has a visual representation of their system architecture on-hand and uses it to have discussions with developers. There will often be different views of the architecture (logical, deployment, etc) and each diagram helps developers see how their task fits into a broader system architecture.

A whole-team whiteboard session is often a useful exercise for reviewing the overall architecture, as it evolves over time to meet differing requirements and the discussion during the session is even more important than the diagram. Focus on key quality attributes that drive out your architectural vision (scalability, performance, usability concerns, etc) and how they have shaped your architecture. Call out assumptions and the historical context to help developers guide their everyday decisions.

---

### 4. Spend Time 1-on-1 with Team Members

An effective Tech Lead will not be measured with how many coding tasks they complete. They are measured by how effective their software team is. Anything that a Tech Lead can do to make each person on their team better, makes the overall team better. Sit down with members on your team to understand their backgrounds, their strengths, their interests and their goals to understand how the people in your team fit together as a group. Connect developers with opportunities for them to grow. This means allowing them to take risks so they can learn and grow, but also contribute to the team. Encourage people sharing knowledge across the team and find ways to help each team member connect with each other.

---

### 5. Learn to Speak the Language of the Business

To be an effective Tech Lead, you will need a great relationship with people outside of the development team including people like Product Managers, Marketing, Sales and CxOs. They will not understand the vocabulary you accumulated as a developer, and talking to them in terms of frameworks, technical tools and platforms will only confuse them.

An effective Tech Lead finds ways for non-technical people to understand technical concepts, and the best way to do that is to find the terms that business people use and find ways to explain tasks in those terms. Use visual models, whiteboard sessions and metaphors to help business people understand technical concepts and their implications. You might rehearse on friends or relatives who don’t work in technology to see if you can succinctly explain an idea.

Minimize the translation layer as much as possible by bringing business terms into the development team and encouraging their use as much as possible. The better the developer team uses these domain terms, the better their understanding and empathy with business stakeholders will be.

Find out more about the experiences of other tech leads in Patrick's book 'Talking with Tech Leads'. You can download a free sample of the book here.​ Also, don't miss the author's post on Three Common Mistakes of the First Time Tech Lead.

[原文链接](https://docs.djangoproject.com/en/dev/topics/db/transactions/)