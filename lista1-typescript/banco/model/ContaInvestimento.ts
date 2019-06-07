import {Conta} from '../model/Conta';

class ContaInvestimeto extends Conta{
    
    selic:number = 2;

    constructor(TheSaldo:number,TheConta:number){
        super(TheSaldo,TheConta)
        this.valorizacao=this.selic
    }

    sacar(TheValue:number){
        var taxa = (TheValue * (5/100));
        taxa += 10;
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
        console.log("tipo..Conta Investimento")
        console.log("Saldo.."+this.saldo)
        console.log("Conta.."+this.conta)
        console.log("Valorizacao.."+this.valorizacao)
    }

}


export {ContaInvestimeto}