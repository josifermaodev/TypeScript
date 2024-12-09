/**
 * Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. 
 * O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado
 *  no Array, exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, o programa 
 * deverá exibir na tela a mensagem: O número NN não foi encontrado!
 */

import readlineSync = require('readline-sync');

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]; // Array inicializado com valores inteiros

let numero: number;

// Solicitando ao usuário um número inteiro

do {
    numero = readlineSync.questionInt('Digite o numero que voce deseja encontrar: ');
} while (isNaN(numero));

// Verificando se o número existe no Array

if (numeros.includes(numero)) {
    console.log(`O numero ${numero} foi encontrado na posiçao ${numeros.indexOf(numero)}`); // a função indexOf(numero) imprime o indice no numero
} else {
    console.log(`O numero ${numero} nao foi encontrado!`);  
}
