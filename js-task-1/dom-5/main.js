'use strict';
const dom ={};
dom.find = function (selector, context){
    let elements;
    switch (true) {
        case /^\w/.test(selector):
            if (!context){
                elements = document.getElementsByTagName(selector);
            } else {
                elements =  context.getElementsByTagName(selector)
            }
            break;
        case /^#/ig.test(selector):
            if (!context){
                elements = document.getElementById(selector.substr(1));
            } else {
                elements =  context.getElementById(selector.substr(1))
            }
            break;
        case /^\./ig.test(selector):
            if (!context){
                elements = document.querySelectorAll(selector);
            } else {
                elements =  context.querySelectorAll(selector)
            }
            break;
        default:
            console.log('Don\'t validated name');
    }
    if ( +elements.length === 1 ){
        return elements[0]
    } else {
        return elements
    }
};
const root = document.getElementById('root');
console.log(dom.find('.root__title'));