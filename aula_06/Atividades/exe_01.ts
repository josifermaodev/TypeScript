import readlinesync = require('readline-sync');
import { Queue } from '../fila/Queue';

const fila = new Queue<string>();
let continuar = true;


console.log("\n***********************************")
console.log(
    "1 - Adicionar Cliente na fila\n",
    "2 - Listar todos os Clientes\n",
    "3 - Retirar Cliente da fila\n",
    "0 - Sair"
)
console.log("***********************************\n")

while (continuar) {

    let opcaoEscolhida = readlinesync.questionInt('\nDigite o numero correspondente a opcao desejada: ');

    switch(opcaoEscolhida){

        case 1:
            const nome = readlinesync.question('Nome do(a) Cliente: ');
            fila.enqueue(nome);
            console.log(`\nCliente ${nome} adicionado(a) com sucesso!\n`); 
            break;

        case 2:
            console.log("\nFila: \n")
            fila.printQueue();
            break;

        case 3:
            const clienteChamado = fila.dequeue();
            console.log("\nFila: \n")
            fila.printQueue();
            if (clienteChamado) {
                console.log(`\nCliente ${clienteChamado} foi removido da fila!`);
            } else {
                console.log('\nA fila está vazia, Tente novamente!');
            }
            break;

        case 0: 
            console.clear();
            console.log("\nSaindo...");
            continuar = false; // Sai do loop 
            break;  

        default:
            console.log("Opção inválida! Tente novamente.\n");
    }
}




