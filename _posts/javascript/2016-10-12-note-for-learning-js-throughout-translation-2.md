---
layout: post

title: "Learning JavaScript 翻译笔记（二）"
date: 2016-10-12
time: "09:22"
category: "JAVASCRIPT"

author: "袁慎建"
published: true
type: "original"

---

* content
{:toc}


## 第6章 函数

>一句话概括函数：函数是一组语句的集合，可以独立运行的程序单元，也称作子程序。


来看一个不带显式返回值的函数（默认返回值为undefined）和一个带返回值的函数：

```js
function sayHello() {   // this is the body; it started with an opening curly brace...   console.log("Hello world!");   console.log("¡Hola mundo!");   console.log("Hallo wereld!");   console.log("Привет мир!");   // ...and ends with a closing curly brace}

function getGreeting() {   return "Hello world!";} 
```

---

### 调用和引用赋值
函数名紧跟括号就是在调用该函数，而函数名赋值，得到的结果是函数本身，这个特性可以用来给函数起别名：

```js
result = getGreeting();          // result = "Hello, World!"result = getGreeting;            // result = getGreeting()
f = getGreeting;
result = f();                    // result = getGreeting()
```
还可以把函数添加到数组中，这就应证了`一切皆对象`这句话，使用的过程中，可以将函数当做一个对象赋给变量。

---

### 函数参数
函数可以接受固定个数的参数，还可以接受可变参数

---

#### 传值方式
跟Java这种面向对象的编程语言一样，函数参数是在调用的时候传递给函数的，传递方式有两种：

```
1. 基本类型，由于是不可变的类型，直接传值，方法内部改变了参数的值不会产生副作用。
2. 对象类型，穿的是该对象的引用，方法内部修改了传入的对象，会产生副作用。
```

---

#### 同名函数不同参数
在Java中，方法可以重载，也就是方法名字相同，但方法参数类型或个数不同（返回值不同不允许存在）。也就是同名方法不同参数。那么在JavaScript中是否也遵循这个原则呢？

```js
function f(x) {   return `in f: x=${x}`;}f();     // "in f: x=undefined"
f(1);     // "in f: x=1"
```

在JavaScript中，不存在方法的重载，相同名字的函数都是同一个函数，调用的时候可以传入任意多个参数，传入的参数和方法定义时的参数个数不匹配时，遵循如下原则：

```
1. 调用函数时传入的参数个数不足，按顺序对号入座后，不足的值为undefined。
2. 调用函数时传入函数的个数过多，多出的参数自动被忽略。
```

---

#### 解构参数
可以将多个参数值封装到对象中当做一个参数传入函数，函数内部使用对象属性对应的key去解构对象中的属性值，看一个对象解构例子：

```js
function getSentence({ subject, verb, object }) {   return `${subject} ${verb} ${object}`;} const o = {   subject: "I",   verb: "love",   object: "JavaScript",};getSentence(o);        // "I love JavaScript"
```
> 解构的时候属性名必须跟传入的对象属性名相同，否则解析的值为undefined


再看一个解构数组的例子：

```js
function getSentence([ subject, verb, object ]) {   return `${subject} ${verb} ${object}`;} const arr = [ "I", "love", "JavaScript" ];getSentence(arr);          // "I love JavaScript"
```
---

#### “可变参数”
在Java中，有个特性叫做可变参数，同样在JavaScript中也支持这个特性，只是叫法不一样。`...` 展开运算符用来接收多出来的参数，看一个例子：

```js
function addPrefix(prefix, ...words) {   // we will learn a better way to do this later!   const prefixedWords = [];   for(let i=0; i<words.length; i++) {       prefixedWords[i] = prefix + words[i];   }   return prefixedWords;}addPrefix("con", "verse", "vex");   // ["converse", "convex"]
```
>可变参数有一个限制，这个参数必须位于函数参数列表的最后。

---

#### 默认参数
函数还可以指定默认参数，当调用方没有传入指定参数时，函数就会使用默认的参数，看一个例子：

```js
function f(a, b = "default", c = 3) {   return `${a} - ${b} - ${c}`;} f(5, 6, 7);     // "5 - 6 - 7"f(5, 6);         // "5 - 6 - 3"f(5);             // "5 - default - 3"f();               // "undefined - default - 3"
```
---

#### 另一个名字："方法"
当函数作为对象的属性时，就有了另一个名字：`方法`，类似于Java中的成员方法。下面是ES5和ES6的方法：

```js
// ES5
const o = {   name: 'Wallace',                       // 简单属性   bark: function() { return 'Woof!'; },  // 函数属性 (或者方法属性)}

// ES6
const o = {   name: 'Wallace',                 //简单属性   bark() { return 'Woof!'; },      //函数属性 (或者方法属性)} 
```

---

### This关键字
`this`是面向对象中最为常见的关键字，在Java中，它表示对象自身，可以通过`this`来调用自身的方法和属性。这点在JavaScript中略有不同，虽然从描述`当方法被调用时，this关键字的值就是被调用的对象`上来看是一样的，不同点在哪里呢？看下面这个例子：

```js
const o = {   name: 'Wallace',   speak() { return `My name is ${this.name}!`; },}o.speak();     // "My name is Wallace!

const aliasSpeak= o.speak;aliasSpeak === o.speak;        // 为真; 两个变量都指向了同一个函数aliasSpeak();                  // "My name is !"
```
> 当把`speak`函数赋给`aliasSpeak `常量后，再次调用`aliasSpeak `，`this`关键字的绑定就是败了，`${this.name}`的值不存在。

---

#### 当方法返回函数时
当一个对象的方法返回一个函数，该函数中使用了`this`关键字时，结果可能会出乎意料：

```js
const o = {   name: 'Julie',   greetBackwards: function() {      function getReverseName() {         let nameBackwards = '';         for(let i=this.name.length-1; i>=0; i--) {            nameBackwards += this.name[i];         }         return nameBackwards;      }      return `${getReverseName()} si eman ym ,olleH`;   },};o.greetBackwards();
```
此时调用`o.greetBackwards()`，在`greetBackwards `中调用`getReverseName`时，`this`被绑定到其他地方，所以我们需要做一个小处理：

```js
...
   greetBackwards: function() {
      const self = this;      ...            nameBackwards += self.name[i];         ......
```
---

### 匿名函数
有时候，我们定义函数的时候并不需要给函数指定一个名字，而是直接赋给变量进行使用，例如：

```js
const f = function() {   // ...}; 
```
还可以将一个具名函数赋值给一个变量：

```js
const g = function f(stop) {    if(stop) console.log('f stopped');    f(true);}; g(false); 
```
>为什么要这么做呢？仔细看一遍，不难发现这样可以实现函数的递归调用，但是不常用。

---

### 箭头符号
`箭头符号是ES6的新特性，它用来简化函数的定义`，先看一个直观的例子：

```js
const f1 = function() { return "hello!"; }// ORconst f1 = () => "hello!";const f2 = function(name) { return `Hello, ${name}!`; }// ORconst f2 = name => `Hello, ${name}!`;const f3 = function(a, b) { return a + b; }// ORconst f3 = (a,b) => a + b;
```
从例子中可以总结以下几点：

```
1. 可以省略function单词
2. 如果函数只有一个参宿，可以省略花括号
3. 如果函数体是一个单独的表达式，可以省略花括号和返回语句。
```

---

### 指定`this`的绑定
前面已经提到过，`this`关键字会默认被绑定到被调用的对象上，除了这种默认的绑定，还可以通过`call`来显式指定`this`所绑定的目标：

```js
const bruce = { name: "Bruce" };const madeline = { name: "Madeline" };// this function isn't associated with any object, yet// it's using 'this'!function greet() {   return `Hello, I'm ${this.name}!`;}greet();                 // "Hello, I'm !" - 'this' not boundgreet.call(bruce);       // "Hello, I'm Bruce!" - 'this' bound to 'bruce'greet.call(madeline);    // "Hello, I'm Madeline!" - 'this' bound to 'madeline'


function update(birthYear, occupation) {   this.birthYear = birthYear;   this.occupation = occupation;} update.call(bruce, 1949, 'singer');// 现在的bruce是 { name: "Bruce", birthYear: 1949, occupation: "singer" }
update.call(madeline, 1942, 'actress');// 现在的madeline是 { name: "Madeline", birthYear: 1942, occupation: "actress" }
```
> `call`方法第一个参数是要给`this`绑定的目标对象，剩下的参数则是所调用的函数的参数。

另外，还有一个更`call`类似的方法`apply`，只不过`apply`是以数组的形式接受参数：

```js
update.apply(bruce, [1955, "actor"]);// bruce is now { name: "Bruce", birthYear: 1955, occupation: "actor" }update.apply(madeline, [1918, "writer"]);// madeline is now { name: "Madeline", birthYear: 1918, occupation: "writer" }

const arr = [2, 3, -5, 15, 7];Math.min.apply(null, arr);    // -5Math.max.apply(null, arr);    // 15
```










