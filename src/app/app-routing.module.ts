import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesListComponent },
    { path: 'movies/new', component: AddMovieComponent, canActivate: [AuthGuardService] },
    { path: 'movie/:id', component: MovieDetailComponent  },
    { path: 'movie/:id/edit', component: MovieEditComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, AuthService]
})
export class AppRoutingModule { }


