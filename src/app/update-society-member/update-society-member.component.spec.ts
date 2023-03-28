import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocietyMemberComponent } from './update-society-member.component';

describe('UpdateSocietyMemberComponent', () => {
  let component: UpdateSocietyMemberComponent;
  let fixture: ComponentFixture<UpdateSocietyMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSocietyMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSocietyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
