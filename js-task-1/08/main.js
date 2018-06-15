'use strict';

function pluck(arrObj, key) {
    let newArray = [];
    arrObj.forEach(function (elem) {
        elem[key] ? newArray.push(elem[key]) : null
    });
    return newArray
}


const characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'ivan', 'age': 21 },
    { 'name': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']