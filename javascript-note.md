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

变量用`let`申明。具有块级作用域。

#### 常量

```javascript
const PI = 3.14;
```
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

### iterable

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

### 函数

借助抽象，我们才能不关心底层的具体计算过程，而直接在更高的层次上思考问题。

写计算机程序也是一样，函数就是最基本的一种代码抽象的方式。

#### 函数定义与调用

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

#### 变量作用域与解构赋值

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
#### 函数apply方法

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

#### 装饰器

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

#### 高阶函数

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

#### 闭包

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

#### generator（生成器）


## JavaScript进阶

## 难点及疑问

1. 理解排序算法，sort方法

## 参考资料