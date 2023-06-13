import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexItemComponent } from './index-item.component';

describe('IndexItemComponent', () => {
  let component: IndexItemComponent;
  let fixture: ComponentFixture<IndexItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexItemComponent]
    });
    fixture = TestBed.createComponent(IndexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
