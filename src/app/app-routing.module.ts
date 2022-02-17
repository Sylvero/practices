import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { GuardUnloggedGuard } from './guards/guard-unlogged.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent,canActivate: [GuardUnloggedGuard]
},
  
  { path: 'login', component: LoginPageComponent,canActivate: [GuardUnloggedGuard]
},
  { path: 'admin', canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN'
  },
  loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)},

  {path: "student", canActivate: [AuthGuard],
  data: {
    role: 'ROLE_STUDENT'
  },
  loadChildren: () => import('./student/student.module').then((m) => m.StudentModule)},

  {path: "lecturer", canActivate: [AuthGuard],
  data: {
    role: 'ROLE_LECTURER'
  },
  loadChildren: () => import('./lecturer/lecturer.module').then((m) => m.LecturerModule)},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
