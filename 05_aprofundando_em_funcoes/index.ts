// 1 - void
function withoutReturn(): void {
  console.log("Esta função não tem retorno!");
  // return;
}

withoutReturn();

// 2 - callback como argumento
function greeting(name: string): string {
  return `Olá, ${name}!`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função!");
  const greet = f(userName);
  console.log(greet);
}

preGreeting(greeting, "João");
preGreeting(greeting, "Maria");

// 3 - generic function
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
// console.log(firstElement("Teste"));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return { 
    ...obj1, 
    ...obj2 
  };
}

const newObject = mergeObjects({ name: "João" }, { age: 30, job: "Developer" });

console.log(newObject);

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// console.log(biggestNumber("12", 5));

// 5 - especificar
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]));

// 6 - parametros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }
  return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("João"));
console.log(modernGreeting("Maria", "Dr."));

// 7 - parametros default
function somaDefault(n: number, m = 10): number {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(15, 12));

// 8 - unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("x é um número:", x);
  }
}

doSomething([1, 2, 3]);
doSomething(5);

// 9 - never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

// showErrorMessage("Algum erro!");

// 10 - Rest operator
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
// console.log(sumAll("teste"));

// 11 - Destructuring como parâmetro
function showProductDetails({ name, price }: { name: string; price: number }): string {
  return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {
  name: "Camisa",
  price: 79.99
};

console.log(showProductDetails(shirt));
// console.log(showProductDetails({ name: "teste", age: 30 }));
// console.log(showProductDetails({1 , 2}));