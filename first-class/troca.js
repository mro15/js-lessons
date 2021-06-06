//Exercicio: trocar o valor de duas variáveis: 'a' e 'b'

function troca(a, b){
    let auxiliar = a;
    a = b;
    b = auxiliar;
    console.log('Depois da troca');
    console.log('a=', a);
    console.log('b=', b);
}

let a = 1;
let b = 2;
console.log('Antes da troca');
console.log('a=', a);
console.log('b=', b);
a, b = troca(a, b);

