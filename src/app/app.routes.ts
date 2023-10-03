import { Routes } from '@angular/router';
import { DogComponent } from "./dog/dog.component";
import { CatComponent } from "./cat/cat.component";

export const routes: Routes = [
  {
    path: 'dog',
    component: DogComponent
  },
  {
    path: 'cat',
    component: CatComponent
  },
  {
    path: '**',
    redirectTo: '/dog'
  }
];
