import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { AdminService } from '../model/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFetching = true;
  id!: number;
  isLoggedin!: boolean;
  admins: Admin[] = [];

  editMode = false;
  adminForm!: FormGroup;
  key!: string;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
    this.onGetAdmin(this.id);
    this.onFetchAdmins();
  }

  private initForm(b: Admin) {
    let adminUsername = '';
    let adminPassword = '';

    if (this.editMode) {
      const admin = b;
      adminUsername = admin.username;
      adminPassword = admin.password;
    }

    this.adminForm = new FormGroup({
      username: new FormControl(adminUsername, Validators.required),
      password: new FormControl(adminPassword, Validators.required),

    });
  }
  onGetAdmin(id: any): void {
    this.adminService.getAdmin(id).subscribe(
      (data) => {
        this.isFetching = false;
        this.initForm(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onFetchAdmins() {
    this.adminService.fetchAdmins().subscribe((admins) => {
      this.isFetching = false;
      this.admins = admins;
    });
  }
  onSubmit() {
    if (this.editMode) {
    } else {
      this.onCheckLogin(this.adminForm.value);
    }
  }
  onAddAdmin(admin: Admin) {
    this.adminService.addAdmin(admin).subscribe(
      (data) => {
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onCheckLogin(admin: Admin)
  {
    for(var i = 0;i<this.admins.length;i++)
    {
      if(this.admins[i].username == admin.username && this.admins[i].password == admin.password)
      {
        sessionStorage.setItem('user',admin.username);
        this.router.navigate(['manage-component']);
      }
    }
    this.isLoggedin = true;
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
