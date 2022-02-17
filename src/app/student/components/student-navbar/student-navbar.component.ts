import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  constructor(private auth: AuthServiceService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }

}
