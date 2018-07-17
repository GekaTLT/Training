'use strict';

function createTable(parentElem, numberRow, numberCol) {

    for (let i = 0; i <= numberRow; i++){
        const row = parentElem.appendChild(document.createElement('tr'));
        for (let d = 0; d <= numberCol; d++){
            const col = row.appendChild(document.createElement('td'));
            col.style.width = '1px';
            col.style.height = '1px';
            col.style.backgroundColor = '#fff';
        }
    }
}

function mouseDown() {
    return function mouseOver (elem) {
        elem.target.style.backgroundColor = '#000'
    }
}
let mouseOver;

const table = document.getElementById('table');
createTable(table,100,100);



table.addEventListener("mousedown", function () {
    mouseOver = mouseDown();
});
table.addEventListener("mouseover", function (elem) {
    if (mouseOver){
        mouseOver(elem)
    }
});
document.body.addEventListener("mouseup", function () {
    mouseOver = undefined;
});

document.getElementById('clear').addEventListener("click", function () {
    for(let tag of table.getElementsByTagName('td')){
        tag.style.backgroundColor = '#fff'
    }
});

document.getElementById('invert').addEventListener("click", function () {
    for(let tag of table.getElementsByTagName('td')){
        if (tag.style.backgroundColor === 'rgb(0, 0, 0)') {
            tag.style.backgroundColor = '#fff'
        } else {
            tag.style.backgroundColor = '#000'
        }
    }

});