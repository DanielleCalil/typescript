// 1 - var, let e const
var x = 10;
var y = 20;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 20;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

function logName() {
  const name = "John";
  console.log(name);
}

const name = "Jane";

logName();

console.log(name);

// 2 - Arrow Functions
const sum = function sum(a, b) {
  return a + b;
};

const sumArrow = (a, b) => a + b;

console.log(sum(5, 10));
console.log(sumArrow(5, 10));

const greeting = (name) => {
  if (name) {
    return "Olá, " + name + "!";
  } else {
    return "Olá, mundo!";
  }
};

console.log(greeting("Maria"));
console.log(greeting());

const testeArrow = () => console.log("Testou!");

testeArrow();

const user = {
  name: "João",
  sayUserName() {
    var self = this; 
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
    sayUserNameArrow() {
        setTimeout(() => {
        console.log(this);
        console.log("Username: " + this.name);
        }, 700);
    }
};

user.sayUserName();
user.sayUserNameArrow();

// 3 - Filter
const arr = [1, 2, 3, 4, 5];

console.log(arr);

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log(highNumbers);

const users = [
    { name: "Maria", available: true },
    { name: "João", available: false },
    { name: "Pedro", available: true },
    { name: "Ana", available: false }
];

const availableUsers = users.filter((user) => user.available);
const unavailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(unavailableUsers);

// 4 - Map
const products = [
    { name: "Camisa", price: 19.99, category: "Roupas" },
    { name: "Calça", price: 39.99, category: "Roupas" },
    { name: "Sapato", price: 59.99, category: "Calçados" },
    { name: "Tênis", price: 89.99, category: "Calçados" }
];

products.map((product) => {
    if (product.category === "Roupas") {
        product.onSale = true;
    }
});

console.log(products);

// 5 - Template literals
const userName = "Oliver";
const userAge = 30;

console.log(`O nome do usuário é ${userName} e ele tem ${userAge} anos.`);
console.log("O nome do usuário é " + userName + " e ele tem " + userAge + " anos.");

// 6 - Destructuring
const fruits = ["Maçã", "Banana", "Laranja", "Uva"];

const [f1, f2, f3, f4] = fruits;

console.log(f1);

console.log(f3);

const productDetails = {
    name: "Notebook",
    price: 2499.99,
    category: "Eletrônicos",
    color: "Preto"
};

const { name: productName, price, category: productCategory, color } = productDetails;

console.log(`O nome do produto é ${productName}, ele custa ${price} e pertence à categoria ${productCategory}. A cor do produto é ${color}.`);

// 7 - Spread Operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

const carName = { name: "Fusca" };
const carBrand = { brand: "Volkswagen" };
const otherInfos = { year: 1969, color: "azul" };

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };

console.log(car);

// 8 - Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price - (100 - discount) / 100;
  }
}

const shirt = new Product("Camisa", 19.99);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tênis", 89.99);

console.log(tenis.productWithDiscount(20));

// 9 - Herança
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["azul", "vermelho", "verde"]);

console.log(hat.name);

console.log(hat.productWithDiscount(30));

hat.showColors();