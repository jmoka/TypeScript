console.log("Hello World! Este é meu primeiro código TypeScript");

console.log("=================");

const nome: string = "Luiz";

console.log("Olá " + nome + ". Seja bem-vindo!");

console.log("=================");

class Produto{
    nome;
    valor:number;
    constructor(nome:string, valor:number){
        this.nome = nome;
        this.valor = valor;
        }
    }


const playstation5 = new Produto("Playstation 5", 5000);

console.log("=================");

const elememnto = document.querySelector("div");

