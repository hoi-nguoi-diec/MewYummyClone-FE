import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemIndexComponent } from './product-item-index.component';

describe('ProductItemIndexComponent', () => {
  let component: ProductItemIndexComponent;
  let fixture: ComponentFixture<ProductItemIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemIndexComponent]
    });
    fixture = TestBed.createComponent(ProductItemIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
