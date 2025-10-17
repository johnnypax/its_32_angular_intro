import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Interagisci } from './interagisci/interagisci';

@Component({
  selector: 'app-root',
  imports: [Interagisci],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(){
    // debugger;
    console.log("Ho invocato il costruttore di APP")

    let a = 5;
    let b = 6;
    let somma = a + b;

    console.log(somma);
  }

}
