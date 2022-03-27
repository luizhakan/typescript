"use strict";
// APESAR DESSE ARQUIVO TER UMA SIMILARIDADE COM O PROJETO BANCO-GIT, ESTE CÓDIGO NÃO TEM NENHUMA LINHA DE CÓDIGO RETIRADA DELE!
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
  constructor(numeroDaConta, titular, saldo) {
    this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
    this.titular = titular.toUpperCase();
    this._saldo = saldo = 0;
  }
  get numeroDaConta() {
    return this._numeroDaConta;
  }
  consultaSaldo() {
    return this._saldo;
  }
  adicionaSaldo(valor) {
    this._saldo += valor;
    return console.log(`Saldo adicionado : R$${valor}`);
  }
  sacarDoSaldo(valor) {
    this._saldo -= valor;
    return console.log(`Valor sacado : R$${valor}`);
  }
}
exports.Conta = Conta;
class ContaPF extends Conta {
  constructor(cpf, numeroDaConta, titular, saldo) {
    super(numeroDaConta, titular, saldo);
    this.cpf = cpf;
  }
  consulta() {
    return `Saldo atual da conta : ${this.consultaSaldo()}`;
  }
  sacar(valor) {
    if (this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
      console.log(
        "Saque realizado, valor : " + "R$" + this.sacarDoSaldo(valor)
      );
    } else {
      console.log("Saldo insuficiente para o saque definido");
    }
  }
  depositar(valor) {
    return this.adicionaSaldo(valor);
  }
}
class ContaPJ extends Conta {
  constructor(cnpj, numeroDaConta, titular, saldo) {
    super(numeroDaConta, titular, saldo);
    this.cnpj = cnpj;
  }
  consulta() {
    return `Saldo atual da conta : ${this.consultaSaldo()}`;
  }
  sacar(valor) {
    this.sacarDoSaldo(valor);
  }
  depositar(valor) {
    return this.adicionaSaldo(valor);
  }
}
// utilizamos a palavra reservada new para instanciar/criar um novo objeto
const primeiraContaPF = new ContaPF(11122233312, 0, "Luiz Hakan", 0); // o saldo está privado, mas por qual motivo eu coloquei o terceiro parâmetro então? é que no typescript, se temos um constructor com 3 atributos, quando chamamos a classe, devemos usar os 3 atributos
const primeiraContaPJ = new ContaPJ(12123456789012, 0, "João Victor", 0);
primeiraContaPF.depositar(100);
console.log(primeiraContaPF);
