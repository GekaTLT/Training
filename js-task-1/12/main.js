'use strict';
/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */


function Hamburger(size, stuffing) {
    this.hamburger = [];

    if (size === Hamburger.SIZE_SMALL || size === Hamburger.SIZE_LARGE){
        this.hamburger[0] = size
    } else {
        throw new HamburgerException('Не выбран размер')
    }
    if (stuffing === Hamburger.STUFFING_CHEESE ||
        stuffing === Hamburger.STUFFING_SALAD ||
        stuffing === Hamburger.STUFFING_POTATO)
    {
        this.hamburger[1] = stuffing
    } else {
        throw new HamburgerException('Не выбрана начинка')
    }


}

Hamburger.SIZE_SMALL = 'маленький,50,20';
Hamburger.SIZE_LARGE = 'большой,100,40';
Hamburger.STUFFING_CHEESE = 'сыром,10,20';
Hamburger.STUFFING_SALAD = 'салатом,20,5';
Hamburger.STUFFING_POTATO = 'картофелем,15,10';
Hamburger.TOPPING_MAYO = 'майонез,20,5';
Hamburger.TOPPING_SPICE = 'приправа,15,0';
/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {
    if (topping === Hamburger.TOPPING_MAYO || topping === Hamburger.TOPPING_SPICE){
        for (let i = 2; i<this.hamburger.length; i++){
            if (this.hamburger[i] === topping){
                throw new HamburgerException('добавка уже жобавлена')
            }
        }
        this.hamburger.push(topping)
    }else {
        throw new HamburgerException('нет такой добавки')
    }
};

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping){
    if (topping === Hamburger.TOPPING_MAYO || topping === Hamburger.TOPPING_SPICE){
        for (let i = 2; i<this.hamburger.length; i++){
            if (this.hamburger[i] === topping){
                this.hamburger.splice(i,1)
            }
        }
    }else {
        throw new HamburgerException('нет такой добавки')
    }

};

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    let arr = [];
    for (let i = 2; i<this.hamburger.length; i++){
        if (this.hamburger[i]){
            arr.push(this.hamburger[i])
        }
    }
    if (!arr[0]){
        return ['добавок нет']
    }
    else {
        return arr
    }
};

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function (){
  return this.hamburger[0]
};

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function (){
    return this.hamburger[1]
};

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    let num = 0;
  for (let item of this.hamburger){
      num += +item.split(',')[1]
  }
  return num
};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function (){
    let num = 0;
    for (let item of this.hamburger){
        num += +item.split(',')[2]
    }
    return num
};

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException (str) {
    console.error(str)
}



// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1


// не передали обязательные параметры
// const h2 = new Hamburger(); // => HamburgerException: no size given

// передаем некорректные значения, добавку вместо размера
// const h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// добавляем много добавок
// const h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// HamburgerException: duplicate topping 'TOPPING_MAYO'
