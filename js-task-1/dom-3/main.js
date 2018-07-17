'use strict';
let textHelp;
let bombs;
const table = document.getElementById('table');
document.getElementById('start').addEventListener("click", function () {
    table.innerText = '';
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const inputBombs = document.getElementById('bomb').value;
    const config = {
        //Размер поля
        w: width ? width - 1 : 9,      //длинна
        h: height ? height - 1 : 9,      //высота

        b: inputBombs ? inputBombs : 5       //количество бомб
    };

    createTable(table, config.w, config.h);
    bombs = setBomb(table, config.b);
    textHelp = helpNumber(bombs, config.w, config.h);
});





function createTable(parentElem, numberRow, numberCol) {

    for (let i = 0; i <= numberRow; i++){
        const row = parentElem.appendChild(document.createElement('tr'));
        for (let d = 0; d <= numberCol; d++){
            const col = row.appendChild(document.createElement('td'));
            col.style.width = '28px';
            col.style.height = '28px';
            col.style.backgroundColor = '#666';
            col.setAttribute('id',i + '-' + d);
        }
    }
}

function setBomb(playTable, quantity) {
    let arr = [];

    const td = playTable.getElementsByTagName('td');
    for (let i = 0; i < quantity; i++){
        let cell = td[Math.round(Math.random() * td.length)];
        if (arr.indexOf(cell.getAttribute('id')) === -1){
            arr.push(cell.getAttribute('id'))
        }
    }
    return arr
}

function helpNumber(arr, numberRow, numberCol) {
    let obj = {};
    for (let item of arr) {
        let id = item.split('-');
        if (+id[1] - 1 >= 0) { //левая
            let key = id[0] + '-' + (id[1] - 1);
            obj[key] = (obj[key] ? obj[key]:0) + 1
        }
        if (+id[1] + 1 <= numberRow){ //правая
            let key = id[0] + '-' + (+id[1] + 1);
            obj[key] = (obj[key] ? obj[key]:0) + 1
        }
        if (id[0] - 1 >= 0 && id[1] - 1 >= 0){ //левая вверх
            let key = (id[0] - 1) + '-' + (id[1] - 1);
            obj[key] = (obj[key] ? obj[key]:0) + 1
        }
        if (id[0] - 1 >= 0) { //центр вверх
            let key = (id[0] - 1) + '-' + id[1];
            obj[key] = (obj[key] ? obj[key]:0) + 1
        }
        if (id[0] - 1 >= 0 && +id[1] + 1 <= numberCol){ //право вверх
            let key = (id[0] - 1) + '-' + (+id[1] + 1);
            obj[key] = (obj[key] ? obj[key]:0) + 1
        }
        if (+id[0] + 1 <= numberRow && id[1] - 1 >= 0){ // низ лево
            let key = (+id[0] + 1) + '-' + (id[1] - 1);
            obj[key] = (obj[key] ? obj[key]:0) + 1
        }
        if (+id[0] + 1 <= numberRow){ // низ центер
            let key = (+id[0] + 1) + '-' + id[1];
            obj[key] = (obj[key] ? obj[key]:0) + 1
        }
        if (+id[0] + 1 <= numberRow && +id[1] + 1 <= numberCol){ // низ право
            let key = (+id[0] + 1) + '-' + (+id[1] + 1);
            obj[key] = (obj[key] ? obj[key]:0) +1
        }
    }
    for (let item of arr) {
        for (let key in obj){
            if (item === key){
                delete obj[key]
            }
        }
    }
    return obj
}





table.addEventListener("click", function (elem) {
    elem.target.style.backgroundColor = '#fff';
    for (let item of bombs){
        if(elem.target.id === item){
            elem.target.style.backgroundColor = 'red';
            const end = table.appendChild(document.createElement('div'));
            end.className = 'Game_Over';
            end.innerText = "Game Over";

        }
    }
    for (let item in textHelp){
        if(elem.target.id === item){
            elem.target.innerText = textHelp[item]
        }
    }
});

table.addEventListener("contextmenu", function (elem) {
    elem.target.innerText = 'F'
});

