// 1 - generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("teste"));
console.log(showData(true));
console.log(showData(["a", "b"]));

// 2 - constraint em generics
function showProductName<T extends { name: string }>(obj: T): {} {
  return obj;
}

const myObj: { name: string; price: number } = {
  name: "Notebook",
  price: 1000,
};

const otherObj: { price: number } = {
  price: 2000,
};

console.log(showProductName(myObj));
// console.log(showProductName(otherObj));    A propriedade 'name' está ausente no tipo '{ price: number; }', mas é obrigatória no tipo '{ name: string; }'.ts(2345)

// 3 - generic com interface
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {
  name: "Ford",
  wheels: 4,
  engine: 1.0,
  color: "Red",
};

const myPen: Pen = {
  name: "Eraser",
  wheels: false,
  engine: false,
  color: "Blue",
};

console.log(myCar);
console.log(myPen);

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key.toString()} está presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  ip: "127.0.0.1",
  port: 3000,
};

console.log(getSomeKey(server, "ip"));
// console.log(getSomeKey(server, "teste")); O argumento do tipo '"teste"' não é atribuível ao parâmetro do tipo '"ip" | "port"'.ts(2345)

// 5 - keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCarName(obj: Character, name: C): string {
  return `${obj[name]}`;
}

const myChar: Character = {
  name: "Luiz",
  age: 20,
  hasDriveLicense: true,
};

console.log(showCarName(myChar, "name"));
// console.log(showCarName(myChar, "teste"));    O argumento do tipo '"teste"' não é atribuível ao parâmetro do tipo '"name"'.ts(2345)

// 6 - typeof type operator

const userName: string = "Luiz";
const userName2: typeof userName = "Saf";
// const userName3: typeof userName = 3; O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322)
type x = typeof userName;
const userName4: x = "SCR";

// 7 - indexed access type

type Truck = { km: number; kg: number; description: string };
type Km = Truck["km"];

const newTruck: Truck = {
  km: 0,
  kg: 0,
  description: "Caminhão para pouca carga",
};

function showKm(km: Km) {
  console.log(`O caminhão possui ${km} quilômetros.`);
}

showKm(newTruck.km);

// 8 - conditional types
interface A {}
interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 1;
// const someVar2 : myType = "teste"; O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

// 9 - template literals type

type testA = "text";
type CustomType = `some ${testA}`;

const testing: CustomType = `some text`;
// const testing2 : CustomType = `some text 2`; O tipo '"some text 2"' não pode ser atribuído ao tipo '"some text"'.ts(2322)
