import { Component } from '@angular/core';

@Component({
  selector: 'app-contatore',
  imports: [],
  templateUrl: './contatore.html',
  styleUrl: './contatore.css'
})
export class Contatore {

  conteggio: number = 0;

  add(): void{
    this.conteggio++;
    console.log(this.conteggio)
  }
}
