import {Conta} from '../model/Conta';

class ContaCorrente extends Conta{
    
    constructor(TheSaldo:number,TheConta:number){
        super(TheSaldo,TheConta)
        this.valorizacao=0
    }

    sacar(TheValue:number){
        if((this.saldo-2) > TheValue){
            super.sacar(TheValue);
            super.sacar(2)
        }else{
            console.log("saldo insufuciente")
        }
    }

    valorizar(){
        super.valorizar();
    }

}


export {ContaCorrente}