namespace Banco {
  export class Conta {
    private readonly _numeroDaConta: number;
    titular: string;
    private _saldo: number;

    constructor(titular: string, saldo: number) {
      this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
      this.titular = titular;
      this._saldo = saldo;
    }

    protected consultaSaldo(): number {
      return this._saldo;
    }

    protected adicionarSaldo(saldo: number): number {
      return this._saldo + saldo;
    }

    protected sacarSaldo(saldo: number): string {
      let saque = (this._saldo -= saldo);
      return `Saldo sacado : R$ ${saque}, novo saldo : R$ ${this._saldo}`;
    }
  }
  // o extends nos permite herdar os atributos da classe sem precisar copiá-los
  export class ContaPF extends Conta {
    cpf: number;
    constructor(cpf: number, titular: string, saldo: number) {
      super(titular, saldo);
      this.cpf = cpf;
    }

    depositar(valor: number): string {
      return `Saldo depositado: R$ ${valor}`;
    }

    consultar(): string {
      return `Saldo atual: R$ ${this.consultaSaldo()}`;
    }

    sacar(valor: number) {
      this.consultaSaldo() > 0 && valor <= this.consultaSaldo()
        ? this.sacarSaldo(valor)
        : console.log("Saldo insuficiente para saque!");
    }
  }
  class ContaPJ extends Banco.Conta {
    cnpj: number;
    constructor(cnpj: number, titular: string, saldo: number) {
      super(titular, saldo);
      this.cnpj = cnpj;
    }

    consultar(): string {
      return `Saldo atual: R$ ${this.consultaSaldo()}`;
    }

    sacar(valor: number) {
      this.sacarSaldo(valor);
    }
  }

  export class ContaSalario extends Conta {}
  export class ContaInvestimento extends Conta {}
}
// para instanciar uma classe no typescript, usa o new

const conta1 = new Banco.ContaPF(12345678912, "Luiz Hakan", 0);
console.log(conta1);
conta1.depositar(100);
console.log(conta1);