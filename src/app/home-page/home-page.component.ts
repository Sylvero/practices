import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    public object: any;

  constructor(private api: GetApiService) { 
     
  }

  ngOnInit(): void {
    
    
    this.api.apiCall().subscribe((data)=>{console.warn("get api data",data);
    this.object = Object.values(data)[2];
    
    }
  );
      
  }

}
