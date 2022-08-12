import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  // não é mais tipo any, agora todos esses atributos de minha classe são HTMLInputElement
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    // neste constructor, eu estou indo buscar os elementos html da página pra usar como valor
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    negociacao.data.setDate(12);
    console.log(this.negociacoes.lista());
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    // expressão regular
    const exp = /-/g;
    // conversão de dados
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    const negociacao = new Negociacao(date, quantidade, valor);
    return negociacao;
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
