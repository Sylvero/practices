import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-lecturer-my-consultation',
  templateUrl: './lecturer-my-consultation.component.html',
  styleUrls: ['./lecturer-my-consultation.component.css']
})
export class LecturerMyConsultationComponent implements OnInit {
  public res: Object[]= [];
  public array:Object[]=[]
  public result: any;
  public checked: any;
  public sum = 0;
  
  displayedCol: string[] = [ 'date', 'hour','minutes','studentName','studentSurname','consultationId','Anuluj'];
  
  dataSource:any
  constructor(private auth:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
    this.auth.getMeetingsOfEmployee(Number.parseInt(JSON.parse(localStorage.getItem("data")!)[0][1])).subscribe((data)=>{
      console.log("get api data",data);
      this.res.push(data)
      
    });
    this.dataSource = this.res
    console.log(this.dataSource)
  }


  cancel(consultationId:number){
    if(confirm("Jestes pewien, że chcesz usunąć wszystkie spotaknia z id konsultacji: "+consultationId+"?")) {
      this.auth.cancelConsultation(consultationId).subscribe((data)=>{
        console.log("get api data",data);
        this.res.push(data)
        
      });
      window.location.reload();
    }
    
    
  }

  checkCancel(consultationId:number,studentName: string){
    this.array = []
    for(let i=0; i<this.dataSource[0].length; i++){
      this.array.push([this.dataSource[0][i].consultationId,this.dataSource[0][i].studentName])
    }
    let a = JSON.stringify(this.array)
  
   let d = ["Sylwester","Adam"]
    console.log(a)
    let b = JSON.stringify([consultationId,"**"])
    console.log(b)
    let c = a.indexOf(b)
    console.log(c)
    if(c != -1)
      return false
    else
      return true
  }
}
