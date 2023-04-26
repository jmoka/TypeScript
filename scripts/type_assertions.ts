// !======================================
// ! TYPE
    //? type: o tipo type é usado para criar tipos personalizados.

    // SERVE PARA FAZER A AFIRMAÇÃO DE UM TIPO DE DADOS 
    // OU SEJA FORÇAR O TYPESCRIPT TRATAR UMA VARIÁVEL DO DIPO QUE ESTAMOS FORÇANDO

// !======================================
    type Coordenadas = [number, number];

    let ponto: Coordenadas = [10, 20];
// !======================================


const site : unknown = "https://hcode.com.br";
let sitesFavoritos: string[] = [];


// MESMO TENDO DECLARADO QUE AVARIAVEL sitesFavoritos É UMA STRING
// VAMOS TENTAR DAR UM PUSH
// DE UMA CONSTANTE SITE QUE FOI DECLARADA COMO unknown, OU SEJA ESSA CONSTANTE É UM VALOR DESCONHECIDO
// NATURALMENTE O TYPESCRIPT DARÁ UM ERRO POIS NÃO TEM COMO ARMAZENAR ALGO QUE NÃO RETORNA VALOR 

// PARA RESOLVER TEMPOS QUE FORÇAR , DIZER A CONSTANTE QUE É DO TIPO QUE QUEREMOS 
// TEM DUAS SINTAX:
// USANDO as
sitesFavoritos.push(site as string);
// usando <>
sitesFavoritos.push(<string>site);


