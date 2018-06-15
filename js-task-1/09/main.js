'use strict';

function filter(arr, fn) {
    let newArray = [];
    arr.map(function (elem) {
        fn(elem) ? newArray.push(elem) : null
    });
    return newArray
}

const input = [1, 2, 3, 4, 5, 6];
function isEven(x) {
    return x % 2 === 0;
}
console.log(filter(input, isEven)); // [2, 4, 6]

console.log(input); // [1, 2, 3, 4, 5, 6]