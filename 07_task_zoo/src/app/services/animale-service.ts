import { Injectable } from '@angular/core';
import { Animale } from '../models/animale';

@Injectable({
  providedIn: 'root'
})
export class AnimaleService {

  private elenco: Animale[] = [
    {
      id: 1,
      nome: "Leo",
      specie: "Leone",
      peso: 190,
      hasPeli: true,
      provenienza: "Africa"
    },
    {
      id: 2,
      nome: "Polly",
      specie: "Pappagallo",
      peso: 1.2,
      hasPeli: false,
      provenienza: "Sud America"
    },
    {
      id: 3,
      nome: "Nemo",
      specie: "Pesce Pagliaccio",
      peso: 0.3,
      hasPeli: false,
      provenienza: "Oceano Pacifico"
    },
    {
      id: 4,
      nome: "Luna",
      specie: "Gatto",
      peso: 4.5,
      hasPeli: true,
      provenienza: "Europa"
    },
    {
      id: 5,
      nome: "Benny",
      specie: "Orso Polare",
      peso: 450,
      hasPeli: true,
      provenienza: "Artico"
    }
  ];

  Inserisci(ani: Animale): boolean {
    ani.id = this.elenco.length + 1;
    this.elenco.push(ani);
    return true;
  }

  RestituisciTutti(): Animale[] {
    return this.elenco;
  }

  CercaPerId(varId: number): Animale | null {
    for (let [index, item] of this.elenco.entries()) {
      if (item.id === varId)
        return item;
    }

    return null;
  }

  Elimina(varId: number): boolean {
    for (let [index, item] of this.elenco.entries()) {
      if (item.id === varId) {
        this.elenco.splice(index, 1);
        return true;
      }
    }

    return false;
  }

}
