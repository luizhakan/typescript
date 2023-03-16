// 1 - campos em classe
class User {
  name!: string;
  age!: number;
}

const luiz = new User();
console.log(luiz);
luiz.name = "Luiz";
luiz.age = 20;
// luiz.job = "Software Developer";  A propriedade 'job' não existe no tipo 'User'.ts(2339)
console.log(luiz);

// 2 - constructor
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const hakan = new NewUser("Hakan", 20);
console.log(hakan);

// const joao = new NewUser("João"); 2 argumentos eram esperados, mas 1 foram obtidos.ts(2554)

// 3 - campo readonly
class Car {
  name;
  readonly wheels: number = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");
console.log(fusca);
// fusca.wheels = 4;  A propriedade 'wheels' não pode ser alterada.ts(2554)
console.log(fusca.wheels);

fusca.name = "Fusca GT";
// fusca.wheels = 4;  A propriedade 'wheels' não pode ser alterada.ts(2554)
console.log(fusca);

// 4 - herança e super
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const tractor = new Machine("Tractor");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);
console.log(tractor);
console.log(destroyer);

// 5 - métodos
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting = () => {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const darwin = new Dwarf("Darwin");
darwin.greeting();

// 6 - this
class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails = () => {
    console.log(`Model: ${this.model}`);
    console.log(`HP: ${this.hp}`);
  };
}

console.log();
const truck = new Truck("Ford", 100);
truck.showDetails();

// 7 - getters
class Person {
  name;
  surName;

  constructor(name: string, surName: string) {
    this.name = name;
    this.surName = surName;
  }

  get fullName() {
    return `${this.name} ${this.surName}`;
  }

  showFullName = () => {
    console.log(this.fullName);
  };
}

const luizhakan = new Person("Luiz", "Hakan");
luizhakan.showFullName();

// 8 - setters
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }
    this.x = x;

    console.log(`X: ${this.x}`);
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }
    this.y = y;

    console.log(`Y: ${this.y}`);
  }

  showCoords = () => {
    console.log(`X: ${this.x} Y: ${this.y}`);
  };
}

const myCoords = new Coords();
myCoords.fillX = 10;
myCoords.fillY = 20;
myCoords.showCoords();

// 9 - implements
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title: string;
  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return this.title;
  }

  showTitle = () => {
    console.log(this.itemTitle());
  };
}

const myPost = new blogPost("Hello World!");
myPost.showTitle();

// 10 - override de métodos
class Base {
  baseMethod() {
    console.log("Base Method");
  }
}

class Nova extends Base {
  baseMethod() {
    console.log("Base Method Nova");
  }
}

const myObject = new Nova();
myObject.baseMethod();

// 11 - public

class C {
  public x = 10;
}

class D extends C {}

const dInstance = new D();
console.log(dInstance.x);

// 12 - protected
class E {
  protected x = 11;

  protected protectedMethod() {
    console.log("Protected Method");
  }
}

class F extends E {
  showX = () => {
    console.log(this.x);
  };

  showProtectedMethod = () => {
    this.protectedMethod();
  };
}

const fInstance = new F();
// console.log(fInstance.x); A propriedade 'x' é protegida e somente é acessível na classe 'E' e em suas subclasses.ts(2445)
fInstance.showX();
// fInstance.protectedMethod(); A propriedade 'protectedMethod' é protegida e somente é acessível na classe 'E' e em suas subclasses.ts(2445)
fInstance.showProtectedMethod();

// 13 - private
class PrivateClass {
  private name = "Luiz";

  showName = () => {
    console.log(this.name);
  };
}

const pObj = new PrivateClass();
// console.log(pObj.name);  A propriedade 'name' é particular e somente é acessível na classe 'PrivateClass'.ts(2341)
pObj.showName();

// 14 - static members
class StaticMembers {
  static prop = "Teste Static";

  static staticMethod = () => {
    console.log("Este é um método estático");
  };
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();

// 15 - generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é ${this.first}`;
  }

  get showSecond() {
    return `O second é ${this.second}`;
  }
}

const newItem = new Item<string, number>("Luiz", 20);
console.log(newItem.showFirst);
console.log(newItem.showSecond);

// 16 - parameter properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showPrice() {
    return `O preço é ${this.price}`;
  }

  get showQty() {
    return `A quantidade é ${this.qty}`;
  }

  showFullInfo = () => {
    console.log({
      name: this.name,
      qty: this.showQty,
      price: this.showPrice,
    });
  };
}

const newShirt = new ParameterProperties("Shirt", 10, 20);
console.log(newShirt.name);
// console.log(newShirt.qty); A propriedade 'qty' é particular e somente é acessível na classe 'ParameterProperties'.ts(2341)
newShirt.showFullInfo();

// 17 - class expressions
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Luiz");
console.log(pessoa);
console.log(pessoa.name);

// 18 - abstract class
abstract class AbstractClass {
  abstract showName(): void;
}

// const newObject = new AbstractClass();  Não é possível criar uma instância de uma classe abstrata.ts(2511)

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é ${this.name}`);
  }
}

const newAbstractObject = new AbstractExample("Luiz");
newAbstractObject.showName();

// 19 - relação entre classes
class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();
