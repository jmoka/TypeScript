
// !======================================

// ! BOOLEAM
//? boolean: o tipo boolean é usado para representar valores lógicos true ou false.

// !======================================
let valorVerdadeiro: boolean = true;
let valorFalso: boolean = false;
// !=====================================



//? O BOOLEAM RECEBE VALORES :

// * VERDADEIROS : qualquer coisa diferente false
// * FALSOS : false, " ", null, undefined

//todo: IMPORTANTE - INFORMANDO STRING
//* "O" = FALSE
//* QUALQUER OUTRO VALOR É TRUE

let admin: boolean;

//* true
admin = Boolean(true);
console.log("true", admin);

//* false
admin = Boolean(false);
console.log("false", admin);

//* undefined
// observe que para declararmos como undefined precisamos está passando atraveis da função Boolean( undefined)
admin = Boolean(undefined);
console.log("undefined", admin);

//* null
admin = Boolean(null);
console.log("Null", admin);

//* " "
admin = Boolean();
console.log("string vazia", admin);

//* "1"
admin = Boolean("1");
console.log("string 1", admin);

//* 0
admin = Boolean(0);
console.log(0, admin);

//* 1
admin = Boolean(1);
console.log(1, admin);

//* qualquer coisa diferente
admin = Boolean("1aaa23s3ffff445");
console.log("qualquer coisa diferente", admin);


//* Comparação
let x: number = 1;
let y: number = 2;
admin = Boolean(1<2);
console.log("1<2", admin);
admin = Boolean(1>2);
console.log("1>2", admin);


