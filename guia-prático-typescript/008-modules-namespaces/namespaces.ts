import { maritmo } from "./namespacetwo";
import { terrestre } from "./namespacethree";

namespace humanoS {
  export interface dados {
    instagram: string;
    prosissao: string;
  }

  class humano {
    nome: string | undefined;
    andar() {}
  }
}

namespace outro {
  let luiz: humanoS.dados;
}

let marinho: maritmo.animal;
let terrestreE: terrestre.animal;
