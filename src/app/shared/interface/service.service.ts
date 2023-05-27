import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseURL:any=environment.apiUrl;
  constructor(private http: HttpClient) {
    // let header =new HttpHeaders()
  }

  public registersociety(data: any): Observable<any> {
    console.log('data==>>', data);
    return this.http.post(
      this.baseURL+'RegisteredSociety/registerSociety',
      data
    );
  }

  public getRegisterSociety(): Observable<any> {
    return this.http.get(
      this.baseURL+'RegisteredSociety/getRegisteredSocietyList'
    );
  }

  public getSocietyMemberDesignations(): Observable<any> {
    return this.http.get(
      this.baseURL+'RegisteredSociety/getSocietyMemberDesignationList'
    );
  }
  public updateRegistrationSocietyDetails(data: any): Observable<any> {
    console.log(data);
    return this.http.put(
      this.baseURL+'RegisteredSociety/UpdateRegisteredSociety',
      data
    );
  }
  public getsocietybyid(id: any): Observable<any> {
    return this.http.get(
      this.baseURL+'RegisteredSociety/getRegisteredSocietyInfo/' +
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
      this.baseURL+'SocietyMemberDetails/AddRegisteredSocietyNewMembers',
      data
    );
  }
  public updatemember(data: any): Observable<any> {
    return this.http.put(
      this.baseURL+'SocietyMemberDetails/UpdateRegisteredSocietyMembers',
      data
    );
  }
  public deletemember(id: any): Observable<any> {
    return this.http.post(
      this.baseURL+'SocietyMemberDetails/DeleteRegisteredSocietyMemberById',
      id
    );
  }
  public getallmember(societyId: any): Observable<any> {
    return this.http.get(
      this.baseURL+'SocietyMemberDetails/GetRegisteredSocietyMembersBySocietyId/' +
        societyId
    );
  }
  public technicaldetailsubmit(data:any){
    return this.http.post(this.baseURL+'UpdateTechnicalDetailsSocietyAsync',data);
  }
  public fileupload(data:any){
    return this.http.post(this.baseURL+'SocietyDocuments/SocietyDocumentUpload',data);
  }
}
