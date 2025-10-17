import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Studente } from '../../models/studente';
import { StudenteService } from '../../services/studente-service';
import { Router } from '@angular/router';

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

  constructor(private service: StudenteService, private router: Router) { }

  salva(): void{
    let stud: Studente = {
      nome: this.nom,
      cognome: this.cog,
      matricola: this.mat
    }

    if(this.service.insert(stud)){
      alert("STaPPPOOOoO")
      this.router.navigateByUrl("elenco")
    }
      
    else
      alert("Errore")
  }

}
