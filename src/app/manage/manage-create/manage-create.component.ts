import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/model/movie.service';
import { Nation } from 'src/app/model/nation.model';
import { NationService } from 'src/app/model/nation.service';

@Component({
  selector: 'app-manage-create',
  templateUrl: './manage-create.component.html',
  styleUrls: ['./manage-create.component.css']
})
export class ManageCreateComponent implements OnInit {

  isFetching = true;
  id!: number;
  editMode = false;
  movieForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) { }
  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
    this.onGetMovie(this.id);
  }
  private initForm(b: Movie) {
    let movieName = '';
    let movieImagePath = '';
    let movieDescription = '';
    let movieYear = '';
    let movieNation = '';
    let movieDuration = '';
    let movieCategory = '';

    if (this.editMode) {
      const movie = b;
      movieName = movie.name;
      movieNation = movie.nation;
      movieCategory = movie.category;
      movieDuration = movie.duration;
      movieYear = movie.year;
      movieImagePath = movie.imagePath;
      movieDescription = movie.description;
    }

    this.movieForm = new FormGroup({
      name: new FormControl(movieName, Validators.required),
      nation: new FormControl(movieNation, Validators.required),
      category:new FormControl(movieCategory,Validators.required),
      duration: new FormControl(movieDuration, Validators.required),
      year: new FormControl(movieYear, Validators.required),
      imagePath: new FormControl(movieImagePath, Validators.required),
      description: new FormControl(movieDescription, Validators.required),
    });
  }
  onGetMovie(id: any): void {
    this.movieService.getMovie(id).subscribe(
      (data) => {
        this.isFetching = false;
        this.initForm(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    if (this.editMode) {
      this.onUpdateMovie(this.id, this.movieForm.value);
    } else {
      this.onAddMovie(this.movieForm.value);
    }
  }

  onUpdateMovie(id: number, movie: Movie) {
    this.movieService.updateMovie(id, movie).subscribe(
      (data) => {
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onAddMovie(movie: Movie) {
    this.movieService.addMovie(movie).subscribe(
      (data) => {
        this.isFetching = false;
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
