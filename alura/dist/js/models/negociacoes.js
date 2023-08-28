export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach((negociacao) => {
    console.log(negociacao.data);
    console.log(negociacao.volume);
    console.log(negociacao.quantidade);
    console.log(negociacao.valor);
});
