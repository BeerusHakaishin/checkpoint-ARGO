import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/admin/shared/models/admin.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Admin[]> {
    return this.http.get<Admin[]>(environment.apiUrl + 'users-admin');
  }

  public getOne(id: number): Observable<Admin> {
    return this.http.get<Admin>(environment.apiUrl + 'users-admin/' + id);
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + 'users-admin/' + id);
  }

  public postUser(formData: FormGroup): Observable<Admin> {
    return this.http.post<Admin>(environment.apiUrl + 'auth/signup', formData);
  }

  public updateAdmin(data: string, id: number): Observable<Admin> {
    return this.http.put<Admin>(environment.apiUrl + 'users-admin/admin/' + id, data);
  }

  public updatePassword(data: string): Observable<any> {
    return this.http.put<any>(environment.apiUrl + 'users-admin/password', data);
  }

  public getUserId() {
    const user = localStorage.getItem('user');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user.id;
    }
  }
}
