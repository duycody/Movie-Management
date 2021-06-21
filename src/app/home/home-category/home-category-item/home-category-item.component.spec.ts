import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryItemComponent } from './home-category-item.component';

describe('HomeCategoryItemComponent', () => {
  let component: HomeCategoryItemComponent;
  let fixture: ComponentFixture<HomeCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCategoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
