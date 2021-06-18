import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

 totalLength: any;
  page:number = 1;

  movies: Movie[] = [];
  isFetching = true;
  constructor( private movieService: MovieService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
       this.onFetchMovies();
    });
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.totalLength = movies.length;
      this.isFetching = false;
      this.movies = movies;
    });
  }
  onNewMovie() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
