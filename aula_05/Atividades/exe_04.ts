/**
 * Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. 
 * O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Colection Set, 
 * exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá 
 * exibir na tela a mensagem: O número NN não foi encontrado!
 */

import readlineSync = require('readline-sync');

const numerosDoSet: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);


// Solicitar ao usuário um número inteiro
let numero: number = readlineSync.questionInt('Digite o numero que voce deseja encontrar: ');

// Verificar se o número está presente na Collection Set
if (numerosDoSet.has(numero)) {
    console.log(`\nO numero ${numero} foi encontrado!`);
} else {
    console.log(`\nO numero ${numero} nao foi encontrado!`);
}