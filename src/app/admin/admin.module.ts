import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';


import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from '../app.component';
import { MatButtonModule } from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { MatTableModule } from '@angular/material/table';
import { AdminDialogComponent } from './components/admin-dialog/admin-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminAddUserComponent,
    AdminHeaderComponent,
    AdminTemplateComponent,
    AdminUsersComponent,
    AdminDialogComponent
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule
    
    
    
  ],
  bootstrap: [AdminAddUserComponent]
})
export class AdminModule { }
