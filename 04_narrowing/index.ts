// 1 - type guard
function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossível realizar a soma!");
  }
}

sum("4", "59");
sum(12, 42.3);
sum("5", 6);

// 2 - checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {

    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total);
      console.log(multiply);
    }

  } else {
    console.log("Por favor, informe uma operação");
  }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");

// 3 - instance of
class User {
  name

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User("John");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}`);
  }
}

userGreeting(jhon);
userGreeting(paul);

// 4 - operador in
class Dog {
  name
  bread

  constructor(name: string, bread?: string) {
    this.name = name;
    if (bread) {
      this.bread = bread;
    }
  }
}

const turca = new Dog("Turca");
const rex = new Dog("Rex", "Pitbull");

function showDogDetails(dog: Dog) {
  if ("bread" in dog) {
    console.log(`O cachorro é da raça ${dog.bread}`);
  } else {
    console.log(`O cachorro é um SRD`);
  }
}

showDogDetails(turca);
showDogDetails(rex);

// 5 - desafio
type review = number | boolean;

function showUserReview(review: review) {
  if (!review) {
    console.log("Você não avaliou o produto");
    return;
  }

  console.log(`A nota que voce deu foi: ${review}, obrigado!`);
}

showUserReview(false);
showUserReview(5);
showUserReview(2);