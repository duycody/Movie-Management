import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieService } from './model/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NationComponent } from './manage/nation/nation.component';
import { CategoryComponent } from './manage/category/category.component';
import { NationService } from './model/nation.service';
import { CategoryService } from './model/category.service';
import { NationEditComponent } from './manage/nation/nation-edit/nation-edit.component';
import { NationItemComponent } from './manage/nation/nation-item/nation-item.component';
import { NationListComponent } from './manage/nation/nation-list/nation-list.component';
import { NationDetailComponent } from './manage/nation/nation-detail/nation-detail.component';
import { CategoryDetailComponent } from './manage/category/category-detail/category-detail.component';
import { CategoryItemComponent } from './manage/category/category-item/category-item.component';
import { CategoryListComponent } from './manage/category/category-list/category-list.component';
import { CategoryEditComponent } from './manage/category/category-edit/category-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeMovieComponent } from './home/home-movie/home-movie.component';
import { HomeMovieDetailComponent } from './home/home-movie/home-movie-detail/home-movie-detail.component';
import { HomeMovieItemComponent } from './home/home-movie/home-movie-item/home-movie-item.component';
import { HomeMovieListComponent } from './home/home-movie/home-movie-list/home-movie-list.component';
import { MovieComponent } from './manage/movie/movie.component';
import { MovieDetailComponent } from './manage/movie/movie-detail/movie-detail.component';
import { MovieItemComponent } from './manage/movie/movie-item/movie-item.component';
import { MovieListComponent } from './manage/movie/movie-list/movie-list.component';
import { MovieEditComponent } from './manage/movie/movie-edit/movie-edit.component';
import { StatisticalComponent } from './manage/statistical/statistical.component';
import { ListMovieComponent } from './manage/statistical/list-movie/list-movie.component';
import { ListNationComponent } from './manage/statistical/list-nation/list-nation.component';
import { ListCategoryComponent } from './manage/statistical/list-category/list-category.component';
import { TransfereService } from './model/transferedata.service';
import { LoginComponent } from './login/login.component';
import { HomeNationComponent } from './home/home-nation/home-nation.component';
import { HomeNationListComponent } from './home/home-nation/home-nation-list/home-nation-list.component';
import { HomeNationDetailComponent } from './home/home-nation/home-nation-detail/home-nation-detail.component';
import { HomeNationItemComponent } from './home/home-nation/home-nation-item/home-nation-item.component';
import { HomeNationMovieItemComponent } from './home/home-nation/home-nation-movie-item/home-nation-movie-item.component';
import { HomeCategoryComponent } from './home/home-category/home-category.component';
import { HomeCategoryDetailComponent } from './home/home-category/home-category-detail/home-category-detail.component';
import { HomeCategoryItemComponent } from './home/home-category/home-category-item/home-category-item.component';
import { HomeCategoryListComponent } from './home/home-category/home-category-list/home-category-list.component';
import { HomeCategoryMovieItemComponent } from './home/home-category/home-category-movie-item/home-category-movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ManageComponent,
    NationComponent,
    CategoryComponent,
    NationEditComponent,
    NationItemComponent,
    NationListComponent,
    NationDetailComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoryEditComponent,
    HomeMovieComponent,
    HomeMovieDetailComponent,
    HomeMovieItemComponent,
    HomeMovieListComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MovieListComponent,
    MovieEditComponent,
    StatisticalComponent,
    ListMovieComponent,
    ListNationComponent,
    ListCategoryComponent,
    LoginComponent,
    HomeNationComponent,
    HomeNationListComponent,
    HomeNationDetailComponent,
    HomeNationItemComponent,
    HomeNationMovieItemComponent,
    HomeCategoryComponent,
    HomeCategoryDetailComponent,
    HomeCategoryItemComponent,
    HomeCategoryListComponent,
    HomeCategoryMovieItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [MovieService,NationService,CategoryService,TransfereService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
