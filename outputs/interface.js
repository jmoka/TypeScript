"use strict";
let Pessoas;
let novosClientes = [];
let imc = (peso, altura) => {
    return peso / (altura * altura);
};
let jota = {
    nome: "joão luiz",
    sobrenome: "silva",
    endereco: ["coronel jose do o", 1234, "barro", "mosqueiro", "pará", 66910010],
    imc: imc,
    nomeCompleto: (nome, sobrenome) => {
        return `${nome} ${sobrenome}`;
    },
    ideias: {
        casa: ["porta", "janela", "sala"],
        livro: ["livro1", "livro2", "livro3"]
    },
    cursos: ["python", 40]
};
let maria = {
    nome: "maria",
    sobrenome: "silva",
    endereco: ["coronel jose do o", 1234, "barro", "mosqueiro", "pará", 66910010],
    imc: (pes, alt) => {
        return pes / (alt * alt);
    },
    nomeCompleto: (nome, sobrenome) => {
        return `${nome} ${sobrenome}`;
    },
    ideias: {
        casa: ["porta", "janela", "sala"],
        livro: ["livro1", "livro2", "livro3"]
    },
    cursos: ["python", 40]
};
console.log(jota.imc(94, 1.81));
console.log("===============================================");
console.log(maria.nomeCompleto(maria.nome, maria.sobrenome));
const clientes = {
    razao: "Gabriel",
    cnpj: 1234567890
};
console.log(clientes);
let primeuraSoma;
primeuraSoma = (n1, n2) => {
    return n1 + n2;
};
let calculadora;
function divisao(nun1, nun2) {
    return nun1 / nun2;
}
let multiplicacao = (nun1, nun2) => {
    return nun1 * nun2;
};
calculadora = {
    somar: (n1, n2) => {
        return n1 + n2;
    },
    subtrair: function (n1, n2) {
        return n1 - n2;
    },
    divisao: divisao,
    multiplicacao
};
//# sourceMappingURL=interface.js.map