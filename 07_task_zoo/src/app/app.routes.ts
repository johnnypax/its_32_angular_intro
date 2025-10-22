import { Routes } from '@angular/router';
import { Inserisci } from './components/inserisci/inserisci';
import { Elenco } from './components/elenco/elenco';

export const routes: Routes = [
    {path: "", redirectTo: "elenco", pathMatch: "full"},
    {path: "inserisci", component: Inserisci},
    {path: "elenco", component: Elenco}
];
