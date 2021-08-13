import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationPageComponent } from './consultation-page.component';

describe('ConsultationPageComponent', () => {
  let component: ConsultationPageComponent;
  let fixture: ComponentFixture<ConsultationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
