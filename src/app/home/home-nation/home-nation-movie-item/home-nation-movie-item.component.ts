import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-home-nation-movie-item',
  templateUrl: './home-nation-movie-item.component.html',
  styleUrls: ['./home-nation-movie-item.component.css']
})
export class HomeNationMovieItemComponent implements OnInit {

  @Input() movie!: Movie;
  @Input() index!: any;
  movies: Movie[] = [];

  constructor(private movieService: MovieService,private route: ActivatedRoute,private router: Router) { }
  onDetail(name: string) {
    for(var i = 0;i<this.movies.length;i++){
      if(this.movies[i].name == name)
      {
        this.router.navigate([i], { relativeTo: this.route });
      }
    }
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
  ngOnInit(): void {
    this.onFetchMovies();
  }

}
