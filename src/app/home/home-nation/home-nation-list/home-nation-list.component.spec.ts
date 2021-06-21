import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNationListComponent } from './home-nation-list.component';

describe('HomeNationListComponent', () => {
  let component: HomeNationListComponent;
  let fixture: ComponentFixture<HomeNationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
