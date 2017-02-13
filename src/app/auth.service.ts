import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  eventStream: Subject<Boolean>;

  constructor() {
    this.eventStream = new Subject<Boolean>();
  }

  loggedIn() {
    return tokenNotExpired();
  }

  loggedInObservable() {
    return this.eventStream;
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  setToken(token) {
    localStorage.setItem('id_token', token);
    this.eventStream.next(this.loggedIn());
  }

}
