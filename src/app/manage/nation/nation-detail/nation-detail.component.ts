import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-nation-detail',
  templateUrl: './nation-detail.component.html',
  styleUrls: ['./nation-detail.component.css']
})
export class NationDetailComponent implements OnInit {

  totalLength: any;
  page:number = 1;
  movies: Movie[] = [];
  isFetching = true;
  nation: Nation = new Nation('');
  id!: number;
  constructor(
    private movieService: MovieService,
    private nationService: NationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
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
      this.movies = movies.filter(item => item.nation == this.nation.name);
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
  onEditNation() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteNation() {
    this.nationService.deleteNation(this.id).subscribe(
      (data) => {
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
