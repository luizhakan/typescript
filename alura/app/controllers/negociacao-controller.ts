import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;

  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;

  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView", true);
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect
  @logarTempoDeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (this.diaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas.");
    } else {
      this.negociacoes.adiciona(negociacao);
      this.mensagemView.update(
        `Negociação adicionada com sucesso em ${this.formatarMensagemPorDiaSemana(
          negociacao.data
        )}`
      );
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

  private limparFormulario(): void {
    this.inputData.value = new Date().toISOString().split("T")[0];
    this.inputQuantidade.value = "1";
    this.inputValor.value = "1";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
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
