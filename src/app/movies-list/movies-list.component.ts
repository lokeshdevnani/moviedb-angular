import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Movie} from '../movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  constructor() { }

  ngOnInit() {
  }

}
