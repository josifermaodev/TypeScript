/**
 * Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
 * O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. 
 * Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
 */


import readlineSync = require('readline-sync');

const cores: Array<string> = []; // Array vazio para armazenar as cores

// repetição para coletar as cores
for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`\nDigite a cor ${i + 1}: `);
    cores.push(cor); // Adiciona a cor ao array
}

console.log("\nCores adicionadas:");
for (let cor of cores) {
    console.log(cor);
}

// Ordenar as cores
const ordem: Array<string> = Array.from(cores).sort();

console.log("\nCores em ordem alfabética:");

console.table(ordem);


