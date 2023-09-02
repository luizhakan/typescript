import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
let valor = document.querySelector("#valor");
let data = document.querySelector("#data");
const date = new Date();
const dataFormatadaComHifen = date.toISOString().split("T")[0];
valor.value = "1";
data.value = dataFormatadaComHifen;
data.focus();
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw new Error("Não foi possível inicializar a aplicação. Verifique se o form é nulo");
}
const botaoImporta = document.querySelector("#botao-importa");
if (botaoImporta) {
    botaoImporta.addEventListener("click", () => {
        controller.importaDados();
    });
}
else {
    throw Error("Botão importa não foi encontrado");
}
