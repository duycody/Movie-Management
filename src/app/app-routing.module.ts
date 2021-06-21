import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCategoryDetailComponent } from './home/home-category/home-category-detail/home-category-detail.component';
import { HomeCategoryComponent } from './home/home-category/home-category.component';
import { HomeMovieDetailComponent } from './home/home-movie/home-movie-detail/home-movie-detail.component';
import { HomeMovieListComponent } from './home/home-movie/home-movie-list/home-movie-list.component';
import { HomeNationDetailComponent } from './home/home-nation/home-nation-detail/home-nation-detail.component';
import { HomeNationComponent } from './home/home-nation/home-nation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import { ListCategoryComponent } from './manage/statistical/list-category/list-category.component';
import { ListMovieComponent } from './manage/statistical/list-movie/list-movie.component';
import { ListNationComponent } from './manage/statistical/list-nation/list-nation.component';
import { StatisticalComponent } from './manage/statistical/statistical.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home-component/movie', pathMatch: 'full' },
  { path: 'nation', redirectTo: '/nation/all', pathMatch: 'full' },
  { path: 'nation', component: HomeNationComponent,
        children: [
          { path: 'all', component: HomeMovieListComponent,
            children:[
              { path: ':id', component: HomeMovieDetailComponent },
            ] 
          },
          { path: ':id', component: HomeNationDetailComponent,
            children:[
              { path: ':id', component: HomeMovieDetailComponent },
            ]
          },
        ]
  },
  { path: 'category', redirectTo: '/category/all', pathMatch: 'full' },
  { path: 'category', component: HomeCategoryComponent,
        children: [
          { path: 'all', component: HomeMovieListComponent,
            children:[
              { path: ':id', component: HomeMovieDetailComponent },
            ] 
          },
          { path: ':id', component: HomeCategoryDetailComponent,
            children:[
              { path: ':id', component: HomeMovieDetailComponent },
            ]
          },
        ]
  },
  { path: 'home-component', redirectTo: '/home-component/movie', pathMatch: 'full' },
  {
    path: 'home-component', component: HomeComponent, children: [
      {
        path: 'movie', component: HomeMovieListComponent,
        children: [
          { path: ':id', component: HomeMovieDetailComponent },
        ]
      },
    ]
  },
  { path: 'manage-component', redirectTo: '/manage-component/statistical', pathMatch: 'full' },
  {
    path: 'manage-component', component: ManageComponent, children: [
      {
        path: 'statistical', component: StatisticalComponent, children: [
          { path: 'movie', component: ListMovieComponent },
          { path: 'nation', component: ListNationComponent },
          { path: 'category', component: ListCategoryComponent },
        ]
      },
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