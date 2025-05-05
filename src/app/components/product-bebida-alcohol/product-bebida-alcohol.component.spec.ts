import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBebidaAlcoholComponent } from './product-bebida-alcohol.component';

describe('ProductBebidaAlcoholComponent', () => {
  let component: ProductBebidaAlcoholComponent;
  let fixture: ComponentFixture<ProductBebidaAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBebidaAlcoholComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductBebidaAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
