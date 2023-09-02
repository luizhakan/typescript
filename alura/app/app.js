"use strict";
exports.__esModule = true;
var negociacao_controller_js_1 = require("./controllers/negociacao-controller.js");
var controller = new negociacao_controller_js_1.NegociacaoController();
var form = document.querySelector(".form");
var valor = document.querySelector("#valor");
var data = document.querySelector("#data");
var date = new Date();
var dataFormatadaComHifen = date.toISOString().split("T")[0];
valor.value = "1";
data.value = dataFormatadaComHifen;
data.focus();
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw new Error("Não foi possível inicializar a aplicação. Verifique se o form é nulo");
}
