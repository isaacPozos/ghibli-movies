import { Component, OnInit } from '@angular/core';
import { GhibliService } from 'src/app/services/ghibli.service';
import { Movie } from '../../interfaces/movies.interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  cargalibreria = true;
  movies: Movie[] = [];

  constructor( private service: GhibliService) {
    this.service.getAllMovies().subscribe({ 
      next: resp => {
        this.movies = resp
      }, 
      error: err => {
        console.log('Error:');
        console.log(err);
        this.cargalibreria = false;
      }
    });
  }

  ngOnInit(): void {
  }

}
