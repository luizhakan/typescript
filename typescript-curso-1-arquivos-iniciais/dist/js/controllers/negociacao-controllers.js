import { Negociacao } from "../models/negociacao";
export class NegociacaoController {
    constructor(inputData, inputQuantidade, inputValor) {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const expressaoRegular = /-/g;
        const date = new Date(this.inputData.value.replace(expressaoRegular, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        console.log(negociacao);
    }
}
