import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnnotComponent } from './data-annot.component';

describe('DataAnnotComponent', () => {
  let component: DataAnnotComponent;
  let fixture: ComponentFixture<DataAnnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAnnotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAnnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
