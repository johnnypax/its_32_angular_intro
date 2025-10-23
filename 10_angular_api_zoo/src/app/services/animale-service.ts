import { Injectable } from '@angular/core';
import { Animale } from '../models/animale';

@Injectable({
  providedIn: 'root'
})
export class AnimaleService {

  async RestituisciTutti(): Promise<Animale[]> {
    let risposta = await fetch("http://localhost:3000/animali");

    if (risposta.ok) {
      let dati: Animale[] = await risposta.json();
      return dati;
    }

    return [];
  }

  async Inserisci(ani: Animale): Promise<boolean> {
    let risposta = await fetch("http://localhost:3000/animali", {
      method: "POST",
      body: JSON.stringify(ani),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if(risposta.ok)
      return true;

    return false;
  }

  CercaPerId(varId: number): Animale | null {
    return null;
  }

  Elimina(varId: number): boolean {
    return false;
  }

}
