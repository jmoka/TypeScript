// !======================================

// ! null e undefined

//* Em linguagens de programação como JavaScript null e undefined são dois valores especiais que *indicam a ausência de valor.
// !======================================

//?=======================================
//todo: undefined : 
//?=======================================
//*É um valor que indica que uma variável foi declarada, mas ainda não foi atribuída com um valor. 
//*Isso pode acontecer quando você declara uma variável, mas não a inicializa com um valor:
//! Importante : Valor Ausente ou não Atribuido.

let undefined_1 ;
console.log(undefined_1); // Output: undefined


//?=======================================
//todo: null
//?=======================================
//* null, por outro lado, é um valor que indica explicitamente a ausência de valor. 
//* Ou seja, se você atribuir explicitamente um valor null a uma variável, está dizendo que ela: 
//! Importante : Não possui nenhum valor.

let null1 = null;
console.log(null1); // Output: null


//*==================================================
    // * TROCAR OS VALORES DAS VARIÁVEIS 
    //? Para trocar o valor de uma variável , a mesma só poderá ser trocado o seu valor de dois modos,
    //? A VARIÁVEL TEM QUE DECLARADA COM LET
    //? SOMENTE O PODE SER TROCADO O VALOR DO MESMO TIPO
    //? OU SE A VARIÁVEL FOR DECLARADA COM DIVERSOS TIPO union-type
 //*==================================================
//TODO: TROCA DO MESMO TIPO
 let string2 = "Olá, mundo!";
console.log(string2); // Output: "Olá, mundo!"
string2 = "OLÁ , TERRA";
console.log(string2); // Output: "OLÁ , TERRA"

//TODO: COM MAIS DE UM TIPO
//* PARA ISSO OBSERVE A SINTAX

//? NESSE CASO DECLARAMOS STRING E NULL , E DESSA FORMA ESSA VARIÁVEL PODE RECEBER UM DESSES VALORES

//* null
let minhaString: string | null = "Olá, mundo!";
minhaString = null; // agora é válido
console.log("minhaString -null "+ typeof(minhaString))
minhaString = "string"; // agora é válido
console.log("minhaString - string "+ typeof(minhaString))

//* undefined
let minhaString1: string | undefined = "Olá, mundo!";
minhaString1 = undefined; // agora é válido
console.log("minhaString1 -undefined "+ typeof(minhaString1))
minhaString1 = "string"; // agora é válido
console.log("minhaString1 -string "+ typeof(minhaString1))

//* union_type
let minhaVariavel: string | null | undefined; // Variável union_type
let data: Number= new Date().getDate();
console.log("Dia do mês", data);

let diaMes: number = 12;
// let dataAtual: string = data.toString

if (data === diaMes) {    

    minhaVariavel = `A data escolhida está Certa hoje é dia :  ${diaMes}`;
    console.log( minhaVariavel);

}else{
    minhaVariavel = "A data escolhida está Errado";
    console.log( minhaVariavel);
}

