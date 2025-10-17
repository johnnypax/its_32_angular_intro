import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contatore } from './contatore/contatore';
import { Lista } from './lista/lista';

@Component({
  selector: 'app-root',
  imports: [Contatore, Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03_contenitori');
}
