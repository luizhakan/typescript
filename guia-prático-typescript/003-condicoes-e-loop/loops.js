"use strict";
// no while, as instruções serão realizadas enquanto a condição for verdadeira
// var condition = true;
// while(condition){
//     console.log('carregando...');
// }
var condition = false;
// no caso do do while, ele executa a função pelo menos uma vez
do {
    console.log("carregando do while...");
} while (condition);
// o for é semelhante ao while, a diferença é que passamos um valor inicial e um valor final para o loop iniciar e terminar
var linguagens = ["C#", "JAVA", "JavaScript", "TypeScript"];
for (var i = 0; i < linguagens.length; i++) {
    console.log(linguagens[i]);
}
// o foreach é um simplificador do for para trabalhar com coleção de dados, e arrays
console.log("\n");
linguagens.forEach((linguagens) => {
    console.log(linguagens);
});
