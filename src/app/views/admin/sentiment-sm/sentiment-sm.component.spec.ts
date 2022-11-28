import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentSMComponent } from './sentiment-sm.component';

describe('SentimentSMComponent', () => {
  let component: SentimentSMComponent;
  let fixture: ComponentFixture<SentimentSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentSMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
