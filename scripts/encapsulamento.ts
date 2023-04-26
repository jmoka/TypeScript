// ======================================================

/*

! Public: 
Propriedades e métodos marcados como public são acessíveis de qualquer lugar no código, 
tanto dentro quanto fora da classe. Esse é o modificador de acesso padrão em TypeScript, 
o que significa que se você não definir nenhum modificador de acesso, as propriedades e métodos 
serão públicos por padrão.

*/

class Animal {
    public name: string; // DECLARAÇÃO PUBLIC EM NOME
    
    public constructor(name: string) {
        this.name = name;
    }
    
    public HELLO(): void {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const myAnimal = new Animal("Rex");
myAnimal.HELLO(); // "Hello, my name is Rex!"


/*
! Private:
​‌‍Propriedades e métodos marcados como private só podem ser ​‌‍‌acessados dentro da 
própria classe​. Isso significa que não é possível acessar esses membros de fora da classe 
ou de subclasses.

*/

class Novo_Animal {
    private name: string;
    
    public constructor(name: string) {
        this.name = name;
    }
    
    private ola(): void {
        console.log(`Hello, my name is ${this.name}!`);
    }
    
    public introduce(): void {
        this.ola(); // Acessível apenas dentro da classe
    }
}

const myAnimalq = new Novo_Animal("Rex");
myAnimalq.introduce(); // "Hello, my name is Rex!"
// myAnimalq.ola(); // Erro: 'sayHello' é privado e só pode ser acessado dentro da classe 'Animal'


/*

! Protected
Propriedades e métodos marcados como protected ​‌‍‌são semelhantes aos privados, mas podem ser 
acessados por subclasses da classe que os define​. Isso significa que esses membros são invisíveis 
para o código fora da classe e de suas subclasses.

*/

class animale {
    protected name: string;
    
    public constructor(name: string) {
        this.name = name;
    }
    
    protected hell(): void { // Acessível na classe
        console.log(`Hello, my name is ${this.name}!`);
    }
}

class Dog extends animale {
    private breed: string;
    
    public constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
    
    public introduce(): void {
        this.hell(); // Acessível dentro da classe e de suas subclasses
        console.log(`I'm a ${this.breed} dog!`);
    }
}

const myDog = new Dog("Rex", "Labrador");
myDog.introduce(); // "Hello, my name is Rex! I'm a Labrador dog!"
// myDog.hell(); // Erro: 'sayHello' é protegido e só pode ser acessado dentro


/*

! readonly​‌‍‌
é usado em TypeScript para tornar uma propriedade somente leitura, ou seja, 
seu valor só pode ser definido uma vez, geralmente na inicialização. Depois disso, 
o valor não pode ser alterado.

*/

class O_Animal {
    readonly name: string; // somente escrita seu valor não pode mudar

    public constructor(name: string) {
        this.name = name;
    }
    
    public ani(): void {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const meuanimal = new O_Animal("Rex");
meuanimal.ani(); // "Hello, my name is Rex!"
// meuanimal.name = "Max"; // Erro: 'name' é somente leitura