'use strict';

function sequence(start = 0, step = 1) {
    return function () {
        let count = start;
        start += step;
        return count
    }
}

function take(gen, x) {
    let arr = [];
    for (let i = 0; i < x; ++i) {
        let result = gen();
        arr.push(result)
    }
    return arr
}

const generator = sequence(10, 2);

console.log(take(generator, 10));