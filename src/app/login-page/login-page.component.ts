import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

import { User } from '../user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

 
  constructor(private auth:AuthServiceService) { }
  userModel = new User('Admin','Admin');
  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.auth.login(this.userModel))
    console.log(this.userModel);
  
  }

}
