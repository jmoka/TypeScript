class Documento {

    private valor: string = "1236544789-01"; // TS
    
    #numero: number = 35; // ECMAScript

    mostrarNumero() {

        return this.#numero;

    }
    mostrarValor() {

        return this.valor;

    }

}

class CNPJ extends Documento {

    // private valor: string = "25698745632-01";
    #numero: number = 2569874563202;
   

    mostrarCNPJ() {

        return this.#numero;

    }

}

const rg = new Documento();

console.log(rg.mostrarNumero());

const cnpj = new CNPJ();

console.log(cnpj.mostrarCNPJ());


// console.log("RG:" + rg.valor);
// console.log("RG:" + rg.#numero);



//=======================================================
interface IExemplo {
    getValor(): number;
}

class Exemplo implements IExemplo {
    private valor: number;

    constructor(v: number) {
        this.valor = v;
    }

    public getValor(): number {
        return this.valor;
    }
}

let exemplo: IExemplo = new Exemplo(42);
console.log(exemplo.getValor()); // Saída: 42


/*

Em TypeScript, a diferença entre declarar um membro de classe como private ou com a nova sintaxe 
# é que a propriedade ou método com # será considerado privado para qualquer escopo fora da classe 
em que ele é definido, enquanto a propriedade ou método private será acessível somente a partir de 
dentro da própria classe.

Em outras palavras, se você declarar uma propriedade ou método com # em uma classe, essa propriedade 
ou método será acessível apenas a partir da própria classe. Mesmo as classes filhas não poderão acessar
 essa propriedade ou método. Já com o modificador private, você também pode acessar o membro somente 
 dentro da própria classe, mas as classes filhas não poderão acessá-lo.

A nova sintaxe # foi introduzida na versão 3.8 do TypeScript, e ela visa melhorar a encapsulação 
de membros de classe em relação ao modificador private. Além disso, a sintaxe # também tem algumas
vantagens de performance em relação ao modificador private, já que a propriedade ou método # é 
armazenado em uma tabela de símbolos interna da classe, enquanto que propriedades ou métodos private 
precisam ser armazenados em objetos em tempo de execução, o que pode ter um impacto negativo na 
performance em casos de alto tráfego.

*/
