/*
Некая сеть фастфуда предлагает несколько видов гамбургеров:
Маленький (50 рублей, 20 калорий).
Большой (100 рублей, 40 калорий).
Гамбургер может быть с одним из нескольких видов начинок (обязательно):
С сыром (+10 рублей, +20 калорий).
С салатом (+20 рублей, +5 калорий).
С картофелем (+15 рублей, +10 калорий).
Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 
Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса со следующей страницы, но можно использовать и свою.
*/

class Hamburger {
    constructor(size, filling) {
        this.size = size;
        this.filling = filling;
        this._toppingList = [];
        this._burgerList = [];
        this._allList = [
            {name: 'small', price: 50, ccal: 20},
            {name: 'big', price: 100, ccal: 40},
            {name: 'cheese', price: 10, ccal: 20},
            {name: 'middle', price: 75, ccal: 30},
            {name: 'salad', price: 20, ccal: 5},
            {name: 'potato', price: 15, ccal: 10},
            {name: 'spice', price: 15, ccal: 0},
            {name: 'mayo', price: 20, ccal: 5}
        ];
        this.priceHTML = document.querySelector('#result_price');
        this.ccalHTML = document.querySelector('#result_calories');
        this.price = this.calculatePrice();
        this.ccal = this.calculateCalories();
    }
    addTopping(input) {    // Добавить добавку 
        this._toppingList.push(input.value);
    }
    removeTopping(input) { // Убрать добавку
        this._toppingList = this._toppingList.filter(function(el){return el !== input.value});
    }
    getBurgerList() {   // Получить список добавок
        let burgerList=[];
        burgerList.push(this.size);
        burgerList.push(this.filling);
        burgerList = burgerList.concat(this._toppingList);
        return burgerList;
    }
    getSize(input) {              // Узнать размер гамбургера 
        this.size = input.value;
    }
    getFilling(input) {          // Узнать начинку гамбургера 
        this.filling = input.value;
    }
    calculatePrice() {       // Узнать цену 
        this._burgerList = this.getBurgerList();
        this.price = 0;
        this._burgerList.forEach(item => {
            this._allList.forEach(element => {
                if(element.name === item) {
                    this.price += element.price;
                    return;
                }
            })
        });
        this.priceHTML.innerText = `Сумма = ${this.price} рублей`;
    }
    calculateCalories() {    // Узнать калорийность 
        this._burgerList = this.getBurgerList();
        this.ccal = 0;
        this._burgerList.forEach(item => {
            this._allList.forEach(element => {
                if(element.name === item) {
                    this.ccal += element.ccal;
                    return;
                }
            })
        });
        this.ccalHTML.innerText = `Калорийность = ${this.ccal} ккал`;
    }
}

let burger = new Hamburger('middle', 'cheese');

let sizeInputs = document.querySelectorAll("form.size.radio input[name=size]");
sizeInputs.forEach((sizeInput) => sizeInput.addEventListener('click', function(e) {
    burger.getSize(e.target);
    burger.calculatePrice();
    burger.calculateCalories();
}));

let fillingInputs = document.querySelectorAll("form.filling.radio input[name=filling]");
fillingInputs.forEach((fillingInput) => fillingInput.addEventListener('click', function(e) {
    burger.getFilling(e.target);
    burger.calculatePrice();
    burger.calculateCalories();
}));

let toppingInputs = document.querySelectorAll("form.topping.radio input[name=topping]");
toppingInputs.forEach((toppingInput) => toppingInput.addEventListener('click', function(e) {
    e.target.checked ? burger.addTopping(e.target) : burger.removeTopping(e.target);
    burger.calculatePrice();
    burger.calculateCalories();
}));