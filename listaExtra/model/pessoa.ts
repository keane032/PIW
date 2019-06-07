export class Pessoa{

    private nome : string;
    private altura: number;
    private dataNascimento: string;

    constructor(theName:string, theAltura:number, theNac:string){
        this.nome=theName;
        this.altura=theAltura;
        this.dataNascimento = theNac;
    }

    calcularIdade():number{
        
        let today:Date = new Date();

        let myBirth:Date = new Date(this.dataNascimento);

        var one_day=1000*60*60*24;
        var date1_ms = myBirth.getTime();
        var date2_ms = today.getTime();
        var difference_ms = date2_ms - date1_ms;
        return (Math.round(difference_ms/one_day))/365;
    
    }

    mostrarDado(){
        console.log("Nome:"+this.nome)
        console.log("Altura:"+this.altura)
        console.log("Naci:"+this.dataNascimento)
        console.log("idade:"+this.calcularIdade())
    }

    getNome(){
        return this.nome
    }
    
    getNac(){
        return this.dataNascimento;
    }

}