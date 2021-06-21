import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryDetailComponent } from './home-category-detail.component';

describe('HomeCategoryDetailComponent', () => {
  let component: HomeCategoryDetailComponent;
  let fixture: ComponentFixture<HomeCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCategoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
