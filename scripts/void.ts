// !======================================
// ! VOID
    //? void: o tipo void é usado para representar a ausência de um valor.
    //* É USADO PARA MOSTRAR IMPLICITAMENTE QUE UMA FUNÇÃO NÃO IRÁ RETORNAR NENUM VALOR
    //* OU SEJA UM FUNÇÃO QUANDO NÃO POSSUI  EM SUA SINTAX O RETURNE , ELA JÁ É CONSIDERADA VOID.
    //* MAS COMO ESTAMOS TRATANDO DE TYPSCRIP E AS BOAS PRATICAS RECOMENDAM QUE DEIXE IMPLICITO QUE 
    //* AQUELA FUNÇÃO QUE NÃO IRÁ RETORNAR NADA SERÁ UMA VOID
    //todo: SINTAX

    function semretorno():void{
        
    }
// !======================================

//todo: Observe que a constante possui um valor e o mesmo poede ser impresso no console
const meuConsole: void = console.log("Hello TypeScript with Hcode"); // retorna a string

//todo: Porém se tentarmos imprimir seu valor na console o valor retornado undefined sem valor
console.log(meuConsole); // retorna undefined

// ? Portanto como ja mencionado VOID serve para deixar já implicito que a função não retorna valor algum

function mostrarFrase(): void {

    console.log("Aprendendo TypeScript!");

    return; // mesmo que essa função tenha returne é porque não há nhenhum valor a retornar ou seja vazio
}

// chamar função
mostrarFrase()


//* Outro Exemplo
// DEVE SER USADA SEMPRE COMO SUB-ROTINAS
/* 
Funções que lançam exceções
Funções que apenas realizam tarefas, sem retornar nenhum valor
Callbacks que não retornam valores
Event handlers que não retornam valores
Funções que apenas imprimem informações em tela ou no console, sem retornar valores
Métodos que atualizam o estado de um objeto, mas não retornam nenhum valor
Funções que chamam outras funções, mas não utilizam o valor de retorno
Funções que lidam com operações de entrada e saída (I/O), como leitura e escrita de arquivos, mas não retornam valores
Métodos que modificam o DOM, mas não retornam valores
Métodos que realizam operações assíncronas, mas não retornam valores diretamente.
*/
//================================================


// !======================================
    //?Funções que lançam exceções
// !======================================

// exemplo1
function divide(a: number, b: number): number {
    if (b === 0) {
      throw new RangeError("Divisão por zero  b  =  0");
    }else if(b === 1){
      throw new TypeError("Divisão por 1 sempre o mesmo resultado");
    }else{
      return a / b;
    }
    
  }


  // exemplo2
  function divideAndLog(a: number, b: number): void {
    // Si
    try {
      const result = divide(a, b); // cria um constante onde armazena o resultado 
      // da função divide que retorna a divisão de a/b .
      // Se b for iguual a zero armazena a excessão

      console.log("Resultado: ", result); // imprime no console o retorno da funsão divide se
      // b form moior que zero



      // instanceof Error verifica se a exceção capturada é uma instância da classe Error
    } catch (e) {       // então
      if (e instanceof Error ||e instanceof TypeError ) {
        console.log("Erro: ", e.message);
      } else {
        console.log("Erro desconhecido");
      }
    }
  }
divideAndLog(10,0)
divideAndLog(10,1)
divideAndLog(10,2)