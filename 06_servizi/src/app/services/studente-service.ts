import { Injectable } from '@angular/core';
import { Studente } from '../models/studente';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  elenco: Studente[] = [
    {
      nome: "Luca",
      cognome: "Rossi",
      matricola: 10234
    },
    {
      nome: "Giulia",
      cognome: "Bianchi",
      matricola: 10567
    },
    {
      nome: "Marco",
      cognome: "Verdi",
      matricola: 10987
    }
  ];

  readAll(): Studente[]{
    return this.elenco
  }

  insert(stu: Studente): boolean{
    this.elenco.push(stu)
    return true;
  }

}
