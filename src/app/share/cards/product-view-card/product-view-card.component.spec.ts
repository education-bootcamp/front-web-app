import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewCardComponent } from './product-view-card.component';

describe('ProductViewCardComponent', () => {
  let component: ProductViewCardComponent;
  let fixture: ComponentFixture<ProductViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductViewCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
