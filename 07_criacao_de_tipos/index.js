"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupas" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "Branco"
};
const myPen = {
    name: "Caneta",
    wheels: false,
    engine: false,
    color: "Azul"
};
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de: ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Danielle",
    age: 21,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// showCharName("teste", "asd");
// 6 - typeof type operator
const userName = "Danielle";
const userName2 = "João";
const userName4 = "Maria";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
const showKm = (km) => {
    console.log(`O veículo tem a km de: ${km}`);
};
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1500,
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
