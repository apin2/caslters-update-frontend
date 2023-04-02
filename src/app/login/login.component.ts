import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:any=true;
  constructor(){}
  ngOnInit(){

  }
  login(l:any){
    console.log(l);
    
  }
  next(){
    this.username=false;
    console.log(this.username);
    
  }
  send(){
    console.log("send");
    
  }
}
