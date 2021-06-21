import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/category.model';
import { CategoryService } from '../model/category.service';
import { Movie } from '../model/movie.model';
import { MovieService } from '../model/movie.service';
import { Nation } from '../model/nation.model';
import { NationService } from '../model/nation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = false;
  isFetching = true;
  selected: string = "";
  movies: Movie[] = [];
  categories: Category[] = [];
  nations: Nation[] = [];
  constructor(private movieService: MovieService, private nationService: NationService,private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onFetchMovies();
    this.onFetchCategories();
    this.onFetchNations();
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.isFetching = false;
      this.movies = movies;
    });
  }
  onFetchCategories() {
    this.categoryService.fetchCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
    onFetchNations() {
    this.nationService.fetchNations().subscribe((nations) => {
      this.nations = nations;
    });
  }
  selectMovieName(name: string) {
    for(var i = 0;i<this.movies.length;i++){
      if(this.movies[i].name == name)
      {
        this.router.navigate(['movie/'+i], { relativeTo: this.route });
      }
    }
  }
}
