import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerConsultationComponent } from './lecturer-consultation.component';

describe('LecturerConsultationComponent', () => {
  let component: LecturerConsultationComponent;
  let fixture: ComponentFixture<LecturerConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
