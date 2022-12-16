import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableTopicComponent } from './cart-table-topic.component';

describe('CartTableTopicComponent', () => {
  let component: CartTableTopicComponent;
  let fixture: ComponentFixture<CartTableTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTableTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTableTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
