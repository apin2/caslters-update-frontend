import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdata:any;
  constructor() { }
  isLoggedIn(){
    this.userdata=localStorage.getItem('userdata')

    if(this.userdata){
      return true;
    } 
    return true;
  }
}
