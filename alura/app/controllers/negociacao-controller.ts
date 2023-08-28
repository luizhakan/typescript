import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    console.log(negociacao);
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const exp: RegExp = /-/g;
    const date: Date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade: number = parseInt(this.inputQuantidade.value);
    const valor: number = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  limparFormulario(): void {
    this.inputData.value = new Date().toISOString().split("T")[0];
    this.inputQuantidade.value = "1";
    this.inputValor.value = "1";
    this.inputData.focus();
  }
}
