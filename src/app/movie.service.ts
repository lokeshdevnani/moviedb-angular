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
                })
                .catch(error => {
                  console.log(error);
                  return Observable.of<Movie[]>([]);
                });
  }

  getMovie(id: Number): Observable<Movie> {
    return this.http
               .get(`${this.URL}/movies/${id}`)
               .map( (r: Response) => r.json() as Movie )
               .catch(error => {
                  console.log(error);
                  return Observable.of<Movie>(null);
                });
  }

}
