"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível somar");
    }
}
sum("1", "2");
sum(3, 5);
// 2 - checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, escolha uma operação");
    }
}
console.log();
operations([1, 2, 3], "sum");
operations([1, 2, 3], "multiply");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const user = new User("Luiz");
const superUser = new SuperUser("Safira");
console.log(user);
console.log(superUser);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}, tudo bem?`);
    }
}
userGreeting(superUser);
userGreeting(user);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const Turca = new Dog("Turca");
const Spike = new Dog("Spike", "Pug");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`${dog.name} é um ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é um SRD`);
    }
}
console.log();
showDogDetails(Turca);
showDogDetails(Spike);
