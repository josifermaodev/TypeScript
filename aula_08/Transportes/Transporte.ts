export class Transporte{
    private _capacidade: number;

    constructor(capacidade: number){
        this._capacidade = capacidade;
    }
    
    public get capacidade(): number{
        return this._capacidade;
    }
    
    public set capacidade(capacidade: number){ 
        this._capacidade = capacidade;
    }

    public visualizar(){
        console.log("\n==============================================");
        console.log(`===========  Dados da transporte  ============`);
        console.log("==============================================");
        console.log(` Capacidade do transporte: ${this._capacidade}`);
        
    }
}