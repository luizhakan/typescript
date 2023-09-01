export abstract class View<generic> {
  protected elemento: HTMLElement;
  private escapar: boolean = false;
  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor);
    if (escapar) {
      this.escapar = escapar;
    }
  }

  public update(model: generic): void {
    this.elemento.innerHTML = this.template(model);
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
  }

  protected abstract template(model: generic): string;
}
