"use strict";
// 1 - void
function imprimirSoma(a, b) {
    console.log(a + b);
    // return 1;  O tipo 'number' não pode ser atribuído ao tipo 'void'.ts(2322)
}
imprimirSoma(2, 3);
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a funcção...");
    const greet = f(userName);
    setTimeout(() => {
        console.log(greet);
    }, 3000);
}
preGreeting(greeting, "Luiz");
// 3 - generic function
function firstElement(array) {
    return array[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["Luiz", "Gustavo", "Ana"]));
// console.log(firstElement("teste"));  O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'any[]'.ts(2345)
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const newObject = mergeObjects({ name: "Luiz" }, { age: 20, job: "Dev" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber("6", "2"));
console.log(biggestNumber(4, 2));
// console.log(biggestNumber("4", 2));  O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.ts(2345)
// 5 - especificar tipos de argumentos
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// console.log(mergeArrays([4, 5, 6], ["Luiz", "Safi"]));  O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
console.log(mergeArrays(["Luiz", "Safi"], [4, 5, 6]));
// 6 - parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        const saudattion = `Olá ${greet}. ${name}, tudo bem?`;
        return saudattion;
    }
    else {
        const saudattion = `Olá ${name}, tudo bem?`;
        return saudattion;
    }
}
console.log(modernGreeting("Luiz", "Dr"));
// 7 - parâmetro default
function somaDefault(a, b = 10) {
    return a + b;
}
console.log(somaDefault(5));
console.log(somaDefault(5, 2));
// 8 - unknown
function doSomething(x) {
    console.log(x);
    if (Array.isArray(x)) {
        console.log("É um array");
    }
    else if (typeof x === "object") {
        console.log("É um objeto");
    }
    else if (typeof x === "string") {
        console.log("É uma string");
    }
    else {
        console.log("Não é nenhum dos tipos anteriores");
    }
}
doSomething(5);
doSomething("Luiz");
doSomething([1, 2, 3]);
// 9 - never
// function showErrorMessage(message: string): never {
//   throw new Error(message);
// }
// console.log(showErrorMessage("Algo deu errado"));
// console.log(showErrorMessage("Algo deu errado novamente"));
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// 11 - destructuring em parâmetro
function showProductDetails({ name, price, }) {
    return `${name} - R$${price}`;
}
const product = {
    name: "Notebook",
    price: 1000,
};
console.log(showProductDetails(product));
