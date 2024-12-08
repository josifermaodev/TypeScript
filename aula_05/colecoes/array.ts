import readlinesync = require('readline-sync');

//criamos a array vazia
const numeros: Array<number> = new Array<number>();

//adicionamos os valores na coleção
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7);

//listamos os dados que foram adicionados
for(let numero of numeros) {
    console.log(numero);
}

//adicionamos um numero pelo terminal
numeros.push(readlinesync.questionFloat('Digite um numero: '))

//unshift adiciona elementos no começo do array (fura filas)
numeros.unshift(2, 4.5, 8, 9) 

console.table(numeros)

//verificamos se um numero existe na coleção
console.log("\nExiste o numero 5 no Array? ", numeros.includes(5))

//verificamos o indice do numero 3 no Array
console.log("\nQual é o indice do numero 3 no Array? ", numeros.indexOf(2))

//Removemos um numero da coleção
numeros.splice(numeros.indexOf(10), 1)

console.table(numeros)

