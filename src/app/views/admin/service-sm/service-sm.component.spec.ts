import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSMComponent } from './service-sm.component';

describe('ServiceSMComponent', () => {
  let component: ServiceSMComponent;
  let fixture: ComponentFixture<ServiceSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
