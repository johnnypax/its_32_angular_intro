import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  elenco: string[] = ["Giovanni", "Valeria", "Marika"]
  nome?: string;

  aggiungi(): void{
    if(this.nome)
      this.elenco.push(this.nome);
  }

}
