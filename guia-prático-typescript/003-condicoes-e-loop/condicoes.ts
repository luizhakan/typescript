let condicao = true;

// neste caso, como tem somente duas condições (true or false), eu usei ternário para simplificar
condicao ? console.log('A variável está com o valor true') : console.log('A variável está com um valor false');

// if else if
let perfil = 'admin';
if(perfil === 'root'){
    console.log('root');
} else if(perfil === 'admin'){
    console.log('Administrador');
} else{
    console.log('Usuário comum');
}

// usando ternário com mais de uma condição
let nome = 'hook'
nome == 'luiz' ? console.log('Luiz Hakan') : nome == 'lukas' ? console.log('Lukas') : console.log('Não existe esse nome na variável')
// porém o código fica um pouco ruim de ler

// nullish coalescing
// esta funcionalidade permite saber se um valor é null ou undefined utilizando ??
// caso seja null ou undefined, ela retorna o valor padrão, caso não seja, ela retorna o valor da direita

var user : string | null = 'admin';
console.log(user ?? 'Usuário comum');
var user : string | null = null;
console.log(user ?? 'Usuário comum');