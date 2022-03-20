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

  movies: Movie[] | undefined;
  // Getter para obtenerlo globalmente
  get allMovies(){
    return this.movies;
  }

  getAllMovies(): Observable<Movie[]>{
      return this.http.get<Movie[]>(`${this.endpoint}/films/`)
            .pipe( tap( movies => this.movies = movies) );
  }

}
