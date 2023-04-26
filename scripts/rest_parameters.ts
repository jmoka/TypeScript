function somarRenda(...meses: number[]): number {

  return  meses.reduce((callback: number, initialValue: number) =>callback + initialValue,0);

     

}


console.log(somarRenda(250, 780, 695, 2000, 6500));

// O método reduce() em JavaScript é uma função de array que permite reduzir os 
// elementos de um array a um único valor. Ele recebe uma função callback como argumento que é 
// executada para cada elemento do array.
// O primeiro argumento é a função de callback que será executada para cada elemento do array. 
// A função de callback recebe dois argumentos: o acumulador (um valor que é atualizado a cada iteração) 
// e o valor atual (o valor do elemento atual do array). A função deve retornar o valor atualizado 
// o acumulador.

// O segundo argumento é opcional e representa o valor inicial do acumulador. Se nenhum valor inicial for 
// especificado, o acumulador será inicializado com o valor do primeiro elemento do array e o loop 
// começará a partir do segundo elemento.

//! O método reduce() é geralmente usado para realizar ​‌‌‍cálculos em um array​, como somar todos os 
// valores de um array ou encontrar o maior valor em um array. Mas ele também pode ser usado para 
// transformar um array em um objeto, ou qualquer outra operação que envolva reduzir múltiplos valores 
// em um único valor.

// Por exemplo, para somar todos os valores de um array, você pode usar o método reduce() da seguinte 
// forma:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 15