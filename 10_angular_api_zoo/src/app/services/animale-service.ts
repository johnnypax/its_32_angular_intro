import { Injectable } from '@angular/core';
import { Animale } from '../models/animale';

@Injectable({
  providedIn: 'root'
})
export class AnimaleService {

  RestituisciTutti(): Animale[] {
    return [];
  }

  Inserisci(ani: Animale): boolean {
    return false;
  }

  CercaPerId(varId: number): Animale | null {
    return null;
  }

  Elimina(varId: number): boolean {
    return false;
  }

}
