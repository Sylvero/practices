import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturerConsultationComponent } from './components/lecturer-consultation/lecturer-consultation.component';
import { LecturerHomeComponent } from './components/lecturer-home/lecturer-home.component';
import { LecturerMyConsultationComponent } from './components/lecturer-my-consultation/lecturer-my-consultation.component';
import { LecturerTemplateComponent } from './components/lecturer-template/lecturer-template.component';


const routes: Routes = [
  {path: '', component: LecturerTemplateComponent, children:
  [
   
    { path: 'home', component: LecturerHomeComponent },
    { path: 'consultation', component: LecturerConsultationComponent },
    { path: 'myConsultation', component: LecturerMyConsultationComponent },
    {path: '' , redirectTo: '/lecturer/home', pathMatch: 'full'}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
