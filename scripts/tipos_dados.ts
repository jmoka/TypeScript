// ? Tipos de dados em TypeScript

/*
 ! IMPORTANTE

 * O TypeScript é uma linguagem fortimente tipara e por isso o tipo de uma cosntante não poderá mudar.

 todo: o TypeScript até aceita declarar uma cosntante sem sua tipificação desde que seja informado o seu valor
 todo: dessa forma o TypeScript entende qual tipo e a partir da i , não poderá ser mais mudado o seu tipo
 
 ? QUANDO NO ARQUIVO "TSCONFIG.JSON O MÉTODO  strict ESTIVER true , ao copilar o arquivo para .js irá ser informado "use strict";
 ? informando que o não será aceiro a troca de tipos de variáveis
 */

let semTipo = "CONSTANTE SEM TIPAGEM";
const comtipagem:string="CONSTANTE COM TIPAGEM";

semTipo = "trocando o valor CONSTANTE SEM TIPAGEM";

//* VERIFIQUE QUE SE TENTAR TROCAR P VALOR DA CONSTANTE DARÁ UM ERRO
//comtipagem="trocando CONSTANTE COM TIPAGEM";

console.log(semTipo);
console.log(comtipagem);

//===================================================//

// ? TIPOS NA ARRAY

// OBSERVE QUE SE VOCÊ NÃO REALIZOU A TIPAGEM DE SUAS VARIÁVEIS , O TYPESCRIPT DEDUZ QUAIS TIPOS VOCÊ ESTÁ PASSANDO

// PORÉM UMA VEZ PASSADO OS VALORES PARA UMA ARRAY ELA SO ACEITARÁ OS VALORES DOS TIPOS PASSADOS

//? OBSERVE QUE VALOR BOOLEAN ( TRUE | FALSE ) NÃO FOI INFORMADO , ENTÃO NÃO É POSSIVEL INSERIR NA ARRAY POIS POSTARIORMENTE FOI INFORMADO OS TIPOS QUE ARRAY ACEITA
// SE O BOOLEM TIVESSE PRÉ DETERMINADA NA ARRAY SERIA INCLUIDO, ISSO SE DÁ PORQUE FOI FOI DECLARADO O TIPO DE DADOS
//* CASO A ARRAY SEJA DECLARADA COMO VAZIA , ELA ACEITARÁ TODOS OS TIPOS DE DADOS

const array_com_valores_informados = [1, "joão", new Date()];
const  array_vazia_sem_tipagem = [];

array_com_valores_informados.push(new Date());
array_com_valores_informados.push(3);
array_com_valores_informados.push("maria");
// array_sem_tipagem.push(true); ! apresenta erro

array_vazia_sem_tipagem.push(true);
array_vazia_sem_tipagem.push(1);
array_vazia_sem_tipagem.push("string");
array_vazia_sem_tipagem.push(new Date(2021,1,1));


// PODEMOS TAMBÉM INFORMAR OS TIPOS QUE A ARRAY IRÁ ACEITAR

// sintax 1
const array_com_tipagem1: Array<string | number | boolean> = [];
array_com_tipagem1.push(true);
array_com_tipagem1.push(1);
array_com_tipagem1.push("string");
//array_com_tipagem1.push(new Date(2021,1,1));


// sintax 2
const array_com_tipagem2: (string | number | Date)[] = [];
//array_com_tipagem2.push(true);
array_com_tipagem2.push(1);
array_com_tipagem2.push("string");
array_com_tipagem2.push(new Date(2021,1,1));

