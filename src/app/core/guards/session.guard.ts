import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

constructor(private CookieService: CookieService, private router: Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this. checkCookieSeccion(); //TODO: (token), role, etc
  }
  
checkCookieSeccion(): boolean{
  try{
    const token: boolean = this.CookieService.check('token')
    if(!token){
      this.router.navigate(['/', 'auth'])
    }
    return token

    /*console.log('ok-> ', token);
    if(token){
      return token
    }else{
      this.router.navigate(['/', 'auth'])
      return false
    }*/
    
  }catch (e){
    console.log('Algo sucedio?',e);
    return false;
  }

}

}
