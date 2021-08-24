import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) {

   }

  apiCall(){
     return this.http.get('http://localhost:8080/api/students?index=1');
   }
}
