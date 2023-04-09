import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdata:any;
  constructor() { }
  isLoggedIn(){
    this.userdata=localStorage.getItem('user')

    if(this.userdata){
      return true;
    } 
    return false;
  }
}
