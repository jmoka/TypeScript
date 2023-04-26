"use strict";
let objeto1 = {
    chave: "valor",
    chave2: "valor2",
    chave3: "valor3"
};
let configuracaoServidor = {
    servidor: "Microsoft Azure",
    ip: "127.0.0.1",
    senha: "654321"
};
configuracaoServidor = {
    servidor: "Google Cloud",
    ip: "127.0.0.1",
    senha: "654321"
};
let json = JSON.stringify(configuracaoServidor);
console.log("json ", json);
console.log(typeof (json));
let objeto = JSON.parse(json);
console.log("objeto ", objeto);
console.log(typeof (objeto));
//# sourceMappingURL=object.js.map