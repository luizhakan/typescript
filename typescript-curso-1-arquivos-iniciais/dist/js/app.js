import { NegociacaoController } from "./controllers/negociacao-controllers.js";
const controller = new NegociacaoController();
console.log(controller);
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
