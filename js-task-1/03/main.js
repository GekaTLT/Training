'use strict';

function toSuare(x) {
    return x**2
}

function map(fn, array) {
    let newArray = [];
    for (let item of array){
        newArray.push(fn(item))
    }
    return newArray
}

console.log(map(toSuare, [1, 2, 3, 4, 5, 6]));
console.log(map(toSuare, []));