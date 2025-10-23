import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Animale } from '../../models/animale';
import { AnimaleService } from '../../services/animale-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserisci',
  imports: [FormsModule],
  templateUrl: './inserisci.html',
  styleUrl: './inserisci.css'
})
export class Inserisci {

  spe?: string;
  nom?: string;
  pes?: number;
  pel?: boolean;
  pro?: string;

  constructor(private service: AnimaleService, private router: Router) {

  }

  salva(): void {
    let ani = new Animale();
    ani.specie = this.spe;
    ani.nome = this.nom;
    ani.peso = this.pes;
    ani.hasPeli = this.pel;
    ani.provenienza = this.pro;

    this.service.Inserisci(ani).then(ris => {
      if (ris) {
        alert("Stappoooo")
        this.router.navigateByUrl("elenco")
      }
      else
        alert("Errore")
    })
      .catch(e => {
        alert("ERRORE DI COMUNICAZIONE API");
        console.log(e)
      });


  }

}
