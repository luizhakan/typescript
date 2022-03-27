"use strict";
// APESAR DESSE ARQUIVO TER UMA SIMILARIDADE COM O PROJETO BANCO-GIT, ESTE CÓDIGO NÃO TEM NENHUMA LINHA DE CÓDIGO RETIRADA DELE!
class Conta {
  constructor(numeroDaConta, titular, saldo) {
    this.saldo = 0;
    this.numeroDaConta = numeroDaConta;
    this.titular = titular;
    this.saldo = saldo;
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
// utilizamos a palavra reservada new para instanciar/criar um novo objeto
const primeiraConta = new Conta(1, "Luiz", 0);
console.log(primeiraConta);
primeiraConta.adicionaSaldo(99);
console.log(primeiraConta);
primeiraConta.adicionaSaldo(99901);
console.log(primeiraConta);
primeiraConta.sacarDoSaldo(11);
console.log(primeiraConta);
