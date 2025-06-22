const firstName = "Danielle";
const anotherName = 1;
const x = true;

function greeting(name: string) {
    console.log("Olá " + name)
}

greeting(firstName)
// greeting(anotherName)
// greeting(x)

// desafio 1
function soma(a: number, b: number) {
    return a + b;
}

console.log(soma(2, 2));

const z = 5;
const y = 8;

console.log(soma(z, y));

// console.log(soma(true, "teste"));