'use strict';
// var name = 'Vasya';
// var age = 20;
//
// name = 'Ann';
//
// console.log(name)

// let name = 'Vasya';
// name = 'Ann';
//
// console.log(name)

// {
//     var a = 1;
//     console.log(a)
// }
//
// console.log(a);

// ES5
// function passTest(result) {
//     if (result) {
//         var firstName = 'Bob';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
// passTest(false);

// ES6
// function passTest(result) {
//     let firstName;
//     let yearOfBirth;
//
//     if (result) {
//         firstName = 'Bob';
//         yearOfBirth = 1990;
//     }
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
// passTest(true);

// ES5
// var i = 23;
//
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);
// ES5
//
// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// 'use strict';
// function a() {
//     var b = 5;
//     let c = 10;
//     d = 20;
// }
//
// a();
//
// console.log(b);
// console.log(c);
// console.log(d);

// ES5
// var firstName = 'John';
// var lastName = 'Smith';
// var yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2021 - year;
// }
//
// console.log(firstName + ' ' + lastName + ' рожден в ' + yearOfBirth + '. ' + 'Ему сейчас ' + calcAge(yearOfBirth));

// ES6
// const firstName = 'John';
// const lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2021 - year;
// }
// console.log(`${firstName} ${lastName} рожден в ${yearOfBirth}. Ему сейчас ${calcAge(yearOfBirth)}`);
//

// const str = `${firstName} ${lastName}`;
// console.log(str);
// console.log(str.startsWith('J'));
// console.log(str.endsWith('th'));
// console.log(str.includes('n S'));
// console.log(`${str} `.repeat(5));

// ES6
// const calcAge = () => {
//     return 6;
// };
// const calcAge = (x) => {
//     return 6 + x;
// };
// const calcAge = x => 6 + x;
// console.log(calcAge(5));

// const calcAge7 = (x, y = 0) => {
//     let b = y;
//     return 6 - x + b;
// };
// console.log(calcAge7(5));


// ES5
// var box = {
//     color: 'green',
//     position: 1,
//     clickMe() {
//         console.log(this);
//         var _this = this;
//         document.querySelector('.green').addEventListener('click', function () {
//             console.log(_this);
//             console.log(`This is a box number ${_this.position} and color ${_this.color}`);
//         });
//     }
// }
//
// box.clickMe();
// ES6
// let box = {
//     color: 'green',
//     position: 1,
//     clickMe() {
//         console.log(this);
//         document.querySelector('.green').addEventListener('click', () => {
//             console.log(this);
//             console.log(`This is a box number ${this.position} and color ${this.color}`);
//         });
//     }
// }

// box.clickMe();
// 'use strict';


// const obj = {
//     name: 'Vasya',
//     sayName() {
//         console.log(this);
//     }
// };
//
// obj.sayName();
//
// var mySayName = obj.sayName;
//
// // console.log(this);
// mySayName();

// ES5
// var arr = ['John', 25];
// var name = arr[0];
// var age = arr[1];
//
// console.log(name, age);

// ES6
// const arr = ['John', 25, true];
// // const [name, age] = arr;
// const [name,, isAdmin] = arr;

// console.log(name, age);
// console.log(name, isAdmin, arr);

// let obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     colors: ['white', 'black'],
// };

// let {firstName, lastName, colors} = obj;
//
// console.log(firstName, lastName, colors);

// let {firstName: fn, lastName: ln, colors: [b, c]} = obj;
//
// console.log(fn, ln, b, c);

// function foo({firstName}) {
//     console.log(firstName);
//     console.log(arguments);
// }
