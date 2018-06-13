"use strict";

const sequence = function (start = 0, step = 1) {
    return function () {
        let count = start;
        start += step;
        return count
    }
};

const generator = sequence(10, 20);

console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
