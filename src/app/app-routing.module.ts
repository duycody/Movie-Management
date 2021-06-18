import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMovieDetailComponent } from './home/home-movie/home-movie-detail/home-movie-detail.component';
import { HomeComponent } from './home/home.component';
import { CategoryDetailComponent } from './manage/category/category-detail/category-detail.component';
import { CategoryEditComponent } from './manage/category/category-edit/category-edit.component';
import { CategoryComponent } from './manage/category/category.component';
import { ManageComponent } from './manage/manage.component';
import { MovieDetailComponent } from './manage/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './manage/movie/movie-edit/movie-edit.component';
import { MovieComponent } from './manage/movie/movie.component';
import { NationDetailComponent } from './manage/nation/nation-detail/nation-detail.component';
import { NationEditComponent } from './manage/nation/nation-edit/nation-edit.component';
import { NationComponent } from './manage/nation/nation.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  {
    path: 'home-component', component: HomeComponent, children: [
      { path: ':id', component: HomeMovieDetailComponent },
    ]
  },
  {
    path: 'manage-component', component: ManageComponent, children: [
      {
        path: 'movie', component: MovieComponent,
        children: [
          { path: 'new', component: MovieEditComponent },
          { path: ':id', component: MovieDetailComponent },
          { path: ':id/edit', component: MovieEditComponent },
        ]
      },
      {
        path: 'nation', component: NationComponent,
        children: [
          { path: 'new', component: NationEditComponent },
          { path: ':id', component: NationDetailComponent },
          { path: ':id/edit', component: NationEditComponent },
        ]
      },
      {
        path: 'category', component: CategoryComponent,
        children: [
          { path: 'new', component: CategoryEditComponent },
          { path: ':id', component: CategoryDetailComponent },
          { path: ':id/edit', component: CategoryEditComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }