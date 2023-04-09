import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userinfo: any;
  userdetail:any;
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.roleAccess(route.data['roles']);
    // console.log(this.roleAccess(route.data['roles']));

    if (this.auth.isLoggedIn()) {
      if(this.roleAccess(route.data['roles'])){
        return true
      }else{
        return false
      }
      // return true
    }else{
    this.router.navigate(['/login']);
    return false
  }
  }

  roleAccess(role: any): any {
    console.log("roleacess",role[0],role[1]);
    // user role active logic 
    
    this.userdetail= localStorage.getItem('user')
    if(role[0] == this.userdetail.role ||role[1] == this.userdetail.role ){
      console.log("if");
      return true
    }else{
      console.log("else");
      
      return false
    }
  }

}
