import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-home-movie-detail',
  templateUrl: './home-movie-detail.component.html',
  styleUrls: ['./home-movie-detail.component.css']
})
export class HomeMovieDetailComponent implements OnInit {

  isFetching = true;
  movie: Movie = new Movie('', '', '', '', '', '', '');
  movies: Movie[] = [];
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
    this.onFetchMovies();
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.isFetching = false;
      this.movies = movies;   
    });
  }
  onGetMovie(id: number): void {
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
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
