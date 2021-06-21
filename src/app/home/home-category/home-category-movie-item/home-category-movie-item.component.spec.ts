import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryMovieItemComponent } from './home-category-movie-item.component';

describe('HomeCategoryMovieItemComponent', () => {
  let component: HomeCategoryMovieItemComponent;
  let fixture: ComponentFixture<HomeCategoryMovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCategoryMovieItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoryMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
