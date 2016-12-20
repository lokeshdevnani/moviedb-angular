import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

  private URL = "http://localhost:8080";

  constructor(
    private http: Http
  ) { }

  getMoviesFromSource(): Observable<Movie[]> {
    return Observable.from(Array(MOVIES));
  }

  getMovies(): Observable<Movie[]> {
    return this.http
               .get(`${this.URL}/movies`)
               .map( (r: Response) => {
                  return r.json() as Movie[];
                });
  }

}
