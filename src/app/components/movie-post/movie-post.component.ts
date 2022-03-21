import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies.interfaces';
import { GhibliService } from '../../services/ghibli.service';

@Component({
  selector: 'app-movie-post',
  templateUrl: './movie-post.component.html',
  styleUrls: ['./movie-post.component.scss']
})
export class MoviePostComponent implements OnInit {
  @Input() movie:Movie = {id: '', title: ''};

  esFavorito: boolean = false;
  constructor( private service: GhibliService) {}

  ngOnInit(): void {
    this.esFavorito = this.service.validateFav(this.movie.title);
    //console.log(this.esFavorito);
    
  }

  favoriteSwitch() {
    //console.log(this.movie.title);
    this.esFavorito = this.service.switchFavorits(this.movie.title);
  }

}
