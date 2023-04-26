"use strict";
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
class Novo_Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    ola() {
        console.log(`Hello, my name is ${this.name}!`);
    }
    introduce() {
        this.ola();
    }
}
const myAnimalq = new Novo_Animal("Rex");
myAnimalq.introduce();
class animale {
    name;
    constructor(name) {
        this.name = name;
    }
    hell() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
class Dog extends animale {
    breed;
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    introduce() {
        this.hell();
        console.log(`I'm a ${this.breed} dog!`);
    }
}
const myDog = new Dog("Rex", "Labrador");
myDog.introduce();
class O_Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    ani() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
const meuanimal = new O_Animal("Rex");
meuanimal.ani();
//# sourceMappingURL=encapsulamento.js.map