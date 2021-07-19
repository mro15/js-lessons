var array_of_numbers = [2, 3, 1, 5, 4];

console.log(array_of_numbers);
console.log(array_of_numbers.sort());

var array_of_fruits = ["Maçã", "Banana", "Goiaba", "Manga", "Pêssego", "Morango"];


console.log(array_of_fruits);
console.log(array_of_fruits.sort());

var cardapio = ["arroz", "feijao", "salada de alface"];

console.log(cardapio);

cardapio.push("frango assado");

console.log(cardapio);

var escalas = ["do", "re", "mi", "fa"];

console.log(escalas);

escalas.pop();

console.log(escalas);

var perifericos = ["mouse", "teclado", "monitor"];

console.log(perifericos);

perifericos.shift();

console.log(perifericos);

var navegadores = ["opera", "firefox", "chrome"];

console.log(navegadores.indexOf("opera"));
console.log(navegadores.indexOf("firefox"));
console.log(navegadores.indexOf("chrome"));
console.log(navegadores.indexOf("internet explorer"));

var navegadores = ["opera", "firefox", "chrome"];
var mais_navegadores = ["internet explorer", "safari"];

console.log(navegadores);
console.log(mais_navegadores);

var todos_os_navegadores = navegadores.concat(mais_navegadores);

console.log(todos_os_navegadores);


var navegadores = ["opera", "firefox", "chrome"];
console.log(navegadores);

navegadores.splice(1, 0, "internet explorer", "safari");
console.log(navegadores);

var vogais = ['a', 'e', 'i', 'o', 'x'];

console.log(vogais);

vogais.splice(4, 1, 'u');

console.log(vogais);


var animais = ["gato", "cachorro", "rato", "passarinho", "galinha", "pato"];
var com_asas = animais.slice(3,6);
var sem_asas = animais.slice(0,3);

console.log(animais);
console.log(com_asas);
console.log(sem_asas);


var numeros = [0, 1, 2, 3, 4];

var positivos = numeros.every( (e) => (e >= 0));
var negativos = numeros.every( (e) => (e < 0));

console.log(numeros);
console.log(positivos);
console.log(negativos);

var pares = [2, 4, 6];
var impares = [1, 3, 5];

console.log(pares.every( (e) => ((e%2)==0)));
console.log(impares.every( (e) => ((e%2)==0)));

var numeros = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

var positivos = numeros.some( (e) => (e >= 0));
var negativos = numeros.some( (e) => (e < 0));

console.log(numeros);
console.log(positivos);
console.log(negativos);

var numeros = [1, 4, 9, 16, 25];

var raizes = numeros.map(Math.sqrt);

console.log(numeros);
console.log(raizes);

var numeros = [1, 4, 9, 16, 25];

var quadrados = numeros.map( function (num){
    return num*num;
});

console.log(numeros);
console.log(quadrados);


var numeros = [1, 4, 9, 16, 25];

numeros.forEach( function (num){
    console.log(num*num);
});

var numeros = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach( function (num){
    if ((num%2)==0){
        console.log(num, "É par");
    }else{
        console.log(num, "É ímpar");
    }
});


var numeros = [0, 1,2, 3, 4, 5, 6, 7, 8, 9, 10];

var soma = numeros.reduce( function (acumulador, elemento) {
    console.log("Acumulador: ", acumulador, " Elemento do array: ", elemento);
    return acumulador + elemento;
});

console.log(soma);

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var soma_pares = numeros.reduce( function (acumulador, elemento) {
    console.log("Acumulador: ", acumulador, " Elemento do array: ", elemento);
    if ((elemento%2)==0){
        return acumulador + elemento;
    }else{
        return acumulador;
    }
});

console.log(soma_pares);
