import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    console.log(this.auth);
    if (this.auth.loggedIn()) {
      return true;
    } else {
      // this.router.navigateByUrl('/movies');
      return false;
    }
  }

}
