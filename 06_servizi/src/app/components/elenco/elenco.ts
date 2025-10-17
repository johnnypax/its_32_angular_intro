import { Component } from '@angular/core';
import { Studente } from '../../models/studente';

@Component({
  selector: 'app-elenco',
  imports: [],
  templateUrl: './elenco.html',
  styleUrl: './elenco.css'
})
export class Elenco {
  listastud: Studente[] = [];
}
