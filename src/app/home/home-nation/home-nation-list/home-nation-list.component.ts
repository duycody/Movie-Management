import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-home-nation-list',
  templateUrl: './home-nation-list.component.html',
  styleUrls: ['./home-nation-list.component.css']
})
export class HomeNationListComponent implements OnInit {
  show = false;
  nations: Nation[] = [];
  movies: Movie[] = [];
  selected: string = "";
  isFetching = true;
  constructor( private movieService: MovieService,private nationService: NationService, private router: Router, private route: ActivatedRoute) {}

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
  selectMovieName(name: string) {
    for(var i = 0;i<this.movies.length;i++){
      if(this.movies[i].name == name)
      {
        this.router.navigate(['all/'+i], { relativeTo: this.route });
      }
    }
  }
}
