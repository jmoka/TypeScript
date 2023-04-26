"use strict";
function enviarEmail(de, email, para, emailDestinatario, assunto) {
    console.log({
        de,
        email,
        para,
        emailDestinatario,
        assunto
    });
}
enviarEmail("Jota Empresas", "jotaempresas@gmail.com", "Empresa Lider", "lider@gmail.com", "assunto teste");
const enviarEmail1 = (de, email, para, emailDestinatario, assunto) => {
    console.log({
        de,
        email,
        para,
        emailDestinatario,
        assunto
    });
};
enviarEmail1("Jota Empresas", "jotaempresas@gmail.com", "Empresa Lider", "lider@gmail.com", "assunto teste");
const enviarEmail3 = (de, email, para, emailDestinatario, assunto) => {
    console.log({
        de,
        email,
        para,
        emailDestinatario,
        assunto
    });
};
enviarEmail3("Jota Empresas", "jotaempresas@gmail.com", "Empresa Lider", "lider@gmail.com");
const nomeCarro = (nome) => {
    console.log(nome);
};
nomeCarro("Ferrari");
nomeCarro();
const Carro = (nome1, marca1 = "") => {
    console.log(nome1, marca1);
};
Carro(undefined);
//# sourceMappingURL=funcoes_padrao.js.map