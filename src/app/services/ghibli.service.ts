import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie } from '../interfaces/movies.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GhibliService {
  private endpoint:string = 'https://ghibliapi.herokuapp.com';
  constructor( private http: HttpClient) { }

  movies?: Movie[];

  getAllMovies(): Observable<Movie[]>{
      return this.http.get<Movie[]>(`${this.endpoint}/films/`)
            .pipe( tap( movies => this.movies = movies) );
  }

  filterMovies(word: string){
    const arrMovies = this.movies?.filter(movie => {
      const title = movie.title.toLowerCase();
       return title.includes(word.toLocaleLowerCase());
    });
    return  arrMovies; 
    
  }

  validateFav(title: string): boolean{
      if(!localStorage.getItem('favs')){
        return false;
      }
      let favs = JSON.parse(localStorage.getItem('favs') || '');            
      return favs.includes(title);
  }

  switchFavorits(titulo: string):boolean{
    // Si no existe la variable se crea y agrega primer Favorito
    // Regreso si es o no Favorito
    if(!localStorage.getItem('favs')){
      localStorage.setItem('favs',`["${titulo}"]`);
      return true;
    }
    let favs = JSON.parse(localStorage.getItem('favs') || '');
  
    const id = favs.findIndex( (e:string) => e === titulo);
    if(id === -1) {
      favs.push(titulo);
      localStorage.setItem('favs',JSON.stringify(favs));
      console.log('existe, borrar',favs);
      return true;
    }else{
      favs.splice(id,1);
      localStorage.setItem('favs',JSON.stringify(favs));
      console.log('existe, borrar',favs);
      return false;
    }

  }

}
