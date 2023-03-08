// 1 - void
function imprimirSoma(a: number, b: number): void {
  console.log(a + b);
  // return 1;  O tipo 'number' não pode ser atribuído ao tipo 'void'.ts(2322)
}

imprimirSoma(2, 3);

// 2 - callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a funcção...");

  const greet = f(userName);
  setTimeout(() => {
    console.log(greet);
  }, 3000);
}

preGreeting(greeting, "Luiz");

// 3 - generic function

function firstElement<T>(array: T[]): T {
  return array[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["Luiz", "Gustavo", "Ana"]));
// console.log(firstElement("teste"));  O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'any[]'.ts(2345)

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return { ...obj1, ...obj2 };
}

const newObject = mergeObjects({ name: "Luiz" }, { age: 20, job: "Dev" });
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

console.log(biggestNumber("6", "2"));
console.log(biggestNumber(4, 2));
// console.log(biggestNumber("4", 2));  O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.ts(2345)

// 5 - especificar tipos de argumentos

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// console.log(mergeArrays([4, 5, 6], ["Luiz", "Safi"]));  O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
console.log(mergeArrays<string | number>(["Luiz", "Safi"], [4, 5, 6]));

// 6 - parâmetros opcionais

function modernGreeting(name: string, greet?: string) {
  if (greet) {
    const saudattion = `Olá ${greet}. ${name}, tudo bem?`;
    return saudattion;
  } else {
    const saudattion = `Olá ${name}, tudo bem?`;
    return saudattion;
  }
}

console.log(modernGreeting("Luiz", "Dr"));

// 7 - parâmetro default

function somaDefault(a: number, b: number = 10): number {
  return a + b;
}

console.log(somaDefault(5));
console.log(somaDefault(5, 2));

// 8 - unknown

function doSomething(x: unknown) {
  console.log(x);
  if (Array.isArray(x)) {
    console.log("É um array");
  } else if (typeof x === "object") {
    console.log("É um objeto");
  } else if (typeof x === "string") {
    console.log("É uma string");
  } else {
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

function sumAll(...n: number[]): number {
  return n.reduce((number: number, sum: number) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 11 - destructuring em parâmetro

function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `${name} - R$${price}`;
}

const product = {
  name: "Notebook",
  price: 1000,
}

console.log(showProductDetails(product));