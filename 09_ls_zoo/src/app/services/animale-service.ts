import { Injectable } from '@angular/core';
import { Animale } from '../models/animale';

@Injectable({
  providedIn: 'root'
})
export class AnimaleService {

  // constructor() {
  //   let elencoStringa = localStorage.getItem("zoo");
  //   if (!elencoStringa)
  //     localStorage.setItem("zoo", JSON.stringify([]))
  // }

  private ScaricaElenco(): Animale[]{
    let elencoStringa = localStorage.getItem("zoo");
    if (!elencoStringa){
      localStorage.setItem("zoo", JSON.stringify([]))
      return [];
    }
    else{
      return JSON.parse(elencoStringa);
    }
  }

  RestituisciTutti(): Animale[] {
    return this.ScaricaElenco();
  }

  Inserisci(ani: Animale): boolean {
      let elenco: Animale[] = this.ScaricaElenco();
      ani.id = elenco.length + 1;
      elenco.push(ani);
      localStorage.setItem("zoo", JSON.stringify(elenco));

      return true;
  }

  CercaPerId(varId: number): Animale | null {
    for (let [index, item] of this.ScaricaElenco().entries()) {
      if (item.id === varId)
        return item;
    }

    return null;
  }

  Elimina(varId: number): boolean {
    let elenco = this.ScaricaElenco();

    for (let [index, item] of elenco.entries()) {
      if (item.id === varId) {
        elenco.splice(index, 1);
        localStorage.setItem("zoo", JSON.stringify(elenco))
        return true;
      }
    }

    return false;
  }

}
