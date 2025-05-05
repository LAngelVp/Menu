import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComidaComponent } from './product-comida.component';

describe('ProductComidaComponent', () => {
  let component: ProductComidaComponent;
  let fixture: ComponentFixture<ProductComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
