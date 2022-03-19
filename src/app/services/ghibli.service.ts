import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movies.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GhibliService {
  private endpoint:string = 'https://ghibliapi.herokuapp.com';
  constructor( private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
      return this.http.get<Movie[]>(`${this.endpoint}/films/`);
  }

}
