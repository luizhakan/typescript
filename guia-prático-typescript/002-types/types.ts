let ativo: boolean = true; // passando explicitamente o tipo da variável
let desativo = false; // passando ímplicitamente o tipo da variável

// no typescript, todos os valores númericos como float, decimal, hexadecimal, octal devem ser tipados como number

let octal: number = 0o745;
let binary: number = 0b1111;
let decimal: number = 42;
let hexadecimal: number = 0xf34d;

// podemos usar aspas simples, aspas duplas e template string para variáveis do tipo string

let simples: string = "Aspas simples";
let duplas: string = "Aspas duplas";
let numero: number = 19;
let template: string = `${simples}, ${duplas}, ${numero}`;

// adicionando um length no final da string, temos o tamanho dela
console.log(`${template} | tamanho : ${template.length}`);

// o indexof nos retorna a posição do caracter ou da string, caso o elemento não exista, ele retorna -1
console.log(template.indexOf("aspas")); // -1
console.log(template.indexOf("duplas")); // 21

// array
// para criarmos um array, é recomendável utilizar a palavra reservada Array
let numeros: Array<number> = [1, 2, 3];
let textos: Array<string> = ["texto 1", "texto 2", "texto 3"];

// readonlyarray
// é um método para criarmos um array que nos permite somente a leitura
let numerosDaMega: Readonly<number[]> = [8, 5, 5, 11, 4, 28];
// neste tipo de array, não é possível utilizar nenhum método, o typescript nem mostra os métodos caso tente

// tuple
// tuple é uma estrutura semelhante a um array, a diferença é que no array trabalhamos com um tipo de dado, enquanto com as tuplas temos tipos diferentes

let list: [string, number, string] = ["string 1", 1, "string 2"];

// uma possibilidade é adicionar nomes nos parâmetros de tuplas
let list1: [string, number, string] = ["Bill Gates", 66, "email@billgates.com"];
// do mesmo modo também é possível usar métodos array
list1.push("Luiz Hakan", 19, "luizhakan2@protonmail.com");
// o readonly também é possível com tuplas

let list2 : readonly[string, number] = ['test', 9];

// enum
// se o enum numérico não tiver um valor, ele vai iniciar com 0 e cada valor depois disso será incrementado +1, exemplo abaixo é ele com um valor inicial e o resto foi incrementado +1
enum DiaDaSemana {
    Domingo = 1,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

// para acessar um valor dentro do enum, podemos fazer assmi
console.log(DiaDaSemana["Domingo"]);

// diferente dos enum numérico, os enum de string precisam de um valor

enum Meses{
    Janeiro = "Janeiro",
    Fevereiro = "Fevereiro",
    Marco = "Março",
    Abril = "Abril",
    Maio = "Maio"
}

// para acessarmos um enum de string, podemos usar 
console.log(Meses.Janeiro);
console.log(Meses["Fevereiro"]);

// union
// com union, podemos dar diferentes tipagens a uma variável só
let arrayUnion : Array<string | number> = [10, 'dez']; // aqui o nosso array vai aceitar tanto o número 10, como a string dez, pois as duas tipagens foram definidas na variável

// também é possível usar union como parâmetro de funções

function deleteTeste(usuario: string | string[]){
    if(typeof usuario == 'string'){
        console.log(usuario, 'deletado');
    } else {
        var i;
        for(i = 0; i < usuario.length ; i++){
            console.log(usuario[i], 'deletado');
        }
    }
}
deleteTeste(['hakan', 'luiz']);

// tipando funções
function sum(num1 : number, num2 : number) : string{
    return `Soma : ${num1 + num2}`
}
// ou seja, mesmo que os parâmetros sejam dois number, essa função vai me retornar uma string
console.log(sum(2,2));

// let resultado : number = sum(2,2); // O tipo 'string' não pode ser atribuído ao tipo 'number'

