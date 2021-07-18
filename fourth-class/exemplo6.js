let super_exemplo = new String("EssA eh UmA strinG BEM diFErente!");

console.log(super_exemplo.toLowerCase());
console.log(super_exemplo.toUpperCase());

let nome = new String("Marcela");
let nome_completo = nome.concat(" Ribeiro", " de Oliveira");

console.log(nome);
console.log(nome_completo);

console.log("Unsando substr()");
console.log(nome_completo.substr(0,7));
console.log(nome_completo.substr(8,7));
console.log(nome_completo.substr(8,));

console.log("Unsando substring()");
console.log(nome_completo.substring(0,7));
console.log(nome_completo.substring(8,15));
console.log(nome_completo.substring(8,));

console.log("indexOf()");
console.log(nome_completo.indexOf("de"));
console.log(nome_completo.indexOf("Oliveira"));
console.log(nome_completo.indexOf("Marcela"));
console.log(nome_completo.indexOf("Antonia"));

let exemplo_replace = new String("Alice e Bob são exemplos comuns");
let sem_alice = exemplo_replace.replace("Alice", "");
let sem_bob = exemplo_replace.replace("Bob", "");
let sem_os_dois = exemplo_replace.replace("Alice e Bob", "");

console.log(exemplo_replace);
console.log(sem_alice);
console.log(sem_bob);
console.log(sem_os_dois);

let string_espacosa = new String(" esse é um exemplo de string contendo espaços ");
let sem_espacos = string_espacosa.trim();

console.log(string_espacosa);
console.log(sem_espacos);

let sem_espacos_inicio = string_espacosa.trimStart();

console.log(string_espacosa);
console.log(sem_espacos_inicio);

let sem_espacos_final = string_espacosa.trimEnd();

console.log(string_espacosa);
console.log(sem_espacos_final);

let exemplo_pad = new String("Alice e Bob");
exemplo_pad_start = exemplo_pad.padStart(40, "Pessoas: ");

console.log(exemplo_pad);
console.log(exemplo_pad_start);

exemplo_pad_end = exemplo_pad.padEnd(40, "Pessoas: ");

console.log(exemplo_pad);
console.log(exemplo_pad_end);

let frase = new String("Alice e Bob, Bob e Alice, Alice e Bob, Bob e Alice");

let split_espaco = frase.split(' ');
let split_virgula = frase.split(',');
let split_e = frase.split('e');

console.log(frase);
console.log(split_espaco);
console.log(split_virgula);
console.log(split_e);

let exemplo_slice = new String("Fatias de pizza são slices");
console.log(exemplo_slice.slice(0, 6));
console.log(exemplo_slice.slice(0, 10));
console.log(exemplo_slice.slice(7, 9));
console.log(exemplo_slice.slice(10, 16));
console.log(exemplo_slice.slice(20,));

let exemplo_includes = new String("Alice e Bob");
console.log(exemplo_includes.includes("Alice"));
console.log(exemplo_includes.includes("Bob"));
console.log(exemplo_includes.includes("aluno"));
console.log(exemplo_includes.includes("alice"));
console.log(exemplo_includes.includes("bob"));
