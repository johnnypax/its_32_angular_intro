import { Injectable } from '@angular/core';
import { Animale } from '../models/animale';

@Injectable({
  providedIn: 'root'
})
export class AnimaleService {

  private elenco: Animale[] = [
    {
      nome: "Leo",
      specie: "Leone",
      peso: 190,
      hasPeli: true,
      provenienza: "Africa"
    },
    {
      nome: "Polly",
      specie: "Pappagallo",
      peso: 1.2,
      hasPeli: false,
      provenienza: "Sud America"
    },
    {
      nome: "Nemo",
      specie: "Pesce Pagliaccio",
      peso: 0.3,
      hasPeli: false,
      provenienza: "Oceano Pacifico"
    },
    {
      nome: "Luna",
      specie: "Gatto",
      peso: 4.5,
      hasPeli: true,
      provenienza: "Europa"
    },
    {
      nome: "Benny",
      specie: "Orso Polare",
      peso: 450,
      hasPeli: true,
      provenienza: "Artico"
    }
  ];

}
