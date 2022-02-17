import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { AuthServiceService } from 'src/app/auth-service.service';


@Component({
  selector: 'app-student-consultation',
  templateUrl: './student-consultation.component.html',
  styleUrls: ['./student-consultation.component.css']
})




export class StudentConsultationComponent implements OnInit {
  constructor(private auth:AuthServiceService, private router:Router) { }
  public res: Object[]= [];
  public array:Object[]=[]
  public lect:Object[]=[]
  public result: any;
  public checked: any;
  public val = false
  
 
  displayedCol: string[] = [ 'date', 'hour','minutes','studentName','studentSurname','employeeName','employeeSurname','Zapisz się','Anuluj'];
  //dataSource = this.ELEMENT_DATA;
  dataSource:any


 

  ngOnInit(): void {
    
    
    this.dataSource = this.res
    console.log(this.dataSource)
    this.auth.getMeetings().subscribe((data)=>{
      console.log("get api data",data);
      this.res.push(data)
      
    });
    this.dataSource = this.res
    console.log(this.dataSource)

    
   
  }

  check(consultationId:number,studentId: number): Boolean{
    var bool = this.checkIfjoined(consultationId,Number.parseInt(JSON.parse(localStorage.getItem("data")!)[0][1]))
    
    if(studentId == 0 && bool)
      return true
    else 
      return false
  }

  checkIfjoined(consultationId:number,studentId: number):any{
    this.array = []
    for(let i=0; i<this.dataSource[0].length; i++){
      this.array.push([this.dataSource[0][i].consultationId,this.dataSource[0][i].studentId])
    }
   
    let a = JSON.stringify(this.array)
    let b = JSON.stringify([consultationId,studentId])
    let c = a.indexOf(b)
    if(c != -1)
      return false
    else
      return true

}
  join(meetingId:number){
    
    this.auth.postJoin(meetingId,JSON.parse(localStorage.getItem("data")!)[0][1]).subscribe((data)=>{
      console.log("get api data",data);
      this.result = data;
    });
    window.location.reload();
   
  }

  checkCancel(studentId: number):any{
    if(studentId == Number.parseInt(JSON.parse(localStorage.getItem("data")!)[0][1]))
      return true
    else
      return false
  }

  cancel(meetingId: number){
    
    this.auth.cancelJoining(meetingId).subscribe((data)=>{
      console.log("get api data",data);
      this.result = data;
    });
    window.location.reload();
   
    console.log(JSON.stringify(this.result))
    
  }

}
