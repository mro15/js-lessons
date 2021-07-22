let cons;
function print(cons) {
  console.log(cons);
}

// declarando variáveis
let lado1, lado2, lado3, dia, x, y, sum, mes, i;

// Exercício 01
print("Exercício 01");

lado1 = 1;
lado2 = 1;
lado3 = 1;

if (lado1 == lado2 && lado1 == lado3) {
  print("o triângulo é equilátero");
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
  print("o triângulo é escaleno");
} else {
  print("o triângulo é isósceles");
}

lado1 = 1;
lado2 = 1;
lado3 = 2;

if (lado1 == lado2 && lado1 == lado3) {
  print("o triângulo é equilátero");
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
  print("o triângulo é escaleno");
} else {
  print("o triângulo é isósceles");
}

lado1 = 1;
lado2 = 2;
lado3 = 3;

if (lado1 == lado2 && lado1 == lado3) {
  print("o triângulo é equilátero");
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
  print("o triângulo é escaleno");
} else {
  print("o triângulo é isósceles");
}

// Exercício 02
print("Exercício 02");

x = 10;
y = 10;
sum = x + y;

if ((x + y) % 2 == 0) {
  print(`A soma de ${x} + ${y} é ${sum} e é um número par`);
} else {
  print(`A soma de ${x} + ${y} é ${sum} e é um número ímpar`);
}

x = 11;
y = 11;
sum = x + y;

if ((x + y) % 2 == 0) {
  print(`A soma de ${x} + ${y} é ${sum} e é um número par`);
} else {
  print(`A soma de ${x} + ${y} é ${sum} e é um número ímpar`);
}
x = 11;
y = 10;
sum = x + y;

if ((x + y) % 2 == 0) {
  print(`A soma de ${x} + ${y} é ${sum} e é um número par`);
} else {
  print(`A soma de ${x} + ${y} é ${sum} e é um número ímpar`);
}

// Exercício 03
print("Exercício 03");

for (dia = 1; dia <= 8; dia++) {
  switch (dia) {
    case 1:
      print("Domingo");
      break;
    case 2:
      print("Segunda");
      break;
    case 3:
      print("Terça");
      break;
    case 4:
      print("Quarta");
      break;
    case 5:
      print("Quinta");
      break;
    case 6:
      print("Sexta");
      break;
    case 7:
      print("Sábado");
      break;
    default:
      print("Nenhum dia");
  }
}

// Exercício 04
print("Exercício 04");

mes = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

mes.forEach((e) => {
  switch (e) {
    case "janeiro":
    case "março":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
      print(`${e} tem 31 dias.`);
      break;
    case "fevereiro":
      print(`${e} tem 28 ou 29 dias.`);
      break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
      print(`${e} tem 30 dias.`);
      break;
  }
});

// Exercício 05
print("Exercício 05");

i = 0;

while (i < 15) {
  print(`${i} é menor que 15 no WHILE`);
  i++;
}

// Exercício 06
print("Exercício 06");

i = 0;

do {
  print(`${i} é menor que 15 no DO WHILE.`);
  i++;
} while (i < 15);

//Exercício 07
print("Exercício 07");

for (i = 0; i < 15; i++) {
  print(`${i} é menor que 15 no FOR`);
}

//Exercício 08
print("Exercício 08");

i = 0;

while (i < 20) {
  print(`${i} menor que 20, incremento de 2`);
  i = i + 2;
}

// Exercício 09
print("Exercício 09");

i = 0;

do {
  print(`${i} é menor que 20 no DO WHILE.`);
  i = i + 2;
} while (i < 20);

//Exercício 10
print("Exercício 10");

for (i = 0; i < 20; i = i + 2) {
  print(`${i} é menor que 20 no FOR`);
}

// Exercício 11
print("Exercício 11");

i = 1;

while (i <= 20) {
  if (i % 2 == 0) {
    print(i);
  }
  i++;
}

// Exercício 12
print("Exercício 12");

i = 1;

do {
  if (i % 2 == 0) {
    print(i);
  }
  i++;
} while (i <= 20);

// Exercício 13
print("Exercício 13");

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    print(i);
  }
}

// Exercício 14
print("Exercício 14");

i = 1;

while (i <= 20) {
  if (i % 2 != 0) {
    print(i);
  }
  i++;
}

// Exercício 15
print("Exercício 15");

i = 1;

do {
  if (i % 2 != 0) {
    print(i);
  }
  i++;
} while (i <= 20);

// Exercício 16
print("Exercício 16");

for (i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    print(i);
  }
}


