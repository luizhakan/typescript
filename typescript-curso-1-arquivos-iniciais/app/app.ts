import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 15, 100);
// negociacao.valor = 1500; // não vai funcionar, pois valor se tornou um getter, ele só ler

console.log(negociacao);
console.log(negociacao.volume);