---
layout: post

title: "高效技术领导者的5个锦囊妙计"
date: 2016-03-22
time: "23:01"
category: "CAREER"

author: "袁慎建"
publish: true
type: "translation"
source: "http://cleancoder.club/5-tips-for-being-an-effective-tech-lead/"

---



* content
{:toc}

---

Becoming a Tech Lead is a tough transition for any developer, because only part of the skills and experience you had as a developer prepares you for the expectations of a new role. Instead of simply designing and writing code, a Tech Lead is suddenly responsible for an entire development team - and this means dealing with people, both technical and non-technical.

>成为一个技术领导者(后文简称TL)对任何开发人员来讲都是一个艰难的转型，因为开发人员的经验和技能仅仅只有部分有助于他们达到对这个新角色的期望。除了简单的设计和编码，TL最重要的职责在于管理整个开发团队，这意味着TL要经常与技术人员以及非技术人员进行沟通协作。

The time a developer spent focusing on writing well-designed code does not translate into the skills necessary for understanding people, resolving conflict, or suddenly having to juggle more tasks than they can possibly achieve by themselves.

>一个开发人员花在编写良好结构的代码的时间并不能等效地转化成一些必要的技能，比如了解他人，解决冲突，以及突然需要同时处理多个他们自己并不太可能独立搞定的任务。

![Alt text]({{ "/assets/img/5-tips-for-being-an-effective-tech-lead-1.png" }})

I present 5 tips for being an effective Tech Lead.

>下面是如何成为一个高效TL的5个锦囊妙计

---

### 1.学会委托


As a developer, you get a kick from working out what the hard, technical problem is to solve. You research different ways to solve the problem, seek the most simple solution and celebrate a victory when you want that red, failing test going green.

>作为开发人员，当你在工作中遇到了一个难以解决的技术问题时，你会寻找各种解决方案，你挑了一个最简单的方案把问题解决了，最后你高兴地庆祝你的测试如愿以偿的由红变绿。

As a Tech Lead, you cannot take on all the coding tasks, and cannot take on all the hard or interesting problems, regardless of your experience. You have many more responsibilities that need time and attention, and if you are focused solely on a single task, those other responsibilities will fail to be fulfilled. When you take on the harder problems, it also misses opportunities for other developers to grow and problem solve, which will lead to frustration and potentially people leaving your team!

>作为TL，不论你有多少经验，你都不能去承担所有的编码工作，也不能去解决所有有挑战和有趣的问题。因为有更多的职责需要你去关注，一旦你独自将自己专注在一个任务里，你就不能兼顾其他的职责了。当你着手去解决棘手的难题时，这会剥夺团队其他开发人员成长的机会。这可能会让一些开发人员觉得没意思，进而选择离开团队。

Of course, there are some problems when your experience and knowledge are important, but you do not want to be a bottleneck in solving problems, so you want to find a way to delegate and still be involved. Solutions might include kicking off a design session with developers to talk about general approaches, and reviewing progress with the developer on a regular basis to see if things are on track.

>当然，有时候你的经验和知识对于一些问题非常有用，但你又不想成为解决问题的瓶颈（译者注：意思是只有你能解决那些问题），所以你想找到一种合适的方式将它委托给其他开发人员。你可以召集开发人员一起开会讨论一些常用的方案，将问题派给某些人去做，然后定期的检查他们的进展，确保进展在可控的范围内。

As you and the developer build trust with each other, you can be less involved and fully delegate an activity to let you focus on more important tasks.

>一旦你和开发人员的信任建立起来后，你就可以更少的参与到开发工作中，甚至你完全可以将一些事情委托出去，从而让你能够专注在更重要的事情上。



---

### 2.抽出时间写代码

The role is called "Tech Lead" for a reason, and it is essential that you find some time to spend in the codebase. Being involved in the code helps you build respect with the rest of the team, but it also helps keep your knowledge up to date and current with constraints, problems and the "shape" of the current codebase.

>这个角色之所以被称作TL有一个原因，它是最基本的一点：你要花时间在代码库上。让自己熟悉代码能够有助于你获得团队成员的尊敬，同时也使你的知识技能得到更新，并且你还能清楚的了解代码库的当前的现状，比如代码库的一些约束和存在的问题。

If you do not spend time with the code, you run the risk of invoking the "Ivory Tower Architect" anti-pattern, leading technical decisions without understanding their real implications for implementation or maintenance. This anti-pattern has numerous side effects including destroying trust with developers, increasing the development time of new features, and increasing the accidental complexity of your software systems.

>如果你不花任何时间去写代码，你有可能践行了“象牙塔建筑师”这个反模式，导致了你在做一些技术决定的时候并没有理解代码实现以及维护背后真正的含义。而且这个反模式有很多的副作用，它会让你失去团队成员的信任，会延长新功能的开发时间，并且会增加软件系统的意外复杂性。


There are many different ways a Tech Lead can find time to code, but it is essential that you make it a priority. This often means making difficult choices about where you spend your time. Tip #1 should help increase the amount of available time you have. I know some Tech Leads who will block out time in their calendar to ensure that there is always time during the week to write or review code with the other developers. I know of other Tech Leads who review commit logs, and provide feedback to developers - similar to a loose pair-programming style.

>TL可以有很多方式抽出时间来编码，重要的是你要有意识去做这件事。这通常意味着你要对怎么支配你的时间做出艰难的选择。锦囊1可以帮助你腾出更多的时间。我了解到一些TL会在他们的日历上标注出一些特定的时间段来确保自己有时间写代码或者跟其他开发成员检查代码。我还知道一些TL会检查提交的日志，给开发成员提出反馈--这种方式更像一个宽松自由的结对编程。




---

### 3. 可视化你的系统架构

I have worked in several teams where developers had no idea how their task fit into a bigger picture. A small technical decision made by a developer might have a wider architectural impact, but is impossible to prevent if developers do not understand the broader picture.

>我待过的几个团队中，开发人员不明白他们所做的工作是怎样跟系统架构的设计融合在一起的。开发人员一个小的技术决策可能会造成大范围的架构影响。如果开发人员不能理解这些抽象的系统架构，这些将无法避免。

An effective Tech Lead often has a visual representation of their system architecture on-hand and uses it to have discussions with developers. There will often be different views of the architecture (logical, deployment, etc) and each diagram helps developers see how their task fits into a broader system architecture.

>高效的TL通常将系统架构通过可视化的方式呈现出来，并拿它来跟开发人员展开讨论。通常有多种不同的图形方式来呈现系统架构（逻辑图，部署图，等等）。并且每一个图形都能帮助开发人员明白他们的工作是怎么与系统架构融合在一起的。

A whole-team whiteboard session is often a useful exercise for reviewing the overall architecture, as it evolves over time to meet differing requirements and the discussion during the session is even more important than the diagram. Focus on key quality attributes that drive out your architectural vision (scalability, performance, usability concerns, etc) and how they have shaped your architecture. Call out assumptions and the historical context to help developers guide their everyday decisions.

>一个全员的白板会议是检查整体架构的一个很有用的方式，因为它会随着时间逐步完善，从而能够满足不断变化的需求以及会议中那些比图形更重要的讨论结果。专注在关键的质量指标上，这些指标是驱动系统架构可视化的指标（可扩展性，性能，可用性等等）。同时要清楚它们是如何促成你当前的系统架构。引出一些假设以及分享历史上下文信息能够帮助开发人员指导他们的平时的决策。

---


### 4. 与团队成员一对一交流

An effective Tech Lead will not be measured with how many coding tasks they complete. They are measured by how effective their software team is. Anything that a Tech Lead can do to make each person on their team better, makes the overall team better. Sit down with members on your team to understand their backgrounds, their strengths, their interests and their goals to understand how the people in your team fit together as a group. Connect developers with opportunities for them to grow. This means allowing them to take risks so they can learn and grow, but also contribute to the team. Encourage people sharing knowledge across the team and find ways to help each team member connect with each other.

>衡量一个TL是否高效并不是看他完成了多少编码工作，而要看整个团队有多么的高效。一个TL所做的任何事情就是让团队成员成长，让整个团队持续进步。坐下来跟团队成员进行一对一的交流沟通，了解每个人的知识背景、长处以及他们的目标，从而了解你的团队成员如何在一起工作的。同时也要让开发人员都有机会成长。这意味着你要允许他们尝试冒险、挑战有难度的工作，让自己成长的同时也为团队做出贡献。鼓励团队成员在团队中分享知识，并且让他们有更多的交流互动。

---


### 5. 学会说业务语言

To be an effective Tech Lead, you will need a great relationship with people outside of the development team including people like Product Managers, Marketing, Sales and CxOs. They will not understand the vocabulary you accumulated as a developer, and talking to them in terms of frameworks, technical tools and platforms will only confuse them.

>想要成为一个高效的TL，你还需要跟开发团队之外的人保持好关系，比如产品经理、市场人员、销售等。他们并不能理解你作为一个开发人员的一些术语，所以跟他们讲框架、技术工具以及平台只会让他们困惑。

An effective Tech Lead finds ways for non-technical people to understand technical concepts, and the best way to do that is to find the terms that business people use and find ways to explain tasks in those terms. Use visual models, whiteboard sessions and metaphors to help business people understand technical concepts and their implications. You might rehearse on friends or relatives who don’t work in technology to see if you can succinctly explain an idea.

>高效的TL会想办法让非技术人员理解这些技术概念，最好的方式是找出那些业务人员经常使用的术语并想办法用那些术语来解释我们的开发工作。可视化模型，白板会议以及恰当的比喻都会有助于业务人员理解技术概念和含义。你可以找来一个非技术人员跟你一起练习，看你是否能让他听懂你在说什么。

Minimize the translation layer as much as possible by bringing business terms into the development team and encouraging their use as much as possible. The better the developer team uses these domain terms, the better their understanding and empathy with business stakeholders will be.

>通过将业务术语引进开发团队中并鼓励他们尽可能多的使用这些术语，可以尽可能地减小转换层。开发团队成员运用这些领域术语越多，他们就能越容易理解相关业务人员。

Find out more about the experiences of other tech leads in Patrick's book 'Talking with Tech Leads'. You can download a free sample of the book here.​ Also, don't miss the author's post on Three Common Mistakes of the First Time Tech Lead.

> 在Patrick写的《Talking with Tech Leads》书里可以找到更多关于TL的经验。你可以[下载](http://info.thoughtworks.com/talking-with-tech-leads-book.html)一本免费的样本，或者，不要错过[初次做Teac Lead的三个常犯的错误]()这篇精彩的文章。


[原文链接](http://cleancoder.club/5-tips-for-being-an-effective-tech-lead/)