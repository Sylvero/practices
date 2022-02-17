import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private auth:AuthServiceService, private router:Router,private dialog:MatDialog) { }

  public res: Object[]= []
  public employees: Object[]= []
  public students: Object[]= []
  public array:Object[]=[]
  public result: any;
  public checked: any;
  
  
 
  displayedColStudent: string[] = [ 'idStudent', 'studentName','studentSurname','studentLogin','studentIndex','studentEmail','edit','delete']
  displayedColEmployee: string[] = [ 'idEmployee', 'employeeName','employeeSurname','employeePrivilege','employeeLogin','employeeEmail','edit','delete']
  dataSourceStudents:any
  dataSourceEmployees:any

  deleteEmployee(idEmployee: number){
    if(confirm("Jestes pewien, że chcesz usunąć pracownika o id: "+idEmployee+"?")) {
      this.auth.deleteEmployee(idEmployee).subscribe((data)=>{
        console.log("get api data",data);
        this.res.push(data)
        
      });
      window.location.reload();
      alert("Pracownik został usunięty")
    }
  }

  deleteStudent(idStudent: number){
    if(confirm("Jestes pewien, że chcesz usunąć studenta o id: "+idStudent+"?")) {
      this.auth.deleteStudent(idStudent).subscribe((data)=>{
        console.log("get api data",data);
        this.res.push(data)
        
      });
      window.location.reload();
      alert("Student został usunięty")
    }
  }
/*
  edit(studentName: string, studentSurname:string,studentLogin:string,studentIndex:string,studentEmail:string){
    this.dialog.open(AdminDialogComponent,{data: {name:studentName,surname:studentSurname,login:studentLogin,index:studentIndex,email:studentEmail}})
  }

*/
edit(userData: any){
  
  this.dialog.open(AdminDialogComponent,{data: {userData}})
}

 

  ngOnInit(): void {
    this.auth.getEmployees().subscribe((data)=>{
      console.log("get api data",data);
      this.employees.push(data)
      
      
    });
    
    this.dataSourceEmployees = this.employees
    console.log(this.dataSourceEmployees)



    this.auth.getStudents().subscribe((data)=>{
      console.log("get api data",data);
      this.students.push(data)
      
      
    });
    
    this.dataSourceStudents = this.students
    console.log(this.dataSourceStudents)
   
   
  }

}
