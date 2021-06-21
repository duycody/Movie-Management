import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  adminSelected = new EventEmitter<Admin>();
  private key: any;
  private admins: Admin[] = [];
  constructor(private http: HttpClient) {}
  getAdmin(index: any) {
    return this.http
      .get<{ [key: string]: Admin }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/admins.json' )
      .pipe(
        map((responseData) => {
          const adminsArray:Admin[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              adminsArray.push({ ...responseData[key] 
              });
            }
          }
          return adminsArray[index];
        })
      );
  }

  fetchAdmins() {
    return this.http
      .get<{ [key: string]: Admin }>( 'https://movie-management-e5833-default-rtdb.firebaseio.com/admins.json' )
      .pipe(
        map((responseData) => {
          const adminsArray: Admin[] = [];
          const keysArray: string[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              adminsArray.push({ ...responseData[key] });
              keysArray.push(key);
            }
          }
          this.key = keysArray;
          return (this.admins = adminsArray);
        })
      );
  }
  addAdmin(adminData: Admin) {
    this.admins.push(adminData);
    return this.http.post<{
      username: string;
      password: string;
    }>('https://movie-management-e5833-default-rtdb.firebaseio.com/admins.json', adminData);
  }
}
