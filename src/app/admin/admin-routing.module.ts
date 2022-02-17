import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';

const routes: Routes = [
  {path: '', component: AdminTemplateComponent, children:
  [
   
    { path: 'home', component: AdminHomeComponent },
    {path: 'users', component:AdminUsersComponent},
    { path: 'addUser', component: AdminAddUserComponent },
    {path: '' , redirectTo: '/admin/home', pathMatch: 'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
