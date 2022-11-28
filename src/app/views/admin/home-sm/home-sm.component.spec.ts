import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSMComponent } from './home-sm.component';

describe('HomeSMComponent', () => {
  let component: HomeSMComponent;
  let fixture: ComponentFixture<HomeSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
