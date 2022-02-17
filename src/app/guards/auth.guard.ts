import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthServiceService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        if (!this.auth.isLoggedIn()) {
         
          this.router.navigate(['/login']);
          return false;
        }else 
        {
          if(route.data.role && route.data.role.includes(this.auth.getRole()))
          {
            return true;
          }
           
          else {
            if(this.auth.getRole() == "ROLE_ADMIN")
              this.router.navigate(['admin/home'])
            else if(this.auth.getRole() == "ROLE_STUDENT")
              this.router.navigate(['student/home'])
            else
              this.router.navigate(['lecturer/home'])
            return false
          }
        }
  }
  
}
