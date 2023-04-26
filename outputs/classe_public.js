"use strict";
class Veiculo {
    cor;
    constructor(cor) {
        this.cor = cor;
    }
    tentarAbrirPorta() {
        return false;
    }
}
const carro = new Veiculo("Branco");
carro.cor = "Preto";
console.log(carro.cor);
console.log(carro.tentarAbrirPorta());
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    HELLO() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
const myAnimal = new Animal("Rex");
myAnimal.HELLO();
//# sourceMappingURL=classe_public.js.map