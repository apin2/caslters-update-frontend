import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL:any='https://aps-prd-castlers-api.azurewebsites.net/api/';
  constructor(private http:HttpClient) { }
  login(data:any): Observable<any>{
   return this.http.post(this.baseURL+'Login/UserLogin',data);
  }
}
