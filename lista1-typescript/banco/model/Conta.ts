export abstract class Conta{
    saldo: number;
    conta: number;
    valorizacao: number;
    rendimento:number;

    constructor(TheSaldo:number,TheConta:number){
        this.saldo = TheSaldo;
        this.conta = TheConta;
    }

    depositar(TheValue:number){
        this.saldo += TheValue;
    }

    sacar(TheValue:number){
        this.saldo-=TheValue;
    }

    valorizar(){

        let saldAntigo = this.saldo; 
        this.rendimento=(((this.valorizacao/100)+1));
        this.saldo*=this.rendimento;
        this.rendimento=this.saldo-saldAntigo;

    }
}
