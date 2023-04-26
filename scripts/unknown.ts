// !======================================
// ! UNKNOWN
    //? unknown: o tipo unknown é usado para representar um valor cujo tipo é desconhecido.

    //* exemplo:  Esta esperando um valor de uma variável ou de uma api mas não sabemos qual tipo de 
    //* dados está vindo.
    
    //* nesse caso declaramos nossa variável como unknown

// !======================================
let valorDesconhecido: unknown = "Algum valor";
// !======================================

let resultado: unknown;

resultado = {
    sucesso: true
};
resultado = "Deu tudo certo. OK!";
resultado = 200;

console.log("==============");

const informacao: any = 150;
const informacaoDesconhecida: unknown = 250;


//! QUAL A DIFERENÇA DO ANY PARA O UNKNOWN
//? BASICAMENTE É QUE UM VARUÁVEL DECLARADO COMO ANY ELE PODE SER ARMAZENADA EU OUTRA VARIÁVEL
//* JA UMA VARIÁVEL DECLARADA COMO UNKNOWN NÃO PODE SER EN OUTRA VARIAVEL

// ANY SENDO ARMAZENADA EM OUTRA VARIÁVEL
const primeiroNumero: number = informacao;

//todo: UNKNOWN NÃO PODE SER ARMAZENADO EM OUTRA VARIÁVEL
//const segundoNumero: number = informacaoDesconhecida;