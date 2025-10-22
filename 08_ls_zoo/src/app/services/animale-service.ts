import { Injectable } from '@angular/core';
import { Animale } from '../models/animale';

@Injectable({
  providedIn: 'root'
})
export class AnimaleService {

  constructor() {
    let elencoStringa = localStorage.getItem("zoo");
    if (!elencoStringa)
      localStorage.setItem("zoo", JSON.stringify([]))
  }

  RestituisciTutti(): Animale[] {
    let elencoStringa = localStorage.getItem("zoo");
    if (elencoStringa) {
      let elenco: Animale[] = JSON.parse(elencoStringa);
      return elenco;
    }

    return [];
  }

  Inserisci(ani: Animale): boolean {
    let elencoStringa = localStorage.getItem("zoo");
    if (elencoStringa) {
      let elenco: Animale[] = JSON.parse(elencoStringa);
      elenco.push(ani);
      localStorage.setItem("zoo", JSON.stringify(elenco));

      return true;
    }

    return false;

  }

  CercaPerId(varId: number): Animale | null {
    // for (let [index, item] of this.elenco.entries()) {
    //   if (item.id === varId)
    //     return item;
    // }

    return null;
  }

  Elimina(varId: number): boolean {
    // for (let [index, item] of this.elenco.entries()) {
    //   if (item.id === varId) {
    //     this.elenco.splice(index, 1);
    //     return true;
    //   }
    // }

    return false;
  }

}
