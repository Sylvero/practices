import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { 
    
  }
  /*
  login(data: User):Observable<any>{
    console.log(data)
     this.http.post('http://localhost:8080/api/students/login',data).subscribe((result)=>{console.warn("result:",result)});
    return this.http.post('http://localhost:8080/api/students/login',data);
  }
  */
  
  login(data: User):Observable<any>{
    console.log(data)
    let params1 = new HttpParams().set(data.login,data.password);
     return this.http.get('http://localhost:8080/api/students/login',{params:params1});
   // return this.http.post('http://localhost:8080/api/students/login',data);
  }
  
}
