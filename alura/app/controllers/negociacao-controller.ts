import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    if (this.diaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas.");
    } else {
      this.negociacoes.adiciona(negociacao);
      this.atualizaView();
      this.limparFormulario();
    }
  }

  private diaUtil(data: Date) {
    return (
      data.getDay() == DiasDaSemana.DOMINGO ||
      data.getDay() == DiasDaSemana.SABADO
    );
  }

  private criaNegociacao(): Negociacao {
    const exp: RegExp = /-/g;
    const date: Date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade: number = parseInt(this.inputQuantidade.value);
    const valor: number = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private limparFormulario(): void {
    this.inputData.value = new Date().toISOString().split("T")[0];
    this.inputQuantidade.value = "1";
    this.inputValor.value = "1";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    const mensagem = this.formatarMensagemPorDiaSemana(
      this.criaNegociacao().data
    );
    this.mensagemView.update(mensagem);
  }

  private formatarMensagemPorDiaSemana(data: Date): string {
    const diasDaSemana: string[] = [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "sábado",
    ];
    const diaDaSemana: string = diasDaSemana[data.getDay()];
    const dataFormatada: string = `${data.getDate()}/${
      data.getMonth() + 1
    }/${data.getFullYear()}`;

    return `Negociação criada com sucesso em ${diaDaSemana}, dia ${dataFormatada}`;
  }
}
