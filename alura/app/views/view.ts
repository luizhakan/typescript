import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<generic> {
  protected elemento: HTMLElement;
  private escapar: boolean = false;
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw new Error(`Seletor ${seletor} não existe no DOM`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  public update(model: generic): void {
    this.elemento.innerHTML = this.template(model);
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
  }

  protected abstract template(model: generic): string;
}
