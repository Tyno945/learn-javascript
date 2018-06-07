# JavaScript 学习笔记

## JavaScript简介

JavaScript是一种运行在浏览器中的解释型的编程语言。

    了解JavaScript历史
    了解ECMAScript


## JavaScript基础

要让浏览器运行JavaScript，必须先有一个HTML页面，在HTML页面中引入JavaScript，然后，让浏览器加载该HTML页面，就可以执行JavaScript代码。

### 基本语法

* 理解语句和语句块，每个语句以`;`结束，语句块用`{...}`。
* 注释：单行注释`//`，多汗注释`/*...*/`。
* JavaScript严格区分大小写。

### strict模式

启用strict模式的方法是在JavaScript代码的第一行写上：'use strict';

### 变量

变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用数字开头。

变量用`let`申明。

### 数据类型

* 数值
```javascript
123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
```
计算机由于使用二进制，所以，有时候用十六进制表示整数比较方便，十六进制用0x前缀和0-9，a-f表示，例如：0xff00，0xa5b4c3d2，等等，它们和十进制表示的数值完全一样。
* 字符串
* 布尔值

    一个布尔值只有true、false两种值

* null
* undefined
* 数组
* 对象
```javascript
let person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

person.name; // 'Bob'
person.zipcode; // null
```

### 字符串

JavaScript的字符串就是用''或""括起来的字符表示。

#### 转义字符

`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`。

```javascript
'I\'m \"OK\"!'; // I'm "OK"!
'\x41'; // 完全等同于 'A',ASCII字符可以以\x##形式的十六进制表示
'\u4e2d\u6587'; // 完全等同于 '中文',可以用\u####表示一个Unicode字符
```

#### 多行字符串

ES6标准新增了一种多行字符串的表示方法，用反引号\` ... \` 表示：
```javascript
`这是一个
多行
字符串`;
```

#### 模板字符串

```javascript
let name = '小明';
let age = 20;
let message = `你好, ${name}, 你今年${age}岁了!`;
alert(message);
```
#### 字符串操作

字符串是不可变的，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串。
```javascript
var s = 'Hello, world!';
s.length; // 13
s[0]; // "H"
s.toUpperCase(); // 返回"HELLO, WORLD!"
s.toLowerCase(); // 返回"hello, world!"
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1
s.substring(0, 5); // 从索引0开始到5（不包括5），返回"Hello"
s.substring(7); // 从索引7开始到结束，返回"world!"
```

### 数组

#### 数组定义

```javascript
[1, 2, 3.14, 'Hello', null, true];
new Array(1, 2, 3); // 创建了数组[1, 2, 3]
```

#### 数组操作

```javascript
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6
arr[4] = 'A'; // arr现在变为[1, 2, 3.14, "Hello", "A", true]
arr.indexOf(2); // 1
arr.indexOf(10); // 没有找到，返回-1
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: [1, 2, 3.14]
arr.slice(3); // 从索引3开始到结束:["Hello", "A", true]
arr.slice(); // 复制一个Array
arr.push('A', 'B'); // 向Array的末尾添加若干元素，返回Array新的长度: 8
arr.pop(); // pop()把Array的最后一个元素删除掉并返回'B'
arr.unshift('A', 'B'); // 往Array的头部添加若干元素，返回Array新的长度: 9
arr.shift(); // 把Array的第一个元素删掉并返回'A'
arr.sort(); // [1, 2, 3.14, "A", "A", "B", "Hello", true]
arr.reverse(); // 反转，返回[true, "Hello", "B", "A", "A", 3.14, 2, 1]
arr.splice(2, 3, 'C', 'D'); // 返回删除的元素 ["B", "A", "A"],arr变为[true, "Hello", "C", "D", 3.14, 2, 1]
/* splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素 */
arr.concat(1, 2, [3, 4]); // 返回新数组[true, "Hello", "C", "D", 3.14, 2, 1, 1, 2, 3, 4]
arr.join('-'); // "true-Hello-C-D-3.14-2-1"
```

### 对象

### 条件判断

### 循环

### Map和Set

### iterable

### 函数

## JavaScript进阶

## 难点及疑问

## 参考资料