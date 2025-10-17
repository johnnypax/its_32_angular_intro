import { Routes } from '@angular/router';
import { Elenco } from './components/elenco/elenco';
import { Inserisci } from './components/inserisci/inserisci';

export const routes: Routes = [
    {path: "", redirectTo: "elenco", pathMatch: "full"},
    {path: "elenco", component: Elenco},
    {path: "inserisci", component: Inserisci}
];
