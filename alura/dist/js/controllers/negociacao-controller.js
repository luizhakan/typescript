import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (this.diaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas.");
        }
        else {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limparFormulario();
        }
    }
    diaUtil(data) {
        return (data.getDay() == DiasDaSemana.DOMINGO ||
            data.getDay() == DiasDaSemana.SABADO);
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = new Date().toISOString().split("T")[0];
        this.inputQuantidade.value = "1";
        this.inputValor.value = "1";
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        const mensagem = this.formatarMensagemPorDiaSemana(this.criaNegociacao().data);
        this.mensagemView.update(mensagem);
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
