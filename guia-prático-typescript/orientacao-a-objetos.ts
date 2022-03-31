// APESAR DESSE ARQUIVO TER UMA SIMILARIDADE COM O PROJETO BANCO-GIT, ESTE CÓDIGO NÃO TEM NENHUMA LINHA DE CÓDIGO RETIRADA DELE!

namespace Banco{
export class Conta {
  private readonly _numeroDaConta: number;
  titular: string;
  private _saldo: number;
  constructor(numeroDaConta: number, titular: string, saldo: number) {
    this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
    this.titular = titular.toUpperCase();
    this._saldo = saldo = 0;
  }
  get numeroDaConta(): number {
    return this._numeroDaConta;
  }

  protected consultaSaldo(): number {
    return this._saldo;
  }

  protected adicionaSaldo(valor: number): void {
    this._saldo += valor;
    return console.log(`Saldo adicionado : R$${valor}`);
  }

  protected sacarDoSaldo(valor: number): void {
    this._saldo -= valor;
    return console.log(`Valor sacado : R$${valor}`);
  }
}
}
class ContaPF extends Banco.Conta {
  cpf: number;
  constructor(
    cpf: number,
    numeroDaConta: number,
    titular: string,
    saldo: number
  ) {
    super(numeroDaConta, titular, saldo);
    this.cpf = cpf;
  }

  consulta(): string {
    return `Saldo atual da conta : ${this.consultaSaldo()}`;
  }

  sacar(valor: number) {
    if (this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
      console.log(
        "Saque realizado, valor : " + "R$" + this.sacarDoSaldo(valor)
      );
    } else {
      console.log("Saldo insuficiente para o saque definido");
    }
  }
  depositar(valor: number) {
    return this.adicionaSaldo(valor);
  }
}
class ContaPJ extends Banco.Conta {
  cnpj: number;
  constructor(
    cnpj: number,
    numeroDaConta: number,
    titular: string,
    saldo: number
  ) {
    super(numeroDaConta, titular, saldo);
    this.cnpj = cnpj;
  }
  consulta(): string {
    return `Saldo atual da conta : ${this.consultaSaldo()}`;
  }
  sacar(valor: number) {
    this.sacarDoSaldo(valor);
  }
  depositar(valor: number) {
    return this.adicionaSaldo(valor);
  }
}

// utilizamos a palavra reservada new para instanciar/criar um novo objeto
const primeiraContaPF = new ContaPF(11122233312, 0, "Luiz Hakan", 0); // o saldo está privado, mas por qual motivo eu coloquei o terceiro parâmetro então? é que no typescript, se temos um constructor com 3 atributos, quando chamamos a classe, devemos usar os 3 atributos
const primeiraContaPJ = new ContaPJ(12123456789012, 0, "João Victor", 0);

primeiraContaPF.depositar(100);
console.log(primeiraContaPF);

export { ContaPF, ContaPJ };
