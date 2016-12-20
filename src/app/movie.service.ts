import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

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

  addMovie(movie: Movie): Observable<Movie> {
    let bodyString = JSON.stringify(movie);
    let headers    = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.URL}/movies`, bodyString, { headers: headers })
                         .map((res: Response) => res.json())
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
