class Lavoratori {
    codredd? : number;
    redditoannuo? : number;
    tasseinps?: number;
    tasseirpf?: number;
    constructor(codredd? : number, redditoannuo? : number, tasseinps?: number,tasseirpf?: number){
        this.codredd = codredd;
        this.redditoannuo = redditoannuo;
        this.tasseinps = tasseinps;
        this.tasseirpf = tasseirpf;
    };
    gettasseirpf(){
        console.log(this.tasseirpf);
    };
    gettasseinps(){
        console.log(this.tasseinps);
    };
    gettassetotali(){
        let totaletasse = this.tasseinps + this.tasseirpf;
        return totaletasse
    }
}
abstract class ingegnere extends Lavoratori {
    
}