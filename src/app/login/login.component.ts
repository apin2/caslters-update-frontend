import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  first_stage:any=true;
  second_stage:any=false;
  user_name:any;
  mobile_number:any;
  otp:any;
  resend:any=false;
  display: any;
  public timerInterval: any;
  constructor(){}
  ngOnInit(){

  }
  login(l:any){
    console.log(l);
    console.log(this.otp);
  }
  next(){
    this.first_stage=false;
    this.second_stage=true;
    console.log(this.first_stage,this.second_stage);
    
  }
  send(){
    this.second_stage=false;
    console.log(this.mobile_number);
    this.timer(1);
  }

  reSend(){
    this.resend=false;
    this.timer(1);
  }

  timer(minute:any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        this.resend=true;
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }
}
