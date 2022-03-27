"use strict";
// APESAR DESSE ARQUIVO TER UMA SIMILARIDADE COM O PROJETO BANCO-GIT, ESTE CÓDIGO NÃO TEM NENHUMA LINHA DE CÓDIGO RETIRADA DELE!
class Conta {
    constructor(numeroDaConta, titular, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular.toUpperCase();
        this.saldo = saldo = 0;
    }
    consultaSaldo() {
        return `O seu saldo atual é ${this.saldo}`;
    }
    adicionaSaldo(valor) {
        this.saldo += valor;
        return console.log(`Saldo adicionado : R$${valor}`);
    }
    sacarDoSaldo(valor) {
        this.saldo -= valor;
        return console.log(`Valor sacado : R$${valor}`);
    }
}
class ContaPF extends Conta {
    constructor(cpf, numeroDaConta, titular, saldo) {
        super(numeroDaConta, titular, saldo);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    constructor(cnpj, numeroDaConta, titular, saldo) {
        super(numeroDaConta, titular, saldo);
        this.cnpj = cnpj;
    }
}
// utilizamos a palavra reservada new para instanciar/criar um novo objeto
const primeiraContaPF = new ContaPF(11122233312, 1, "Luiz Hakan", 0); // o saldo está privado, mas por qual motivo eu coloquei o terceiro parâmetro então? é que no typescript, se temos um constructor com 3 atributos, quando chamamos a classe, devemos usar os 3 atributos
console.log(primeiraContaPF);
const primeiraContaPJ = new ContaPJ(12123456789012, 2, 'João Victor', 0);
console.log(primeiraContaPJ);
