'use strict';

function shallowCopy(obj) {
    let newObj = {};
    if (Object.prototype.toString.call(obj) === '[object Date]'){
        newObj = new Date(obj.valueOf())
    } else {
        for (let item in obj){
            newObj[item] = obj[item]
        }
    }
    return newObj
}

let a = { x: 1, y: 2, z: [1, 2, 3] };
let b = shallowCopy(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1

b.z.push(4);
console.log(a.z); // [1, 2, 3, 4]

let c = new Date(2014, 1, 1);
let d = shallowCopy(c);
d.setFullYear(2015);
console.log(c.getFullYear()); // 2014
