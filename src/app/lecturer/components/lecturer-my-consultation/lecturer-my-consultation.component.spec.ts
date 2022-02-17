import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerMyConsultationComponent } from './lecturer-my-consultation.component';

describe('LecturerMyConsultationComponent', () => {
  let component: LecturerMyConsultationComponent;
  let fixture: ComponentFixture<LecturerMyConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerMyConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerMyConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
