import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

 isFetching = true;
  movie: Movie = new Movie('', '', '', '', '', '', '');
  id!: number;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.onGetMovie(this.id);
    });
  }
  onGetMovie(id: any): void {
    this.movieService.getMovie(id).subscribe(
      (data) => {
        this.isFetching = false;
        this.movie = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onEditMovie() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteMovie() {
    this.movieService.deleteMovie(this.id).subscribe(
      (data) => {
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.ngOnInit();
    this.router.navigate(['manage-component/movie']);
  
    });
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
