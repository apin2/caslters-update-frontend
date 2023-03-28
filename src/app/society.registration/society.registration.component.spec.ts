import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyRegistrationComponent } from './society.registration.component';

describe('SocietyRegistrationComponent', () => {
  let component: SocietyRegistrationComponent;
  let fixture: ComponentFixture<SocietyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
