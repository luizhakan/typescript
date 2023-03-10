"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(product.name);
    console.log(product.price);
    console.log(product.isAvailable);
    product.isAvailable === true
        ? console.log("Produto disponível")
        : console.log("Produto indisponível");
    return product;
}
const product = {
    name: "Notebook",
    price: 3000,
    isAvailable: true,
};
console.log(showProductDetails(product));
function showUserDetails(user) {
    console.log(user.email);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
    return user;
}
const u1 = {
    email: "Rd6qP@example.com",
};
const u2 = {
    email: "FA645e9fg87w@example.com",
    role: "admin",
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "Fusca",
    wheels: 4,
};
console.log(fusca);
let coords = {
    latitude: 0,
    longitude: 15,
};
coords.latitude = -23;
console.log(coords);
const luiz = {
    name: "Luiz",
    age: 20,
};
const naruto = {
    name: "Naruto",
    age: 33,
    superPower: ["Rasengan", "Kage bunshin"],
};
console.log();
console.log(luiz);
console.log(naruto);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
// 7 - readonly array
let myArray = ["maçã", "banana", "abacaxi"];
console.log(myArray);
// myArray[3] = "uva";  Assinatura de índice no tipo 'readonly string[]' permite somente leitura.ts(2542)
console.log(myArray);
myArray.forEach((item) => console.log(`Fruta: ${item}`));
const array1 = [1, 2, 3, 4, 5];
// const array2: fiveNumbers = [6, 7, 8, 9, 10, 11];  A origem tem 6 elementos, mas o destino permite somente 5.ts(2322)
// const array3 : fiveNumbers = [6, 7, 8, "Luiz", 10];  O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
console.log(array1);
const array4 = [
    ["Luiz", 20],
    ["Naruto", 33],
];
console.log(array4);
// 9 - tupla com readonly
function showNumbers(numbers) {
    // numbers = 0; O tipo 'number' não pode ser atribuído ao tipo 'readonly [number, number]'.ts(2322)
    return numbers.forEach((item) => console.log(item));
}
showNumbers([1, 2]);
