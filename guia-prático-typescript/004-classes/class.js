"use strict";
var Banco;
(function (Banco) {
    class Conta {
        constructor(titular, saldo) {
            this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
            this.titular = titular;
            this._saldo = saldo;
        }
        consultaSaldo() {
            return this._saldo;
        }
        adicionarSaldo(saldo) {
            return this._saldo + saldo;
        }
        sacarSaldo(saldo) {
            let saque = (this._saldo -= saldo);
            return `Saldo sacado : R$ ${saque}, novo saldo : R$ ${this._saldo}`;
        }
    }
    Banco.Conta = Conta;
    // o extends nos permite herdar os atributos da classe sem precisar copiá-los
    class ContaPF extends Conta {
        constructor(cpf, titular, saldo) {
            super(titular, saldo);
            this.cpf = cpf;
        }
        depositar(valor) {
            return `Saldo depositado: R$ ${valor}`;
        }
        consultar() {
            return `Saldo atual: R$ ${this.consultaSaldo()}`;
        }
        sacar(valor) {
            this.consultaSaldo() > 0 && valor <= this.consultaSaldo()
                ? this.sacarSaldo(valor)
                : console.log("Saldo insuficiente para saque!");
        }
    }
    Banco.ContaPF = ContaPF;
    class ContaPJ extends Banco.Conta {
        constructor(cnpj, titular, saldo) {
            super(titular, saldo);
            this.cnpj = cnpj;
        }
        consultar() {
            return `Saldo atual: R$ ${this.consultaSaldo()}`;
        }
        sacar(valor) {
            this.sacarSaldo(valor);
        }
    }
    class ContaSalario extends Conta {
    }
    Banco.ContaSalario = ContaSalario;
    class ContaInvestimento extends Conta {
    }
    Banco.ContaInvestimento = ContaInvestimento;
})(Banco || (Banco = {}));
// para instanciar uma classe no typescript, usa o new
const conta1 = new Banco.ContaPF(12345678912, "Luiz Hakan", 0);
console.log(conta1);
conta1.depositar(100);
console.log(conta1);
