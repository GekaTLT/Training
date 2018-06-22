'use strict';

function type(elem) {
    switch (typeof elem){
        case "boolean":
            return "boolean";

        case "number":
            return "number";

        case "string":
            return "string";

        case "undefined":
            return "undefined";

        case "object":
            if (elem === null){
                return 'null'
            } else if (Object.prototype.toString.call(elem) === '[object Array]'){
                return 'array'
            }
            return "object";
        default:
            return 'ошибка'
    }
}

console.log(type(123));
console.log(type('1230'));
console.log(type(false));
console.log(type(null));
console.log(type(undefined));
console.log(type({}));
console.log(type([]));
