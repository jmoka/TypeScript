/*
implements é uma palavra-chave em TypeScript e em outras linguagens de programação orientadas a 
objetos que é usada para indicar que uma classe está implementando uma interface.

Uma interface é um contrato que define um conjunto de métodos e propriedades que uma classe deve 
implementar. Quando uma classe implementa uma interface, ela se compromete a fornecer implementações 
para todos os métodos e propriedades da interface.

Por exemplo, suponha que você tenha uma interface chamada IPessoa que define um método falar():

*/

interface IPessoaee {
    falar(): void;
  }

//Você pode criar uma classe Pessoa que implementa a interface IPessoa da seguinte forma:

class Pessoa12 implements IPessoaee {
    falar(): void {
      console.log("Oi, eu sou uma pessoa.");
    }
  }