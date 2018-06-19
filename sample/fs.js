'use strict';

var fs = require('fs');

/* fs.readFile('sample/sample.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
        // Buffer -> String
     var text = data.toString('utf-8');
     console.log(text);
    }
    
});

console.log('Hello'); */

try {
    var data = fs.readFileSync('sample/sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
    console.log(err);
}

console.log('Hello');