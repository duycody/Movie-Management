import { Component, Input, OnInit } from '@angular/core';
import { Nation } from 'src/app/model/nation.model';

@Component({
  selector: 'app-home-nation-item',
  templateUrl: './home-nation-item.component.html',
  styleUrls: ['./home-nation-item.component.css']
})
export class HomeNationItemComponent implements OnInit {

  @Input() nation!: Nation;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
  }
}
