'use strict';

function deepCopy(obj) {
    let newObj = Object.prototype.toString.call(obj) === '[object Array]'? []: {};
    if (Object.prototype.toString.call(obj) === '[object Date]') {
        newObj = new Date(obj.valueOf())
    } else {
        for (let item in obj) {
            if (typeof obj[item] === "object" && obj[item] !== null) {
                newObj[item] = deepCopy(obj[item])
            } else {
                newObj[item] = obj[item]
            }
        }
    }

    return newObj
}


let a = { x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, w: new Date(2014, 1, 1, 12, 0, 0) };
let b = deepCopy(a); // b — это отдельный объект
console.log( typeof new Date(2014, 1, 1, 12, 0, 0));
b.x = 10;
console.log(a.x); // 1

b.z.push(4);
console.log(a.z); // [1, 2, 3]

b.w.setFullYear(2015);
console.log(a.w.getFullYear()); // 2014