import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean = false;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn();
  }

  logout() {
    this.auth.logout();
  }

}
