import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/model/category.service';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] = [];
  movies: Movie[] = [];
  isFetching = true;
  constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onFetchCategories();
    this.onFetchMovies();
  }
  onFetchCategories() {
    this.categoryService.fetchCategories().subscribe((categories) => {
      this.isFetching = false;
      this.categories = categories;
    });
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.isFetching = false;
      this.movies = movies;
    });
  }
  Cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  getLength(category: Category): number {
    return this.movies.filter(item => item.category == category.name).length;
  }
}
