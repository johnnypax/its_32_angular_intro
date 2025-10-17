class Persona{
    nome?: string;
    cognome?: string;

    constructor(nom?: string, cog?: string){
        this.nome = nom;
        this.cognome = cog;
    }

    stampa(){
        return this.nome + " " + this.cognome;
    }
}

let per: Persona = new Persona();
let per2: Persona = new Persona("Giovanni");
let per3: Persona = new Persona("Giovanni", "Pace");
per3.stampa();