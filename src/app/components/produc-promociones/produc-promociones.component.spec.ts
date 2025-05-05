import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducPromocionesComponent } from './produc-promociones.component';

describe('ProducPromocionesComponent', () => {
  let component: ProducPromocionesComponent;
  let fixture: ComponentFixture<ProducPromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducPromocionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
