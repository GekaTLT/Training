'use strict';

function hasClass(node, klass){
     return new RegExp(`(\\s|^)${klass}(\\s|$)`,'i').test(node.className);
}
function addClass(node, klass){
    if (!new RegExp(`(\\s|^)${klass}(\\s|$)`,'i').test(node.className)){
        node.className += ' ' + klass
    }
}
function removeClass(node, klass){
    if (new RegExp(`(\\s|^)${klass}(\\s|$)`,'i').test(node.className)){
        node.className = node.className.replace(new RegExp(`(\\s|^)${klass}(\\s|$)`,'i'), ' ').replace(/^\s+|\s+$/g, '')
    }
}
let a = document.getElementsByTagName('div')[0];

addClass(a, 'test4');
console.log(hasClass(a, 'test4'));
removeClass(a,'test2');
console.log(hasClass(a, 'test2'));