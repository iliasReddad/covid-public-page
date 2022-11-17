import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentTablesComponentComponent } from './sent-tables-component.component';

describe('SentTablesComponentComponent', () => {
  let component: SentTablesComponentComponent;
  let fixture: ComponentFixture<SentTablesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentTablesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentTablesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
