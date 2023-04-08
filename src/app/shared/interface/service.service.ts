import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  loacal:any='https://localhost:44362/api/';
  constructor(private http: HttpClient) {
    // let header =new HttpHeaders()
  }

  public registersociety(data: any): Observable<any> {
    console.log('data==>>', data);
    return this.http.post(
      this.loacal+'RegisteredSociety/registerSociety',
      data
    );
  }

  public getRegisterSociety(): Observable<any> {
    return this.http.get(
      this.loacal+'RegisteredSociety/getRegisteredSocietyList'
    );
  }

  public getSocietyMemberDesignations(): Observable<any> {
    return this.http.get(
      this.loacal+'RegisteredSociety/getSocietyMemberDesignationList'
    );
  }
  public updateRegistrationSocietyDetails(data: any): Observable<any> {
    console.log(data);
    return this.http.put(
      this.loacal+'RegisteredSociety/UpdateRegisteredSociety',
      data
    );
  }
  public getsocietybyid(id: any): Observable<any> {
    return this.http.get(
      this.loacal+'RegisteredSociety/getRegisteredSocietyInfo/' +
        id
    );
  }
  public addnewmember(data: any): Observable<any> {
    let header = new HttpHeaders({ 'Content-Type': '' });
    // header = header.append('Content-Type', 'multipart/form-data')
    let option = {
      headers: header,
    };
    return this.http.post(
      this.loacal+'SocietyMemberDetails/AddRegisteredSocietyNewMembers',
      data
    );
  }
  public updatemember(data: any): Observable<any> {
    return this.http.put(
      this.loacal+'SocietyMemberDetails/UpdateRegisteredSocietyMembers',
      data
    );
  }
  public deletemember(id: any): Observable<any> {
    return this.http.post(
      this.loacal+'SocietyMemberDetails/DeleteRegisteredSocietyMemberById',
      id
    );
  }
  public getallmember(societyId: any): Observable<any> {
    return this.http.get(
      this.loacal+'SocietyMemberDetails/GetRegisteredSocietyMembersBySocietyId/' +
        societyId
    );
  }
}
