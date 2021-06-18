import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMovieItemComponent } from './home-movie-item.component';

describe('HomeMovieItemComponent', () => {
  let component: HomeMovieItemComponent;
  let fixture: ComponentFixture<HomeMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMovieItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
