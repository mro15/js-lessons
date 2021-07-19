// Exemplos utilizando arrays

var pessoas = new Array("Bob", "Alice");

console.log(pessoas);

var idades = new Array(21, 22);

console.log(idades);

var outra_declaracao = ["elemento1", "elemento2", "elemento3"];

console.log(outra_declaracao);

var array_vazio = new Array(2);

console.log(array_vazio);

array_vazio[0] = "Bob";
array_vazio[1] = "Alice";

console.log(array_vazio);

let exemplo_acesso = ["posicao 1", "posicao 2", "posicao 3"];

console.log(exemplo_acesso[0]);
console.log(exemplo_acesso[1]);
console.log(exemplo_acesso[2]);

let exemplo_modificado = [1, 2, 3, 4, 5, 6];

console.log(exemplo_modificado);

exemplo_modificado[2] = 30;
exemplo_modificado[5] = 60;

console.log(exemplo_modificado);

let array1 = new Array (1, 2, 3, 4, 5);
let array2 = [1, 2, 3, 4, 5];

console.log(typeof array1);
console.log(typeof array2);

console.log(array1.length);
console.log(array2.length);

console.log(Array.isArray(array1));
console.log(Array.isArray(array2));
