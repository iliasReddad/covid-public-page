import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSentimentComponent } from './card-sentiment.component';

describe('CardSentimentComponent', () => {
  let component: CardSentimentComponent;
  let fixture: ComponentFixture<CardSentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSentimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
