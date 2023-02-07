import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableSentimentsComponent } from './cart-table-sentiments.component';

describe('CartTableSentimentsComponent', () => {
  let component: CartTableSentimentsComponent;
  let fixture: ComponentFixture<CartTableSentimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTableSentimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTableSentimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
