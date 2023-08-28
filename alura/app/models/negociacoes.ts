import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach((negociacao) => {
  console.log(negociacao.data);
  console.log(negociacao.volume);
  console.log(negociacao.quantidade);
  console.log(negociacao.valor);
});
