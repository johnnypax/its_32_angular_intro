var Persona = /** @class */ (function () {
    function Persona(nom, cog) {
        this.nome = nom;
        this.cognome = cog;
    }
    Persona.prototype.stampa = function () {
        return this.nome + " " + this.cognome;
    };
    return Persona;
}());
var per = new Persona();
var per2 = new Persona("Giovanni");
var per3 = new Persona("Giovanni", "Pace");
per3.stampa();
