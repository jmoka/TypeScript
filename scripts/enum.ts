// !======================================

// ! ENUM
//? É usado para representar um conjunto de valores nomeados
// !======================================
enum Cores {
    Vermelho,
    Verde,
    Azul
  }
  
  let corSelecionada: Cores = Cores.Vermelho;
  // !======================================



//* OU SEJA USAMOS PARA RELACIONAR CONSTANTES EM UM SO BLOCO
//* TEM COMO RECUPERAR SEUS VALORES DE DUAS MANEIRAS:
// ?NOTAÇÃO DE . ex: nome_do_enun.elemento
// ?NOTAÇÃO OU POR INDEX ex: nome_do_enun[1]


enum Permission {
    ADMIN = 1,
    USERPERMISSION = "USER",
    READONLY = "READONLY",
}

console.log("EX1 " ,Permission.ADMIN);
console.log("EX1 " ,Permission.USERPERMISSION);
console.log("EX1 " ,Permission.READONLY);
console.log("EX1 " ,Permission["USERPERMISSION"]);
console.log("EX1 " ,Permission[1]);



//! IMPORTANTE
//* OBSERVE O SEGUINTE O ENUM ELE ENUMERA AS CONSTANTES RELACIONADAS DENTRO DELE, DE FORMA SEQUENCIAL NUMERAL.
//* SE NÃO FOR INFORMADO NENUM VALOR PARA AS VARIÁVEIS , SERÁ RETORNADO O SEU INDIXEX SEQUENCIALMENTE.
//* CASO NO PRIMEIRO PARAMETRO SEJA INFORMADO UM VALOR INICIAL , A SEQUENCIA SEGUE A PARTIR DO NUMERO INFORMADO

enum Permission {
    N1=0,
    N2,
    N3,
}

console.log("EX2 - Permission" ,Permission);
//TODO:  RETORNA O INDEX 
console.log("RETORNA O INDEX - Permission.N1",Permission.N1);
console.log("RETORNA O INDEX - Permission.N2",Permission.N2);
console.log("RETORNA O INDEX - Permission.N3",Permission.N3);
//TODO: RETORNA O VALOR
console.log("RETORNA O VALOR - Permission[0] ",Permission[1]);
console.log("RETORNA O VALOR - Permission[1] ",Permission[1]);
console.log("RETORNA O VALOR - Permission[2] ",Permission[2]);

