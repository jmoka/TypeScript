"use strict";
class Pessoa {
    nome;
    idade;
    altura;
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}
const ronaldo = new Pessoa("Ronaldo Braz", 30, 1.85);
const marcus = new Pessoa("Marcus Ribeiro", 19, 2);
ronaldo.nome = "Ronaldo";
console.log("Pessoa" + ronaldo);
console.log("Pessoa: " + marcus);
const novaPessoa = Object.assign({}, ronaldo, { nome: "jose" });
console.log("1", ronaldo);
console.log("2", marcus);
console.log("3", novaPessoa);
console.log("4", ronaldo);
console.log("5", marcus);
const Pessoa2 = Object.create(Pessoa);
Pessoa2.nome = "joge";
Pessoa2.idades = 18;
Pessoa2.altura = 1.81;
console.log("pessoa 2", Pessoa2);
console.log("idadePessoa2", Pessoa2.idades);
const pessoa3 = Object.create(Pessoa2);
const pessoa4 = Object.create(pessoa3);
//# sourceMappingURL=primeira_classe.js.map