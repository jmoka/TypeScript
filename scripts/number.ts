// !======================================

// ! NUMBER

// !======================================

//!=====================
// ! CIUDADOS

// AO RECEBER UM VALOR NUMÉRICO NORMALMENTE DE UM INPUT ELE VEM EM FORMADO DE STRING MESMO PASSANDO ELE COMO NUBEER
// SE FAZ NECESSÁRIO CONVERTER A STRING EM NUMBER
//!=====================

//?=====================
//? CONCATENAÇÃO COM ESTRING
//?=====================
let ano: number=2023;
let ano2: string= "jota";
let concatenados: string = ano + ano2; 

//* 1 forma de concatenar usando crazes 
console.log(`Verifique a concatenação de uma variavel NUBER = ${ano} e uma String = ${ano2}  que vai ser  = ${concatenados}`);
//* 2 forma de concatenar usando o +
console.log("Verifique a concatenação de uma variavel NUBER =" + ano +  "e uma String =" + ano2 + "que vai ser  =" + concatenados);


//==============================================================================
//*=====================
//* OPERAÇÕES MATEMÁTICAS
//*=====================

const num: number=92294172
console.log(num);
const idade: number=50
console.log(idade);
const peso: number=94.30
console.log(peso);
const altura: number=1.82
console.log(altura);

//! DECLARANDO UM BIGINT
//* OU SEJA UM NUMERO GIGANTE
// PARA DECLARAR PRECISA DE DUAS COISAS :
// 1 TIPIFICAR A VARIÁVEL COMO BIGINT
// INFORMAR NO VALOR A LETRA n

let numeroGigante: bigint;
numeroGigante = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
console.log("numeroGigante", numeroGigante)


// ! OPERAÇÕES BÁSICAS
//todo: SOMAR
const somar  = idade + peso
console.log(typeof(somar)+" = " +somar )
//todo: SUNTRAIR
const subtrair  = idade + altura
console.log(typeof(subtrair)+" = " +subtrair )
//todo: DIVISÃO
const dividir  = num + idade
console.log(typeof(dividir)+" = " + dividir )
//todo: RESTO DA DIVISÃO
const resto  = idade%2
console.log(typeof(resto)+" = " + resto )
//todo: MULTIPLICAÇÃO
const vezes  = idade*2
console.log(typeof(vezes)+" = " + vezes )

// ! CONVERSÃO
// *PARA A CONVERSÃO USAMOS A FUNÇÃO NUMBER : Number("")
// está errado a istanciação da função ou seja new Nuber("")
//todo: SUPER DICA : SINTAX PARA CONVERSÃO EM NUMBER

// 1: Number("")
const typeEtring: string="253"
console.log(typeof("Essa é a string " + typeEtring));
const stringConvertida = Number(typeEtring) // Number("")
console.log(typeof(stringConvertida));
console.log("Essa é a string convertida " + stringConvertida);
console.log(typeof(stringConvertida));

// 2: +"" 
const typeEtring1: string="2"
console.log(typeof("Essa é a string " + typeEtring1));
const stringConvertida1 = +typeEtring1 // +"" 
console.log(typeof(stringConvertida1));
console.log( "Essa é a string convertida " +  stringConvertida1);
console.log(typeof(stringConvertida1));



// : parseint("") // parseInt - Converte um número em inteiro
const typeEtring2: string="2.565"
console.log(typeof("Essa é a string " + typeEtring2));
console.log(typeEtring2);
const stringConvertida2 = parseInt(typeEtring2) //parseint("")
console.log("Essa é a string Convertida " + stringConvertida2);
console.log(typeof(stringConvertida2));


// : parseint("") // parseFloat - Converte um número em ponto flutuante
const typeEtring3: string="2.565"
console.log(typeof("Essa é a string " + typeEtring3));
const stringConvertida3 = parseFloat(typeEtring3) //parseint("")
console.log("Essa é a string Convertida " + stringConvertida3);
console.log(typeof(stringConvertida3));



