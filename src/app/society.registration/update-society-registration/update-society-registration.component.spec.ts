import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocietyRegistrationComponent } from './update-society-registration.component';

describe('UpdateSocietyRegistrationComponent', () => {
  let component: UpdateSocietyRegistrationComponent;
  let fixture: ComponentFixture<UpdateSocietyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSocietyRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSocietyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
