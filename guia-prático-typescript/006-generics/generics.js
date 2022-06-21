"use strict";
// criando uma classe genérica
class ClasseGenerica {
    constructor() {
        this.arr = [];
    }
    adicionarValor(item) {
        this.arr.push(item);
    }
    retornaValores() {
        return this.arr;
    }
    removeItem(item) {
        let index = this.arr.indexOf(item);
        index > -1 ? this.arr.splice(index, 1) : "";
    }
}
let classeGenerica1 = new ClasseGenerica();
// classeGenerica1.adicionarValor('1'); // O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.
classeGenerica1.adicionarValor(1);
classeGenerica1.adicionarValor(2);
classeGenerica1.adicionarValor(3);
console.log(classeGenerica1.retornaValores());
classeGenerica1.removeItem(2);
console.log(classeGenerica1.retornaValores());
let classeGenerica2 = new ClasseGenerica();
// classeGenerica2.adicionarValor(1); // O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.
// classeGenerica2.adicionarValor(1); // O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.
classeGenerica2.adicionarValor('Track');
classeGenerica2.adicionarValor('Mixtape');
classeGenerica2.adicionarValor('FLS');
classeGenerica2.removeItem('FLS');
console.log(classeGenerica2.retornaValores());
