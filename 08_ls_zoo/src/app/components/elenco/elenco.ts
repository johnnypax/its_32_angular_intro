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
    this.lista = this.service.RestituisciTutti();
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
