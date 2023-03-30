import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public registersociety(data: any): Observable<any> {
    console.log("data==>>",data);
    return this.http.post('https://localhost:44362/api/RegisteredSociety/registerSociety', data);
  }

  public getRegisterSociety(): Observable<any> {
    return this.http.get('https://localhost:44362/api/RegisteredSociety/getRegisteredSocietyList');
  }

  public getSocietyMemberDesignations(): Observable<any> {
    return this.http.get('https://localhost:44362/api/RegisteredSociety/getSocietyMemberDesignationList');
  }
  public updateRegistrationSocietyDetails(data: any): Observable<any> {
    return this.http.get('https://localhost:44362/api/RegisteredSociety/UpdateRegisteredSociety', data);
  }
  public getsocietybyid(id:any):Observable<any>{
    return this.http.get('https://localhost:44362/api/RegisteredSociety/getRegisteredSocietyInfo'+id);
  }
}

