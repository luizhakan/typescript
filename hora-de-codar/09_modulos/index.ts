import Soma from "./funcao";
import { a, b } from "./variavel";
import { name as Luiz } from "./alias";
import * as number from "./numbers";
import { Humano } from "./myType";

console.log("Importando e usando função e variável");
console.log(Soma(a, b));
console.log(Luiz);
console.log(number.one);
console.log(number.two);
console.log(number.three);
console.log(number.four);
console.log(number.five);

class Human implements Humano {
  nome;
  idade;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const luiz = new Human("Luiz", 20);
console.log(luiz);