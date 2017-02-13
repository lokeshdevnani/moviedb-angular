import { AuthHttp } from 'angular2-jwt';
import { Config } from './shared/config';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

  private URL = Config.apiURL;

  constructor(
    private http: Http,
    private authHttp: AuthHttp
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

    return this.authHttp.post(`${this.URL}/movies`, bodyString, { headers: headers })
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  editMovie(movie: Movie): Observable<Movie> {
    let bodyString = JSON.stringify(movie);
    let headers    = new Headers({ 'Content-Type': 'application/json' });

    return this.authHttp.put(`${this.URL}/movies/${movie.id}`, bodyString, { headers: headers })
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteMovie(id: Number): Observable<any> {
    let headers    = new Headers({ 'Content-Type': 'application/json' });

    return this.authHttp.delete(`${this.URL}/movies/${id}`, { headers: headers });
  }

}
