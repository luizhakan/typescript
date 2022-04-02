import { NegociacaoController } from "./controllers/negociacao-controllers.js";
const controller = new NegociacaoController(new Date(), 10, 100);
console.log(controller);
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
