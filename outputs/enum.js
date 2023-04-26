"use strict";
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Verde"] = 1] = "Verde";
    Cores[Cores["Azul"] = 2] = "Azul";
})(Cores || (Cores = {}));
let corSelecionada = Cores.Vermelho;
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 1] = "ADMIN";
    Permission["USERPERMISSION"] = "USER";
    Permission["READONLY"] = "READONLY";
})(Permission || (Permission = {}));
console.log("EX1 ", Permission.ADMIN);
console.log("EX1 ", Permission.USERPERMISSION);
console.log("EX1 ", Permission.READONLY);
console.log("EX1 ", Permission["USERPERMISSION"]);
console.log("EX1 ", Permission[1]);
(function (Permission) {
    Permission[Permission["N1"] = 0] = "N1";
    Permission[Permission["N2"] = 1] = "N2";
    Permission[Permission["N3"] = 2] = "N3";
})(Permission || (Permission = {}));
console.log("EX2 - Permission", Permission);
console.log("RETORNA O INDEX - Permission.N1", Permission.N1);
console.log("RETORNA O INDEX - Permission.N2", Permission.N2);
console.log("RETORNA O INDEX - Permission.N3", Permission.N3);
console.log("RETORNA O VALOR - Permission[0] ", Permission[1]);
console.log("RETORNA O VALOR - Permission[1] ", Permission[1]);
console.log("RETORNA O VALOR - Permission[2] ", Permission[2]);
//# sourceMappingURL=enum.js.map