//! concat(): 
// Combina dois ou mais arrays em um único array:
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
let novoArray: number[] = array1.concat(array2);

console.log(novoArray); // Output: [1, 2, 3, 4, 5, 6]


//! copyWithin(): 
// Copia uma sequência de elementos dentro do array:

let array3: number[] = [1, 2, 3, 4, 5];

// Copiando os elementos do índice 0 até o índice 2 para o índice 2
array3.copyWithin(2, 0, 3);

console.log(array3); // Output: [1, 2, 1, 2, 3]

//! entries(): 
//Retorna um objeto iterador com pares chave-valor para cada índice do array:
let array4: string[] = ['a', 'b', 'c'];

let iterador = array4.entries();

for (let [indice, valor] of iterador) {
  console.log(indice, valor);
}

// Output:
// 0 'a'
// 1 'b'
// 2 'c'

//! every(): 
// Verifica se todos os elementos do array atendem a uma determinada condição: typescript
let array5: number[] = [1, 2, 3, 4, 5];

let todosMaioresQueZero: boolean = array5.every(function(valor) {
  return valor > 0;
});
console.log(todosMaioresQueZero); // Output: true

//! fill(): 
// Preenche todos ou uma parte do array com um valor estático:
let array6: number[] = [1, 2, 3, 4, 5];
// Preenchendo todo o array com o valor 0
array6.fill(0);
console.log(array6); // Output: [0, 0, 0, 0, 0]

//! filter(): 
// Cria um novo array contendo apenas os elementos que atendem a uma determinada condição:
let array7: number[] = [1, 2, 3, 4, 5];

let numerosPares: number[] = array7.filter(function(valor) {
  return valor % 2 === 0;
});

console.log(numerosPares); // Output: [2, 4]

//! find(): 
// Retorna o valor do primeiro elemento no array que atende a uma determinada condição:
let array8: number[] = [1, 2, 3, 4, 5];

let primeiroMaiorQueTres: number | undefined = array8.find(function(valor) {
  return valor > 3;
});

console.log(primeiroMaiorQueTres); // Output: 4


//! findIndex(): 
// Retorna o índice do primeiro elemento no array que atende a uma determinada condição:
let array9: number[] = [1, 2, 3, 4, 5];

let indiceDoPrimeiroMaiorQueTres: number = array9.findIndex(function(valor) {
  return valor > 3;});
  console.log(indiceDoPrimeiroMaiorQueTres); // Output: 3

//!   forEach(): 
//   Executa uma função para cada elemento do array:
let array10: string[] = ['a', 'b', 'c'];

array10.forEach(function(valor) {
console.log(valor);
});

// Output:
// a
// b
// c

//! includes():
// Verifica se o array contém um determinado valor:
let array11: string[] = ['a', 'b', 'c'];
let contemB: boolean = array11.includes('b');
console.log(contemB); // Output: true

//! indexOf(): 
// Retorna o índice da primeira ocorrência de um determinado valor no array:
let array12: string[] = ['a', 'b', 'c'];
let indiceDoB: number = array12.indexOf('b');
console.log(indiceDoB); // Output: 1

//! join(): 
// Converte o array em uma string, separando os elementos pelo separador especificado:
let array13: string[] = ['a', 'b', 'c'];
let stringDoArray: string = array13.join(', ');
console.log(stringDoArray); // Output: "a, b, c"


//! lastIndexOf(): 
// Retorna o índice da última ocorrência de um determinado valor no array:
let array14: string[] = ['a', 'b', 'c', 'b'];
let ultimoIndiceDoB: number = array14.lastIndexOf('b');
console.log(ultimoIndiceDoB); // Output: 3

//! map(): 
// Cria um novo array aplicando uma função a cada elemento do array original:
let array15: number[] = [1, 2, 3, 4, 5];
let arrayDobrado: number[] = array15.map(function(valor) {
return valor * 2;
});

console.log(arrayDobrado); // Output: [2, 4, 6, 8, 10]


//! pop(): 
// Remove o último elemento do array e retorna o seu valor:
let array16: string[] = ['a', 'b', 'c'];
let ultimoElemento: string | undefined = array16.pop();
console.log(ultimoElemento); // Output: "c"
console.log(array16); // Output: ["a", "b"]

//! push(): 
// Adiciona um ou mais elementos ao final do array:
let array17: string[] = ['a', 'b'];
array17.push('c', 'd');
console.log(array17); // Output: ["a", "b", "c", "d"]

//! reduce():
// Reduz o array a um único valor aplicando uma função acumuladora aos elementos:
let array18: number[] = [1, 2, 3, 4, 5];
let somaDosElementos: number = array18.reduce(function(acumulador, valorAtual) {
return acumulador + valorAtual;
});

console.log(somaDosElementos); // Output: 15


//! reduceRight(): 
// Reduz o array a um único valor aplicando uma função de redução em cada elemento,
// da direita para a esquerda:
let array27: string[] = ['a', 'b', 'c', 'd', 'e'];
let resultado2: string = array27.reduceRight(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
});

console.log(resultado2); // Output: "edcba"


//! reverse(): 
// Inverte a ordem dos elementos no array:
let array19: string[] = ['a', 'b', 'c'];
array1.reverse();
console.log(array19); // Output: ["c", "b", "a"]

//! shift(): 
// Remove o primeiro elemento do array e retorna o seu valor:
let array20: string[] = ['a', 'b', 'c'];
let primeiroElemento: string | undefined = array20.shift();
console.log(primeiroElemento); // Output: "a"
console.log(array20); // Output: ["b", "c"]

//! slice(): 
// Retorna um novo array contendo uma parte do array original, determinada pelos índices de 
// início e fim:

let array21: string[] = ['a', 'b', 'c', 'd', 'e'];
let novoArray1: string[] = array21.slice(1, 4);
console.log(novoArray1); // Output: ["b", "c", "d"]


//! some(): 
// Verifica se ao menos um elemento do array atende a uma determinada condição
let array22: number[] = [1, 2, 3, 4, 5];
let temPares: boolean = array22.some(function(valor) {
  return valor % 2 === 0;
});

console.log(temPares); // Output: true


//! sort(): 
// Ordena os elementos do array em ordem crescente ou de acordo com uma função de comparação:
let array23: number[] = [3, 2, 5, 1, 4];
array1.sort();
console.log(array23); // Output: [1, 2, 3, 4, 5]
array23.sort(function(a, b) {
  return b - a;
});

console.log(array23); // Output: [5, 4, 3, 2, 1]

//! splice(): 
// Adiciona ou remove elementos do array a partir de uma determinada posição:
let array24: string[] = ['a', 'b', 'c', 'd', 'e'];
array24.splice(2, 2, 'f', 'g');
console.log(array24); // Output: ["a", "b", "f", "g", "e"]

//! toString(): 
// Converte o array em uma string:
let array25: string[] = ['a', 'b', 'c'];
let stringDoArray1: string = array25.toString();
console.log(stringDoArray1); // Output: "a,b,c"

//! unshift(): 
// Adiciona um ou mais elementos no início do array:
let array26: string[] = ['a', 'b'];
array26.unshift('c', 'd');
console.log(array26); // Output: ["c", "d", "a", "b"]