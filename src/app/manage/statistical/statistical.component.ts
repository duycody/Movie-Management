import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/model/category.service';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit {

  nations: Nation[] = [];
  movies: Movie[] = [];
  categories: Category[] = [];
  isFetching = true;
  constructor(private categoryService: CategoryService, private movieService: MovieService, private nationService: NationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onFetchNations();
    this.onFetchMovies();
    this.onFetchCategories();
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.isFetching = false;
      this.movies = movies;
    });
  }
  onFetchNations() {
    this.nationService.fetchNations().subscribe((nations) => {
      this.isFetching = false;
      this.nations = nations;
    });
  }
  onFetchCategories() {
    this.categoryService.fetchCategories().subscribe((categories) => {
      this.isFetching = false;
      this.categories = categories;
    });
  }
  onMovie() {
    this.router.navigate(['movie'], { relativeTo: this.route });
  }
  onNation() {
    this.router.navigate(['nation'], { relativeTo: this.route });
  }
    onCategory() {
    this.router.navigate(['category'], { relativeTo: this.route });
  }

}
