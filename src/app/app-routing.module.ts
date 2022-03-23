import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDescriptionComponent } from './pages/movie-description/movie-description.component';
import { Error404Component } from './pages/error404/error404.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'movie/:id', component: MovieDescriptionComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
