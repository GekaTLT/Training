'use strict';

function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
    return a * b * c * d;
}

function partial(fn) {
    let arr = [];
    for (let i = 1; i < arguments.length; i++){
        arr.push(arguments[i])
    }
    return function () {
        let argum = arr.concat(Array.from(arguments));
        return fn.apply(this, argum)
    }
}

const add5 = partial(add, 5);

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

const mult23 = partial(mult, 2, 3);

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6