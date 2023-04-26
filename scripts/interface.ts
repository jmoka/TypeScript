// !======================================
// ! INTERFACE
    //? interface: o tipo interface é usado para definir a ​‌‌‍estrutura de um objeto​ ou de uma classe.

    // ! agora ciamos um tipo de dados o tipo "IPessoa" igualmente a outro tipo de dados ( string, number, boolean, any, etc..)
    //* E esse tipo de dado você criou as regras para ele, e do tipo multiplo pis existem varios dados dentro dele de diversos tipo
// !======================================
//* Nome dado é preciso ter a primeira letra Maiuscula e aletra I no inicio
interface IPessos{
  nome: string; // tipo string
  sobrenome: string; // tipo string
  endereco: [end:string, n:number, bairro:string, cidade:string, estado:string, cep:number]; // tipo Array
  imc:(peso:number, altura:number)=>number // tipo function que retorna um number
  nomeCompleto: (nome:string, sobrenome:string)=>string; // tipo função que retorna uma string
  ideias:{}; // tipo object
  cursos?:[nome:string, cargaHoraria:number]; // tipo array , opcional devido o operador ? que informa para um que não é obrigatório
}  
// !======================================

/*
nesse caso vc garante que um objeto pessoa tem que ter todos as propriadades passadas na interface IPessoa
*/
// 1) temos que instanciar ou seja criar um objeto.

let Pessoas:IPessos; // Interface instanciada

let novosClientes:[]=[];

// função externa
let imc=(peso:number, altura:number)=>{
  return peso/(altura*altura);
};

let jota: IPessos={
  nome: "joão luiz",
  sobrenome: "silva",
  endereco: ["coronel jose do o", 1234, "barro", "mosqueiro", "pará",66910010 ],
  imc: imc,
  nomeCompleto: (nome, sobrenome)=>{
    return `${nome} ${sobrenome}`;
  },
  ideias: {
    casa: ["porta","janela","sala"],
    livro: ["livro1","livro2","livro3"]
  },
  cursos: ["python", 40 ] 

};
let maria: IPessos={
  nome: "maria",
  sobrenome: "silva",
  endereco: ["coronel jose do o", 1234, "barro", "mosqueiro", "pará",66910010 ],
  imc: (pes,alt)=>{
    return pes/(alt*alt);
  },
  nomeCompleto: (nome, sobrenome)=>{
    return `${nome} ${sobrenome}`;
  },
  ideias: {
    casa: ["porta","janela","sala"],
    livro: ["livro1","livro2","livro3"]
  },
  cursos: ["python", 40 ] 
  
}

console.log(jota.imc(94,1.81));
console.log("===============================================");
console.log(maria.nomeCompleto(maria.nome,maria.sobrenome));

//! ===================================================

// READONLY
//SOMENTE LEITURA

//!======================================

// USADO PARA INFORMAR QUE AQUELA PRIPRIEDADE É SOMENTE PARA LEITURA E NÃO PODE SER ALTERADA

// REGRA

//* PARA AS VARIÁVEIS
    // const
    // let

//* PARA AS PROPRIEDADES READONLY -  SOMENTE LEITURA
    //readonly

    
// cnpj não pode mudar , e por isso será usado readonly
interface ICClientes{
  razao: string;
  readonly cnpj: number; //somente leitura, um vez cadastrado não pode ser mudado
  cnae?:number;
}

const clientes:ICClientes ={
  razao: "Gabriel",
  cnpj: 1234567890
  //cnae:12345  => não é obrigatorio devido o simbolo ? declarada na interface 
}

console.log(clientes)




// =======================================================

// !INTERFACE COM FUNÇÕES

//================================================

//* Ao colocarmos os pareteses dentro da interface ja se entende que será uma função

interface Isoma{
  (nun1:number, nun2:number):number;//tipode dados
}

// Vamos instanciar a interface

let primeuraSoma : Isoma;

primeuraSoma = (n1,n2)=>{
    return n1 + n2;
  }

  // =========================================================

  //!INTERFACE COM VARIAS FUNÇÕES E FUNÇÕES EXTERNAS

    // vamos dar nomes as nossas funções
    // podemos criar tanto arrow function quanrto um função 

  interface ICalcular{
    // crinando arrow function
    somar(n1:number,n2:number):number;
    subtrair(n1:number,n2:number):number;
    divisao(n1:number,n2:number):number;
    multiplicacao(n1:number,n2:number):number;
     
  }

  let calculadora:ICalcular;


function divisao(nun1: number,nun2: number){ //funcão externa normal
  return nun1/nun2;}

  let multiplicacao=(nun1: number,nun2: number)=>{ // arrow function externa
    return nun1*nun2;
  }


calculadora={
  somar:(n1,n2)=>{ // usando uma arrow function
    return n1 + n2;
  },
  subtrair:function(n1:number,n2:number){ // usando uma função nomrmal
    return n1 - n2;
  },
  divisao:divisao ,
  multiplicacao//como tanto a propriedade da interface se chama divisão e a masma da função podemos deixar somente um nome
  
}


