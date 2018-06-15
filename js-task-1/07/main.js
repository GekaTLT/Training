
function bind (fn, context){
    return function () {
        return fn.apply(context, arguments)
    }
}

function testThis(a) {
    return "x=" + this.x + ", a=" + a;
}

window.x = 1;
const ctx = { x: 2 };
console.log(testThis(100)); // x=1, a=100

const boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100