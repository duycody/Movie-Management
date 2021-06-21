import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() { 
    this.checkLogin();
  }
  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['home-component']);
  }
  checkLogin()
  {
    if(sessionStorage.getItem('user') == null)
    {
      this.router.navigate(['login']);
    }
  }
}