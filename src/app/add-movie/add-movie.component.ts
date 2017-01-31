import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie: Movie;
  genreList = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime',
   'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror',
   'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western' ];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    this.movie = new Movie;
   }

  ngOnInit() {
  }

  addMovie(f: NgForm) {
    let formValues = f.value;
    formValues.director = {
      'name': formValues.director
    };
    formValues.genre = {
      'id': formValues.genre,
      'name': this.genreList[formValues.genre]
    };

    this.movieService.addMovie(formValues)
        .subscribe(movie => {
          console.log('Movie Added Successfully');
          this.router.navigate(['/movies']); // navigate to the main route
        });
  }

}
