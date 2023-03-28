import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySocietyComponent } from './display-society.component';

describe('DisplaySocietyComponent', () => {
  let component: DisplaySocietyComponent;
  let fixture: ComponentFixture<DisplaySocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySocietyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
