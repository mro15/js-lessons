// Exercicio: retornar o menor de dois números: 'a' e 'b'

function menor(a, b){
    let menor = a;
    if (b < a){
        menor = b;
    }
    return menor;
}

let a = 1;
let b = -11;
let resultado = menor(a, b);

console.log('Menor:', resultado);
