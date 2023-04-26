// !======================================

// ! ANY
//? any: o tipo any pode ser usado para representar qualquer tipo de dado, incluindo tipos primitivos e objetos. 
//? O uso excessivo desse tipo pode levar à perda de segurança  de tipos em um projeto, 
//? mas pode ser útil em casos em que a tipagem é desconhecida ou incerta.
// !======================================
let variavel: any = "Isso pode ser uma string, um número, um objeto, etc.";
//! ===========================================

let valor: any;

valor = true;
valor = 1000;
valor = "Hcode";

console.log(typeof valor);

let despesaFixa: any;
let despesaVariavel: number;

despesaFixa = "150";
despesaVariavel = 320;

console.log(despesaFixa + despesaVariavel);

let itens: any[] = [];