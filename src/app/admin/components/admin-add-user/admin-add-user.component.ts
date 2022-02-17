import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray ,FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Employee } from 'src/app/Employee';
import { Student } from 'src/app/Student';


@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {
  public showStudent:boolean = false;
  public showEmployee:boolean = false;
  public result:string ="";
  

  studentForm= new FormGroup({
    studentName: new FormControl('',Validators.required),
    studentSurname: new FormControl('',Validators.required),
    studentLogin: new FormControl('',Validators.required),
    studentPassword: new FormControl('',Validators.required),
    studentIndex: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
    studentEmail: new FormControl('',Validators.required),
  })


  employeeForm= new FormGroup({
    employeeName: new FormControl('',Validators.required),
    employeeSurname: new FormControl('',Validators.required),
    employeePrivilege: new FormControl('',Validators.required),
    employeeLogin: new FormControl('',Validators.required),
    employeePassword: new FormControl('',Validators.required),
    employeeEmail: new FormControl('',Validators.required),
    
  })
  constructor(private auth:AuthServiceService, private router:Router) { }

  ngOnInit(): void {}

  onSubmitStudent(){
    
   

    let student = new Student(
      this.studentForm.controls.studentName.value,
      this.studentForm.controls.studentSurname.value,
      this.studentForm.controls.studentLogin.value,
      this.studentForm.controls.studentPassword.value,
      this.studentForm.controls.studentIndex.value,
      this.studentForm.controls.studentEmail.value
      
      )
    console.log(student)
    this.auth.postStudent(student).subscribe((data)=>{
      this.result = data
  })
  this.studentForm.reset()
  alert("Student został dodany")
  }
  onSubmitEmployee(){
    
    console.log(this.employeeForm.value)
    let employee = new Employee(
      this.employeeForm.controls.employeeName.value,
      this.employeeForm.controls.employeeSurname.value,
      this.employeeForm.controls.employeePrivilege.value,
      this.employeeForm.controls.employeeLogin.value,
      this.employeeForm.controls.employeePassword.value,
      this.employeeForm.controls.employeeEmail.value
      
      )
    this.auth.postEmployee(employee).subscribe((data)=>{
      this.result = data
  }
  );
  this.employeeForm.reset()
  alert("Pracownik został dodany")
  }
  
  public showStud() {
    this.showStudent = true;
    this.showEmployee = false;
  }

  public showEmploy() {
    this.showEmployee = true;
    this.showStudent = false;
    
  }

 

  public showEmploye()
  {
    
    var display:string
    if(!this.showEmployee)
       display = 'none'
    else
      display = 'block'

   return display
  }

  public showStuden()
  {
    var display:string
      if(!this.showStudent)
         display = 'none'
      else
        display = 'block'

     return display
  }
}

function checkLogin(control: AbstractControl): {[key: string]: any} | null { 
  if(control.value == "Sylv")  
    return {wrongLogin: control.value}
  else
  return null
}
