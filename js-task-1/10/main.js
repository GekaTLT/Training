'use strict';

function count(obj) {
    let i = 0;
    for (let key in obj) {
        i++
    }
    return i
}

const a = { a: 1, b: 2 };
console.log(count(a)); // 2
const b = function () {};
console.log(count(b)); // 0
const c = [1, 2, 3];
console.log(count(c)); // 3
const d = [];
d[100] = 1;
console.log(count(d)); // 1