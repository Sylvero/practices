import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-lecturer-header',
  templateUrl: './lecturer-header.component.html',
  styleUrls: ['./lecturer-header.component.css']
})
export class LecturerHeaderComponent implements OnInit {
  constructor(private auth: AuthServiceService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }

}
