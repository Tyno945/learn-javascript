<!-- TOC depthFrom:2 -->

- [1. JavaScript简介](#1-javascript简介)
- [2. JavaScript基础](#2-javascript基础)
    - [2.1. 基本语法](#21-基本语法)
    - [2.2. strict模式](#22-strict模式)
    - [2.3. 变量](#23-变量)
        - [2.3.1. 常量](#231-常量)
    - [2.4. 数据类型](#24-数据类型)
    - [2.5. 字符串](#25-字符串)
        - [2.5.1. 转义字符](#251-转义字符)
        - [2.5.2. 多行字符串](#252-多行字符串)
        - [2.5.3. 模板字符串](#253-模板字符串)
        - [2.5.4. 字符串操作](#254-字符串操作)
    - [2.6. 数组](#26-数组)
        - [2.6.1. 数组定义](#261-数组定义)
        - [2.6.2. 数组操作](#262-数组操作)
    - [2.7. 对象](#27-对象)
        - [2.7.1. 标准对象](#271-标准对象)
        - [2.7.2. 创建正则表达式](#272-创建正则表达式)
    - [2.8. 条件判断](#28-条件判断)
    - [2.9. 循环](#29-循环)
    - [2.10. Map和Set](#210-map和set)
    - [2.11. iterable](#211-iterable)
    - [2.12. 函数](#212-函数)
        - [2.12.1. 函数定义与调用](#2121-函数定义与调用)
        - [2.12.2. 变量作用域与解构赋值](#2122-变量作用域与解构赋值)
        - [2.12.3. 函数apply方法](#2123-函数apply方法)
        - [2.12.4. 装饰器](#2124-装饰器)
        - [2.12.5. 高阶函数](#2125-高阶函数)
        - [2.12.6. 闭包](#2126-闭包)
        - [2.12.7. generator（生成器）](#2127-generator生成器)
- [3. JavaScript进阶](#3-javascript进阶)
    - [3.1. 面向对象编程](#31-面向对象编程)
        - [3.1.1. 创建对象](#311-创建对象)
        - [3.1.2. 原型继承](#312-原型继承)
        - [3.1.3. class继承](#313-class继承)
    - [3.2. 浏览器](#32-浏览器)
        - [3.2.1. 浏览器对象](#321-浏览器对象)
        - [3.2.2. 操作DOM](#322-操作dom)
        - [3.2.3. 操作表单](#323-操作表单)
        - [3.2.4. 操作文件](#324-操作文件)
        - [3.2.5. AJAX](#325-ajax)
        - [3.2.6. Promise](#326-promise)
        - [3.2.7. Canvas](#327-canvas)
    - [3.3. jQuery](#33-jquery)
        - [jQuery简介](#jquery简介)
        - [选择器](#选择器)
        - [操作DOM](#操作dom)
        - [事件](#事件)
    - [错误处理](#错误处理)
    - [underscore](#underscore)
    - [3.4. Node.js](#34-nodejs)
        - [3.4.1. 安装Node.js和npm](#341-安装nodejs和npm)
        - [3.4.2. 模块](#342-模块)
        - [3.4.3. NPM 使用介绍](#343-npm-使用介绍)
        - [3.4.4. Node.js 事件循环](#344-nodejs-事件循环)
        - [3.4.5. 基本模块](#345-基本模块)
            - [3.4.5.1. fs](#3451-fs)
            - [3.4.5.2. stream](#3452-stream)
            - [3.4.5.3. http](#3453-http)
            - [3.4.5.4. crypto](#3454-crypto)
    - [3.5. Web开发](#35-web开发)
        - [3.5.1. koa](#351-koa)
        - [3.5.2. MySQL](#352-mysql)
        - [3.5.3. mocha](#353-mocha)
        - [3.5.4. WebSocket](#354-websocket)
        - [3.5.5. REST](#355-rest)
        - [3.5.6. MVVM](#356-mvvm)
- [4. React](#4-react)
- [5. 难点及疑问](#5-难点及疑问)
- [6. 参考资料](#6-参考资料)

<!-- /TOC -->

# JavaScript 学习笔记

## 1. JavaScript简介

JavaScript是一种运行在浏览器中的解释型的编程语言。

    了解JavaScript历史
    了解ECMAScript


## 2. JavaScript基础

要让浏览器运行JavaScript，必须先有一个HTML页面，在HTML页面中引入JavaScript，然后，让浏览器加载该HTML页面，就可以执行JavaScript代码。

### 2.1. 基本语法

* 理解语句和语句块，每个语句以`;`结束，语句块用`{...}`。
* 注释：单行注释`//`，多汗注释`/*...*/`。
* JavaScript严格区分大小写。

### 2.2. strict模式

启用strict模式的方法是在JavaScript代码的第一行写上：'use strict';

### 2.3. 变量

变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用数字开头。

变量用`let`申明。具有块级作用域。

#### 2.3.1. 常量

```javascript
const PI = 3.14;
```
### 2.4. 数据类型

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

    JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true

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

### 2.5. 字符串

JavaScript的字符串就是用''或""括起来的字符表示。

#### 2.5.1. 转义字符

`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`。

```javascript
'I\'m \"OK\"!'; // I'm "OK"!
'\x41'; // 完全等同于 'A',ASCII字符可以以\x##形式的十六进制表示
'\u4e2d\u6587'; // 完全等同于 '中文',可以用\u####表示一个Unicode字符
```

#### 2.5.2. 多行字符串

ES6标准新增了一种多行字符串的表示方法，用反引号\` ... \` 表示：
```javascript
`这是一个
多行
字符串`;
```

#### 2.5.3. 模板字符串

```javascript
let name = '小明';
let age = 20;
let message = `你好, ${name}, 你今年${age}岁了!`;
alert(message);
```
#### 2.5.4. 字符串操作

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
'a b   c'.split(' '); // ['a', 'b', '', '', 'c']
```

### 2.6. 数组

#### 2.6.1. 数组定义

```javascript
[1, 2, 3.14, 'Hello', null, true];
new Array(1, 2, 3); // 创建了数组[1, 2, 3]
```

#### 2.6.2. 数组操作

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

### 2.7. 对象

JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。
JavaScript用一个{...}表示一个对象，键值对以xxx: xxx形式申明，用,隔开。

JavaScript对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。

```javascript
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};

xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红'
xiaohong.age = 18; // 新增一个age属性
delete xiaohong.age; // 删除age属性
'name' in xiaohong; // true
'grade' in xiaohong; // false
xiaohong.hasOwnProperty('name'); // true
xiaohong.hasOwnProperty('toString'); // false
```

在JavaScript的世界里，一切都是对象。为了区分对象的类型，我们用`typeof`操作符获取对象的类型，它总是返回一个字符串。

```javascript
typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'
```

#### 2.7.1. 标准对象

1. Date

时间戳是一个自增的整数，它表示从1970年1月1日零时整的GMT时区开始的那一刻，到现在的毫秒数。假设浏览器所在电脑的时间是准确的，那么世界上无论哪个时区的电脑，它们此刻产生的时间戳数字都是一样的，所以，时间戳可以精确地表示一个时刻，并且与时区无关。

```javascript
var now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳

var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

var d = Date.parse('2015-06-24T19:49:22.875+08:00');
d; // 1435146562875
new Date(d); // Wed Jun 24 2015 19:49:22 GMT+0800 (中国标准时间)

var d = new Date(1435146562875);
d.toLocaleString(); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时

/* 获取时间戳 */
if (Date.now) {
    console.log(Date.now()); // 老版本IE没有now()方法
} else {
    console.log(new Date().getTime());
}

```
2. RegExp

正则表达式是一种用来匹配字符串的强有力的武器。它的设计思想是用一种描述性的语言来给字符串定义一个规则，凡是符合规则的字符串，我们就认为它“匹配”了，否则，该字符串就是不合法的。

正则表达式规则：
`
* 直接给出字符，就是精确匹配。用`\d`可以匹配一个数字，`\w`可以匹配一个字母或数字,`.`可以匹配任意字符,`\s`可以匹配一个空格（也包括Tab等空白符）。
* 要匹配变长的字符，在正则表达式中，用`*`表示任意个字符（包括0个），用`+`表示至少一个字符，用`?`表示0个或1个字符，用`{n}`表示n个字符，用`{n,m}`表示n-m个字符。
* 要做更精确地匹配，可以用[]表示范围;A|B可以匹配A或B;^表示行的开头，^\d表示必须以数字开头;$表示行的结束，\d$表示必须以数字结束。

```javascript
'\d{3}\s+\d{3,8}'可以匹配以任意个空格隔开的带区号的电话号码

'[0-9a-zA-Z\_]'可以匹配一个数字、字母或者下划线；

'[0-9a-zA-Z\_]+'可以匹配至少由一个数字、字母或者下划线组成的字符串，比如'a100'，'0_Z'，'js2015'等等；

'[a-zA-Z\_\$][0-9a-zA-Z\_\$]*'可以匹配由字母或下划线、$开头，后接任意个由一个数字、字母或者下划线、$组成的字符串，也就是JavaScript允许的变量名；

'[a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}'更精确地限制了变量的长度是1-20个字符（前面1个字符+后面最多19个字符）。
```
#### 2.7.2. 创建正则表达式

第一种方式是直接通过/正则表达式/写出来，第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象。

```javascript
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

re1; // /ABC\-001/
re2; // /ABC\-001/

var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); // true
re.test('010-1234x'); // false
re.test('010 12345'); // false

'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']
/* ()表示的就是要提取的分组 */
var re = /^(\d{3})-(\d{3,8})$/;
re.exec('010-12345'); // ['010-12345', '010', '12345']
re.exec('010 12345'); // null

var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
re.exec('19:05:30'); // ['19:05:30', '19', '05', '30']

/* 正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符 */
var re = /^(\d+)(0*)$/;
re.exec('102300'); // ['102300', '102300', '']
var re = /^(\d+?)(0*)$/;
re.exec('102300'); // ['102300', '1023', '00']

/* 全局匹配 JavaScript的正则表达式还有几个特殊的标志，最常用的是g，正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。*/
var r1 = /test/g;
// 等价于:
var r2 = new RegExp('test', 'g');

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;

// 使用全局匹配:
re.exec(s); // ['JavaScript']
re.lastIndex; // 10

re.exec(s); // ['VBScript']
re.lastIndex; // 20

re.exec(s); // ['JScript']
re.lastIndex; // 29

re.exec(s); // ['ECMAScript']
re.lastIndex; // 44

re.exec(s); // null，直到结束仍没有匹配到
```

3. JSON

JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。

把任何JavaScript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，这样才能够通过网络传递给其他计算机。

如果我们收到一个JSON格式的字符串，只需要把它反序列化成一个JavaScript对象，就可以在JavaScript中直接使用这个对象了。

```javascript
/* 序列化 */
'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var s = JSON.stringify(xiaoming, null, '  ');
console.log(s);

/* 结果
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" Middle School",
  "skills": [
    "JavaScript",
    "Java",
    "Python",
    "Lisp"
  ]
}
*/

/* 反序列化 */
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45

var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); //{"name":"小明同学","age":14}
```

### 2.8. 条件判断

JavaScript使用if () { ... } else { ... }来进行条件判断。

### 2.9. 循环

* for循环

for循环最常用的地方是利用索引来遍历数组

```javascript
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum); // 5050

var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}
```
* while循环

```javascript
let sum = 0;
let n = 99;
while (n > 0) {
    sum += n;
    n = n - 2;
}

console.log(sum);
```

* do while

循环体会至少执行1次

### 2.10. Map和Set

Map是一组键值对的结构，具有极快的查找速度。初始化Map需要一个二维数组，或者直接初始化一个空Map。

Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set。

```javascript
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95

var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

var s1 = new Set(); // 空Set
var s = new Set([1, 2, 3]); // 含1, 2, 3
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
s.delete(3);
s; // Set {1, 2, 4}
```

### 2.11. iterable

为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。

具有iterable类型的集合可以通过新的for ... of循环来遍历。

更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。

```javascript
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}


'use strict';
var a = ['A', 'B', 'C'];

a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
```

### 2.12. 函数

借助抽象，我们才能不关心底层的具体计算过程，而直接在更高的层次上思考问题。

写计算机程序也是一样，函数就是最基本的一种代码抽象的方式。

#### 2.12.1. 函数定义与调用

函数定义

```javascript
// 函数定义1
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
// 函数定义2 匿名函数
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

// 函数定义3 箭头函数
x => x * x

// 相当于
function (x) {
    return x * x;
}

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
```

函数调用

```javascript
abs(); // 返回NaN

// 参数检查
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

arguments关键字

只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array.

```javascript
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);

/*
x = 10
arg 0 = 10
arg 1 = 20
arg 2 = 30
*/

function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs(); // 0
abs(10); // 10
abs(-9); // 9
```

rest参数

```javascript
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []
```

#### 2.12.2. 变量作用域与解构赋值

JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。

我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则。

JavaScript实际上只有一个全局作用域。任何变量（函数也视为变量），如果没有在当前函数作用域中找到，就会继续往上查找，最后如果在全局作用域中也没有找到，则报ReferenceError错误。

JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性


```javascript
// 解构赋值
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
x; // 'hello'
y; // 'JavaScript'
z; // 'ES6'

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
var {name, address: {city, zip}} = person;
name; // '小明'
city; // 'Beijing'
zip; // undefined, 因为属性名是zipcode而不是zip

// 交换两个变量x和y的值
var x=1, y=2;
[x, y] = [y, x];

// 快速获取当前页面的域名和路径
var {hostname:domain, pathname:path} = location;
```
#### 2.12.3. 函数apply方法

要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。

```javascript
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空
```

#### 2.12.4. 装饰器

```javascript
'use strict';

var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};
// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3

```

#### 2.12.5. 高阶函数

一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。

```javascript
'use strict';

function add(x, y, f) {
    return f(x) + f(y);
}
var x = add(-5, 6, Math.abs); // 11
console.log(x);

```

1. map/reduce

map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数，就得到了一个新的Array作为结果

```javascript
'use strict';

function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
```
Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算。

```javascript
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
}); // 25
```

2. filter

filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。

```javascript
// 筛选出奇数

var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

// 把一个Array中的空字符串删掉
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
r; // ['A', 'B', 'C']
```
3. sort

sort()方法会直接对Array进行修改，它返回的结果仍是当前Array

```javascript
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
}); // [20, 10, 2, 1]

arr.sort((x, y) => x - y); // [1, 2, 10, 20]
```

#### 2.12.6. 闭包

```javascript
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()

f(); // 15


'use strict';

function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343

```

#### 2.12.7. generator（生成器）

因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能。

```javascript
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}

var f = fib(5);
f.next(); // {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: false}
f.next(); // {value: undefined, done: true}
```
## 3. JavaScript进阶

### 3.1. 面向对象编程

JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程。

```javascript
// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true
```

#### 3.1.1. 创建对象

当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined。

```javascript
var arr = [1, 2, 3];
// 原型链是
arr ----> Array.prototype ----> Object.prototype ----> null

// 构造函数
function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

xiaoming.constructor === Student.prototype.constructor; // true
Student.prototype.constructor === Student; // true

Object.getPrototypeOf(xiaoming) === Student.prototype; // true

xiaoming instanceof Student; // true
```
编写一个createStudent()函数，在内部封装所有的new操作。一个常用的编程模式像这样：

```javascript
function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}
```

#### 3.1.2. 原型继承

把继承这个动作用一个inherits()函数封装起来

```javascript
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};
```

#### 3.1.3. class继承

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();

// class继承
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```

### 3.2. 浏览器

#### 3.2.1. 浏览器对象

* window
* navigator
* screen
* location
* document
* history

#### 3.2.2. 操作DOM

在操作一个DOM节点前，我们需要通过各种方式先拿到这个DOM节点。最常用的方法是`document.getElementById()`和`document.getElementsByTagName()`，以及CSS选择器`document.getElementsByClassName()`。

第二种方法是使用`querySelector()`和`querySelectorAll()`，需要了解selector语法，然后使用条件来获取节点，更加方便

```javascript
// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');
```

更新DOM

可以直接修改节点的文本，方法有两种：一种是修改`innerHTML`属性，第二种是修改`innerText`或`textContent`属性，这样可以自动对字符串进行HTML编码，保证无法设置任何HTML标签.

```javascript
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>

// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';
```

插入DOM

使用`appendChild`,`insertBefore`
```javascript
var
    list = document.getElementById('list'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);
```

删除DOM

```javascript
// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除:
var removed = parent.removeChild(self);
removed === self; // true
```

#### 3.2.3. 操作表单

HTML表单的输入控件主要有以下几种：

* 文本框，对应的`<input type="text">`，用于输入文本；

* 口令框，对应的`<input type="password">`，用于输入口令；

* 单选框，对应的`<input type="radio">`，用于选择一项；

* 复选框，对应的`<input type="checkbox">`，用于选择多项；

* 下拉框，对应的`<select>`，用于选择一项；

* 隐藏文本，对应的`<input type="hidden">`，用户不可见，但表单提交时会把隐藏文本发送到服务器。

```html
<!-- HTML -->
<form id="login-form" method="post" onsubmit="return checkForm()">
    <input type="text" id="username" name="username">
    <input type="password" id="input-password">
    <input type="hidden" id="md5-password" name="password">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    // 把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    // 继续下一步:
    return true;
}
</script>
```

#### 3.2.4. 操作文件

在HTML表单中，可以上传文件的唯一控件就是`<input type="file">`。

```javascript
// 对文件扩展名做检查

var f = document.getElementById('test-file-upload');
var filename = f.value; // 'C:\fakepath\test.png'
if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
    alert('Can only upload image file.');
    return false;
}
```
HTML5的File API提供了File和FileReader两个主要对象，可以获得文件信息并读取文件。

```javascript
var
    fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');
// 监听change事件:
fileInput.addEventListener('change', function () {
    // 清除背景图片:
    preview.style.backgroundImage = '';
    // 检查文件是否选择:
    if (!fileInput.value) {
        info.innerHTML = '没有选择文件';
        return;
    }
    // 获取File引用:
    var file = fileInput.files[0];
    // 获取File信息:
    info.innerHTML = '文件: ' + file.name + '<br>' +
                     '大小: ' + file.size + '<br>' +
                     '修改: ' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('不是有效的图片文件!');
        return;
    }
    // 读取文件:
    var reader = new FileReader();
    reader.onload = function(e) {
        var
            data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'            
        preview.style.backgroundImage = 'url(' + data + ')';
    };
    // 以DataURL的形式读取文件:
    reader.readAsDataURL(file);
});
```

#### 3.2.5. AJAX

Asynchronous JavaScript and XML，意思就是用JavaScript执行异步网络请求。在现代浏览器上写AJAX主要依靠XMLHttpRequest对象：

```javascript
function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');

```

浏览器的同源策略。默认情况下，JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致。

    理解JSONP，它有个限制，只能用GET请求，并且要求返回JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用JavaScript资源

    理解CORS，全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。

#### 3.2.6. Promise

#### 3.2.7. Canvas

### 3.3. jQuery

#### jQuery简介

jQuery能帮我们干这些事情：

* 消除浏览器差异：你不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写AJAX等代码；

* 简洁的操作DOM的方法：写`$('#test')`肯定比`document.getElementById('test')`来得简洁；

* 轻松实现动画、修改CSS等各种操作。

使用jQuery只需要在页面的<head>引入jQuery文件即可。

实际上，jQuery把所有功能全部封装在一个全局变量jQuery中，而$也是一个合法的变量名，它是变量jQuery的别名。

```javascript
window.jQuery; // ƒ (e,b3){return new bI.fn.init(e,b3,w)}
window.$; // ƒ (e,b3){return new bI.fn.init(e,b3,w)}
$ === jQuery; // true
typeof($); // 'function'
```
$本质上就是一个函数，但是函数也是对象，于是$除了可以直接调用外，也可以有很多其他属性。

#### 选择器

基本选择器

```javascript
// 1. 按ID查找 
// 查找<div id="abc">:
var div = $('#abc');

// 2. 按tag查找
var ps = $('p'); // 返回所有<p>节点

// 3. 按class查找
var a = $('.red'); // 所有节点包含`class="red"`都将返回
var a = $('.red.green'); // 注意没有空格！

// 4. 按属性查找
var email = $('[name=email]'); // 找出<??? name="email">
var passwordInput = $('[type=password]'); // 找出<??? type="password">
var a = $('[items="A B"]'); // 找出<??? items="A B">

var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
// 例如: name="icon-1", name="icon-2"
var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
// 例如: name="startswith", name="endswith"

var icons = $('[class^="icon-"]'); // 找出所有class包含至少一个以`icon-`开头的DOM
// 例如: class="icon-clock", class="abc icon-home"

// 5. 组合查找
var emailInput = $('input[name=email]'); // 不会找出<div name="email">

var tr = $('tr.red'); // 找出<tr class="red ...">...</tr>

// 6. 多项选择器
$('p,div'); // 把<p>和<div>都选出来
$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来
```

层级选择器

如果两个DOM元素具有层级关系，就可以用$('ancestor descendant')来选择，层级之间用空格隔开。

```javascript
<!-- HTML结构 -->
<div class="testing">
    <ul class="lang">
        <li class="lang-javascript">JavaScript</li>
        <li class="lang-python">Python</li>
        <li class="lang-lua">Lua</li>
    </ul>
</div>

$('ul.lang li');
$('form[name=upload] input');

// 子选择器（Child Selector）
$('parent>child')
$('ul.lang>li.lang-javascript'); // 可以选出[<li class="lang-javascript">JavaScript</li>]
$('div.testing>li.lang-javascript'); // [], 无法选出，因为<div>和<li>不构成父子关系

// 过滤器（Filter）
$('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点

$('ul.lang li:first-child'); // 仅选出JavaScript
$('ul.lang li:last-child'); // 仅选出Lua
$('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
$('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素

$('div:visible'); // 所有可见的div
$('div:hidden'); // 所有隐藏的div

```

表单相关

针对表单元素，jQuery还有一组特殊的选择器：

* :input：可以选择`<input>`，`<textarea>`，`<select>`和`<button>`；

* :file：可以选择`<input type="file">`，和`input[type=file]`一样；

* :checkbox：可以选择复选框，和`input[type=checkbox]`一样；

* :radio：可以选择单选框，和`input[type=radio]`一样；

* :focus：可以选择当前输入焦点的元素，例如把光标放到一个`<input>`上，用`$('input:focus')`就可以选出；

* :checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如`$('input[type=radio]:checked')`；

* :enabled：可以选择可以正常输入的`<input>、<select>`等，也就是没有灰掉的输入；

* :disabled：和:enabled正好相反，选择那些不能输入的。

查找和过滤

```javascript
<!-- HTML结构 -->
<ul class="lang">
    <li class="js dy">JavaScript</li>
    <li class="dy">Python</li>
    <li id="swift">Swift</li>
    <li class="dy">Scheme</li>
    <li name="haskell">Haskell</li>
</ul>

// 用find()查找
var ul = $('ul.lang'); // 获得<ul>
var dy = ul.find('.dy'); // 获得JavaScript, Python, Scheme
var swf = ul.find('#swift'); // 获得Swift
var hsk = ul.find('[name=haskell]'); // 获得Haskell

// 使用parent()
var swf = $('#swift'); // 获得Swift
var parent = swf.parent(); // 获得Swift的上层节点<ul>
var a = swf.parent('.red'); // 获得Swift的上层节点<ul>，同时传入过滤条件。如果ul不符合条件，返回空jQuery对象

// next()和prev()方法
var swift = $('#swift');

swift.next(); // Scheme
swift.next('[name=haskell]'); // 空的jQuery对象，因为Swift的下一个元素Scheme不符合条件[name=haskell]

swift.prev(); // Python
swift.prev('.dy'); // Python，因为Python同时符合过滤器条件.dy

// filter()方法
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var a = langs.filter('.dy'); // 拿到JavaScript, Python, Scheme

var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
langs.filter(function () {
    return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点
}); // 拿到Swift, Scheme

// map()方法
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var arr = langs.map(function () {
    return this.innerHTML;
}).get(); // 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']

// first()、last()和slice()方法可以返回一个新的jQuery对象
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致
```
#### 操作DOM

修改Text和HTML

```javascript
<!-- HTML结构 -->
<ul id="test-ul">
    <li class="js">JavaScript</li>
    <li name="book">Java &amp; JavaScript</li>
</ul>

$('#test-ul li[name=book]').text(); // 'Java & JavaScript'
$('#test-ul li[name=book]').html(); // 'Java &amp; JavaScript'

$('#test-ul li').text('JS'); // 是不是两个节点都变成了JS？


```

修改CSS

```javascript
var div = $('#test-div');
div.css('color'); // '#000033', 获取CSS属性
div.css('color', '#336699'); // 设置CSS属性
div.css('color', ''); // 清除CSS属性
```

修改class

```javascript
var div = $('#test-div');
div.hasClass('highlight'); // false， class是否包含highlight
div.addClass('highlight'); // 添加highlight这个class
div.removeClass('highlight'); // 删除highlight这个class
```
显示和隐藏DOM

```javascript
var a = $('a[target=_blank]');
a.hide(); // 隐藏
a.show(); // 显示
```

获取DOM信息

```javascript
// 浏览器可视窗口大小:
$(window).width(); // 800
$(window).height(); // 600

// HTML文档大小:
$(document).width(); // 800
$(document).height(); // 3500

// 某个div的大小:
var div = $('#test-div');
div.width(); // 600
div.height(); // 300
div.width(400); // 设置CSS属性 width: 400px，是否生效要看CSS是否有效
div.height('200px'); // 设置CSS属性 height: 200px，是否生效要看CSS是否有效
```

修改属性

```javascript
// <div id="test-div" name="Test" start="1">...</div>
var div = $('#test-div');
div.attr('data'); // undefined, 属性不存在
div.attr('name'); // 'Test'
div.attr('name', 'Hello'); // div的name属性变为'Hello'
div.removeAttr('name'); // 删除name属性
div.attr('name'); // undefined
```

操作表单

```javascript
/*
    <input id="test-input" name="email" value="">
    <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
        <option value="SH">Shanghai</option>
        <option value="SZ">Shenzhen</option>
    </select>
    <textarea id="test-textarea">Hello</textarea>
*/
var
    input = $('#test-input'),
    select = $('#test-select'),
    textarea = $('#test-textarea');

input.val(); // 'test'
input.val('abc@example.com'); // 文本框的内容已变为abc@example.com

select.val(); // 'BJ'
select.val('SH'); // 选择框已变为Shanghai

textarea.val(); // 'Hello'
textarea.val('Hi'); // 文本区域已更新为'Hi'
```

修改DOM结构

```javascript
/* <div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div> */

// 新增DOM
// append()把DOM添加到最后，prepend()则把DOM添加到最前。同级节点可以用after()或者before()方法。

var ul = $('#test-div>ul');
ul.append('<li><span>Haskell</span></li>');

// 创建DOM对象:
var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';
// 添加DOM对象:
ul.append(ps);

// 添加jQuery对象:
ul.append($('#scheme'));

// 添加函数对象:
ul.append(function (index, html) {
    return '<li><span>Language - ' + index + '</span></li>';
});

// 删除DOM
var li = $('#test-div>ul>li');
li.remove(); // 所有<li>全被删除
```

#### 事件

jQuery能够绑定的事件主要包括：

鼠标事件
* click: 鼠标单击时触发；
* dblclick：鼠标双击时触发；
* mouseenter：鼠标进入时触发；
* mouseleave：鼠标移出时触发；
* mousemove：鼠标在DOM内部移动时触发；
* hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。

键盘事件
键盘事件仅作用在当前焦点的DOM上，通常是`<input>`和`<textarea>`。

* keydown：键盘按下时触发；
* keyup：键盘松开时触发；
* keypress：按一次键后触发。

其他事件
* focus：当DOM获得焦点时触发；
* blur：当DOM失去焦点时触发；
* change：当`<input>、<select>或<textarea>`的内容改变时触发；
* submit：当`<form>`提交时触发；
* ready：当页面被载入并且DOM树完成初始化后触发。

```javascript
/* HTML:
 *
 * <a id="test-link" href="#0">点我试试</a>
 *
 */

// 获取超链接的jQuery对象:
var a = $('#test-link');
a.on('click', function () {
    alert('Hello!');
});
```

```html
<html>
<head>
    <script>
        $(document).on('ready', function () {
            $('#testForm').on('submit', function () {
                alert('submit!');
            });
        });
    </script>
</head>
<body>
    <form id="testForm">
        ...
    </form>
</body>

```

如果你遇到$(function () {...})的形式，牢记这是document对象的ready事件处理函数。

```javascript
$(function () {
    console.log('init A...');
});
$(function () {
    console.log('init B...');
});
$(function () {
    console.log('init C...');
});
```
所有事件都会传入Event对象作为参数，可以从Event对象上获取到更多的信息
```javascript
$(function () {
    $('#testMouseMoveDiv').mousemove(function (e) {
        $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
    });
});
```
取消绑定
```javascript
function hello() {
    alert('hello!');
}

a.click(hello); // 绑定事件

// 10秒钟后解除绑定:
setTimeout(function () {
    a.off('click', hello);
}, 10000);
```

### 错误处理

### underscore

### 3.4. Node.js

对于高性能，异步IO、事件驱动是基本原则.因为JavaScript是单线程执行，根本不能进行同步IO操作，所以，JavaScript的这一“缺陷”导致了它只能使用异步IO。

在Node上运行的JavaScript相比其他后端开发语言有何优势？

最大的优势是借助JavaScript天生的事件驱动机制加V8高性能引擎，使编写高性能Web服务轻而易举。

#### 3.4.1. 安装Node.js和npm

```javascript
// 使用淘宝 NPM 镜像
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

第一个Node程序

```javascript
C:\Workspace>node hello.js
Hello, world.


node --use_strict calc.js
```

Node.js 应用是由哪几部分组成的：

    1. 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。

    2. 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。

    3. 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

```javascript
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
```



搭建Node开发环境

[运行和调试JavaScript](https://www.bilibili.com/video/av5827351/)

#### 3.4.2. 模块

在Node环境中，一个.js文件就称之为一个模块（module）。

```javascript
// hello.js文件,就是名为hello的模块

'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;
```

```javascript
// main.js文件，调用hello模块的greet函数

'use strict';

// 引入hello模块:
var greet = require('./hello');

var s = 'Michael';

greet(s); // Hello, Michael!
```

这种模块加载机制被称为CommonJS规范。

```javascript
// hello.js

function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

module.exports = {
    hello: hello,
    greet: greet
};
```
#### 3.4.3. NPM 使用介绍

npm 安装 Node.js 模块语法格式如下：

```javascript
$ npm install <Module Name>

npm install express          // 本地安装
npm install express -g   // 全局安装

npm list -g     // 查看安装信息

$ npm list express -g    // 查看某个模块的版本号

$ npm uninstall express // 卸载模块

$ npm update express    // 更新模块

$ npm search express    // 搜索模块

$ npm init  // 创建模块

var express = require('express');
```
package.json 位于模块的目录位于 `node_modules/express/package.json` 下，用于定义包的属性。

#### 3.4.4. Node.js 事件循环

事件就是需要 eventEmitter.on 去绑定一个事件通过eventEmitter.emit 去触发这个事件其次说的是 事件的 接收 和 发生 是分开的 就像 一个外卖店你可以不停的接受很多订单, 接受以后开始告诉厨师去做外卖, 做好的外卖对应的外送给每个用户，如果单线程的话那只能是接收一个订单, 做好以后在接收下一个外卖订单，明显效率非常低。

事件可以不停的接受不停的发生也是为了提高效率。

```javascript
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");
```

#### 3.4.5. 基本模块

Node.js是运行在服务区端的JavaScript环境，服务器程序和浏览器程序相比，最大的特点是没有浏览器的安全限制了，而且，服务器程序必须能接收网络请求，读写文件，处理二进制内容，所以，Node.js内置的常用模块就是为了实现基本的服务器功能。

global全局对象

process

```javascript
> process === global.process;
true
> process.version;
'v5.2.0'
> process.platform;
'darwin'
> process.arch;
'x64'
> process.cwd(); //返回当前工作目录
'/Users/michael'
> process.chdir('/private/tmp'); // 切换当前工作目录
undefined
> process.cwd();
'/private/tmp'
```

```javascript
// 判断JavaScript执行环境

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
```

##### 3.4.5.1. fs

异步读文件

```javascript
// 异步读取时，传入的回调函数接收两个参数，当正常读取时，err参数为null，data参数为读取到的String。当读取发生错误时，err参数代表一个错误对象，data为undefined。

// 异步读取一个文本文件
'use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
```


```javascript
// 异步读取时，传入的回调函数接收两个参数，当正常读取时，err参数为null，data参数为读取到的String。当读取发生错误时，err参数代表一个错误对象，data为undefined。

// 异步读取一个二进制文件
'use strict';

var fs = require('fs');

fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});
```

同步读文件

```javascript
// 同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。

'use strict';

var fs = require('fs');

try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
}
```

写文件`fs.writeFile()`

```javascript
// 异步写文件
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
```

```javascript
// 同步写文件
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);
```

获取文件信息`fs.stat()`

```javascript
'use strict';

var fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
```
##### 3.4.5.2. stream

从文件流读取文本内容

```javascript
'use strict';

var fs = require('fs');

// 打开一个流:
var rs = fs.createReadStream('sample.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});
```

以流的形式写入文件，只需要不断调用write()方法，最后以end()结束

```javascript
'use strict';

var fs = require('fs');

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();
```

pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序

```javascript
'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);
```
##### 3.4.5.3. http

    了解HTTP协议，HTTP格式
    理解HTTP请求流程

HTTP服务器

```javascript
'use strict';

// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>');
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
```

文件服务器

```javascript
'use strict';

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// 结果
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/to/file',
  path: '/path/to/file?query=string',
  href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }
```

##### 3.4.5.4. crypto

    理解摘要算法，又称哈希算法、散列算法。

    摘要算法就是通过摘要函数f()对任意长度的数据data计算出固定长度的摘要digest，目的是为了发现原始数据是否被人篡改过。

MD5和SHA1

MD5是最常见的摘要算法，速度很快，生成结果是固定的128 bit字节，通常用一个32位的16进制字符串表示。

SHA1的结果是160 bit字节，通常用一个40位的16进制字符串表示。

```javascript
const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
```

要注意摘要算法不是加密算法，不能用于加密（因为无法通过摘要反推明文），只能用于防篡改，但是它的单向计算特性决定了可以在不存储明文口令的情况下验证用户口令。

Hmac

可以把Hmac理解为用随机数“增强”的哈希算法。

```javascript
const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex')); // 80f7e22570bed1fa3ef683edce5d0890e268e1ca8d1bd0c382bc766f3744be9f
```

AES

AES是一种常用的对称加密算法，加解密都用同一个密钥。

```javascript
const crypto = require('crypto');

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);

// Plain text: Hello, this is a secret message!
// Encrypted text: 8a944d97bdabc157a5b7a40cb180e7...
// Decrypted text: Hello, this is a secret message!
```

Diffie-Hellman

DH算法是一种密钥交换协议，它可以让双方在不泄漏密钥的情况下协商出一个密钥来。

```javascript
const crypto = require('crypto');

// xiaoming's keys:
var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

// xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

// exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));
```

### 3.5. Web开发

Web应用开发阶段：
1. 静态Web页面
2. CGI：Common Gateway Interface，用C/C++编写。
3. ASP/JSP/PHP
4. MVC：Web应用也引入了Model-View-Controller的模式，来简化Web开发。
5. MVVM：Model-View-ViewModel。MVVM的设计思想：关注Model的变化，让MVVM框架去自动更新DOM的状态，从而把开发者从操作DOM的繁琐步骤中解脱出来！
6. Node.js

#### 3.5.1. koa

```javascript
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();
    // 设置response的Content-Type:
    ctx.response.type = 'text/html';
    // 设置response的内容:
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
```

koa middleware

    koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。

可以用以下3个middleware组成处理链，依次打印日志，记录处理时间，输出HTML：

```javascript
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
```

```javascript
const Koa=require('koa');
const app=new Koa();
app.use(async (ctx, next) => {
    console.log('第一1');
    await next(); // 调用下一个middleware
    console.log('第一2');
});

app.use(async (ctx, next) => {
    console.log('第二1');
    await next(); // 调用下一个middleware
    console.log('第二2');
});

app.use(async (ctx, next) => {
    console.log('第三1');
    await next();
    console.log('第三2');
});
app.listen(3000);


// 输出顺序：
// 第一1
// 第二1
// 第三1
// 第三2
// 第二2
// 第一2
```

koa-router

```javascript
const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
```

理解代码重构

    确保每个函数功能非常简单，一眼能看明白，是代码可维护的关键。

    经过重新整理后的工程url2-koa目前具备非常好的模块化，所有处理URL的函数按功能组存放在controllers目录，今后我们也只需要不断往这个目录下加东西就可以了，app.js保持不变。

Nunjucks

    模板引擎就是基于模板配合数据构造出字符串输出的一个组件。

    Nunjucks模板引擎最强大的功能在于模板的继承。

MVC：Model-View-Controller

    重点掌握MVC编程

#### 3.5.2. MySQL



```javascript
// 连接MySQL服务器
mysql -u root -p

// 显示数据库
show databases;
```

ORM

    ORM技术：Object-Relational Mapping，把关系数据库的表结构映射到对象上。

    我们选择Node的ORM框架Sequelize来操作数据库。这样，我们读写的都是JavaScript对象，Sequelize帮我们把对象变成数据库中的行。

```javascript
// 直接使用mysql包提供的接口
connection.query('SELECT * FROM users WHERE id = ?', ['123'], function(err, rows) {
    if (err) {
        // error
    } else {
        for (let row in rows) {
            processRow(row);
        }
    }
});

// 用Sequelize查询pets表
Pet.findAll()
   .then(function (pets) {
       for (let pet in pets) {
           console.log(`${pet.id}: ${pet.name}`);
       }
   }).catch(function (err) {
       // error
   });

// 用ES7的await来调用任何一个Promise对象
(async () => {
    var pets = await Pet.findAll();
})();
```
使用Sequelize

    使用Sequelize操作数据库的一般步骤就是：

    首先，通过某个Model对象的findAll()方法获取实例；

    如果要更新实例，先对实例属性赋新值，再调用save()方法；

    如果要删除实例，直接调用destroy()方法。

    注意findAll()方法可以接收where、order这些参数，这和将要生成的SQL语句是对应的。

#### 3.5.3. mocha

#### 3.5.4. WebSocket

#### 3.5.5. REST

#### 3.5.6. MVVM

    MVVM是Model-View-ViewModel的缩写。

    MVVM的设计思想：关注Model的变化，让MVVM框架去自动更新DOM的状态，从而把开发者从操作DOM的繁琐步骤中解脱出来！

## 4. React

[React最少必要知识](https://www.jianshu.com/p/f56972b32d3e)

## 5. 难点及疑问

1. 理解排序算法，sort方法

2. generator

3. H5文件操作API

4. CORS

5. Promise

6. javascript执行机制，同步和异步方法

    [javascript的执行机制](https://juejin.im/post/59e85eebf265da430d571f89)

7. Sequelize最佳实践

## 6. 参考资料

[廖雪峰JavaScript教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)

[菜鸟教程NodeJs教程](http://www.runoob.com/nodejs/nodejs-tutorial.html)