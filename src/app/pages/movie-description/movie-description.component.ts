import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { GhibliService } from 'src/app/services/ghibli.service';
import { Movie } from '../../interfaces/movies.interfaces';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent implements OnInit {

  pelicula: Movie = { id: '', title: ''};

  constructor( private activatedRoute: ActivatedRoute,
                private service: GhibliService) { }

  ngOnInit(): void {
    let idObtenida: string = '';
    this.activatedRoute.params.subscribe( ({id}) => idObtenida = id );
    this.service.getMovie(idObtenida).subscribe({
      next: movie =>  this.pelicula = movie,
      error: err => {
        console.log('Error:');
        console.log(err);
        this.pelicula = { id: '', title: ''};
      }
    });

  }

}
