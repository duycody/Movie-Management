import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie!: Movie;
  @Input() index: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
