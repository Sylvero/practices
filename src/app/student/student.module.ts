import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentNavbarComponent } from './components/student-navbar/student-navbar.component';
import { StudentTemplateComponent } from './components/student-template/student-template.component';
import { StudentConsultationComponent } from './components/student-consultation/student-consultation.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    StudentHomeComponent,
    StudentNavbarComponent,
    StudentTemplateComponent,
    StudentConsultationComponent
    
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class StudentModule { }
