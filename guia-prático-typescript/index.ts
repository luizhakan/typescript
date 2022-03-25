var languages: Array<string> = [];
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

let binario: number = 0b01111;
let nome: string = "Luiz";
let idade: number = 19;
let sentença: string =
  "Olá, meu nome é " + nome + "!" + " eu tenho " + idade + " anos.";
console.log("tamanho da variável sentença : " + sentença.length);
console.log("posição da variável : " + sentença.indexOf("nome"));

// arrays
let arNumeros: Array<number> = [1, 2, 3];
let arTextos: Array<string> = ["Exemplo 1", "Exemplo 2", "Exemplo 3"];
console.log(arNumeros);
console.log(arTextos);

console.log("Após usar o método push...");

arNumeros.push(4);
arTextos.push("Exemplo 4");
console.log(arTextos);
console.log(arNumeros);

arNumeros[0] = 5;
console.log(arNumeros);

let numerosDaMega: Readonly<number[]> = [8, 5, 5, 11, 4, 28];
// numerosDaMega[0] = 3; Assinatura de índice no tipo 'readonly number[]' permite somente leitura.ts(2542)
// numerosDaMega.push(23); A propriedade 'push' não existe no tipo 'readonly number[]'.ts(2339)
// numerosDaMega.pop(); A propriedade 'pop' não existe no tipo 'readonly number[]'.ts(2339)

// tuplas
let tuList: [nome: string, numero: number, email: string] = [
  "Bill Gates",
  69,
  "bill@microsoft.com",
];
console.log("Tuplas");
console.log(tuList);

let tuList2: readonly [nome: string, numero: number] = ["Steve Jobs", 70];
console.log("Tuplas 2");
console.log(tuList2);

// tuList2.push(4) A propriedade 'push' não existe no tipo 'readonly [nome: string, numero: number]'.ts(2339)
// tuList2.pop() A propriedade 'pop' não existe no tipo 'readonly [nome: string, numero: number]'.ts(2339)

export enum DiaDaSemana {
  Segunda = 18,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
  Domingo,
}
let dia: any = DiaDaSemana[19]; // Terca
let diaNumero = DiaDaSemana[dia]; // 19
let diaString = DiaDaSemana["Segunda"]; // 18
console.log("Dia da semana : " + dia + ", " + diaNumero); // 19
