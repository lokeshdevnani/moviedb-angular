import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Movie } from '../movie';

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

  constructor() {
    this.movie = new Movie;
   }

  ngOnInit() {
  }

  addMovie(f: NgForm) {
    console.log(f.value);
  }

}
