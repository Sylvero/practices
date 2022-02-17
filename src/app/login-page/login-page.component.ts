import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { testUser } from 'src/testUser';
import { AuthServiceService } from '../auth-service.service';

import { User } from '../user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginForm: any
  public Usr: Object[]= [];
  public Usr2 : Object[] = [];
  public User = {}
 
  constructor(private auth:AuthServiceService, private router:Router) { }
  userModel = new User('','');
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      login: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })

  }
  onSubmit(){
    

    this.auth.login(this.loginForm.controls.login.value,this.loginForm.controls.password.value).subscribe((data)=>{
    console.warn("get api data",data);
    this.Usr= Object.keys(data);
    this.Usr2 = Object.values(data);
    if(this.Usr2[3] == "Administrator"){
     this.auth.setData('abcdefghijklmnopqrstuvwxyz',this.Usr,this.Usr2,'ROLE_ADMIN')
     this.router.navigate(['admin'])
    }else if(this.Usr2[3] == "Wykladowca"){
      this.auth.setData('abcdefghijklmnopqrstuvwxyz',this.Usr,this.Usr2,'ROLE_LECTURER')
      this.router.navigate(['lecturer'])
    }else if(this.Usr2[3] == "null"){
      alert("Błąd logowania")
    }else{
      this.auth.setData('abcdefghijklmnopqrstuvwxyz',this.Usr,this.Usr2,'ROLE_STUDENT')
      this.router.navigate(["student"])
    }
    
      
  } 
  );
    
    
  }

}
