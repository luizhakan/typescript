var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView", true);
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.diaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas.");
        }
        else {
            this.negociacoes.adiciona(negociacao);
            this.mensagemView.update(`Negociação adicionada com sucesso em ${this.formatarMensagemPorDiaSemana(negociacao.data)}`);
            this.atualizaView();
            this.limparFormulario();
        }
    }
    diaUtil(data) {
        return (data.getDay() == DiasDaSemana.DOMINGO ||
            data.getDay() == DiasDaSemana.SABADO);
    }
    limparFormulario() {
        this.inputData.value = new Date().toISOString().split("T")[0];
        this.inputQuantidade.value = "1";
        this.inputValor.value = "1";
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
    }
    formatarMensagemPorDiaSemana(data) {
        const diasDaSemana = [
            "domingo",
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
        ];
        const diaDaSemana = diasDaSemana[data.getDay()];
        const dataFormatada = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
        return `Negociação criada com sucesso em ${diaDaSemana}, dia ${dataFormatada}`;
    }
}
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
