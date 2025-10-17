import { Component } from '@angular/core';
import { Libro } from '../../models/libro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  elenco: Libro[] = [
    {
      titolo: "Il signore degli agnelli",
      autore: "Un famoso macellaio fiorentino",
      prezzo: 10.2
    },
    {
      titolo: "Cronache del pane perduto",
      autore: "Una panettiera nostalgica di Matera",
      prezzo: 0
    },
    {
      titolo: "Il codice del pizzaiolo",
      autore: "Un hacker napoletano con la passione per la margherita",
      prezzo: 15.0
    },
    {
      titolo: "La solitudine del broccolo lontano",
      autore: "Un ortolano esistenzialista di Cesena",
      prezzo: 9.8
    },
    {
      titolo: "Harry Patate e la pentola bollente",
      autore: "Uno chef magico di Bologna",
      prezzo: 0
    },
    {
      titolo: "Il grande freddo del freezer",
      autore: "Un poeta del surgelato",
      prezzo: 11.7
    }
  ];

  tit?: string;
  aut?: string;
  pre?: number;

  salva(): void{
    let lib: Libro = {
      autore: this.aut,
      titolo: this.tit,
      prezzo: this.pre
    }

    this.elenco.push(lib)
  }

}
