// !===============================================
    // CLASSE
//!================================================




class Pessoa {

    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {

        this.nome = nome;
        this.idade = idade;
        this.altura = altura;

    }

    // toString(): string {

    //     return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura.`;

    // }

}

const ronaldo = new Pessoa("Ronaldo Braz", 30, 1.85);
const marcus = new Pessoa("Marcus Ribeiro", 19, 2);

ronaldo.nome = "Ronaldo";

console.log("Pessoa"+ ronaldo);
console.log("Pessoa: " + marcus);


//! lista completa dos métodos e propriedades da classe Object em TypeScript, 
//! com exemplos de uso e explicações:

//TODO:  const nomeNovoObjeto = Object.assign({}, ronaldo, {nome:"carlos"});
// observe que precisamos declarar o nome da constante = passar o Object.assign({}, objeto, {});
//* Na primeira {} é opcional : SE COLOCAR A CHAVE NÃO MUDA O OBJETO PRINCIPAL, SE TIRAR A CHAVE MUDA O OBJETO PRINCIPAL
// NA SEGUNDA CHAVE COLOCAMOS A AÇÃO, OU SEJA O QUE QUEREMOS
// O método assign copia os valores das propriedades de um ou mais objetos de origem para um objeto de destino e retorna o objeto de destino. Por exemplo:
// *const target = { QUALQUER NOME: INSTANCIA DA CLASSE };
const novaPessoa = Object.assign({}, ronaldo, {nome:"jose"});
console.log("1", ronaldo);
console.log("2",marcus);
console.log("3",novaPessoa);

console.log("4", ronaldo);
console.log("5",marcus);
// //* Nesse exemplo, usamos o método assign para copiar a propriedade b do objeto source para o objeto target.




/*
!O ​‌‌‍método create​ cria um novo objeto com o protótipo especificado e as propriedades especificadas. 
*Você pode fazer isso usando o método ​‌‌‍create()​ da seguinte maneira:
*/ 

const Pessoa2 = Object.create(Pessoa)
Pessoa2.nome = "joge"
Pessoa2.idades =18
Pessoa2.altura=1.81
console.log("pessoa 2",Pessoa2)
console.log("idadePessoa2",Pessoa2.idades)

// Podemos instanciar a estancia da estandia
const pessoa3 = Object.create(Pessoa2)
const pessoa4 = Object.create(pessoa3)


