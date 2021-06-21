import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNationComponent } from './home-nation.component';

describe('HomeNationComponent', () => {
  let component: HomeNationComponent;
  let fixture: ComponentFixture<HomeNationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
