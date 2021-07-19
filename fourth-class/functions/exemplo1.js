// soma

function soma(a, b){
    resultado = a + b;
    return resultado;
}

var a = 1, b = 2;

resultado = soma(a,b);
console.log(resultado);

a = 10, b = 20;

resultado = soma(a,b);
console.log(resultado);

// exemplo sem retorno

function tamanho_palavra(palavra){
    console.log(palavra, palavra.length);
}

palavra1 = "Teste";
tamanho_palavra(palavra1);
palavra1 = "Paralelepipedo";
tamanho_palavra(palavra1);
palavra1 = "sim";
tamanho_palavra(palavra1);
palavra1 = "ok";
tamanho_palavra(palavra1);
