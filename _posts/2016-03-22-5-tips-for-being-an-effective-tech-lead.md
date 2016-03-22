---
layout: post

title: "高效技术领导者的5个锦囊妙计"
date: 2016-03-22
time: "23:01"
category: "CAREER"

author: "袁慎建"
publish: false
type: "translation"
source: "https://docs.djangoproject.com/en/dev/topics/db/transactions/"

---



* content
{:toc}

---

Becoming a Tech Lead is a tough transition for any developer, because only part of the skills and experience you had as a developer prepares you for the expectations of a new role. Instead of simply designing and writing code, a Tech Lead is suddenly responsible for an entire development team - and this means dealing with people, both technical and non-technical.

The time a developer spent focusing on writing well-designed code does not translate into the skills necessary for understanding people, resolving conflict, or suddenly having to juggle more tasks than they can possibly achieve by themselves.

![Alt text]({{ "/assets/img/5-tips-for-being-an-effective-tech-lead-1.png" }})

I present 5 tips for being an effective Tech Lead.

---

### 1. Learn to Delegate

As a developer, you get a kick from working out what the hard, technical problem is to solve. You research different ways to solve the problem, seek the most simple solution and celebrate a victory when you want that red, failing test going green.

As a Tech Lead, you cannot take on all the coding tasks, and cannot take on all the hard or interesting problems, regardless of your experience. You have many more responsibilities that need time and attention, and if you are focused solely on a single task, those other responsibilities will fail to be fulfilled. When you take on the harder problems, it also misses opportunities for other developers to grow and problem solve, which will lead to frustration and potentially people leaving your team!

Of course, there are some problems when your experience and knowledge are important, but you do not want to be a bottleneck in solving problems, so you want to find a way to delegate and still be involved. Solutions might include kicking off a design session with developers to talk about general approaches, and reviewing progress with the developer on a regular basis to see if things are on track.

As you and the developer build trust with each other, you can be less involved and fully delegate an activity to let you focus on more important tasks.

---

### 2. Find Time to Code

The role is called "Tech Lead" for a reason, and it is essential that you find some time to spend in the codebase. Being involved in the code helps you build respect with the rest of the team, but it also helps keep your knowledge up to date and current with constraints, problems and the "shape" of the current codebase.

If you do not spend time with the code, you run the risk of invoking the "Ivory Tower Architect" anti-pattern, leading technical decisions without understanding their real implications for implementation or maintenance. This anti-pattern has numerous side effects including destroying trust with developers, increasing the development time of new features, and increasing the accidental complexity of your software systems.

There are many different ways a Tech Lead can find time to code, but it is essential that you make it a priority. This often means making difficult choices about where you spend your time. Tip #1 should help increase the amount of available time you have. I know some Tech Leads who will block out time in their calendar to ensure that there is always time during the week to write or review code with the other developers. I know of other Tech Leads who review commit logs, and provide feedback to developers - similar to a loose pair-programming style.

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