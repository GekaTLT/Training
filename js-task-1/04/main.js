'use strict';

function sequence(start = 0, step = 1) {
    return function () {
        let count = start;
        start += step;
        return count
    }
}

function toSuare(x) {
    return x**2
}

function add(a, b) {
    return a + b;
}

function fmap(a, gen) {
    return function () {
        return a(gen.apply(this, arguments))
    }
}

const generator = sequence(10, 2);
const squareGen = fmap(toSuare, generator);

console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());

const squareAdd = fmap(toSuare, add);

console.log(squareAdd(1, 1));
console.log(squareAdd(1, 2));
console.log(squareAdd(3, 2));
console.log(squareAdd(7, 2));
console.log(squareAdd(8, 2));
console.log(squareAdd(1, 9));


