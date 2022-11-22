import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentalStatsComponent } from './sentimental-stats.component';

describe('SentimentalStatsComponent', () => {
  let component: SentimentalStatsComponent;
  let fixture: ComponentFixture<SentimentalStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentalStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
