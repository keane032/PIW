import {ContaCorrente} from  '../banco/model/ContaCorrente';
import {ContaInvestimeto} from  '../banco/model/ContaInvestimento';
import {ContaPoupanca} from '../banco/model/ContaPoupanca';

let contacorente = new ContaCorrente(2234,0);

contacorente.sacar(2);
contacorente.valorizar();


let contapoupanca = new ContaPoupanca(10,1);
contapoupanca.valorizar();
contapoupanca.sacar(1);
contapoupanca.depositar(100);
contapoupanca.extrato();

let containvestimento = new ContaInvestimeto(0,2);

containvestimento.valorizar();
containvestimento.sacar(1);
containvestimento.depositar(100);
containvestimento.extrato();