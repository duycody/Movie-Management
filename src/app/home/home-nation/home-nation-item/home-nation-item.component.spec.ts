import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNationItemComponent } from './home-nation-item.component';

describe('HomeNationItemComponent', () => {
  let component: HomeNationItemComponent;
  let fixture: ComponentFixture<HomeNationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
