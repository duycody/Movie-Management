import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMovieListComponent } from './home-movie-list.component';

describe('HomeMovieListComponent', () => {
  let component: HomeMovieListComponent;
  let fixture: ComponentFixture<HomeMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMovieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
