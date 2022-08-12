export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  // estes gets me ajudam a ler os valores destas propriedades privadas

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }
}
