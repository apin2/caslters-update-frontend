import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user_role: any
  login: any = true;
  expand: any;
  @Output() gototop = new EventEmitter();
  constructor(private route: ActivatedRoute, private router: Router, private toster: ToastrService,) {
  }

  ngOnInit() {

    this.router.events.subscribe((val: any) => {
      // console.log(val);
      let local: any = localStorage.getItem('user')
      let user: any = JSON.parse(local);
      this.user_role = user;
      if (user) {
        this.login = false;
      }
      else {
        this.login = true;
      }

    })
    // console.log(user);
  }

  menuVisible: any = true;
  menueshow(){
    this.menuVisible =! this.menuVisible;
  }

  onTop() {
    this.menuVisible =! this.menuVisible ;
    this.gototop.emit()
  }

  logout() {
    // this.reload()
    localStorage.removeItem('user');
    this.toster.success('Sccessfully', 'Logout');
    window.location.reload();
  }
  registration() {
    this.router.navigate(['/societyRegistration'])
  }
}
