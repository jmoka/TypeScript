
// !======================================
// ! OBJECTS 
//? string: o tipo string é usado para representar valores de texto.
// !======================================
    let objeto1: object = { 
        chave: "valor",
        chave2: "valor2",
        chave3: "valor3"
     };
// !======================================


// OS OBJETOS ARMAZENAM QUALQUER TIPO DE DADO 
// PRECISANDO FICAR ATENDO A SUA SINTAX

//?         let nome: object={
//?             chave: "valor"
 //?            }   



let configuracaoServidor: object = {
    servidor: "Microsoft Azure",
    ip: "127.0.0.1",
    senha: "654321"
}

//! IMPORTANTE , NOTE QUE SO SERÁ POSSOVEL TROCAR OS 
//! PARAMETOS DO OBJETO DESDE QUE SEJA VARIAVEL (let), so for (const) dará erro
configuracaoServidor = {
    servidor: "Google Cloud",   
    ip: "127.0.0.1",
    senha: "654321"
}


//!IMPORTANTE
//* TRANSOFRMAR UM OBJETO EM JSON
let json = JSON.stringify(configuracaoServidor)
console.log("json ",json)
console.log(typeof(json))

//* TRANSOFRMAR O JSON EM OBJETO
let objeto = JSON.parse(json)
console.log("objeto ",objeto)
console.log(typeof(objeto))

