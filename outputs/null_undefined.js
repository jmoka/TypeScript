"use strict";
let undefined_1;
console.log(undefined_1);
let null1 = null;
console.log(null1);
let string2 = "Olá, mundo!";
console.log(string2);
string2 = "OLÁ , TERRA";
console.log(string2);
let minhaString = "Olá, mundo!";
minhaString = null;
console.log("minhaString -null " + typeof (minhaString));
minhaString = "string";
console.log("minhaString - string " + typeof (minhaString));
let minhaString1 = "Olá, mundo!";
minhaString1 = undefined;
console.log("minhaString1 -undefined " + typeof (minhaString1));
minhaString1 = "string";
console.log("minhaString1 -string " + typeof (minhaString1));
let minhaVariavel;
let data = new Date().getDate();
console.log("Dia do mês", data);
let diaMes = 12;
if (data === diaMes) {
    minhaVariavel = `A data escolhida está Certa hoje é dia :  ${diaMes}`;
    console.log(minhaVariavel);
}
else {
    minhaVariavel = "A data escolhida está Errado";
    console.log(minhaVariavel);
}
//# sourceMappingURL=null_undefined.js.map