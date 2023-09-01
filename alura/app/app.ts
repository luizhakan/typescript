import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
let valor: HTMLInputElement = document.querySelector(
  "#valor"
) as HTMLInputElement;
let data: HTMLInputElement = document.querySelector(
  "#data"
) as HTMLInputElement;

const date: Date = new Date();
const dataFormatadaComHifen = date.toISOString().split("T")[0];
valor.value = "1";
data.value = dataFormatadaComHifen;
data.focus();

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error("Não foi possível inicializar a aplicação. Verifique se o form é nulo");
}
