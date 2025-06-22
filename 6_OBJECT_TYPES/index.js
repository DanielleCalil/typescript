"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e o preço é R$ ${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível.");
    }
}
const shirt = {
    name: "Camisa Polo",
    price: 79.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({
    name: "Calça Jeans",
    price: 89.99,
    isAvailable: false
});
function showUserDetails(user) {
    console.log(`O usuário tem o email ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = {
    email: "usuario1@example.com",
    role: "Admin"
};
const u2 = {
    email: "usuario2@example.com"
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "Volkswagen",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const danielle = {
    name: "Danielle",
    age: 21
};
const superDanielle = {
    name: "Danielle",
    age: 21,
    superPower: ["Super força", "Voo"]
};
console.log(superDanielle);
console.log(superDanielle.superPower[1]);
const john = {
    name: "John",
    type: "Pistol",
    caliber: 9
};
console.log(john);
console.log(john.caliber);
// 7 - readonly array
let myArray = ["Maça", "Banana", "Laranja"];
// myArray[3] = "Pera";
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [6, 7, 8, 9, 10, 11];
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]; 
console.log(myNumberArray);
const anotherUser = ["Danielle", 21];
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser[0]);
// anotherUser[1] = "teste";
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10; 
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
