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

}
