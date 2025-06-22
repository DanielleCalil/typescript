// 1 - arrays
let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

// numbers = "teste"

const nomes: string[] = ["Matheus", "João"];

// nomes.push(4)

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

// nums.push("teste")

console.log(nums[0]);

// 3 - any

const arr1: any = [1, "teste", true, [], { nome: "Danielle" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);

// 4 - parametros tipados

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

//soma("a", "b")

// 5 - retorno de função
function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Danielle"));

// 6 - função anônima
setTimeout(function () {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary))

  // console.log(sallary)
}, 2000);

// 7 - tipos de objeto
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("X coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);
// passCoordinates({nome: 1, sobrenome: 2})

const pessoaObj: { nome: string; surname: string } = {
  nome: "Danielle",
  surname: "Calil",
};

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(6)

// 9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Danielle", "Calil"));
console.log(advancedGreeting("Daniel"));

// 10 - union types
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é: ${balance}`);
}

showBalance(100);
showBalance("500");
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, "teste", true];

// 11 - avançando em union types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }
  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("admin"));

// 12 - type alias
type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é: ${id}`);
}

showId(1);
showId("200");
showId(123);

// 13 - interfaces
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoordinates(obj: Point) {
  console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}

const coordinateObj: Point = {
  x: 10,
  y: 20,
  z: 30,
};

showCoordinates(coordinateObj);

// 14 - interface x type alias
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const personObj: Person = {
  name: "Danielle",
  age: 21,
};

console.log(personObj);

type PersonType = {
  name: string;
};

// type PersonType = {
//   age: number;
// };

// 15 - literal types
let test: "testando";

test = "testando";

console.log(test);

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`);
}

showDirection("left");

// showDirection("top");

// 16 - non-null assertion operator
const p = document.getElementById("some-p");

console.log(p!.innerText);

// 17 - bigInt
let n: bigint;

//  n = 1

n = 1000n;

console.log(n);

console.log(typeof n);

console.log(n + 100n);

// 18 - symbol
const symbolA: symbol = Symbol("a");
const symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB)