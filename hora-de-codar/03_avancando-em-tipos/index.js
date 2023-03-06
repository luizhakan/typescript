"use strict";
// 3 - any
const arr1 = [1, "teste", [], { name: "luiz" }];
console.log(arr1);
arr1.push(false);
console.log(arr1);
// 4 - parametros tipados
function soma(x, y) {
    return x + y;
}
console.log(soma(1, 2));
// soma("a", "b");  O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.ts(2345)
// 5 - tipo de retorno de função
function soma2(x, y) {
    // return "Olá Luiz";  O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
    return x + y;
}
console.log(soma2(1, 7));
// 6 - função anônima
setTimeout(() => {
    const salario = 1000;
    // console.log(parseFloat(salario));  O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.ts(2345)
    console.log(salario);
}, 3000);
// 7 - tipos de objetos
function passCordinates(coord) {
    console.log(`Coordenadas do ponto X: ${coord.x} e Y: ${coord.y}`);
}
const objCoord = {
    x: 20.910052,
    y: 107.183903,
};
passCordinates(objCoord);
// passCordinates([]);  O argumento do tipo 'never[]' não é atribuível ao parâmetro do tipo '{ x: number; y: number; }'.
// 8 - propriedades opcionais
function showNumbers(num1, num2, num3) {
    // os parâmetros opcionais tem que ser o último
    console.log(`\nO primeiro número é ${num1}`);
    console.log(`\nO segundo número é ${num2}`);
    if (num3) {
        console.log(`\nO terceiro número é ${num3}`);
    }
    else {
        console.log(`\nO terceiro número é nulo`);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 10 - union types
function saldo(balanco) {
    console.log(`Saldo: ${balanco}`);
}
saldo(1000);
saldo("2000");
// saldo(true); O argumento do tipo 'true' não é atribuível ao parâmetro do tipo 'number | string'.ts(2345)
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        console.log(`\nUsuário não tem acesso`);
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
function showId(id) {
    return `O id do usuário é: ${id}`;
}
console.log(showId("123"));
console.log(showId(123));
