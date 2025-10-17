import { Component } from '@angular/core';

@Component({
  selector: 'app-interagisci',
  imports: [],
  templateUrl: './interagisci.html',
  styleUrl: './interagisci.css'
})
export class Interagisci {

  nome: string = "Giovanni";
  cognome: string = "Pace";

  cliccami(): void{
    alert("Ciao, " + this.nome)
  }

}
