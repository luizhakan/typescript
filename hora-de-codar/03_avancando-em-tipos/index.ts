// 3 - any

const arr1: any = [1, "teste", [], { name: "luiz" }];
console.log(arr1);
arr1.push(false);
console.log(arr1);

// 4 - parametros tipados

function soma(x: number, y: number) {
  return x + y;
}
console.log(soma(1, 2));

// soma("a", "b");  O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.ts(2345)

// 5 - tipo de retorno de função

function soma2(x: number, y: number): number {
  // return "Olá Luiz";  O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
  return x + y;
}
console.log(soma2(1, 7));

// 6 - função anônima

setTimeout(() => {
  const salario: number = 1000;

  // console.log(parseFloat(salario));  O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.ts(2345)
  console.log(salario);
}, 3000);

// 7 - tipos de objetos

function passCordinates(coord: { x: number; y: number }) {
  console.log(`Coordenadas do ponto X: ${coord.x} e Y: ${coord.y}`);
}

const objCoord = {
  x: 20.910052,
  y: 107.183903,
};

passCordinates(objCoord);
// passCordinates([]);  O argumento do tipo 'never[]' não é atribuível ao parâmetro do tipo '{ x: number; y: number; }'.

// 8 - propriedades opcionais

function showNumbers(num1: number, num2: number, num3?: number) {
  // os parâmetros opcionais tem que ser o último
  console.log(`\nO primeiro número é ${num1}`);
  console.log(`\nO segundo número é ${num2}`);
  if (num3) {
    console.log(`\nO terceiro número é ${num3}`);
  } else {
    console.log(`\nO terceiro número é nulo`);
  }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);

// 10 - union types

function saldo(balanco: number | string) {
  console.log(`Saldo: ${balanco}`);
}

saldo(1000);
saldo("2000");
// saldo(true); O argumento do tipo 'true' não é atribuível ao parâmetro do tipo 'number | string'.ts(2345)

// 11 - avançando em union types

function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    console.log(`\nUsuário não tem acesso`);
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("admin"));

// 12 - type alias
type ID = string | number;

function showId(id: ID) {
  return `O id do usuário é: ${id}`;
}

console.log(showId("123"));
console.log(showId(123));

// 13 - interface

interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(point: Point) {
  console.log(
    `\nCoordenadas do ponto X: ${point.x} e Y: ${point.y} e Z: ${point.z}`
  );
}

const point = {
  x: 1,
  y: 2,
  z: 3,
};

showCoords(point);

// interface x type alias

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "Luiz",
  age: 20,
};

// 14 - literal types

let test: "testando";
test = "testando";
console.log(test);

function showName(name: "Luiz" | "Safira") {
  return `O nome do usuário é: ${name}`;
}

showName("Luiz");
// showName("João");  O argumento do tipo '"João"' não é atribuível ao parâmetro do tipo '"Luiz" | "Safira"'.ts(2345)

// 15 - non-null assertion operator
// const p = document.getElementById("some-p");

// console.log(p!.innerText);

// 16 - bigint
// Os literais de BigInt não estão disponíveis ao direcionar para menos de ES2020.ts(2737)

let n: bigint;
n = 100n;
console.log(n);

// 17 - Symbol

let symbolA: symbol = Symbol("a");
let symbolB: symbol = Symbol("b");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);