export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp: RegExp = /-/g;
    const date: Date = new Date(dateString.replace(exp, ","));
    const quantidade: number = parseInt(quantidadeString);
    const valor: number = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}
