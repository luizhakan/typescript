import Negociacao from "./models/negociacao.js";
import TimesPe from "./models/Sport.js";
const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
console.log(negociacao.valor);
const melhorTime = new TimesPe('Sport');
console.log(melhorTime);
