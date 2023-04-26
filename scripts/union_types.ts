// !======================================
// ! UNION TYPES
    //? union: o tipo union é usado para representar valores que podem ser de vários tipos diferentes.
// !======================================
let idadeOuNome: number | string = "João";
//* É QUANDO UMA VARIÁVEL ACEITA MAIS DE UM TIPO DE DADOS
// !======================================

let chavePix: string | number | Date | boolean ;

chavePix = "rafa@banco.com.br";

chavePix = 380123456;

chavePix = false;

chavePix = Date();

//! perceba que aceita todos os tipos de dados passados na variável