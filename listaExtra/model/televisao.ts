export class Televisao{

    private volume:number = 0;
    private chanel:number = 0;

    constructor(){ }

    aumentarVolume(){
        this.volume+=1;
    }

    diminuirVolume(){
        this.volume-=1;
    }

    trocarDeCanal(){
        this.chanel+=1;
    }

    trocarParaCanal(chanel:number){
        this.chanel=chanel;
    }

    getVolume(){
        return this.volume;
    }

    getCanal(){
        return this.chanel;
    }

}