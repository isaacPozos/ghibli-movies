import { TestBed, ComponentFixture } from '@angular/core/testing';
import { GhibliService } from 'src/app/services/ghibli.service';
import { InicioComponent } from './inicio.component';
import { HttpClientModule } from '@angular/common/http';

describe('InicioComponent', ()=>{
    let component: InicioComponent;
    let fixture: ComponentFixture<InicioComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          InicioComponent
        ],
        imports:[HttpClientModule],
        providers: [GhibliService]
      }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InicioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

    it('Debe crear El inicio de la app', () => {
        expect(component).toBeTruthy();
    });
});