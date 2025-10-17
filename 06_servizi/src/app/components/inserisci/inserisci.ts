import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Studente } from '../../models/studente';

@Component({
  selector: 'app-inserisci',
  imports: [FormsModule],
  templateUrl: './inserisci.html',
  styleUrl: './inserisci.css'
})
export class Inserisci {

  nom?: string
  cog?: string
  mat?: number

  salva(): void{
    let stu: Studente = {
      nome: this.nom,
      cognome: this.cog,
      matricola: this.mat
    }

    console.log(stu);
  }

}
