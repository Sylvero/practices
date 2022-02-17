import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Employee } from 'src/app/Employee';
import { Student } from 'src/app/Student';


@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent implements OnInit {
  public showStudent:boolean = false;
  public showEmployee:boolean = false;
  public displayStudent:string = 'none';
  public displayEmployee:string = 'none';
  public result: any

  studentForm= new FormGroup({
    studentName: new FormControl(this.data.userData.name,Validators.required),
    studentSurname: new FormControl(this.data.userData.surname,Validators.required),
    studentLogin: new FormControl(this.data.userData.login,Validators.required),
    studentPassword: new FormControl(''),
    studentIndex: new FormControl(this.data.userData.index,[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
    studentEmail: new FormControl(this.data.userData.email,Validators.required),
  })

  employeeForm= new FormGroup({
    employeeName: new FormControl(this.data.userData.name,Validators.required),
    employeeSurname: new FormControl(this.data.userData.surname,Validators.required),
    employeePrivilege: new FormControl(this.data.userData.privilege,Validators.required),
    employeeLogin: new FormControl(this.data.userData.login,Validators.required),
    employeePassword: new FormControl(''),
    employeeEmail: new FormControl(this.data.userData.email,Validators.required),
    
  })
 

  ngOnInit(): void {
    if(this.data.userData.privilege != null){
      this.showEmploy()
      
    }
    else
      this.showStud()
    
    
  }

  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any,@Inject(AuthServiceService) public auth: any) {}
/*
  openDialog(): void {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
    });
    

   
  }*/

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

  onSubmitEmployee(){
    if(confirm("Jestes pewien, że chcesz edytować dane pracownika o Id: "+this.data.userData.id+"?"))
    {
      if(this.employeeForm.controls.employeePassword.value == '')
      this.employeeForm.controls.employeePassword.setValue(this.data.userData.password)

      let employee = new Employee(
        this.employeeForm.controls.employeeName.value,
        this.employeeForm.controls.employeeSurname.value,
        this.employeeForm.controls.employeePrivilege.value,
        this.employeeForm.controls.employeeLogin.value,
        this.employeeForm.controls.employeePassword.value,
        this.employeeForm.controls.employeeEmail.value
        
        )
    this.auth.editEmployee(this.data.userData.id,employee).subscribe((data: any)=>{
      this.result = data
  });
    this.dialog.closeAll()
    window.location.reload();
    }
    
  }

  onSubmitStudent(){
    if(confirm("Jestes pewien, że chcesz edytować dane studenta o Id: "+this.data.userData.id+"?"))
    {
      if(this.studentForm.controls.studentPassword.value == '')
      this.studentForm.controls.studentPassword.setValue(this.data.userData.password)

    let student = new Student(
      this.studentForm.controls.studentName.value,
      this.studentForm.controls.studentSurname.value,
      this.studentForm.controls.studentLogin.value,
      this.studentForm.controls.studentPassword.value,
      this.studentForm.controls.studentIndex.value,
      this.studentForm.controls.studentEmail.value
      
      )

      this.auth.editStudent(this.data.userData.id,student).subscribe((data: any)=>{
        this.result = data
    });
      this.dialog.closeAll()
      window.location.reload();
    }
    

    
  }
  

}
