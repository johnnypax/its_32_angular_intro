import { Component } from '@angular/core';
import { Studente } from '../../models/studente';
import { StudenteService } from '../../services/studente-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elenco',
  imports: [CommonModule],
  templateUrl: './elenco.html',
  styleUrl: './elenco.css'
})
export class Elenco {
  listastud: Studente[] = [];

  constructor(private service: StudenteService){
  }

  ngOnInit(){
    this.listastud = this.service.readAll();
  }
}
