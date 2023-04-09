import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user_role:any
  login:any=true;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(){
    let local:any = localStorage.getItem('user')
    let user:any= JSON.parse(local);
    this.user_role=user;
    if(user){
      this.login=false;
    }
    else{
     this.login=true;
    }
    // console.log(user);
  }

  logout(){
    // this.reload()
    localStorage.removeItem('user');
    window.location.reload();
  }
  registration(){
    this.router.navigate(['/societyRegistration'])
  }
}
