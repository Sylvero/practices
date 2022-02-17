import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentConsultationComponent } from './components/student-consultation/student-consultation.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentTemplateComponent } from './components/student-template/student-template.component';

const routes: Routes = [
  {path: '', component: StudentTemplateComponent, children:
  [
   
    { path: 'home', component: StudentHomeComponent },
    { path: 'consultation', component: StudentConsultationComponent },
    {path: '' , redirectTo: '/student/home', pathMatch: 'full'}
    
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
