"use strict";
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let novoArray = array1.concat(array2);
console.log(novoArray);
let array3 = [1, 2, 3, 4, 5];
array3.copyWithin(2, 0, 3);
console.log(array3);
let array4 = ['a', 'b', 'c'];
let iterador = array4.entries();
for (let [indice, valor] of iterador) {
    console.log(indice, valor);
}
let array5 = [1, 2, 3, 4, 5];
let todosMaioresQueZero = array5.every(function (valor) {
    return valor > 0;
});
console.log(todosMaioresQueZero);
let array6 = [1, 2, 3, 4, 5];
array6.fill(0);
console.log(array6);
let array7 = [1, 2, 3, 4, 5];
let numerosPares = array7.filter(function (valor) {
    return valor % 2 === 0;
});
console.log(numerosPares);
let array8 = [1, 2, 3, 4, 5];
let primeiroMaiorQueTres = array8.find(function (valor) {
    return valor > 3;
});
console.log(primeiroMaiorQueTres);
let array9 = [1, 2, 3, 4, 5];
let indiceDoPrimeiroMaiorQueTres = array9.findIndex(function (valor) {
    return valor > 3;
});
console.log(indiceDoPrimeiroMaiorQueTres);
let array10 = ['a', 'b', 'c'];
array10.forEach(function (valor) {
    console.log(valor);
});
let array11 = ['a', 'b', 'c'];
let contemB = array11.includes('b');
console.log(contemB);
let array12 = ['a', 'b', 'c'];
let indiceDoB = array12.indexOf('b');
console.log(indiceDoB);
let array13 = ['a', 'b', 'c'];
let stringDoArray = array13.join(', ');
console.log(stringDoArray);
let array14 = ['a', 'b', 'c', 'b'];
let ultimoIndiceDoB = array14.lastIndexOf('b');
console.log(ultimoIndiceDoB);
let array15 = [1, 2, 3, 4, 5];
let arrayDobrado = array15.map(function (valor) {
    return valor * 2;
});
console.log(arrayDobrado);
let array16 = ['a', 'b', 'c'];
let ultimoElemento = array16.pop();
console.log(ultimoElemento);
console.log(array16);
let array17 = ['a', 'b'];
array17.push('c', 'd');
console.log(array17);
let array18 = [1, 2, 3, 4, 5];
let somaDosElementos = array18.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
});
console.log(somaDosElementos);
let array27 = ['a', 'b', 'c', 'd', 'e'];
let resultado2 = array27.reduceRight(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
});
console.log(resultado2);
let array19 = ['a', 'b', 'c'];
array1.reverse();
console.log(array19);
let array20 = ['a', 'b', 'c'];
let primeiroElemento = array20.shift();
console.log(primeiroElemento);
console.log(array20);
let array21 = ['a', 'b', 'c', 'd', 'e'];
let novoArray1 = array21.slice(1, 4);
console.log(novoArray1);
let array22 = [1, 2, 3, 4, 5];
let temPares = array22.some(function (valor) {
    return valor % 2 === 0;
});
console.log(temPares);
let array23 = [3, 2, 5, 1, 4];
array1.sort();
console.log(array23);
array23.sort(function (a, b) {
    return b - a;
});
console.log(array23);
let array24 = ['a', 'b', 'c', 'd', 'e'];
array24.splice(2, 2, 'f', 'g');
console.log(array24);
let array25 = ['a', 'b', 'c'];
let stringDoArray1 = array25.toString();
console.log(stringDoArray1);
let array26 = ['a', 'b'];
array26.unshift('c', 'd');
console.log(array26);
//# sourceMappingURL=arrayFuncoes.js.map