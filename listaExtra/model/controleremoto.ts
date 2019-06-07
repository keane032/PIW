import {Televisao} from '../model/televisao';

export class ControleRemoto{
    
    private tv:Televisao;

    constructor(theTv:Televisao){
        this.tv=theTv;
    }


    aumentarVolume(){
        this.tv.aumentarVolume();
    }

    diminuirVolume(){
        this.tv.diminuirVolume();
    }

    trocarDeCanal(){
        this.tv.trocarDeCanal();
    }


    trocarParaCanal(chanel:number){
        this.tv.trocarParaCanal(chanel);
    }

    getVolume(){
        return this.tv.getVolume();
    }

    getCanal(){
       return this.tv.getCanal();
    }

}
