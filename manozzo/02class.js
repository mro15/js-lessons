let cons;
function print (cons) {
    console.log(cons);
}
// declarando variáveis
let nome, sobrenome, altura, idade, redesSociais, URL;
let x, y;
let a, b;

// Exercício 01
print('Exercício 01');


nome = "Rodrigo";
sobrenome = "Manozzo";
altura = 179;
idade = 31;
redesSociais = true;
URL = "https://github.com/manozzo";

print(`Nome é ${nome}`);
print(`Sobrenomme é ${sobrenome}`);
print(`Altura é ${altura}`);
print(`Idade é ${idade}`);
print(`Tem redes sociais? ${redesSociais}`);
print(`O link do GitHub é ${URL}`);

// Exercício 02
print('Exercício 02');

print(`a variável é nome, o valor é ${nome}, e o tipo é ${typeof(nome)}.`);
print(`a variável é sobrenome, o valor é ${sobrenome}, e o tipo é ${typeof(sobrenome)}.`);
print(`a variável é altura, o valor é ${altura}, e o tipo é ${typeof(altura)}.`);
print(`a variável é idade, o valor é ${idade}, e o tipo é ${typeof(idade)}.`);
print(`a variável é redesSociais, o valor é ${redesSociais}, e o tipo é ${typeof(redesSociais)}.`);
print(`a variável é URL, o valor é ${URL}, e o tipo é ${typeof(URL)}.`);

// Exercício 03/04
print('Exercício 03/04');

const pessoa = {
    nome : "Rodrigo",
    sobrenome : "Manozzo",
    altura : 179,
    idade : 31,
    redesSociais : true,
    URL : "https://github.com/manozzo"
};

print(`a variável é nome, o valor é ${pessoa.nome}, e o tipo é ${typeof(pessoa.nome)}.`);
print(`a variável é sobrenome, o valor é ${pessoa.sobrenome}, e o tipo é ${typeof(pessoa.sobrenome)}.`);
print(`a variável é altura, o valor é ${pessoa.altura}, e o tipo é ${typeof(pessoa.altura)}.`);
print(`a variável é idade, o valor é ${pessoa.idade}, e o tipo é ${typeof(pessoa.idade)}.`);
print(`a variável é redesSociais, o valor é ${pessoa.redesSociais}, e o tipo é ${typeof(pessoa.redesSociais)}.`);
print(`a variável é URL, o valor é ${pessoa.URL}, e o tipo é ${typeof(pessoa.URL)}.`);

// Exercício 05
print('Exercício 05');

x = 10;
y = 5;

print(`X: ${x+=y}`)

// Exercício 06
print('Exercício 06');

print(`X: ${x-=y}`)

// Exercício 07
print('Exercício 07');

print(`X: ${x*=y}`)

// Exercício 08
print('Exercício 08');

print(`X: ${x/=y}`)

// Exercício 09
print('Exercício 09');

const livro = {
    autor : 'Tolkien',
    titulo: 'A Sociedade do Anel'
};

print(livro.autor);
print(livro.titulo);

// Exercício 10
print('Exercício 10');

x = 10;
y = 50;

if (x > y) {
    print(true);
} else {
    print(false);
};

x = 50;
y = 50;

if (x > y) {
    print(true);
} else {
    print(false);
};

x = 50;
y = 10;

if (x > y) {
    print(true);
} else {
    print(false);
};

// Exercício 11
print('Exercício 11');

x = 10;
y = 50;

if (x < y) {
    print(true);
} else {
    print(false);
};

x = 50;
y = 50;

if (x < y) {
    print(true);
} else {
    print(false);
};

x = 50;
y = 10;

if (x < y) {
    print(true);
} else {
    print(false);
};

// Exercício 12
print('Exercício 12');

x = 10;
y = 50;

if (x == y) {
    print(true);
} else {
    print(false);
};

x = 50;
y = 50;

if (x == y) {
    print(true);
} else {
    print(false);
};

x = 50;
y = 10;

if (x == y) {
    print(true);
} else {
    print(false);
};

// Exercício 13
print('Exercício 13');

x = 10;
y = 50;

if (x != y) {
    print(true);
} else {
    print(false);
};

x = 50;
y = 50;

if (x != y) {
    print(true);
} else {
    print(false);
};

x = 50;
y = 10;

if (x != y) {
    print(true);
} else {
    print(false);
};

// Exercício 14
print('Exercício 14');

a = 1;
b = 10;

if (a == b) {
    print(true);
} else {
    print(false);
};

a = 1;
b = 1;

if (a == b) {
    print(true);
} else {
    print(false);
};

a = 1;
b = '1';

if (a == b) {
    print(true);
} else {
    print(false);
};

// Exercício 15
print('Exercício 15');

a = 1;
b = 10;

if (a != b) {
    print(true);
} else {
    print(false);
};

a = 1;
b = 1;

if (a != b) {
    print(true);
} else {
    print(false);
};

a = 1;
b = '1';

if (a != b) {
    print(true);
} else {
    print(false);
};

// Exercício 16
print('Exercício 16');

a = 1;
b = 10;

if (a === b) {
    print(true);
} else {
    print(false);
};

a = 1;
b = 1;

if (a === b) {
    print(true);
} else {
    print(false);
};

a = 1;
b = '1';

if (a === b) {
    print(true);
} else {
    print(false);
};

// Exercício 17
print('Exercício 17');

a = 1;
b = 10;

if (a !== b) {
    print(true);
} else {
    print(false);
};

a = 1;
b = 1;

if (a !== b) {
    print(true);
} else {
    print(false);
};

a = 1;
b = '1';

if (a !== b) {
    print(true);
} else {
    print(false);
};

// Exercício 18
print('Exercício 18');

a = true;
b = true;

if (a || b) {
    print(true);
} else {
    print(false);
};

a = false;
b = true;

if (a || b) {
    print(true);
} else {
    print(false);
};

a = true;
b = false;

if (a || b) {
    print(true);
} else {
    print(false);
};

a = false;
b = false;

if (a || b) {
    print(true);
} else {
    print(false);
};

// Exercício 19
print('Exercício 19');

a = true;
b = true;

if (a && b) {
    print(true);
} else {
    print(false);
};

a = false;
b = true;

if (a && b) {
    print(true);
} else {
    print(false);
};

a = true;
b = false;

if (a && b) {
    print(true);
} else {
    print(false);
};

a = false;
b = false;

if (a || b) {
    print(true);
} else {
    print(false);
};

// Exercício 20
print('Exercício 20');

a = true;
b = true;

if (a || b) {
    print(false);
} else {
    print(true);
};

a = false;
b = true;

if (a || b) {
    print(false);
} else {
    print(true);
};

a = true;
b = false;

if (a || b) {
    print(false);
} else {
    print(true);
};

a = false;
b = false;

if (a || b) {
    print(false);
} else {
    print(true);
};

// Exercício 21
print('Exercício 21');

a = true;
b = true;

if (a && b) {
    print(false);
} else {
    print(true);
};

a = false;
b = true;

if (a && b) {
    print(false);
} else {
    print(true);
};

a = true;
b = false;

if (a && b) {
    print(false);
} else {
    print(true);
};

a = false;
b = false;

if (a || b) {
    print(false);
} else {
    print(true);
};