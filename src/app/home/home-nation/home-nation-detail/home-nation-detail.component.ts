import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-home-nation-detail',
  templateUrl: './home-nation-detail.component.html',
  styleUrls: ['./home-nation-detail.component.css'],
})
export class HomeNationDetailComponent implements OnInit {
  totalLength: any;
  page: number = 1;
  movies: Movie[] = [];
  allmovies: Movie[] = [];
  isFetching = true;
  nation: Nation = new Nation('');
  selected: string = '';
  id!: number;
  constructor(
    private movieService: MovieService,
    private nationService: NationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    this.onFetchMovies();
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.onGetNation(this.id);
      this.onFetchMovies();
    });
  }
  onFetchMovies() {
    this.movieService.fetchMovies().subscribe((movies) => {
      this.isFetching = false;
      this.allmovies = movies;
      this.movies = movies.filter((item) => item.nation == this.nation.name);
      this.totalLength = this.movies.length;
    });
  }
  onGetNation(id: any): void {
    this.nationService.getNation(id).subscribe(
      (data) => {
        this.isFetching = false;
        this.nation = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  selectMovieName(name: string) {
    for (var i = 0; i < this.allmovies.length; i++) {
      if (this.allmovies[i].name == name) {
        this.router.navigate(['./' + i], { relativeTo: this.route });
      }
    }
  }
  isNotAll() {
    return this.router.url !== '/nation/all';
  }
}
