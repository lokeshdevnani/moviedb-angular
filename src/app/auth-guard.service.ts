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
    if (this.auth.loggedIn()) {
      return true;
    } else {
      alert('This thing is for authorized personnel only. Please login to continue');
      this.router.navigateByUrl('/');
      return false;
    }
  }

}
