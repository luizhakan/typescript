import { APIInterface } from "../interfaces/api-interface";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: APIInterface[]) => {
        return dados.map((dado) => {
          console.log(dado);
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      });
  }
}
