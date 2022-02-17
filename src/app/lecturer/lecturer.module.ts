import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { LecturerRoutingModule } from './lecturer-routing.module';
import { LecturerConsultationComponent } from './components/lecturer-consultation/lecturer-consultation.component';
import { LecturerHomeComponent } from './components/lecturer-home/lecturer-home.component';
import { LecturerTemplateComponent } from './components/lecturer-template/lecturer-template.component';
import { LecturerHeaderComponent } from './components/lecturer-header/lecturer-header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, FormArray,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { LecturerMyConsultationComponent } from './components/lecturer-my-consultation/lecturer-my-consultation.component';





@NgModule({
  declarations: [
    LecturerConsultationComponent,
    LecturerHomeComponent,
    LecturerTemplateComponent,
    LecturerHeaderComponent,
    LecturerMyConsultationComponent
  ],
  imports: [
    CommonModule,
    LecturerRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    
    
    
    

    
    
  ]
})
export class LecturerModule { }
