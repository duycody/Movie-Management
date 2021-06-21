import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-home-category-item',
  templateUrl: './home-category-item.component.html',
  styleUrls: ['./home-category-item.component.css']
})
export class HomeCategoryItemComponent implements OnInit {

  @Input() category!: Category;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
  }

}
