"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 10.584848;
console.log(typeof y);
console.log(y.toPrecision(3)); // define as casas do number
// 2 - string
let firstName = 'Danielle';
console.log(firstName.toUpperCase()); // transforma em maiusculo
let fullName;
const lastName = 'Calil';
fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
let ann = 'Teste';
let inf = 'Teste';
// ann = 1
// inf = 1
// 5 - desafio 2
const n1 = 10;
const numberToString = n1.toString();
const printMyNumber = `Eu vou imprimir o número ${numberToString}`;
console.log(printMyNumber);
