import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/model/category.service';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-home-category-detail',
  templateUrl: './home-category-detail.component.html',
  styleUrls: ['./home-category-detail.component.css'],
})
export class HomeCategoryDetailComponent implements OnInit {
  totalLength: any;
  page: number = 1;
  movies: Movie[] = [];
  allmovies: Movie[] = [];
  isFetching = true;
  category: Category = new Category('');
  selected: string = '';
  id!: number;
  constructor(
    private movieService: MovieService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    this.onFetchMovies();
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.onGetCategory(this.id);
      this.onFetchMovies();
    });
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.isFetching = false;
      this.allmovies = movies;
      this.movies = movies.filter(
        (item) => item.category == this.category.name
      );
      this.totalLength = this.movies.length;
    });
  }
  onGetCategory(id: any): void {
    this.categoryService.getCategory(id).subscribe(
      (data) => {
        this.isFetching = false;
        this.category = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  selectMovieName(name: string) {
    for (var i = 0; i < this.allmovies.length; i++) {
      if (this.allmovies[i].name == name) {
        this.router.navigate(['./' + i], { relativeTo: this.route });
      }
    }
  }
  isNotAll() {
    return this.router.url !== '/category/all';
  }
}
