import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public str : any
  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('data')+typeof(localStorage.getItem('data')))
    this.str = localStorage.getItem('data')
    console.log(this.str)
    console.log(this.str.keys)
    
  }

}
