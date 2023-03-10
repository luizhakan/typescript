// 1 - tipo de objeto para função com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product): Product {
  console.log(product.name);
  console.log(product.price);
  console.log(product.isAvailable);

  product.isAvailable === true
    ? console.log("Produto disponível")
    : console.log("Produto indisponível");

  return product;
}

const product: Product = {
  name: "Notebook",
  price: 3000,
  isAvailable: true,
};

console.log(showProductDetails(product));

// propriedade opcional em inteface

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User): User {
  console.log(user.email);

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`);
  }

  return user;
}

const u1: User = {
  email: "Rd6qP@example.com",
};

const u2: User = {
  email: "FA645e9fg87w@example.com",
  role: "admin",
};

showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "Fusca",
  wheels: 4,
};

console.log(fusca);

// fusca.wheels = 2;  Não é possível atribuir a 'wheels' porque é uma propriedade de somente leitura.ts(2540)

// 4 - index signature

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  latitude: 0,
  longitude: 15,
};

coords.latitude = -23;

console.log(coords);

// coords.longitude = "teste"; O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)

// 5 - extends
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superPower: string[];
}

const luiz: Human = {
  name: "Luiz",
  age: 20,
};

const naruto: SuperHuman = {
  name: "Naruto",
  age: 33,
  superPower: ["Rasengan", "Kage bunshin"],
};
console.log();

console.log(luiz);
console.log(naruto);

// 6 - intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["maçã", "banana", "abacaxi"];
console.log(myArray);
// myArray[3] = "uva";  Assinatura de índice no tipo 'readonly string[]' permite somente leitura.ts(2542)
console.log(myArray);

myArray.forEach((item) => console.log(`Fruta: ${item}`));

// 8 - tuplas

type fiveNumbers = [number, number, number, number, number];

const array1: fiveNumbers = [1, 2, 3, 4, 5];
// const array2: fiveNumbers = [6, 7, 8, 9, 10, 11];  A origem tem 6 elementos, mas o destino permite somente 5.ts(2322)
// const array3 : fiveNumbers = [6, 7, 8, "Luiz", 10];  O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)

console.log(array1);

type nameAndAge = [string, number];

const array4: nameAndAge[] = [
  ["Luiz", 20],
  ["Naruto", 33],
];
console.log(array4);

// 9 - tupla com readonly

function showNumbers(numbers: readonly [number, number]): void {
  // numbers = 0; O tipo 'number' não pode ser atribuído ao tipo 'readonly [number, number]'.ts(2322)
  return numbers.forEach((item) => console.log(item));
}

showNumbers([1, 2]);
