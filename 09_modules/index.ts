// 1 - importação de arquivos
import importGreet from "./greet";

importGreet();

// 2 - import de variavel
import { x } from "./variable";

console.log(x);

// 3 - múltiplas importações
import { a, b, myFunction } from "./multiple";

console.log(a);
console.log(b);
myFunction();

// 4 - alias para importação
import { someName as name } from "./changename";

console.log(name);

// 5 - importando tudo
import * as myNumbers from "./numbers";

console.log(myNumbers);

const nX = myNumbers.n1;

console.log(nX);

myNumbers.showNumber();

// 6 - importando tipos
import { Human } from "./mytype";

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new User("João", 25);

console.log(joao);