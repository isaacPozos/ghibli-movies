import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Movie } from 'src/app/interfaces/movies.interfaces';
import { GhibliService } from 'src/app/services/ghibli.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  searchedMovie: string = '';
  searchResult: Movie[] | undefined = [];

  debouncer: Subject<string> = new Subject(); // Creo un observable para el input
  
  constructor( private service: GhibliService) {}
  ngOnInit(): void {

    this.debouncer.pipe(debounceTime(500)).subscribe( word => {
      console.log('debouncer:', word);
    });
  }

  buscar(){

    this.searchResult = this.service.filterMovies(this.searchedMovie.toLocaleLowerCase());
    
  }

  intentarBuscar(){
    this.debouncer.next(this.searchedMovie);
  }  

}
