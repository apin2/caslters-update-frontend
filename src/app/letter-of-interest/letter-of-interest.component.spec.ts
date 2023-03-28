import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfInterestComponent } from './letter-of-interest.component';

describe('LetterOfInterestComponent', () => {
  let component: LetterOfInterestComponent;
  let fixture: ComponentFixture<LetterOfInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterOfInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
