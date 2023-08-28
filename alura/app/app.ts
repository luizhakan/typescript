import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
let valor: HTMLInputElement = document.querySelector("#valor");
let data: HTMLInputElement = document.querySelector("#data");

const date: Date = new Date();
const dataFormatadaComHifen = date.toISOString().split("T")[0];
valor.value = "1";
data.value = dataFormatadaComHifen;
data.focus();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adiciona();
});