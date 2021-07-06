// Exercicio: comparar dois números: 'a' e 'b'

function compara(a, b){
    if (a > b){
        console.log(a, "e maior que", b);
    }else if (b > a){
        console.log(b, "e maior que", a);
    }
    else{
        console.log(a, b, "sao iguais");
    }
}

let a = 1;
let b = 1;
compara(a, b);

a = 2;
b = 1;
compara(a, b);

a = 20;
b = 50;
compara(a, b);
