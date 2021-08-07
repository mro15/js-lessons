let cons;
function print(cons) {
  console.log(cons);
}

// declarando variáveis
let lado1,
  lado2,
  lado3,
  dia,
  x,
  y,
  sum,
  mes,
  i,
  carros,
  frutas,
  n,
  texto,
  pos,
  letra,
  banana,
  index,
  bananaAux;

// Exercício 01
print("Exercício 01");

function triangulo(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado1 == lado3) {
    print("o triângulo é equilátero");
  } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    print("o triângulo é escaleno");
  } else {
    print("o triângulo é isósceles");
  }
}

triangulo(1, 1, 1);

triangulo(1, 1, 2);

triangulo(1, 2, 3);

// Exercício 02
print("Exercício 02");

function soma_par_impar(x, y) {
  let sum = x + y;

  if ((x + y) % 2 == 0) {
    print(`A soma de ${x} + ${y} é ${sum} e é um número par`);
    return true;
  } else {
    print(`A soma de ${x} + ${y} é ${sum} e é um número ímpar`);
    return false;
  }
}

soma_par_impar(10, 10);

soma_par_impar(11, 11);

soma_par_impar(11, 10);

// Exercício 03
print("Exercício 03");

function mostra_posicao(letra) {
  texto = "abcdefghijklm";
  pos = texto.indexOf(letra);
  print(`A posição da letra ${letra} é ${pos}`);
}

mostra_posicao("f");

// Exercício 04
print("Exercício 04");

texto = "A fruta mais barata da feira é banana, a mais cara é ameixa";
bananaAux = "banana";
index = texto.indexOf(bananaAux);
banana = texto.slice(index, bananaAux.length + index);

print(banana);

// Exercício 05
print("Exercício 05");

texto = "A fruta mais barata da feira é banana, a mais cara é ameixa";
bananaAux = "ameixa";
index = texto.indexOf(bananaAux);
banana = texto.slice(index, bananaAux.length + index);

print(banana);

// Exercício 06
print("Exercício 06");

texto = "Ola mundo!";
texto = texto.replace("Ola", "Boa noite");
print(texto);

// Exercício 07
print("Exercício 07");

texto = "Ola mundo!";
texto = texto.toLocaleUpperCase();
print(texto);

// Exercício 08
print("Exercício 08");

texto = "Ola mundo!";
texto = texto.toLocaleLowerCase();
print(texto);

// Exercício 09
print("Exercício 09");

carros = ["Volvo", "Jeep", "Mercedes"];
print(carros);
carros.unshift("Ford");
print(carros);

// Exercício 10
print("Exercício 10");

frutas = ["Banana", "Maça", "Laranja"];
print(frutas);
frutas.pop();
print(frutas);

// Exercício 11
print("Exercício 11");

frutas = ["Banana", "Maça", "Laranja"];
print(frutas);
frutas.shift();
print(frutas);

// Exercício 12
print("Exercício 12");

frutas = ["Banana", "Maça", "Laranja"];
print(frutas);
frutas.push("Manga");
print(frutas);

// Exercício 13
print("Exercício 13");

function exibe_pares(n) {
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      print(i);
    }
  }
}

exibe_pares(20);
