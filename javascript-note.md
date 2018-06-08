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
'a b   c'.split(' '); // ['a', 'b', '', '', 'c']
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

#### 标准对象

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
#### 创建正则表达式

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

### 条件判断

JavaScript使用if () { ... } else { ... }来进行条件判断。

### 循环

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

### Map和Set

### iterable

### 函数

## JavaScript进阶

## 难点及疑问

## 参考资料