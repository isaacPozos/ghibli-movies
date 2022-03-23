import { HttpClient } from '@angular/common/http';
import { GhibliService } from './ghibli.service';
import { Movie } from '../interfaces/movies.interfaces';
import { of } from 'rxjs';

describe('Ghibli Service', ()=> {
    let service: GhibliService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach( ()=>{ 
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new GhibliService(httpClientSpy);

        let store:any = {};
        const mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            },
            removeItem: (key: string) => {
                delete store[key];
            },
            clear: () => {
            store = {};
            }
        };

        spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    } );

    it('Se crea Correctamente', () => {
        expect(service).toBeTruthy();
      });

    it('Debe obtener una lista de películas', (done: DoneFn)=>{
        const listaMovieEsperada: Movie[] = [
            { title: 'Tituo', id: 'ABC',  }, 
            { id: 'ERV', title: 'Titulo' }
        ];

        httpClientSpy.get.and.returnValue(of(listaMovieEsperada));

        service.getAllMovies().subscribe({
            next: movies=>{
                    expect(movies).toEqual(listaMovieEsperada);
                    done();
                },
            error: done.fail
            
        });

    });

    it('Debe obtener una película', (done: DoneFn)=>{
        const MovieEsperada: Movie[] = [
            { title: 'Tituo', id: 'ABC',  }
        ];

        httpClientSpy.get.and.returnValue(of(MovieEsperada));

        service.getAllMovies().subscribe({
            next: movie=>{
                    expect(movie).toEqual(MovieEsperada);
                    done();
                },
            error: done.fail
            
        });

    });

    it('Switch Fav: Debe agregar o eliminar de favorito', ()=>{
        
        expect(service.switchFavorits('Nuevo Titulo')).withContext('No es favorito (falso), lo agrega (true)').toBeTruthy();
        expect(service.switchFavorits('Nuevo Titulo')).withContext('Es favorito (true), lo elimina (false)').toBeFalsy();
    });
    
    it('Debe validar si es Favorito', ()=>{
        
        expect(service.validateFav('Nuevo Titulo')).toBeFalsy();
    });

});