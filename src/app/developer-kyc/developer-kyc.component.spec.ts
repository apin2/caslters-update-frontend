import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperKYCComponent } from './developer-kyc.component';

describe('DeveloperKYCComponent', () => {
  let component: DeveloperKYCComponent;
  let fixture: ComponentFixture<DeveloperKYCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperKYCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperKYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
