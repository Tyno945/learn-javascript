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

