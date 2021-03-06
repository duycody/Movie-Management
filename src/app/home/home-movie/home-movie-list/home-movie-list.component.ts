import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-home-movie-list',
  templateUrl: './home-movie-list.component.html',
  styleUrls: ['./home-movie-list.component.css']
})
export class HomeMovieListComponent implements OnInit {

  totalLength: any;
  page:number = 1;
  selected: string = "";

  movies: Movie[] = [];
  isFetching = true;
  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onFetchMovies();
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.totalLength = movies.length;
      this.isFetching = false;
      this.movies = movies;
    });
  }
  
}
