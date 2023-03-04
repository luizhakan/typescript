"use strict";
// 1 - numbers
let x = 10;
console.log(x);
// x = "oi";  O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
x = 10.5;
console.log(typeof x);
// console.log(x.toUpperCase());  A propriedade 'toUpperCase' não existe no tipo 'number'.ts(2339)
// 2 - string
let nome = "Luiz";
console.log(nome);
console.log(typeof nome);
console.log(nome.toUpperCase());
// 3 - boolean
let possuiHobbies = true;
console.log(possuiHobbies);
console.log(typeof possuiHobbies);
// 4 - inference e annotation
let inference = 20;
console.log(typeof inference);
let annotation = 20;
console.log(typeof annotation);
// annotation = "oi";  O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
