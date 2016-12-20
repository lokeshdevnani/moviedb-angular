import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie> {
    return Observable.from(MOVIES);
  }

}
