'use strict';
function test(a, b, c) {
    return 'a=' + a + ',b=' + b + ',c=' + c;
}

function partialAny(fn) {
    let arr = [];
    for (let i = 1; i < arguments.length; i++){
        arr.push(arguments[i])
    }
    return function () {
        let newArguments = Array.from(arguments);
        let count = 0;
        for (let i in arr){
            if (!arr[i]) {
                arr[i] = newArguments[count];
                 count++;
             }
        }
        return fn.apply(this, arr)
    }
}

const test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3