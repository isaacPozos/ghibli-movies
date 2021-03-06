import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Error404Component } from './pages/error404/error404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { MoviePostComponent } from './components/movie-post/movie-post.component';
import { MovieDescriptionComponent } from './pages/movie-description/movie-description.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    MoviePostComponent,
    MovieDescriptionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
