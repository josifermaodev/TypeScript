import readlineSync = require('readline-sync');
import { Stack } from "../pilha/Stack";

let pilha: Stack<string> = new Stack<string>();

let continuar = true; // Variável de controle para o loop do menu


while (continuar) {
    console.log("\n=====================================");
    console.log(
        "1 - Adicionar um novo livro na pilha\n",
        "2 - Listar todos os livros na pilha\n",
        "3 - Retirar um livro da pilha\n",
        "0 - Sair"
    );
    console.log("=====================================");
    
    const opcao = readlineSync.questionInt("\nEntre com a opcao desejada: ");

    switch (opcao) {

        case 1:
            const nomeLivro = readlineSync.question("\nDigite o nome do livro: ")
            pilha.push(nomeLivro);
            console.log("Pilha: \n")
            pilha.printStack();
            console.log(`\nLivro ${nomeLivro} adicionado com sucesso!`);
            break;

        case 2:
            console.log("Pilha: \n")
            pilha.printStack();
            break;

        case 3:
            
            if (!pilha.isEmpty()) {
                const nomeLivro = pilha.pop();
                console.log("Pilha: \n")
                pilha.printStack();
                console.log(`\nLivro ${nomeLivro} retirado da pilha!`);
                
            } else {
                console.log("\nPilha vazia. Não há livros para retirar.");
            }
            break;

        case 0:
            console.clear();
            console.log("\nSaindooo... Volte sempre!")
            continuar = false;
            break;

        default:
            console.log("\nOpção inválida. Tente novamente.");
            break;
    }
}