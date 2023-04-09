import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../shared/interface/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  first_stage: any = true;
  second_stage: any = false;
  username: any;
  mobile_number: any;
  otp: any;
  resend: any = false;
  display: any;
  invalidsend: any = false;
  public timerInterval: any;
  password: any;
  constructor(
    private toster: ToastrService,
    private loginservice: LoginService,
    private routers: Router
  ) {}
  ngOnInit() {}
  login(l: any) {
    console.log(l.value);
    let obj: any = {
      username: l.value.user_name,
      password: l.value.password,
    };
    console.log(obj);

    this.loginservice.login(obj).subscribe((res) => {
      console;
      if (res.role) {
        console.log(res);
        let user = JSON.stringify(res);
        localStorage.setItem('user', user);
        this.routers.navigateByUrl('/');
        setTimeout(()=>{
          window.location.reload();
        },200)
      } else {
        this.toster.error('invalid user name and password', 'Invalid');
      }
    });
  }
  // next() {
  //   if (this.username == 'pradeep') {
  //     this.first_stage = false;
  //     this.second_stage = true;
  //     console.log(this.first_stage, this.second_stage);
  //   } else {
  //     this.toster.error('user name does not  exist', 'Invalid user name');
  //   }
  // }
  // send() {
  //   if (this.mobile_number.length >= 10) {
  //     this.toster.success('success');
  //     this.second_stage = false;
  //     console.log(this.mobile_number);
  //     this.timer(1);
  //   } else {
  //     this.toster.error('error');
  //   }
  // }

  // reSend() {
  //   this.resend = false;
  //   this.timer(1);
  // }

  timer(minute: any) {
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
        this.resend = true;
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }
}
