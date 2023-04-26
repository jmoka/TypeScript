// !======================================

// ! ARRAY
//? array: o tipo array é usado para representar uma coleção de elementos do mesmo tipo. 
//? Um array pode ser declarado de várias maneiras.

// !======================================
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["João", "Maria", "José"];
let qualquerCoisa: any[] = [1, "texto", true];
// !======================================


//* AS ARRAY PARA SEREM DECLARADAS ELES PODEM SER DE 4 TIPO:
//? SOMENTE DE UM TIPO
    // DECLARANDO UM TIPO
    // DECLARANDO DOIS TIPO
//? DE VARIOS TIPOS
//? CHAMANDO A CLASSE ARRAY

// ?======================================
//? SOMENTE DE UM TIPO
    // DECLARANDO UM TIPO
// ?======================================
const filmesCategorias1: string [] = ["Comédia", "Drama", "Romance", "Aventura"];
console.log("filmesCategorias1 ", filmesCategorias1);

// *======================================
//* SOMENTE DE UM TIPO
    // DECLARANDO DOIS TIPO
    // !NESSE CASO VOCÊ ESTÁ INFORMANDO QUE É UMA ARRAY SOMEENTE DE NUMROS OU DE STRING 
// *======================================
const filmesCategorias2: string [] | number [] = ["Comédia", "Drama", "Romance", "Aventura"];
console.log("filmesCategorias2 ",filmesCategorias2);

const filmesCategorias3: string [] | number [] = [1, 2,3,4,5];
console.log("filmesCategorias3 ",filmesCategorias3);
// DESSA FORMA ESTÁ ERRADO POIS PASSA VALORES DIFERENTES NA MESMA ARRAY
////const filmesCategorias4: string [] | number [] = ["A", "B", "C", 1, 2,3];  // DA ERRO


//todo======================================
//todo DE VARIOS TIPOS
     // DESSA FORMA COLOCANDO O PARENTE COMO PRESEDENCIA E INFORMADO []
// todo======================================
const filmesCategorias5: (string | number) [] = [1, "Comédia",2,  "Drama", 3,  "Romance", 4, "Aventura"];
console.log("filmesCategorias5 ",filmesCategorias5);



//======================================
//todo DE VARIOS TIPOS
     // DESSA FORMA COLOCANDO O PARENTE COMO PRESEDENCIA E INFORMADO []
     //! Observe que dessa forma podemos declarar também varios tipos
// todo======================================
const filmesAnos6: Array <number | string> = [] = [1, "Comédia",2,  "Drama", 3,  "Romance", 4, "Aventura"];
console.log("filmesAnos6 ",filmesAnos6);


//! Criando um for em para adicionar valores na array
const filmesAnos: Array<number | string> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {

    filmesAnos.push(ano);

}

console.log("ano", filmesAnos);