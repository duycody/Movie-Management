import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-home-movie-item',
  templateUrl: './home-movie-item.component.html',
  styleUrls: ['./home-movie-item.component.css']
})
export class HomeMovieItemComponent implements OnInit {

  @Input() movie!: Movie;
  @Input() index!: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }


}
