import {Pessoa} from '../listaExtra/model/pessoa';
import {Elevador} from '../listaExtra/model/elevador';
import {ControleRemoto} from '../listaExtra/model/controleremoto';
import {Televisao} from '../listaExtra/model/televisao';

let tv = new Televisao();
let controle = new ControleRemoto(tv);
let pessoa = new Pessoa('roy',1.23,'1996-11-21');
let elevador = new Elevador(5,5);

console.log("PESSOA")
console.log(pessoa.calcularIdade());
pessoa.mostrarDado()

console.log("ELEVADOR")
elevador.descer();
elevador.subir();
elevador.entrar();
elevador.sair();

console.log("CONTROLE")
controle.aumentarVolume();
controle.diminuirVolume();
controle.aumentarVolume();
controle.trocarDeCanal();
controle.trocarParaCanal(6);
console.log(controle.getCanal());
console.log(controle.getVolume());