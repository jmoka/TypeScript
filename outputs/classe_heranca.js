"use strict";
class Cadastro {
    nome;
    nascimento;
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    email;
    empresa;
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const clienteJoao = new Cliente("Joao", new Date("2000-01-01"), "joao@hcode.com.br", "Hcode");
console.log(clienteJoao);
class Class_Pessoas {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = "nome",
            this.idade = 18;
    }
}
class Class_Brasileiras extends Class_Pessoas {
    esporte;
    raça;
    constructor(nome, idade, esporte, raça) {
        super(nome, idade);
        this.esporte = esporte;
        this.raça = raça;
    }
}
//# sourceMappingURL=classe_heranca.js.map