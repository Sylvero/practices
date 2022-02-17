import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { testUser } from 'src/testUser';
import { User } from './user';
import { Router } from '@angular/router';
import { Student } from './Student';
import { Employee } from './Employee';
import { Consultation } from './Consultation';
import { Meeting } from './Meeting';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public roleAs = "";


  constructor(private http:HttpClient, private router: Router) { 
    
    
  }

  setData(token: string, keys: Object[], values: Object[], role: string):void{
    var map = new Map<string, string>();
    for(let i = 0; i<keys.length; i++){
      console.log(keys[i].toString())
      map.set(keys[i].toString(),values[i].toString())
    }
    console.log("helllo "+map.get("id")+map.get("name")+" "+JSON.stringify(map))
    this.setToken(token);
    localStorage.setItem('data',JSON.stringify([...map]));
    localStorage.setItem('role',role);


  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    this.roleAs = this.getRole()!;
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }
  getRole() {
    let rol = localStorage.getItem('role');
    return  rol
    
  }
 
  

  login(login: string, password: string):Observable<testUser[]>{
  /* let params1 = new HttpParams(
     {
       fromObject:
        {
          login:data.login,
          password:data.password
        }
  })
    */
    let body = new HttpParams();
    body = body.set('login', login);
    body = body.set('password', password);

     return this.http.get<testUser[]>('http://localhost:8080/api/students/login',{params:body})
  }

  postStudent(student: Student):Observable<any>{
    return this.http.post('http://localhost:8080/api/students/saveStudent',student,{responseType: "text"})
  }

  postEmployee(employee: Employee):Observable<any>{
    return this.http.post('http://localhost:8080/api/students/saveEmployee',employee,{responseType: "text"})
  }

  postConsultation(consultation: Consultation):Observable<any>{
   // console.log(consultation)
    return this.http.post('http://localhost:8080/api/students/saveConsultation',consultation,{responseType: "text"})
  }

  getMeetings():Observable<any>{
    
    return this.http.get('http://localhost:8080/api/students/getMeetings')
  }

  getMeetingsOfEmployee(employeeId:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('employeeId', employeeId);
    return this.http.get('http://localhost:8080/api/students/getMeetingsOfEmployee',{params: body})
  }

  postJoin(meetingId:number,studentId:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('meetingId', meetingId);
    body = body.set('studentId', studentId);
    //console.log(body+"  "+meetingId+"  "+studentId)
    return this.http.get('http://localhost:8080/api/students/joinConsultation',{params: body})
  }

  cancelJoining(meetingId:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('meetingId', meetingId);
    //console.log(body+"  "+meetingId)
    return this.http.get('http://localhost:8080/api/students/cancelJoining',{params: body})
  }

  cancelConsultation(consultationId:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('consultationId', consultationId);
    //console.log(body+"  "+meetingId)
    return this.http.get('http://localhost:8080/api/students/cancelConsultation',{params: body})
  }

  getEmployees():Observable<any>{
    return this.http.get('http://localhost:8080/api/students/getEmployees')
  }

  getStudents():Observable<any>{
    return this.http.get('http://localhost:8080/api/students/getStudents')
  }

  deleteStudent(idStudent: number):Observable<any>{
    let body = new HttpParams();
    body = body.set('idStudent', idStudent);
    return this.http.get('http://localhost:8080/api/students/deleteStudent',{params:body})
  }

  deleteEmployee(idEmployee: number):Observable<any>{
    let body = new HttpParams();
    body = body.set('idEmployee', idEmployee);
    return this.http.get('http://localhost:8080/api/students/deleteEmployee',{params: body})
  }

  editEmployee(idEmployee: number,employee: Employee):Observable<any>{
    let body = new HttpParams();
    body = body.set('idEmployee', idEmployee);
    return this.http.post('http://localhost:8080/api/students/editEmployee',employee,{params: body,responseType: "text"})
  }

  editStudent(idStudent: number,student: Student):Observable<any>{
    let body = new HttpParams();
    body = body.set('idStudent', idStudent);
    return this.http.post('http://localhost:8080/api/students/editStudent',student,{params: body,responseType: "text"})
  }

  



  
}