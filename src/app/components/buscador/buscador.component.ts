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
  sugerencias: boolean = true;
  openSearch: boolean = false;
  
  constructor( private service: GhibliService) {}
  ngOnInit(): void {
    
    this.debouncer.pipe(debounceTime(100)).subscribe( word => {
      this.searchResult = this.searchedMovie === ''? [] : this.service.filterMovies(this.searchedMovie.toLocaleLowerCase());
      this.sugerencias = this.searchResult? this.searchResult.length===0? this.searchedMovie === ''? true: false: true : true;
      console.log(this.searchResult?.length);
    });
  }

  buscar(){
    if(this.searchedMovie === ''){
      
    }      
  }

  intentarBuscar(){
    this.debouncer.next(this.searchedMovie);
  } 

  mostrarBuscador(){
    this.openSearch = !this.openSearch;    
  }

}
