"use strict";
exports.__esModule = true;
exports.Negociacoes = void 0;
var Negociacoes = /** @class */ (function () {
    function Negociacoes() {
        this.negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this.negociacoes.push(negociacao);
    };
    Negociacoes.prototype.lista = function () {
        return this.negociacoes;
    };
    return Negociacoes;
}());
exports.Negociacoes = Negociacoes;
var negociacoes = new Negociacoes();
negociacoes.lista().forEach(function (negociacao) {
    console.log(negociacao.data);
    console.log(negociacao.volume);
    console.log(negociacao.quantidade);
    console.log(negociacao.valor);
});
