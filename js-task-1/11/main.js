'use strict';
const list = [
{city:'Токио — Иокогама', peoples:37900},
{city:'Джакарта', peoples:31760},
{city:'Дели', peoples:26495},
{city:'Манила', peoples:24245},
{city:'Сеул — Инчхон', peoples:24105},
{city:'Карачи', peoples:23545},
{city:'Шанхай', peoples:23390},
{city:'Мумбаи', peoples:22885},
{city:'Нью-Йорк', peoples:21445},
{city:'Сан-Паулу', peoples:20850}
];

function sort(arr, n) {
    return arr.sort((a,b)=> b.peoples - a.peoples).slice(0,n)
}

console.log(sort(list,5));