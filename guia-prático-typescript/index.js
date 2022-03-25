"use strict";
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
let sentença = "Olá, meu nome é " + nome + "!" + " eu tenho " + idade + " anos.";
console.log("tamanho da variável sentença : " + sentença.length);
console.log("posição da variável : " + sentença.indexOf("nome"));
