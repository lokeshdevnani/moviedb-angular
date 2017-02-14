import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, RequestOptions } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { MovieService } from './movie.service';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FooterComponent } from './footer/footer.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { OauthHandlerComponent } from './oauth-handler/oauth-handler.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesListComponent,
    MovieComponent,
    MovieDetailComponent,
    AddMovieComponent,
    FooterComponent,
    MovieEditComponent,
    OauthHandlerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MovieService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
