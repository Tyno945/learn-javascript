### 案例 条件判断

小明身高1.75，体重80.5kg。请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数判断。

* 低于18.5：过轻
* 18.5-25：正常
* 25-28：过重
* 28-32：肥胖
* 高于32：严重肥胖

```javascript
'use strict';
let height = +prompt('请输入身高(m):', '1.75');
let weight = +prompt('请输入体重(kg):','60');
let bmi = weight/(height**2);

if (bmi < 18.5) {
    alert("过轻");
} else if (bmi < 25) {
    alert("正常");
} else if (bmi < 28) {
    alert("过重");
} else if (bmi < 32) {
    alert("肥胖");
} else {
    alert("严重肥胖");
}
```

### 案例 循环遍历数组

```javascript
'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
for (let i=0; i < arr.length; i++) {
    console.log(`Hello, ${arr[i]}!`);
}

for (let key in arr) {
    console.log(`Hello, ${arr[key]}!`);
}

let i = 0;
while (i < arr.length) {
    console.log(`Hello, ${arr[i]}!`);
    i++;
}
```

### 案例 sum函数

编写一个sum()函数，接收任意个参数并返回它们的和

```javascript
'use strict';

function sum(...rest) {
    let x = 0;
    for (let i of rest) {
        x += i;
    }
    return x;
}

function sum(...rest) {
    let x = 0;
    rest.forEach(function (element) {
        x += element;
});
    return x;
}


// 测试:
var i, args = [];
for (i=1; i<=100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    console.log('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
    console.log('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    console.log('测试通过!');
}
```

### 案例 利用map和reduce操作实现一个string2int()函数
```javascript
'use strict';

function string2int(s) {
    return s.split('').map(x=>+x).reduce((x,y)=>10*x+y);
}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}
```
### 案例 去除Array的重复元素

```javascript
'use strict';

var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});

console.log(r.toString());
```

### 案例 筛选素数

```javascript
function get_primes(arr) {
    return arr.filter(isprime);
}

function isprime(x) {
    if (x == 1) {
        return false;
    } else {
    let i;
    for (i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}}
```

### 案例 创建一个计数器

```javascript
'use strict';

function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
c1.inc(); // 1
c1.inc(); // 2
c1.inc(); // 3

var c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13

```

### 案例 产生斐波那契数列的函数

```javascript
function fib(max) {
    var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}

// 测试:
fib(5); // [0, 1, 1, 2, 3]
fib(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### 案例 用generator写一个自增ID

```javascript
// 1、用while条件判断
function* next_id() {
    var i = 1;
    while (true) {
        yield i;
        i++;
    }
}

// 2、用`for`循环
function* next_id() {
    for (let i=1; true; i++) {
        yield i;
    }
}

// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}
```

### 案例 验证Email地址的正则表达式

```javascript
'use strict';
var re = /^[\w\.]+@\w+\.\w+$/;
// 测试:
var
    i,
    success = true,
    should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
    should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
    if (!re.test(should_pass[i])) {
        console.log('测试失败: ' + should_pass[i]);
        success = false;
        break;
    }
}
for (i = 0; i < should_fail.length; i++) {
    if (re.test(should_fail[i])) {
        console.log('测试失败: ' + should_fail[i]);
        success = false;
        break;
    }
}
if (success) {
    console.log('测试通过!');
}
```

```javascript
/* 验证并提取出带名字的Email地址 */
'use strict';
var re = /^<([\w\s]+)>\s+([\w\.]+@\w+\.\w+)$/;

// 测试:
var r = re.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    console.log('测试失败!');
}
else {
    console.log('测试成功!');
}
```

### 案例 查看返回的JSON数据

```javascript
'use strict'

var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json';
// 从远程地址获取JSON:
$.getJSON(url, function (data) {
    // 获取结果:
    var city = data.query.results.channel.location.city;
    var forecast = data.query.results.channel.item.forecast;
    var result = {
        city: city,
        forecast: forecast
    };
    alert(JSON.stringify(result, null, '  '));
});

```

### 案例 提交表单检测

利用JavaScript检查用户注册信息是否正确，在以下情况不满足时报错并阻止提交表单：

用户名必须是3-10位英文字母或数字；

口令必须是6-20位；

两次输入口令必须一致。

```html
<!-- HTML结构 -->
<form id="test-register" action="#" target="_blank" onsubmit="return checkRegisterForm()">
    <p id="test-error" style="color:red"></p>
    <p>
        用户名: <input type="text" id="username" name="username">
    </p>
    <p>
        口令: <input type="password" id="password" name="password">
    </p>
    <p>
        重复口令: <input type="password" id="password-2">
    </p>
    <p>
        <button type="submit">提交</button> <button type="reset">重置</button>
    </p>
</form>
```

```javascript
var checkRegisterForm = function () {
    let user = document.getElementById('username');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password-2');
    let tip = document.getElementById('test-error');
    let re1 = /\w{3,10}/;
    let re2 = /[0-9a-zA-Z\_\$]{6,20}/;
    if (!re1.test(user.value)) {
    tip.innerText = '用户名错误';
    return false;
    } else if (!re2.test(password.value)) {
    tip.innerText = '密码错误';
    return false;
    } else if (password.value !== password2.value) {
    tip.innerText = '两次输入口令必须一致。';
    return false;
    } else {
    
        return true;
    }
    }

// 测试:
;(function () {
    window.testFormHandler = checkRegisterForm;
    var form = document.getElementById('test-register');
    if (form.dispatchEvent) {
        var event = new Event('submit', {
            bubbles: true,
            cancelable: true
          });
        form.dispatchEvent(event);
    } else {
        form.fireEvent('onsubmit');
    }
})();
    
```

