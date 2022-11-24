import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentChartComponent } from './sent-chart.component';

describe('SentChartComponent', () => {
  let component: SentChartComponent;
  let fixture: ComponentFixture<SentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
