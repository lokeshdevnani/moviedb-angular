import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  isLoaded = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.movie = new Movie;
    this.route.params
        .switchMap((params: Params) => {
          return this.movieService.getMovie(+params['id']);
        }).subscribe(movie => {
          this.movie = movie;
          if (!movie) {
            alert('movie not found');
            return;
          }
          this.isLoaded = true;
        });
  }

  deleteMovie() {
    this.movieService
        .deleteMovie(this.movie.id)
        .subscribe(
          () => {
            alert('Deleted Successfully');
            this.router.navigate(['..']);
          },
          (error: any) => {
            alert('Deletion failed');
            console.log(error);
          },
          null
        );
  }

}

