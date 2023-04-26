"use strict";
function somarRenda(...meses) {
    return meses.reduce((callback, initialValue) => callback + initialValue, 0);
}
console.log(somarRenda(250, 780, 695, 2000, 6500));
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);
//# sourceMappingURL=rest_parameters.js.map