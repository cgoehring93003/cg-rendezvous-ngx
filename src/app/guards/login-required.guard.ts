import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginRequiredGuard implements CanActivate {

  canActivate() {
    console.log('i am checking to see if you are logged in');
    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }


  /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
*/

}
