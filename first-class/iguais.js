// Exercicio: verificar se duas variaveis 'a' e 'b' tem o mesmo valor

function iguais(a, b){
    let iguais = false;
    if (a==b){
        iguais = true;
    }
    return iguais;
}

let a = -1;
let b = 1;
let resultado = iguais(a, b);

if (resultado == true){
    console.log('Os valores são iguais');
}else{
    console.log('Os valores são diferentes');
}
