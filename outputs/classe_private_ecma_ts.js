"use strict";
class Documento {
    valor = "1236544789-01";
    #numero = 35;
    mostrarNumero() {
        return this.#numero;
    }
    mostrarValor() {
        return this.valor;
    }
}
class CNPJ extends Documento {
    #numero = 2569874563202;
    mostrarCNPJ() {
        return this.#numero;
    }
}
const rg = new Documento();
console.log(rg.mostrarNumero());
const cnpj = new CNPJ();
console.log(cnpj.mostrarCNPJ());
class Exemplo {
    valor;
    constructor(v) {
        this.valor = v;
    }
    getValor() {
        return this.valor;
    }
}
let exemplo = new Exemplo(42);
console.log(exemplo.getValor());
//# sourceMappingURL=classe_private_ecma_ts.js.map