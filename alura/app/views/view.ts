export abstract class View<generic> {
  protected elemento: HTMLElement;
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  public update(model: generic): void {
    this.elemento.innerHTML = this.template(model);
  }

  protected abstract template(model: generic): string;
}
