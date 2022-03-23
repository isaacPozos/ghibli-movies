import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RouterTestingModule } from "@angular/router/testing";

import { MovieDescriptionComponent } from './movie-description.component';
import { GhibliService } from '../../services/ghibli.service';

describe('MovieDescriptionComponent', () => {
  let component: MovieDescriptionComponent;
  let fixture: ComponentFixture<MovieDescriptionComponent>;
  let service: GhibliService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDescriptionComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        GhibliService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(MovieDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });


  
});
