import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies.interfaces';
import { GhibliService } from 'src/app/services/ghibli.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  searchedmovie: string = '';
  searchResult: Movie[] | undefined = [];
  
  constructor( private service: GhibliService) {}
  ngOnInit(): void {
  }

  buscar(){
    const movies =this.service.allMovies;
    this.searchResult = movies?.filter(movie => {
      const title = movie.title.toLowerCase();
       return title.includes(this.searchedmovie.toLocaleLowerCase());
    });
       
    
  }
}
