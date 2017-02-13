import { AuthService } from '../auth.service';
import { MovieService } from './../movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oauth-handler',
  templateUrl: './oauth-handler.component.html',
  styleUrls: ['./oauth-handler.component.css']
})
export class OauthHandlerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route
        .params
        .map((params: Params) => {
          return params['token'];
        }).subscribe(token => {
          this.auth.setToken(token);
          this.router.navigate(['/movies']);
        });
  }

}
