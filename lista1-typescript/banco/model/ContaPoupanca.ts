import {Conta} from '../model/Conta';

export class ContaPoupanca extends Conta{
    

    constructor(TheSaldo:number,TheConta:number){
        super(TheSaldo,TheConta)
        this.valorizacao = 2;
    }

    sacar(TheValue:number){
            let taxa = (TheValue * (1 - (2/100)));
        if((this.saldo - TheValue) > taxa){
            super.sacar(TheValue)
            super.sacar(taxa)
        }else{
            console.log("saldo insufuciente")
        }
    }

    valorizar(){
        super.valorizar();
    }

    extrato(){
        console.log("EXTRATO")
        console.log("tipo..Conta Poupoanca")
        console.log("Saldo.."+this.saldo)
        console.log("Conta.."+this.conta)
        console.log("Valorizacao.."+this.valorizacao)
        console.log("rendimento.."+this.rendimento)
    }

}
