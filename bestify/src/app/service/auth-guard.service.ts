import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.tokenStorage.getUser();
    if (currentUser!=null) {
        // logged in so return true
        console.log("current user ----"+currentUser);
        return true;
    }
    alert("else part"+currentUser);

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/pong'], { queryParams: { returnUrl: state.url } });
    return false;
}
}
