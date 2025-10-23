import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimaleService } from '../../services/animale-service';
import { Animale } from '../../models/animale';

@Component({
  selector: 'app-elenco',
  imports: [CommonModule],
  templateUrl: './elenco.html',
  styleUrl: './elenco.css'
})
export class Elenco {

  lista: Animale[] = [];

  constructor(private service: AnimaleService) {

  }

  ngOnInit() {
    this.Aggiorna();
  }

  private Aggiorna(): void {
    this.service.RestituisciTutti()
      .then(c => {
        this.lista = c;
      })
      .catch(e => {
        alert("ERRORE DI COMUNICAZIONE API");
        console.log(e)
      });
  }

  elimina(id?: number) {
    if (id) {
      if (this.service.Elimina(id)) {
        this.Aggiorna();
        alert("STAPPOOOOOOOOO")
      }
      else
        alert("ERRORE")
    }

  }

}
