/**
Escreva um programa para criar uma Collection Set do tipo number. 
O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e a
dicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set. 
 */

import readlineSync = require('readline-sync');

const numeros: Set<number> = new Set(); // Set vazio para armazenar os numeros

// repetição para coletar os numeros

for (let i = 0; i < 10; i++) {
    const numero = readlineSync.questionInt(`\nDigite o ${i + 1}(o) numero: `);

    // // implementei uma verificação, para identificar se o numero já existe no set 
    // if (numeros.has(numero)) {
    //     console.log(`\nNumero ${numero} ja existe. Por favor, digite outro numero.`);
    //     i--; // volta para o loop anterior para pedir que o usuário digite o numero novamente.
    //     continue;
    // }
    numeros.add(numero); // adiciona o numero ao set numeros
}

console.log("\nTodos os elementos da Collection Set:");

// percorrendo e mostrando os numeros em ordem crescente
const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);
numerosOrdenados.forEach(numero => console.log(numero));
