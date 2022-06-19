interface Pessoa {
  nome: string;
  idade: number;
  email: string;
  telefone?: number; // o ? torna a propriedade opcional, na hora de ser declarada
}

interface PessoaJuridica extends Pessoa /*o extends aqui tá usando as propriedades da interface Pessoa e usando na nova interface*/{
  conta: number;
  cnpj: number;
}

let pessoa1: PessoaJuridica = {
  nome: "Luiz Hakan",
  idade: 19,
  email: "luizhakan2@protonmail.com",
  conta: 0o1,
  cnpj: 557770055
};

console.log(pessoa1);
