
// !======================================
/*
*Herança: 
é a capacidade de ​‌‍‌criar uma nova classe a partir de uma classe existente​, aproveitando 
os atributos e métodos da classe existente e adicionando novas funcionalidades a ela. A classe 
​‌‍‌resultante é chamada de subclasse ou classe derivada​, enquanto a classe existente é chamada de 
​‌‍‌superclasse ou classe base​.
*/
// !======================================
class Cadastro {

    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }

}

class Cliente extends Cadastro {

    email: string;
    empresa: string;

    constructor(
        nome: string,
        nascimento: Date,
        email: string,
        empresa: string
    ) {

        super(nome, nascimento); // o super precisa ser primeiro
        this.email = email;
        this.empresa = empresa;

    }

}

const clienteJoao = new Cliente(
    "Joao",
    new Date("2000-01-01"),
    "joao@hcode.com.br",
    "Hcode"
);
console.log(clienteJoao);


// ====================================================
// PRATICANDO
//=====================================================

class Class_Pessoas{

    //* Atributos ( iniciam this.)
    nome: string;
    idade: number;

    //* Classe Construtor    
    constructor(nome:string, idade:number ){
        this.nome="nome",
        this.idade=18
    }
    //* Métodos ( minhas funções)
}

//todo: CONCEITO DE HERANÇA
// PALAVRA RESERVADA extends

class Class_Brasileiras extends Class_Pessoas{   //* extends

    //* Atributos

    esporte:string; // DECLARAR SOMEMNTO OS ATRIBUTOS DO FILHO OU DA PROPRIA CLASSE
    raça : string;

    //* Classe Construtor
    constructor(  // COLOCAR NA CLASSE CONSTRUTORA DO FILHO TANTO OS ATRIBUTOS DO PAI QUANTO O DO FILHO
        nome:string,
        idade:number,
        esporte:string,
        raça : string
    ){

        //* Bloco da Herança  
    //* BLOCO CHAMANCO O SUPER 
        super( nome, idade) // DECLARAR OS ATRIBUTOS DO PAI
        this.esporte = esporte;
        this.raça = raça;
    }
      
    //* Métodos ( minhas funções)
}

