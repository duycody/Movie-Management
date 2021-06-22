import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/model/category.service';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-home-category-list',
  templateUrl: './home-category-list.component.html',
  styleUrls: ['./home-category-list.component.css'],
})
export class HomeCategoryListComponent implements OnInit {
  show = false;
  categorys: Category[] = [];
  movies: Movie[] = [];
  selected: string = '';
  isFetching = true;
  constructor(
    private movieService: MovieService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onFetchCategories();
    this.onFetchMovies();
  }
  onFetchCategories() {
    this.categoryService.fetchCategories().subscribe((categorys) => {
      this.isFetching = false;
      this.categorys = categorys;
    });
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.isFetching = false;
      this.movies = movies;
    });
  }
  selectMovieName(name: string) {
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].name == name) {
        this.router.navigate(['all/' + i], { relativeTo: this.route });
      }
    }
  }
  isAll(){
      return this.router.url === '/category/all';
  }
}
