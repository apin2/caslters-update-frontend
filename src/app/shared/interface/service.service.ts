import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {
    // let header =new HttpHeaders()
  }
  
  public registersociety(data: any): Observable<any> {
    console.log('data==>>', data);
    return this.http.post(
      'https://localhost:44362/api/RegisteredSociety/registerSociety',
      data
    );
  }

  public getRegisterSociety(): Observable<any> {
    return this.http.get(
      'https://localhost:44362/api/RegisteredSociety/getRegisteredSocietyList'
    );
  }

  public getSocietyMemberDesignations(): Observable<any> {
    return this.http.get(
      'https://localhost:44362/api/RegisteredSociety/getSocietyMemberDesignationList'
    );
  }
  public updateRegistrationSocietyDetails(data: any): Observable<any> {
    console.log(data);
    return this.http.put(
      'https://localhost:44362/api/RegisteredSociety/UpdateRegisteredSociety',
      data
    );
  }
  public getsocietybyid(id: any): Observable<any> {
    return this.http.get(
      'https://localhost:44362/api/RegisteredSociety/getRegisteredSocietyInfo/' +
        id
    );
  }
  public addnewmember(data: any): Observable<any> {
    let header = new HttpHeaders({'Content-Type': 'multipart/form-data', 'enctypr':'multipart/form-data'});
    // header = header.append('Content-Type', 'multipart/form-data')
    let option={
      headers:header,
    }
    return this.http.post(
      'https://localhost:44362/api/SocietyMemberDetails/AddRegisteredSocietyNewMembers' , data,option);
  }
  public updatemember(data: any): Observable<any> {
    return this.http.put(
      'https://localhost:44362/api/SocietyMemberDetails/UpdateRegisteredSocietyMembers',
      data
    );
  }
  public deletemember(id: any): Observable<any> {
    return this.http.post(
      'https://localhost:44362/api/SocietyMemberDetails/DeleteRegisteredSocietyMemberById',
      id
    );
  }
  public getallmember(societyId: any): Observable<any> {
    return this.http.get(
      'https://localhost:44362/api/SocietyMemberDetails/GetRegisteredSocietyMembersBySocietyId/' +
        societyId
    );
  }
}
