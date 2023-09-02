"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NegociacaoController = void 0;
var dom_injector_js_1 = require("../decorators/dom-injector.js");
var inspect_js_1 = require("../decorators/inspect.js");
var logar_tempo_de_execucao_js_1 = require("../decorators/logar-tempo-de-execucao.js");
var dias_da_semana_js_1 = require("../enums/dias-da-semana.js");
var negociacao_js_1 = require("../models/negociacao.js");
var negociacoes_js_1 = require("../models/negociacoes.js");
var mensagem_view_js_1 = require("../views/mensagem-view.js");
var negociacoes_view_js_1 = require("../views/negociacoes-view.js");
var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this.negociacoes = new negociacoes_js_1.Negociacoes();
        this.negociacoesView = new negociacoes_view_js_1.NegociacoesView("#negociacoesView", true);
        this.mensagemView = new mensagem_view_js_1.MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    NegociacaoController.prototype.adiciona = function () {
        var negociacao = negociacao_js_1.Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.diaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas.");
        }
        else {
            this.negociacoes.adiciona(negociacao);
            this.mensagemView.update("Negociac\u0327a\u0303o adicionada com sucesso em " + this.formatarMensagemPorDiaSemana(negociacao.data));
            this.atualizaView();
            this.limparFormulario();
        }
    };
    NegociacaoController.prototype.diaUtil = function (data) {
        return (data.getDay() == dias_da_semana_js_1.DiasDaSemana.DOMINGO ||
            data.getDay() == dias_da_semana_js_1.DiasDaSemana.SABADO);
    };
    NegociacaoController.prototype.limparFormulario = function () {
        this.inputData.value = new Date().toISOString().split("T")[0];
        this.inputQuantidade.value = "1";
        this.inputValor.value = "1";
        this.inputData.focus();
    };
    NegociacaoController.prototype.atualizaView = function () {
        this.negociacoesView.update(this.negociacoes);
    };
    NegociacaoController.prototype.formatarMensagemPorDiaSemana = function (data) {
        var diasDaSemana = [
            "domingo",
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
        ];
        var diaDaSemana = diasDaSemana[data.getDay()];
        var dataFormatada = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
        return "Negocia\u00E7\u00E3o criada com sucesso em " + diaDaSemana + ", dia " + dataFormatada;
    };
    __decorate([
        dom_injector_js_1.domInjector("#data")
    ], NegociacaoController.prototype, "inputData");
    __decorate([
        dom_injector_js_1.domInjector("#data")
    ], NegociacaoController.prototype, "inputQuantidade");
    __decorate([
        dom_injector_js_1.domInjector("#data")
    ], NegociacaoController.prototype, "inputValor");
    __decorate([
        inspect_js_1.inspect,
        logar_tempo_de_execucao_js_1.logarTempoDeExecucao()
    ], NegociacaoController.prototype, "adiciona");
    return NegociacaoController;
}());
exports.NegociacaoController = NegociacaoController;
