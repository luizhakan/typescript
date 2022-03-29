"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaDaSemana = void 0;
var languages = [];
languages.push("JavaScript");
languages.push("TypeScript");
// exemplo de escopo do var
// var mensagemForaDoIf = 'mensagem fora do if'
// if(true){
//     var mensagemDentroDoIf = 'mensagem dentro do if'
//     console.log(mensagemDentroDoIf)
// }
// console.log(mensagemForaDoIf)
// console.log(mensagemDentroDoIf)
//Resultado:
//mensagem dentro do if
//mensagem fora do if
//mensagem dentro do if
// exemplo de escopo de uma let
let mensagemForaDoIf = "mensagem fora do if";
if (true) {
  let mensagemDentroDoIf = "mensagem dentro do if";
  console.log(mensagemDentroDoIf);
}
console.log(mensagemForaDoIf);
// console.log(mensagemDentroDoIf) index.ts:29:13 - error TS2304: não encontramos 'mensagemDentroDoIf'. isso acontece porque o 'mensagemDentroDoIf' está limitada ao escopo do if
let binario = 0b01111;
let nome = "Luiz";
let idade = 19;
let sentença =
  "Olá, meu nome é " + nome + "!" + " eu tenho " + idade + " anos.";
console.log("tamanho da variável sentença : " + sentença.length);
console.log("posição da variável : " + sentença.indexOf("nome"));
// arrays
let arNumeros = [1, 2, 3];
let arTextos = ["Exemplo 1", "Exemplo 2", "Exemplo 3"];
console.log(arNumeros);
console.log(arTextos);
console.log("Após usar o método push...");
arNumeros.push(4);
arTextos.push("Exemplo 4");
console.log(arTextos);
console.log(arNumeros);
arNumeros[0] = 5;
console.log(arNumeros);
let numerosDaMega = [8, 5, 5, 11, 4, 28];
// numerosDaMega[0] = 3; Assinatura de índice no tipo 'readonly number[]' permite somente leitura.ts(2542)
// numerosDaMega.push(23); A propriedade 'push' não existe no tipo 'readonly number[]'.ts(2339)
// numerosDaMega.pop(); A propriedade 'pop' não existe no tipo 'readonly number[]'.ts(2339)
// tuplas
let tuList = ["Bill Gates", 69, "bill@microsoft.com"];
console.log("Tuplas");
console.log(tuList);
let tuList2 = ["Steve Jobs", 70];
console.log("Tuplas 2");
console.log(tuList2);
// tuList2.push(4) A propriedade 'push' não existe no tipo 'readonly [nome: string, numero: number]'.ts(2339)
// tuList2.pop() A propriedade 'pop' não existe no tipo 'readonly [nome: string, numero: number]'.ts(2339)
var DiaDaSemana;
(function (DiaDaSemana) {
  DiaDaSemana[(DiaDaSemana["Segunda"] = 18)] = "Segunda";
  DiaDaSemana[(DiaDaSemana["Ter\u00E7a"] = 19)] = "Ter\u00E7a";
  DiaDaSemana[(DiaDaSemana["Quarta"] = 20)] = "Quarta";
  DiaDaSemana[(DiaDaSemana["Quinta"] = 21)] = "Quinta";
  DiaDaSemana[(DiaDaSemana["Sexta"] = 22)] = "Sexta";
  DiaDaSemana[(DiaDaSemana["S\u00E1bado"] = 23)] = "S\u00E1bado";
  DiaDaSemana[(DiaDaSemana["Domingo"] = 24)] = "Domingo";
})((DiaDaSemana = exports.DiaDaSemana || (exports.DiaDaSemana = {})));
let dia = DiaDaSemana[19]; // Terca
let diaNumero = DiaDaSemana[dia]; // 19
let diaString = DiaDaSemana["Segunda"]; // 18
console.log("Dia da semana : " + dia + ", " + diaNumero); // 19
var exemploVariavel = 9;
console.log("exemplo variável número " + exemploVariavel);
exemploVariavel = "ABC";
console.log("exemplo variável string " + exemploVariavel);
var uArr;
var i;
uArr = [1, 2, 4];
for (i = 0; i < uArr.length; i++) {
  console.log(uArr[i]);
}
uArr = ["A", "B", "C", "D"];
for (i = 0; i < uArr.length; i++) {
  console.log(uArr[i]);
}
function deleteTeste(usuario) {
  if (typeof usuario == "string") {
    console.log(usuario + ",", " DELETADO");
  } else {
    var i;
    for (i = 0; i < usuario.length; i++) {
      console.log(usuario[i] + "," + " DELETADO");
    }
  }
}
console.log(deleteTeste(["Luiz", "Hakan"]));
/*VOID*/
/*
O type void é bastante utilizado em funções. Diferente do type any ,
que espera o retorno de qualquer valor, o void passa para o
compilador que aquela função não terá nenhum retorno.
*/
function log() {
  console.log("sem retorno");
}
log();
let perfil = "root";
// let perfil = null;
console.log(
  (_a = "ternário: " + perfil) !== null && _a !== void 0 ? _a : "Usuário comum"
);
/*
Ao TypeScript 3.7 foi adicionada uma funcionalidade chamada
Nullish Coalescing , que nos permite verificar se um valor é null ou
undefined utilizando os operadores ??
*/
// switch case
console.log("switch case: ");
switch (perfil) {
  case "root":
    console.log("root");
    break;
  case "manager":
    console.log("gerente");
    break;
  case "admin":
    console.log("administrador");
    break;
  case "user":
    console.log("usuário comum");
    break;
  default:
    "usuário inválido";
    break;
}
let condicao = true;
while (condicao) {
  console.log("while : ");
  console.log("carregando...");
  condicao = false;
}
let linguagens = ["JavaScript", "TypeScript", "C", "C++"];
console.log("array: " + linguagens);
// console.log("for: ");
// for (i = 0; i < linguagens.length; i++) {
//   console.log(linguagens[i]);
// }
console.log("forEach : ");
linguagens.forEach((element) => {
  console.log(element);
});
let pessoa = {
  nome: "Bill",
  idade: 69,
  email: "billgates@microsoft.com",
  telefone: 887729,
};
let iPessoa = {
  nome: "Luiz",
  idade: 19,
  email: "luizhakan2@protonmail.com",
};
// percebe que na interface IPessoa eu defini 4 propriedades, mas o telefone tem um '?'?, então este '?' significa que a propriedade é opcional, então depende do usuário colocar um valor ou não colocar um valor nesta propriedade.
