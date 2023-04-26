// !======================================
// ! FUNCTION ( COM PARAMETROS)
    //? Em JavaScript, uma função com parâmetro é definida com a palavra-chave function, 
    //? seguida pelo nome da função e uma lista de parâmetros entre parênteses. 
// !======================================

// ESSA FUNÇÃO RECEBE TRêS PARÂMETROS TODOS TIPADOS
function enviarEmail(
    de:string,
    email: string,
    para:string,
    emailDestinatario: string,
    assunto: string ,
    
): void {

    console.log({
        de,
        email,
        para,
        emailDestinatario,
        assunto
    });

}
enviarEmail("Jota Empresas","jotaempresas@gmail.com","Empresa Lider", "lider@gmail.com", "assunto teste");




//! ARROW FUNCTION

const enviarEmail1 = (

    de:string,
    email: string,
    para:string,
    emailDestinatario: string,
    assunto: string ,


)=>{
    console.log({
        de,
        email,
        para,
        emailDestinatario,
        assunto
    });

}
enviarEmail1("Jota Empresas","jotaempresas@gmail.com","Empresa Lider", "lider@gmail.com", "assunto teste");


//TODO===============================
//! SUPER IMPORTANTE
//TODO===============================

// *EM FUNÇÕES EXISTE UM SITUAÇÃO QUE PODEMOS DIZER QEU UM PARAMETRO DE UM FUNÇÃO ELE 
// *PODE SER OU NÃO INFORMADO

//? ISSO SÓ IRÁ FUNCIONAR COM O ULTIMO PARAMETRO PASSADO OU SE A FUNÇÃO TIVER SOMENTE UM PARAMETRO
//? POIS SE VOCÊ INFORMAR QUE O PRIMEIRO COMO OPCIONAL E TIVER O SEGUNDO COMO OBRIGATORIO, 
//? VOCÊ PASSA A SER OBRIGADO A INFORMAR O PRIMEIRO PARA PODER INFORMAR O SEGUNDO

//TODO: EXEMPLO

//todo: VAMOS USAR UMA AROOW FUNCTION

const enviarEmail3 = (

    de:string,
    email: string,
    para:string,
    emailDestinatario: string,
    assunto?: string , 
    
    //! OBSERVE QUE NA FRENTE DO ASSUNTO TEM UMA ⁡⁣⁣⁢? E É ELA QUE PERMITE QUE ESSE 
    //! PARAMETRO É OPCIONAL⁡.
    //! ⁡⁢⁢⁢AO CHAMAR A FUNÇÃO NÃO SE FAZ NECESSÁRIO INFORMAR O ASSUNTO , É OPCIONAL!!

)=>{

    console.log({
        de,
        email,
        para,
        emailDestinatario,
        assunto
    });
}

enviarEmail3("Jota Empresas","jotaempresas@gmail.com","Empresa Lider", "lider@gmail.com");
//! ⁡⁣⁣⁢NOTE QUE RETORNO DE EMAIL AGORA É ⁡⁢⁢⁢undefined⁡ ⁡⁣⁣⁢ou seja não há valor atribuido



//todo: EXEMPLO COM APENAS UM PARAMETRO

const nomeCarro=(nome?:string)=>{ // Usando o opção ?

    console.log(nome);

}

nomeCarro("Ferrari");
nomeCarro(); //? NOTE QUE NÃO É NECESSÁRIO INFORMAR O VALOR



//todo: EXEMPLO COM DOIS PARAMETROS SENDO O PRIMEIRO OPCIONAL

const Carro=(
    nome1?:string, // Usando o opção ? na primeiro parametro
    marca1:string="", // precisa declarar o valor

 )=>{ 

    //* Se quizermos usar a opção no primeiro parametro deve ser informado ​‌‌‍‍‍undefined​
    console.log(
        nome1,
        marca1);
    
}

Carro(undefined) 
// Pelo fato do segundo parametro ja ter cido declarado o primeiro 
// Mesmo sendo opcional ele precisa ser informado
// undefined ou nesse caso uma string





