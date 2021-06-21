import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-list-nation',
  templateUrl: './list-nation.component.html',
  styleUrls: ['./list-nation.component.css']
})
export class ListNationComponent implements OnInit {

  nations: Nation[] = [];
  movies: Movie[] = [];
  isFetching = true;
  constructor( private nationService: NationService, private movieService: MovieService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.onFetchNations();
    this.onFetchMovies();
  }
  onFetchNations() {
    this.nationService.fetchNations().subscribe((nations) => {
      this.isFetching = false;
      this.nations = nations;
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
  getLength(nation: Nation): number {
    return this.movies.filter(item => item.nation == nation.name).length;
  }
}
