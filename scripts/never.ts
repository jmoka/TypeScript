// !======================================

// ! NEVER
//? never: o tipo never é usado para representar valores que nunca ocorrem.
// !======================================
function erro(mensagem: string): never {
    throw new Error(mensagem);
  }
  
  let resultado1: never = erro("Algo deu errado.");
  // !======================================



function showError(message: string): never {

    throw new Error(message);

}

//console.log(showError("Algo deu errado"));

let n = 0;

function loopInfinito(): never {

    while(true) {
        console.log(n++);
    }

}

loopInfinito();