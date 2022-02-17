import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerTemplateComponent } from './lecturer-template.component';

describe('LecturerTemplateComponent', () => {
  let component: LecturerTemplateComponent;
  let fixture: ComponentFixture<LecturerTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
