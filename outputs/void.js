"use strict";
function semretorno() {
}
const meuConsole = console.log("Hello TypeScript with Hcode");
console.log(meuConsole);
function mostrarFrase() {
    console.log("Aprendendo TypeScript!");
    return;
}
mostrarFrase();
function divide(a, b) {
    if (b === 0) {
        throw new RangeError("Divisão por zero  b  =  0");
    }
    else if (b === 1) {
        throw new TypeError("Divisão por 1 sempre o mesmo resultado");
    }
    else {
        return a / b;
    }
}
function divideAndLog(a, b) {
    try {
        const result = divide(a, b);
        console.log("Resultado: ", result);
    }
    catch (e) {
        if (e instanceof Error || e instanceof TypeError) {
            console.log("Erro: ", e.message);
        }
        else {
            console.log("Erro desconhecido");
        }
    }
}
divideAndLog(10, 0);
divideAndLog(10, 1);
divideAndLog(10, 2);
//# sourceMappingURL=void.js.map