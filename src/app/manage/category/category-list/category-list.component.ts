import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/model/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categorys: Category[] = [];
  isFetching = true;
  constructor( private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.onFetchCategorys();
  }
  onFetchCategorys() {
    this.categoryService.fetchCategorys().subscribe((categorys) => {
      this.isFetching = false;
      this.categorys = categorys;
    });
  }
  onNewCategory() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
