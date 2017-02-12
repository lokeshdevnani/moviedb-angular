import { Config } from './../shared/config';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie;
  genreList = Config.genreList;
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
          this.isLoaded = true;
          this.movie = movie;
          if (!movie) {
            alert('movie not found');
          }
        });
  }

  editMovie(f: NgForm) {
    let formValues = f.value;
    formValues.director = {
      'name': formValues.director
    };
    formValues.genre = {
      'id': formValues.genre,
      'name': this.genreList[formValues.genre]
    };
    formValues.id = this.movie.id;
    this.movieService.editMovie(formValues)
        .subscribe(movie => {
          console.log('Movie Updated Successfully');
          this.router.navigate(['/movie', this.movie.id]);
        });
  }
}
