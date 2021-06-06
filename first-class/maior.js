// Exercicio: retornar o maior de dois números: 'a' e 'b'

function maior(a, b){
    let maior = a;
    if (b > a){
        maior = b;
    }
    return maior;
}

let a = 2;
let b = 1;
let resultado = maior(a, b);

console.log('Maior:', resultado);
