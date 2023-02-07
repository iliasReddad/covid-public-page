import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSMComponent } from './about-sm.component';

describe('AboutSMComponent', () => {
  let component: AboutSMComponent;
  let fixture: ComponentFixture<AboutSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
