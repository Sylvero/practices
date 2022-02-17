import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Consultation } from 'src/app/Consultation'; 


@Component({
  selector: 'app-lecturer-consultation',
  templateUrl: './lecturer-consultation.component.html',
  styleUrls: ['./lecturer-consultation.component.css']
})
export class LecturerConsultationComponent implements OnInit {
  constructor(private auth:AuthServiceService, private router:Router) { }
  public result: any
  public consultationForm: any;
  
  
  hours = new Array()
  
 
  addDays(days : number): Date{
    var futureDate = new Date();
    futureDate.setDate(futureDate. getDate() + days);
    return futureDate;
    }

    minDate = this.addDays(1)
  


  

  

  pipe = new DatePipe('en-EN');

 
   


  onSubmit(){

    

    let consultation = new Consultation(
      this.pipe.transform(this.consultationForm.controls.date.value,'dd/MM/yyyy')!,
      this.consultationForm.controls.hour.value,
      this.consultationForm.controls.gap.value,
      this.consultationForm.controls.duration.value,
      this.consultationForm.controls.room.value,
      JSON.parse(localStorage.getItem("data")!)[0][1]

    )
    console.log(consultation)
    
    this.auth.postConsultation(consultation).subscribe((data)=>{
      this.result = data
      console.log(this.result)

  })

}

  ngOnInit(): void {
    this.consultationForm= new FormGroup({
      date: new FormControl('',Validators.required),
      hour: new FormControl('',Validators.required),
      gap: new FormControl('',Validators.required),
      duration: new FormControl('',Validators.required),
      room: new FormControl('',Validators.required),
  
      
    })

    
    for(let i= 8; i<21; i++
      ){
      this.hours.push(i)
    }
    
    
    

  }

}
