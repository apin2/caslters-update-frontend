import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyInfoViewComponent } from './society-info-view.component';

describe('SocietyInfoViewComponent', () => {
  let component: SocietyInfoViewComponent;
  let fixture: ComponentFixture<SocietyInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyInfoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
