import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNationDetailComponent } from './home-nation-detail.component';

describe('HomeNationDetailComponent', () => {
  let component: HomeNationDetailComponent;
  let fixture: ComponentFixture<HomeNationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
