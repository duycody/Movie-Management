import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/model/category.service';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  totalLength: any;
  page:number = 1;
  movies: Movie[] = [];
  isFetching = true;
  category: Category = new Category('');
  id!: number;
  constructor(
    private movieService: MovieService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
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
      this.movies = movies.filter(item => item.category == this.category.name);
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
  onEditCategory() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteCategory() {
    this.categoryService.deleteCategory(this.id).subscribe(
      (data) => {
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
