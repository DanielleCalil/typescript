// 1 - tipo de objeto para função com interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e o preço é R$ ${product.price}`);
  if (product.isAvailable) {
    console.log("O produto está disponível.");
  }
}

const shirt: Product = {
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

// 2 - propriedade opcional em interface
interface User {
  email: string;
  role?: string; 
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o email ${user.email}`);
  if (user.role) {
    console.log(`A função do usuário é ${user.role}`);
  }
}

const u1: User = {
  email: "usuario1@example.com",
  role: "Admin"
};

const u2: User = {
  email: "usuario2@example.com"
};

showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly
interface Car {
  brand: string;
  readonly wheels: number; 
}

const fusca: Car = {
  brand: "Volkswagen",
  wheels: 4
};

console.log(fusca);
// fusca.wheels = 5;

// 4 - index signature
interface CoordObject {
  [index: string]: number;
}
let coords: CoordObject = {
  x: 10
}

coords.y = 15;

console.log(coords);

// coords.z = "teste";

// 5 - extending interfaces
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superPower: string[];
}

const danielle: Human = {
  name: "Danielle",
  age: 21
};

const superDanielle: SuperHuman = {
  name: "Danielle",
  age: 21,
  superPower: ["Super força", "Voo"]
};

console.log(superDanielle);
console.log(superDanielle.superPower[1]);

// 6 - intersecting types
type Character = {
  name: string;
}

type Gun = {
  type: string;
  caliber: number;
};

type HumanWithGun = Character & Gun 

const john: HumanWithGun = {
  name: "John",
  type: "Pistol",
  caliber: 9
};

console.log(john);
console.log(john.caliber);

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["Maça", "Banana", "Laranja"]

// myArray[3] = "Pera";

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray= myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// myArray[0] = "Pera"; 

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number];

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [6, 7, 8, 9, 10, 11];
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]; 

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser = ["Danielle", 21] 

console.log(anotherUser[0]);

anotherUser[0] = "João";

console.log(anotherUser[0]);

// anotherUser[1] = "teste";

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10; 
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
