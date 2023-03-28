import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperRegistrationComponent } from './developer.registration.component';

describe('DeveloperRegistrationComponent', () => {
  let component: DeveloperRegistrationComponent;
  let fixture: ComponentFixture<DeveloperRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
