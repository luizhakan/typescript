// método map
let numeros: Array<number> = [9, 25, 36];
let raizes = numeros.map(Math.sqrt);
console.log("Raízes : " + raizes);
let dobro: any = numeros.map(function (numeros) {
  return numeros * 2;
});
console.log("Dobro : " + dobro);

// método filter
function maiorQue(valor: number) {
  return valor >= 10;
}

let filtroNumeros = [6, 7, 9, 10, 12, 17].filter(maiorQue);
console.log("Filtro numeros menor que 10 : " + filtroNumeros);

function quantidadeDe(valor: string) {
  return valor.length <= 9;
}

let filtroStrings = ["Luiz", " Schweinsteiger", " Hakan", " Messi"].filter(
  quantidadeDe
);
console.log(
  "Filtro string nome com menos de 10 letras : " + "[" + filtroStrings + "]"
);

// método find
// este método retorna o primeiro elemento do array que satisfazer a condição

const findNumeros: Array<number> = [5, 12, 8, 22, 144];
const found = findNumeros.find((elemento) => elemento > 10);
console.log(
  "Array com números para o método find, a condição true é o primeiro número acima de 10 " +
    "[" +
    findNumeros +
    "]"
);
console.log("Método find: " + "[" + found + "]");

const findFrutas = [
  { nome: "maçã", quantidadeDe: 2 },
  { nome: "banana", quantidade: 0 },
  { nome: "cereja", quantidade: 5 },
];

const eBanana = findFrutas.find((frutas) => frutas.nome === "banana");
console.log(eBanana);
