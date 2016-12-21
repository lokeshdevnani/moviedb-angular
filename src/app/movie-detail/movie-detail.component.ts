import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movie = new Movie;
    this.route.params
        .switchMap((params: Params) => {
          return this.movieService.getMovie(+params["id"]);
        }).subscribe(movie => {
          this.movie = movie;
        });
  }

}
