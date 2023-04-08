import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userinfo: any;
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.roleAccess(route.data['roles']);
    for (let i = 0; route.data['roles'].length >= i; i++) {
      console.log(route.data['roles'][i])
      if (route.data['roles'][i] == 'devloper') {
        console.log("roles==>>", route.data['roles'][i])
        return true
      }else{
        return false
      }
    }
    console.log("roles==>>", route.data['roles'])
    if (this.auth.isLoggedIn()) {
      // login auth guard
      return true
    }
    this.router.navigate(['/login']);
    return false
  }

  roleAccess(role: any): any {
    console.log("roleacess");
    // user role active logic 
    if (this.userinfo) {
      if (this.userinfo == role) {
        console.log('role match');
        return true
      } else {
        console.log('role not match');
        return false
      }
    }
  }

}
