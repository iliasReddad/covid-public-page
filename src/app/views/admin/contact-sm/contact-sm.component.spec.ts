import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSMComponent } from './contact-sm.component';

describe('ContactSMComponent', () => {
  let component: ContactSMComponent;
  let fixture: ComponentFixture<ContactSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
