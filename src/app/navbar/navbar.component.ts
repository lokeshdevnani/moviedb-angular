import { Config } from '../shared/config';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean = false;
  oAuthURL = Config.oAuthURL;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn();
    this.auth.loggedInObservable()
        .subscribe((loggedIn) => {
          this.isLoggedIn = loggedIn;
        });
  }

  logout() {
    this.auth.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

}
