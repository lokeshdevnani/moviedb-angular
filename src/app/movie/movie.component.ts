import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: Movie;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['/movie', this.movie.id]);
  }

}
