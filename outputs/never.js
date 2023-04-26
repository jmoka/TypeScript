"use strict";
function erro(mensagem) {
    throw new Error(mensagem);
}
let resultado1 = erro("Algo deu errado.");
function showError(message) {
    throw new Error(message);
}
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
//# sourceMappingURL=never.js.map