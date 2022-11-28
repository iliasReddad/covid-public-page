import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSMComponent } from './topic-sm.component';

describe('TopicSMComponent', () => {
  let component: TopicSMComponent;
  let fixture: ComponentFixture<TopicSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicSMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
