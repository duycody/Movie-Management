import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNationMovieItemComponent } from './home-nation-movie-item.component';

describe('HomeNationMovieItemComponent', () => {
  let component: HomeNationMovieItemComponent;
  let fixture: ComponentFixture<HomeNationMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNationMovieItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNationMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
