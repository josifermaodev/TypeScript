
export abstract class Pessoa {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }
    
    public get nome(): string {
        return this._nome;
    }

    abstract cansou(): void;
    
    public visualizar(){

        console.log("\n==============================================");
        console.log(`=============  Dados da Pessoa  ==============`);
        console.log("==============================================");
        console.log(`Nome do Atleta: ${this._nome}`);
    }
}