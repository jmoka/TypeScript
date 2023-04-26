// !======================================
// ! FUNCTION
    //? function: o tipo function é usado para representar funções.
// !======================================
function soma(a: number, b: number): number {
        
    return  a + b
    }

    let a=1;
    let b=2;
    console.log("Soma de a + b= ", soma(a, b));    
// !======================================

// SINTAX DE FUNCTION

    // function nome da função (a:tipo do elemento): tipo da função {
    //     return a + b;
    // }


//! formas de declarar uma ARROW FUNCTION

// COM PARAMETROS
const nomeDaFuncao = (parametro1: number, parametro2: number): number => {
    return parametro1 + parametro2;
  }

  // SEM PAERAMEYTROS
  const nomeFuncao= (): number => {
    return 1
  }

  // FUNÇÃO ANONIMA
  (): string => {
    return "texto"
  }
  