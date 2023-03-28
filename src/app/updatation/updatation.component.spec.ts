import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatationComponent } from './updatation.component';

describe('UpdatationComponent', () => {
  let component: UpdatationComponent;
  let fixture: ComponentFixture<UpdatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
