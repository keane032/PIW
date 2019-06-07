export class Elevador{
    private andarAtual:number = 0;
    private totalAndar:number;
    private capacidade:number;
    private pessoas:number = 0;
    
    
    constructor(theTotal:number,theCapacidade:number){
            this.capacidade=theCapacidade;
            this.totalAndar=theTotal;
    }
 

    public setAndarAtual(andarAtual:number) {
        this.andarAtual = andarAtual;
    }

    public getTotalAndar(): number {
        return this.totalAndar;
    }

    public getAndarAtual() {
        return this.andarAtual;
    }

    public setTotalAndar(totalAndar: number): void {
        this.totalAndar = totalAndar;
    }

    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(capacidade: number): void {
        this.capacidade = capacidade;
    }

    public getPessoas(){
        return this.pessoas;
    }

    public setPessoas(pessoas:number): void {
        this.pessoas = pessoas;
    }


    subir(){
        if(this.totalAndar > (this.andarAtual+1)){
            this.andarAtual+=1;
            console.log("subiu um andar")
        }else{
            console.log("Ultimo andar")
        } 
    }

    descer(){
        if(this.andarAtual > 0){
            this.andarAtual-=1;
            console.log("deceu um andar")
        }else{
            console.log("Nao da mais para decer")
        } 
    }

    entrar(){
        if(this.capacidade > (this.pessoas+1)){
            this.pessoas+=1;
            console.log("entrou")
        }else{
            console.log("elevador cheio")
        }
    }

    sair(){
        if(this.pessoas > 0){
            this.pessoas-=1;
            console.log("saiu")
        }else{
            console.log("elevador vazio")
        }
    }



}
